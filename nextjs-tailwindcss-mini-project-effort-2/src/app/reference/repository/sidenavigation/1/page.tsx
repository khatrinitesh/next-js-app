"use client";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaBicycle, FaCar, FaSubway, FaPlane, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import './style.css';

const CustomApp = () => {
    const [status, setStatus] = useState('closed');

  const handleNavTriggerClick = () => {
    setStatus((prevState) => (prevState === 'closed' ? 'open' : 'closed'))
  };
  return (
    <>
<nav className={`sidenav ${status === 'open' ? 'slidein' : 'slideout'}`}>
      <div id="nav-trigger" status={status} onClick={handleNavTriggerClick}>
        {status === 'closed' ? <FaBars /> : <FaTimes />}
      </div>
      <div id="navigation">
        <h3>Navigation</h3>
        <ul>
          <li><FaHome />Home</li>
          <li><FaBicycle />Bike</li>
          <li><FaCar />Car</li>
          <li><FaSubway />Subway</li>
          <li><FaPlane />Plane</li>
          <li><FaRocket />Rocket</li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default CustomApp

  


