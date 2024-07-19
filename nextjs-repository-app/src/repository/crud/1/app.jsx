import React, { useState } from "react";

// sample data
const initialData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const CustomApp = () => {

    const [data, setData] = useState(initialData);
    const [name, setName] = useState('');
    const [editId, setEditId] = useState(null);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAddItem = () => {
      if (name.trim() === '') return;
      const newItem = { id: Date.now(), name };
      setData([...data, newItem]);
      setName('');
    };
  
    const handleDeleteItem = (id) => {
      setData(data.filter(item => item.id !== id));
    };
  
    const handleEditItem = (id) => {
      const itemToEdit = data.find(item => item.id === id);
      setName(itemToEdit.name);
      setEditId(id);
    };
  
    const handleUpdateItem = () => {
      setData(data.map(item => {
        if (item.id === editId) {
          return { ...item, name };
        }
        return item;
      }));
      setName('');
      setEditId(null);
    };

  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CRUD Example</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="rounded-l border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white px-4 py-2"
          placeholder="Enter item name"
          value={name}
          onChange={handleNameChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r border border-blue-600 border-l-0"
          onClick={editId !== null ? handleUpdateItem : handleAddItem}
        >
          {editId !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id} className="flex items-center justify-between border-b py-2">
            <span>{item.name}</span>
            <div>
              <button
                className={`px-3 py-1 bg-green-500 text-white font-semibold rounded mr-2 ${editId !== null ? 'update' : 'edit'}`}
                onClick={() => handleEditItem(item.id)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white font-semibold rounded"
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default CustomApp;
