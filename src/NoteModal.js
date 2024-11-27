const NoteModal = ({ currentNote, setCurrentNote, onSave, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h3 className="text-xl font-bold mb-4">
          {currentNote.id ? 'Edit Note' : 'Add New Note'}
        </h3>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          placeholder="Title"
          value={currentNote.title}
          onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
        />
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          placeholder="Tagline"
          value={currentNote.tagline}
          onChange={(e) => setCurrentNote({ ...currentNote, tagline: e.target.value })}
        />
        <textarea
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          placeholder="Body"
          value={currentNote.body}
          onChange={(e) => setCurrentNote({ ...currentNote, body: e.target.value })}
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
