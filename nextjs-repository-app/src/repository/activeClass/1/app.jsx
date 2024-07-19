import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  const [active, setActive] = useState("home"); // Initialize active state with 'home'

  const handleItemClick = (item) => {
    setActive(item); // Update active state when an item is clicked
  };
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="flex items-center">
          <h1 className="text-lg font-bold">Logo</h1>
        </div>
        <ul className="flex space-x-4">
          <li
            className={`nav-item ${active === "home" ? "active" : ""}`}
            onClick={() => handleItemClick("home")}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`nav-item ${active === "about" ? "active" : ""}`}
            onClick={() => handleItemClick("about")}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`nav-item ${active === "contact" ? "active" : ""}`}
            onClick={() => handleItemClick("contact")}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CustomApp;
