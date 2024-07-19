import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <DropdownMenu />
    </>
  );
};

export default CustomApp;

const DropdownMenu = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <div className="relative w-[200px]">
        <button onClick={toggleMenu}> Open Menu</button>
        {isOpen && (
          <>
            <div className="absolute bottom-full right-0 bg-white border border-gray-300 shadow-lg rounded-lg z-10 top-[30px]">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Option 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Option 3
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};
