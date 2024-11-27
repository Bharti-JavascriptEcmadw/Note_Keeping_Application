const Footer = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
      if (currentPage > 1) onPageChange(currentPage - 1);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) onPageChange(currentPage + 1);
    };
  
    return (
      <footer className="bg-gray-800 text-white p-4 mt-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>Page {currentPage} of {totalPages}</p>
  
          <div className="flex space-x-4">
            <button
              onClick={handlePrevPage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              disabled={currentPage <= 1}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              disabled={currentPage >= totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  