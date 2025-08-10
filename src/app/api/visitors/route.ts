import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'visitors.json');

interface VisitorData {
  totalVisitors: number;
  uniqueIPs: Set<string>;
  lastUpdated: string;
}

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read visitor data
async function readVisitorData(): Promise<VisitorData> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    return {
      totalVisitors: parsed.totalVisitors || 0,
      uniqueIPs: new Set(parsed.uniqueIPs || []),
      lastUpdated: parsed.lastUpdated || new Date().toISOString()
    };
  } catch {
    // File doesn't exist or is corrupted, return default data
    return {
      totalVisitors: 0,
      uniqueIPs: new Set(),
      lastUpdated: new Date().toISOString()
    };
  }
}

// Write visitor data
async function writeVisitorData(data: VisitorData) {
  await ensureDataDir();
  const serializable = {
    totalVisitors: data.totalVisitors,
    uniqueIPs: Array.from(data.uniqueIPs),
    lastUpdated: data.lastUpdated
  };
  await fs.writeFile(DATA_FILE, JSON.stringify(serializable, null, 2));
}

// Get client IP address and user agent for better uniqueness detection
function getClientIdentifier(request: NextRequest): string {
  // Get IP from various headers (important for production deployment)
  const headers = [
    'cf-connecting-ip',        // Cloudflare
    'x-real-ip',               // Nginx
    'x-forwarded-for',         // Load balancers
    'x-client-ip',             // Apache
    'x-forwarded',             // General
    'forwarded-for',           // General
    'forwarded'                // General
  ];
  
  let clientIP = 'unknown';
  
  // Try to get IP from headers in order of preference
  for (const header of headers) {
    const value = request.headers.get(header);
    if (value) {
      // Handle comma-separated IPs (take the first one)
      clientIP = value.split(',')[0].trim();
      if (clientIP && clientIP !== 'unknown') {
        break;
      }
    }
  }
  
  // Fallback for local development
  const isLocalhost = !clientIP || 
                     clientIP === 'unknown' || 
                     clientIP === '::1' || 
                     clientIP === '127.0.0.1' ||
                     clientIP.startsWith('192.168.') ||
                     clientIP.startsWith('10.') ||
                     clientIP.startsWith('172.');
  
  if (isLocalhost) {
    // For development, create unique identifier
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const hash = userAgent.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    clientIP = `dev-${Math.abs(hash)}`;
  }
  
  console.log(`Client IP resolved: ${clientIP}`);
  return clientIP;
}

// GET endpoint - fetch current visitor count
export async function GET() {
  try {
    const data = await readVisitorData();
    return NextResponse.json({
      totalVisitors: data.totalVisitors,
      success: true
    });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor count', success: false },
      { status: 500 }
    );
  }
}

// POST endpoint - increment visitor count
export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIdentifier(request);
    const browserFingerprint = request.headers.get('x-browser-fingerprint');
    
    // Create a unique visitor ID combining IP and browser fingerprint
    const visitorId = browserFingerprint 
      ? `${clientIP}-${browserFingerprint}` 
      : clientIP;
    
    const data = await readVisitorData();
    
    console.log(`Visitor attempt from ID: ${visitorId} (IP: ${clientIP})`);
    
    // Check if this visitor ID has visited before
    const hasVisited = data.uniqueIPs.has(visitorId);
    
    if (!hasVisited) {
      // New unique visitor
      data.totalVisitors += 1;
      data.uniqueIPs.add(visitorId);
      data.lastUpdated = new Date().toISOString();
      
      await writeVisitorData(data);
      
      console.log(`New visitor added. Total: ${data.totalVisitors}`);
      
      return NextResponse.json({
        totalVisitors: data.totalVisitors,
        isNewVisitor: true,
        success: true,
        debug: { visitorId, clientIP, browserFingerprint: !!browserFingerprint }
      });
    } else {
      // Returning visitor
      console.log(`Returning visitor. Total: ${data.totalVisitors}`);
      return NextResponse.json({
        totalVisitors: data.totalVisitors,
        isNewVisitor: false,
        success: true,
        debug: { visitorId, clientIP, browserFingerprint: !!browserFingerprint }
      });
    }
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json(
      { error: 'Failed to update visitor count', success: false },
      { status: 500 }
    );
  }
}
