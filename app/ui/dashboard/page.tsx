import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>

      {/* ✅ FIX: Wrap Search in Suspense */}
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<div>Loading search...</div>}>
          <Search placeholder="Search customers..." />
        </Suspense>
      </div>

      {/* Already correct */}
      <Suspense fallback={<div className="mt-8">Loading customers...</div>}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}