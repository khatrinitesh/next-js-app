import React from 'react';
import Notes from './Notes';

const NotesList = ({ notes, onDelete }) => {
    return (
      <div className="notes-list">
        {notes.map((note, index) => (
          <Notes key={index} text={note} onDelete={() => onDelete(index)} />
        ))}
      </div>
    );
  };

  export default NotesList;