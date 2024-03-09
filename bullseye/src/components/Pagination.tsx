type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-center space-x-1 my-8">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 rounded-lg text-white ${
            currentPage === index + 1
              ? "bg-blue-500"
              : "bg-gray-500 hover:bg-gray-700"
          }`}
          aria-current={currentPage === index + 1 ? "page" : undefined}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
