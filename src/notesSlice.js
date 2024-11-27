import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  notes: [],
  page: 1,
  itemsPerPage: 6,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push({ ...action.payload, id: uuidv4(), pinned: false });
    },
    updateNote: (state, action) => {
      const index = state.notes.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    togglePin: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.pinned = !note.pinned;
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { addNote, updateNote, deleteNote, togglePin, setPage } = notesSlice.actions;
export default notesSlice.reducer;
