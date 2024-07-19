import React, { useState } from "react";

const Example = () => {
    const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <>
     <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-8">Selectable Component Example</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className={`p-4 border border-gray-300 rounded-md cursor-pointer ${
              selectedItem === item ? 'bg-blue-200' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-4">
        Selected Item: {selectedItem}
      </div>
    </div>
    </>
  )
};

export default Example;
