export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* Fixed: wrapped the string in curly braces to avoid unescaped quotes */}
          <p>Search results for &quot;{query}&quot; - Page {currentPage}</p>
        </div>
      </div>
    </div>
  );
}

