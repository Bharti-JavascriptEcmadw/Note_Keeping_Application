import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice'; // Replace with the correct path to your reducer
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage

// Redux-persist config
const persistConfig = {
  key: 'root', // The key in storage
  storage, // Default: localStorage (can also use sessionStorage, AsyncStorage, etc.)
};

// Wrap your reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, notesReducer);

const store = configureStore({
  reducer: {
    notes: persistedReducer, // Use the persisted reducer for the notes slice
  },
});

const persistor = persistStore(store);

export { store, persistor };
