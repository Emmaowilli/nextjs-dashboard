import { Suspense } from 'react';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';

async function CardDataWrapper() {
  const data = await fetchCardData();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card title="Collected" value={data.totalPaidInvoices} type="collected" />
      <Card title="Pending" value={data.totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={data.numberOfInvoices} type="invoices" />
      <Card title="Total Customers" value={data.numberOfCustomers} type="customers" />
    </div>
  );
}

async function RevenueWrapper() {
  const revenue = await fetchRevenue();
  return <RevenueChart revenue={revenue} />;
}

async function LatestInvoicesWrapper() {
  const latestInvoices = await fetchLatestInvoices();
  return <LatestInvoices latestInvoices={latestInvoices} />;
}

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <Suspense fallback={<div className="p-4 bg-gray-100 rounded text-center">Loading cards...</div>}>
        <CardDataWrapper />
      </Suspense>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<div className="p-4 bg-gray-100 rounded text-center">Loading revenue chart...</div>}>
          <RevenueWrapper />
        </Suspense>

        <Suspense fallback={<div className="p-4 bg-gray-100 rounded text-center">Loading latest invoices...</div>}>
          <LatestInvoicesWrapper />
        </Suspense>
      </div>
    </main>
  );
}