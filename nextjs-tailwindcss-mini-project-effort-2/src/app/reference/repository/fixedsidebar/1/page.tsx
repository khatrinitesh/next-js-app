"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import './style.css';

const CustomApp = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarActive(!isSidebarActive);
    };
  return (
    <>
    <div id="sidebar" className={isSidebarActive ? 'active' : ''}>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <a>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <ul>
          <li>Explore</li>
          <li>Sell</li>
          <li>Buy</li>
        </ul>
      </div>

      <div className="section-start">
        <h1>Let's start today!</h1>
      </div>
    </>
  )
}

export default CustomApp

  


