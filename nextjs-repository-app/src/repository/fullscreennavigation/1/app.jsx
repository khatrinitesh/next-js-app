import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const CustomApp = () => {
  return (
    <>
        <FullscreenNavigation/>
    </>
  )
}

export default CustomApp

const FullscreenNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        {/* Navigation toggle button */}
        <button className="fixed top-4 right-4 z-50 text-gray-500 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>
  
        {/* Navigation menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-40 flex justify-center items-center">
            <nav className="text-white">
              <ul>
                <li className="py-2">
                  <a href="#" className="hover:text-gray-300">Home</a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:text-gray-300">About</a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:text-gray-300">Services</a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:text-gray-300">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  };