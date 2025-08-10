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

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  // Fallback to a default if no IP is available
  return 'unknown';
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
    const clientIP = getClientIP(request);
    const data = await readVisitorData();
    
    // Check if this IP has visited before (within last 24 hours)
    const hasVisited = data.uniqueIPs.has(clientIP);
    
    if (!hasVisited) {
      // New unique visitor
      data.totalVisitors += 1;
      data.uniqueIPs.add(clientIP);
      data.lastUpdated = new Date().toISOString();
      
      await writeVisitorData(data);
      
      return NextResponse.json({
        totalVisitors: data.totalVisitors,
        isNewVisitor: true,
        success: true
      });
    } else {
      // Returning visitor
      return NextResponse.json({
        totalVisitors: data.totalVisitors,
        isNewVisitor: false,
        success: true
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
