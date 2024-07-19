import React, { useState } from 'react';

const CustomApp = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
      };
  return (
    <div>
       <button
        onClick={toggleActive}
        className={`px-4 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
      >
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  )
}

export default CustomApp
