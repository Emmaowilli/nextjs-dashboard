import Form from '@/app/ui/invoices/create-form';
import { fetchCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Create Invoice
      </h1>
      <Form customers={customers} />
    </main>
  );
}