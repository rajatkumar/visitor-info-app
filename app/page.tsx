import { headers } from 'next/headers';
import { geolocation } from '@vercel/functions';
import { VisitorInfo } from '../components/VisitorInfo';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const headersList = await headers();
  const geo = geolocation({ headers: headersList });

  const visitorData = {
    ip: headersList.get('x-forwarded-for')?.split(',')[0] || 'Unknown',
    country: geo.country || 'Unknown',
    city: geo.city || 'Unknown',
    userAgent: headersList.get('user-agent') || 'Unknown',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Visitor Info</h1>
      <VisitorInfo data={visitorData} />
    </main>
  );
}
