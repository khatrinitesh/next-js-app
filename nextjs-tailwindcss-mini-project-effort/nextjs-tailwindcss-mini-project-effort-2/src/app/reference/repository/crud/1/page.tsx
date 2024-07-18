"use client";
import React, { useState } from 'react';


const CustomApp = () => {
    const [items,setItems]= useState([]);
    const [inputText,setInputText] = useState('');
    const [editIndex,setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    
    const handleAddItem = () => {
    if (editIndex !== null) {
        // Edit existing item
        setItems((prevItems) =>
        prevItems.map((item, index) =>
            index === editIndex ? inputText : item
        )
        );
        setEditIndex(null);
    } 
    else if (inputText.trim() !== '') {
        // Add new item
        setItems((prevItems) => [...prevItems, inputText]);
    }

    setInputText('');
    };
    
      const handleDeleteItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setEditIndex(null);
      };
    
      const handleEditItem = (index) => {
        setInputText(items[index]);
        setEditIndex(index);
      };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        handleAddItem(); // Calls the handleAddItem function when the form is submitted
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">
          {editIndex !== null ? 'Edit Item' : 'Add Item'}
        </button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomApp
