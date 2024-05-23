"use client";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBicycle,
  FaCar,
  FaSubway,
  FaPlane,
  FaRocket,
} from "react-icons/fa";
import Link from "next/link";

const CustomApp = ({ isMenuOpen, setIsMenuOpen }) => {
  // CLICK TOGGLE OPEN AND CLOSE
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div id="menu" className={isMenuOpen ? "open" : ""}>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default CustomApp;
