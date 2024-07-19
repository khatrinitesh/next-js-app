import React, { useState } from "react";
import './style.css';

const Example = () => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-800 text-white p-4">
        <ul className="flex justify-end space-x-4">
          <li className="cursor-pointer"><a href="#home">Home</a></li>
          <li className="cursor-pointer"><a href="#about">About</a></li>
          <li className="cursor-pointer"><a href="#services">Services</a></li>
          <li className="cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="home" className="h-screen bg-gray-200">
        <h1 className="text-4xl font-bold text-center mt-20">Home Section</h1>
      </div>
      <div id="about" className="h-screen bg-gray-300">
        <h1 className="text-4xl font-bold text-center mt-20">About Section</h1>
      </div>
      <div id="services" className="h-screen bg-gray-400">
        <h1 className="text-4xl font-bold text-center mt-20">Services Section</h1>
      </div>
      <div id="contact" className="h-screen bg-gray-500">
        <h1 className="text-4xl font-bold text-center mt-20">Contact Section</h1>
      </div>
    </>
  );
};

export default Example;
