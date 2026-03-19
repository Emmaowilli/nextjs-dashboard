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
          <p>Search results for "{query}" - Page {currentPage}</p>
        </div>
      </div>
    </div>
  );
}

