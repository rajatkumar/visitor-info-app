'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface VisitorData {
  ip: string;
  country: string;
  city: string;
}

export function VisitorInfo() {
  const [data, setData] = useState<VisitorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [userAgent, setUserAgent] = useState<string>('');

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    fetch('/api/visitor-info')
      .then((res) => res.json())
      .then((data: VisitorData) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching visitor info:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Visitor Information</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <>
            <Skeleton className="h-4 w-[250px] mb-4" />
            <Skeleton className="h-4 w-[200px] mb-4" />
            <Skeleton className="h-4 w-[150px] mb-4" />
            <Skeleton className="h-4 w-[300px]" />
          </>
        ) : data ? (
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold">IP Address:</dt>
              <dd>{data.ip}</dd>
            </div>
            <div>
              <dt className="font-semibold">Country:</dt>
              <dd>{data.country || 'Unknown'}</dd>
            </div>
            <div>
              <dt className="font-semibold">City:</dt>
              <dd>{data.city || 'Unknown'}</dd>
            </div>
            <div>
              <dt className="font-semibold">User Agent:</dt>
              <dd className="text-sm break-all">{userAgent || 'Unknown'}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-red-500">Failed to load visitor information.</p>
        )}
      </CardContent>
    </Card>
  );
}
