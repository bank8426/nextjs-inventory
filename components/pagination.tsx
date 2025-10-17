import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  baseUrl: string;
  searchParams: Record<string, string>;
}

const Pagination = ({
  currentPage,
  totalPage,
  baseUrl,
  searchParams,
}: PaginationProps) => {
  if (totalPage <= 1) {
    return null;
  }
  const getPageUrl = (page: number) => {
    const params = new URLSearchParams({ ...searchParams, page: String(page) });
    return `${baseUrl}?${params.toString()}`;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPage - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // calculate rangeWithDots
    // add first page
    rangeWithDots.push(1);

    // if more than 2 page from first page, add "..."
    if (currentPage - delta > 2) {
      rangeWithDots.push("...");
    }
    // add page in middle from range
    rangeWithDots.push(...range);

    // if more than 2 page from last page, add "..."
    if (currentPage + delta < totalPage - 1) {
      rangeWithDots.push("...");
    }
    // add last page
    rangeWithDots.push(totalPage);

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex items-center justify-center gap-1">
      <Link
        href={getPageUrl(currentPage - 1)}
        className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-lg ${
          currentPage <= 1
            ? "text-gray-400 cursor-not-allowed bg-gray-100"
            : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"
        }`}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft /> Previous
      </Link>

      {visiblePages.map((page, index) => {
        const pageNumber = page as number;
        const isCurrentPage = pageNumber === currentPage;
        if (page === "...") {
          return (
            <span className="px-3 py-2 text-sm text-gray-500" key={index}>
              ...
            </span>
          );
        }
        return (
          <Link
            key={index}
            href={getPageUrl(page)}
            className={`px-3 py-2 text-sm font-medium rounded-lg ${
              isCurrentPage
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}

      <Link
        href={getPageUrl(currentPage + 1)}
        className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-lg ${
          currentPage >= totalPage
            ? "text-gray-400 cursor-not-allowed bg-gray-100"
            : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"
        }`}
        aria-disabled={currentPage >= totalPage}
      >
        Next <ChevronRight />
      </Link>
    </nav>
  );
};

export default Pagination;
