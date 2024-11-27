import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateNote, deleteNote, togglePin, setPage } from './notesSlice';
import { v4 as uuidv4 } from 'uuid';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import NoteCard from './NoteCard';
import NoteModal from './NoteModal';
import { ToastContainer, toast } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const page = useSelector((state) => state.notes.page);
  const notesPerPage = 6;

  const [currentNote, setCurrentNote] = useState({ title: '', tagline: '', body: '' });
  const [showModal, setShowModal] = useState(false);

  // Pagination and sorting
  const paginatedNotes = [...notes]
    .sort((a, b) => {
      if (a.pinned !== b.pinned) {
        return b.pinned - a.pinned;
      }
      return b.timestamp - a.timestamp;
    })
    .slice((page - 1) * notesPerPage, page * notesPerPage);

  const handleAddNote = () => {
    const note = {
      id: uuidv4(),
      title: currentNote.title,
      tagline: currentNote.tagline,
      body: currentNote.body,
      pinned: false,
      timestamp: new Date(),
    };
    dispatch(addNote(note));
    setCurrentNote({ title: '', tagline: '', body: '' });
    setShowModal(false);

    // Show success toast
    toast.success("Note successfully added!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleEditNote = (note) => {
    setCurrentNote({ title: note.title, tagline: note.tagline, body: note.body, id: note.id });
    setShowModal(true);
  };

  const handleUpdateNote = () => {
    const updatedNote = { ...currentNote, timestamp: new Date() };
    dispatch(updateNote(updatedNote));
    setShowModal(false);

    // Show success toast
    toast.success("Note updated successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));

    // Show error toast
    toast.error("Note deleted successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const handleTogglePin = (id) => {
    dispatch(togglePin(id));
  };

  const handlePagination = (newPage) => {
    dispatch(setPage(newPage));
  };

  const totalPages = Math.ceil(notes.length / notesPerPage);

  return (
    <ErrorBoundary>
      <div 
        className="min-h-screen bg-gray-100 flex flex-col" 
        style={{ backgroundImage: `url('/assets/1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
      >
        {/* Header */}
        <Header onAddNoteClick={() => setShowModal(true)} />

        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-red-800">Your Notes</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedNotes.length > 0 ? (
              paginatedNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onEdit={handleEditNote}
                  onDelete={handleDeleteNote}
                  onPinToggle={handleTogglePin}
                />
              ))
            ) : (
              <p className="text-center m-4 p-9 text-6xl  text-blue-900">Please Click On Add Notes  </p>
            )}
          </div>
        </div>

        {/* Modal for adding or editing a note */}
        {showModal && (
          <NoteModal
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            onSave={currentNote.id ? handleUpdateNote : handleAddNote}
            onClose={() => setShowModal(false)}
          />
        )}

        {/* Footer with Pagination */}
        <Footer
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePagination}
        />
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </ErrorBoundary>
  );
};

export default App;
