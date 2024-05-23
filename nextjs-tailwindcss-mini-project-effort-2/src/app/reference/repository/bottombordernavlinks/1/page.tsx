"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";

const CustomApp = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = ['Home', 'Contact', 'Courses', 'About', 'Service', 'Events', 'FAQ'];

    const handleClick = (index) => {
        setActiveIndex(index)
    }
  return (
    <>
      <div className="menu-wrapper">
      <ul className="menu-item">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default CustomApp;
