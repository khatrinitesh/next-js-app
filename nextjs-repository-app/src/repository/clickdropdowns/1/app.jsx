import React, { useState } from 'react';

// Tailwind CSS classes for the dropdown menu
const dropdownClasses = {
    button: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    dropdownMenu: 'absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
    dropdownItem: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
  };

const CustomApp = () => {
    const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
       <div className="flex justify-center items-center h-screen">
        <Dropdown items={dropdownItems} />
        </div>
    </div>
  )
}

export default CustomApp

const Dropdown = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        <button className={dropdownClasses.button} onClick={toggleDropdown}>
          Click Me
        </button>
        {isOpen && (
          <div className={dropdownClasses.dropdownMenu}>
            {items.map((item, index) => (
              <div key={index} className={dropdownClasses.dropdownItem}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
