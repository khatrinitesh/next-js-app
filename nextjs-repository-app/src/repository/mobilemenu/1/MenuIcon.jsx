import React from 'react';

const MenuIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default MenuIcon;