import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface VisitorData {
  ip: string;
  country: string;
  city: string;
  userAgent: string;
}

interface VisitorInfoProps {
  data: VisitorData;
}

export function VisitorInfo({ data }: VisitorInfoProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Visitor Information</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">IP Address:</dt>
            <dd>{data.ip}</dd>
          </div>
          <div>
            <dt className="font-semibold">Country:</dt>
            <dd>{data.country}</dd>
          </div>
          <div>
            <dt className="font-semibold">City:</dt>
            <dd>{data.city}</dd>
          </div>
          <div>
            <dt className="font-semibold">User Agent:</dt>
            <dd className="text-sm break-all">{data.userAgent}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
