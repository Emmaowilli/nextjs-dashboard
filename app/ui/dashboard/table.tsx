import { CustomerField } from '@/app/lib/definitions';

export default function CustomersTable({
  customers,
}: {
  customers: CustomerField[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th className="px-4 py-5 font-medium">Name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-900">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-100">
                  <td className="px-4 py-5 whitespace-nowrap font-medium">
                    {customer.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}