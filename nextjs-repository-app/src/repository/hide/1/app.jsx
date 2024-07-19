import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <HideLogicExample/>
    </>
  )
}

export default CustomApp

const HideLogicExample = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md mb-4"
          onClick={toggleVisibility}
        >
          Toggle Visibility
        </button>
        {isVisible && (
          <div className="bg-gray-200 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">This content is visible</h2>
            <p>This content will be hidden when you click the button above.</p>
          </div>
        )}
      </div>
    );
  };
  