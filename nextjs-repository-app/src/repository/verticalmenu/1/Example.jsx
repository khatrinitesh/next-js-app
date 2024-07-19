import React, { useState } from "react";
// import './style.css';

const Example = () => {
  return (
    <>
     <div className="flex flex-col bg-gray-200 h-screen">
      <ul className="py-4">
        <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Home</li>
        <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">About</li>
        <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Services</li>
        <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Contact</li>
      </ul>
    </div>
    </>
  );
};

export default Example;
