import React, { useState } from 'react';

const Popups = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg focus:outline-none"
      >
        Open Popup
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Popup Content</h2>
            <p>This is the content of the popup.</p>
            <button
              onClick={togglePopup}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popups;