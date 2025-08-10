import { promises as fs } from 'fs';
import path from 'path';

// Cleanup utility to reset IP tracking after 24 hours
// This can be run as a cron job or similar scheduled task

const DATA_FILE = path.join(process.cwd(), 'data', 'visitors.json');

async function cleanupVisitorData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    
    // Clear the IP set to allow repeat visits to be counted
    // Keep the total visitor count
    const cleaned = {
      totalVisitors: parsed.totalVisitors || 0,
      uniqueIPs: [], // Reset unique IPs
      lastUpdated: new Date().toISOString()
    };
    
    await fs.writeFile(DATA_FILE, JSON.stringify(cleaned, null, 2));
    console.log('Visitor data cleaned successfully');
  } catch (error) {
    console.error('Error cleaning visitor data:', error);
  }
}

// Run if called directly
if (require.main === module) {
  cleanupVisitorData();
}

export { cleanupVisitorData };
