import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <div className="container mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-4">Expanding Grid</h1>
    <ExpandingGrid/>
    </div>
    </>
  )
};

export default CustomApp;

const ExpandingGrid = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleItemClick = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className={`bg-gray-200 p-4 cursor-pointer transition-all ${
              expandedItems.includes(index) ? "col-span-3" : "col-span-1"
            }`}
            onClick={() => handleItemClick(index)}
          >
            {`Grid Item ${index + 1}`}
          </div>
        ))}
      </div>
    </>
  );
};
