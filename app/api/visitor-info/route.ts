import { NextRequest } from 'next/server';
import { geolocation } from '@vercel/functions';

export async function GET(request: NextRequest) {
  const { city, country } = geolocation(request);
  const ip = request.headers.get('x-forwarded-for') || 'Unknown';

  return new Response(JSON.stringify({ ip, country, city }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
