import React, { useState } from 'react';
import MenuIcon from './MenuIcon';
import MobileMenu from './MobileMenu';
import './style.css';

const CustomApp = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
        <MenuIcon toggleMenu={toggleMenu} isOpen={isMenuOpen}/>
        <MobileMenu closeMenu={closeMenu} isOpen={isMenuOpen} />
    </>
  )
}

export default CustomApp


