import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <CurtainMenu/>
    </>
  )
}
export default CustomApp;

const CurtainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="fixed top-0 right-0 mt-5 mr-5 z-50 bg-gray-800 text-white p-2 rounded-lg"
        >
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
        <div
          className={`bg-gray-800 fixed top-0 left-0 w-full h-full z-40 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5">
            <h1 className="text-white">Menu Content Goes Here</h1>
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        ></div>
      </div>
    </>
  );
};
