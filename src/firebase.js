// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Functions for CRUD operations
export const addNote = async (note) => {
  await addDoc(collection(db, "notes"), note);
};

export const getNotes = async () => {
  const querySnapshot = await getDocs(collection(db, "notes"));
  const notes = [];
  querySnapshot.forEach((doc) => {
    notes.push({ ...doc.data(), id: doc.id });
  });
  return notes;
};

export const updateNote = async (id, updatedNote) => {
  const noteRef = doc(db, "notes", id);
  await updateDoc(noteRef, updatedNote);
};

export const deleteNote = async (id) => {
  const noteRef = doc(db, "notes", id);
  await deleteDoc(noteRef);
};
