// MobileMenu.js
import React from 'react';

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li onClick={closeMenu}>Home</li>
        <li onClick={closeMenu}>About</li>
        <li onClick={closeMenu}>Contact</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
