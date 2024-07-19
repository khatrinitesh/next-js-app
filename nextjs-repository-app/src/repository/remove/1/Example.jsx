import React, { useState } from 'react';

const Example = () => {

    // State variable to hold the list of items
const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <>
        <h2>Items</h2>
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <button onClick={() => removeItem(item.id)}>&times;</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Example