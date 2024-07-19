import React, { useState } from 'react';
import './style.css';

const Example = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <button onClick={toggleMenu} className="toggle-button">
        ☰ Menu
      </button>
      <nav className={`side-navigation ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </>
  );
};

export default Example;
