import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // This uses the browser's localStorage by default

// Set up the persist config
const persistConfig = {
  key: 'root',  // This is the key used for saving state in localStorage
  storage,      // Using the browser's localStorage
};

// Wrap your notesReducer with persistReducer to enable persistence
const persistedReducer = persistReducer(persistConfig, notesReducer);

// Create the Redux store with the persisted reducer
export const store = configureStore({
  reducer: {
    notes: persistedReducer,  // Using the persisted notes reducer
  },
});

// Create the persistor that will manage persistence
export const persistor = persistStore(store);
