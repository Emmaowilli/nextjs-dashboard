import { BanknotesIcon, ClockIcon, InboxIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  customers: UserGroupIcon,
};

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'collected' | 'pending' | 'invoices' | 'customers';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-gray-700" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="mt-4 text-2xl font-semibold">{value}</p>
    </div>
  );
}
