import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const views = await kv.incr('portfolio:views');
    return NextResponse.json({ views });
  } catch (error) {
    console.error('Redis KV Error:', error);
    // Graceful degradation layout
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}
