const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center mt-6">
        <button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Previous
        </button>
        <span className="mx-4">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  