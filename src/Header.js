const Header = ({ onAddNoteClick }) => {
    return (
      <header className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Note Keeping Application</h1>
          {/* Button to open the Add Note modal */}
          <button
            onClick={onAddNoteClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
          >
            Add Note
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  