import Image from 'next/image';

export default function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: {
    id: string;
    name: string;
    email: string;
    image_url: string;
    amount: string;
  }[];
}) {
  return (
    <div className="col-span-4 rounded-xl bg-gray-50 p-4">
      <h2 className="mb-4 text-lg font-semibold">Latest Invoices</h2>

      <div className="flex flex-col gap-4">
        {latestInvoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center gap-4">
            <Image
              src={invoice.image_url}
              alt={invoice.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">{invoice.name}</p>
              <p className="text-xs text-gray-500">{invoice.email}</p>
            </div>
            <p className="text-sm font-medium">{invoice.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
