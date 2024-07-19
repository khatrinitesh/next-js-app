import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };
  return(
    <>
      <MenuIcon onMenuToggle={handleMenuToggle} />
      <Menu isOpen={isMenuOpen} />
    </>
  )
};

export default CustomApp;

const MenuIcon = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onMenuToggle(!isOpen);
  };

  return (
    <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

const Menu = ({ isOpen }) => {
    return (
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  };
