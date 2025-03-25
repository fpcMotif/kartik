import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kartik Labhshetwar - Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>Kartik Labhshetwar</div>
        <div style={{ fontSize: 36, color: '#9ca3af', marginBottom: 40 }}>Full-Stack Developer | Software Engineer</div>
        <div style={{ fontSize: 28, color: '#22d3ee', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>*</span> <span>I build products that solve real problems</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 