import React, { useState } from 'react';

const PopOvers = ({content}) => {
    const [isOpen,setIsOpen] = useState(false);

    const togglePopover = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
     <div className="relative">
      <button
        onClick={togglePopover}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Open Popover
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 mt-2 bg-white p-4 shadow-lg rounded">
        {content}
      </div>
      )}
      </div>
    </>
  );
};

export default PopOvers;
