import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const CustomApp = () => {
  return (
    <>
      <TopNav />
    </>
  );
};

export default CustomApp;

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white mr-2">Logo</span>
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-none lg:hidden"
            >
              <HiOutlineMenu />
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="lg:flex">
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Services
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
