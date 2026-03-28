import { generateYAxis } from '@/app/lib/utils';

export default function RevenueChart({
  revenue,
}: {
  revenue: {
    month: string;
    revenue: number;
  }[];
}) {
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  return (
    <div className="col-span-4 rounded-xl bg-gray-50 p-4">
      <h2 className="mb-4 text-lg font-semibold">Recent Revenue</h2>
      <div className="flex">
        
        <div className="flex flex-col justify-between text-sm text-gray-500">
          {yAxisLabels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>

  
        <div className="ml-4 flex w-full items-end gap-2">
          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-6 rounded-md bg-blue-500"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="text-xs">{month.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
