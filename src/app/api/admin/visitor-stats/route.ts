import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'visitors.json');

// Simple admin endpoint to view visitor statistics
// In production, you'd want to add authentication here
export async function GET() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    
    const stats = {
      totalVisitors: parsed.totalVisitors || 0,
      uniqueIPsToday: (parsed.uniqueIPs || []).length,
      lastUpdated: parsed.lastUpdated,
      sampleIPs: (parsed.uniqueIPs || []).slice(0, 5) // First 5 IPs for debugging
    };
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching visitor stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor stats' },
      { status: 500 }
    );
  }
}
