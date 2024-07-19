import React, { useState } from "react";

const CustomApp = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const handleCls = (item) => {
        const updatedItems = items.filter((val) => val !== item)
        setItems(updatedItems)
    }
  return (
    <>
    <div className="w-64">
        {items.map((item,index) => {
            return(
                <ClosableListItem key={index} onClose={handleCls} item={item}/>
            )
        })}
    </div>
    </>
  )
};

export default CustomApp;

const ClosableListItem = ({ item, onClose }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
      <span>{item}</span>
      <button onClick={() => onClose(item)} className="ml-2 text-red-500">
        X
      </button>
    </div>
  );
};
