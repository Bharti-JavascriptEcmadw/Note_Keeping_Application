import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, handleEditNote, handleDeleteNote, handleTogglePin }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            handleEditNote={handleEditNote}
            handleDeleteNote={handleDeleteNote}
            handleTogglePin={handleTogglePin}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No notes to display</p>
      )}
    </div>
  );
};

export default NoteList;
