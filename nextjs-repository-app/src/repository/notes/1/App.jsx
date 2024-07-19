import React,{useState} from 'react';
import './style.css';
import NotesList from "./Noteslist";


const CustomApp = () => {
    const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes,text])
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };
  return (
    <>
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Enter your note"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addNote(e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
      <NotesList notes={notes} onDelete={deleteNote} />
    </>
  )
}

export default CustomApp
