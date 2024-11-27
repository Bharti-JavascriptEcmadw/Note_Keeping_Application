const NoteCard = ({ note, onEdit, onDelete, onPinToggle }) => {
  return (
    <div className="bg-green-300 shadow-lg rounded-lg p-4 hover:shadow-2xl transition-all duration-300 w-full sm:w-[90%] md:w-[280px] lg:w-[320px] mx-auto hover:scale-105">
      <h3 className="font-semibold text-lg text-gray-900">{note.title}</h3>
      <p className="text-sm text-gray-500">{note.tagline}</p>
      <p className="mt-2 text-gray-700">{note.body}</p>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => onPinToggle(note.id)}
          className={`text-sm ${note.pinned ? 'text-green-500' : 'text-gray-500'}`}
        >
          {note.pinned ? 'Unpin' : 'Pin'}
        </button>
        <div>
          <button
            onClick={() => onEdit(note)}
            className="bg-yellow-400 text-white px-3 py-1 rounded-md mx-1 hover:bg-yellow-500"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
