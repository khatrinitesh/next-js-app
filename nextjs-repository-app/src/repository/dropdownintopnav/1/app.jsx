import React, { useState } from "react";

const CustomApp = () => {
  return(
    <>
    <SideNav/>
    </>
  )
};

export default CustomApp;

const SideNav = () => {
  const [isDropdownOpen, setIsdropdownopen] = useState(false);

  const toggleDropdown = () => {
    setIsdropdownopen(!isDropdownOpen);
  };

  return (
    <>
      <div className="h-screen bg-gray-800 text-white flex flex-col">
        <div className="py-4 px-6">
          <h1 className="text-2xl font-bold">Your App Name</h1>
        </div>
        <nav className="flex-1">
          <ul>
            <li className="py-2 px-6 cursor-pointer hover:bg-gray-700">
              Dashboard
            </li>
            <li
              className="py-2 px-6 cursor-pointer hover:bg-gray-700 relative"
              onClick={toggleDropdown}
            >
              Dropdown
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-gray-700 rounded-lg py-1 w-full">
                  <div className="py-1 px-4">Option 1</div>
                  <div className="py-1 px-4">Option 2</div>
                  <div className="py-1 px-4">Option 3</div>
                </div>
              )}
            </li>
            <li className="py-2 px-6 cursor-pointer hover:bg-gray-700">
              Settings
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
