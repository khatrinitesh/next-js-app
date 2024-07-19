import React,{useState } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  z-index: 1000; /* Ensures the menu is above other content */
`;

const MenuItem = styled.a`
  color: white;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CustomApp = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('Home');

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
      };
  return (
    <>
      <FixedMenu activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick}/>
    </>
  )
}

export default CustomApp

const FixedMenu = ({activeMenuItem, handleMenuItemClick }) => {
    
    return (
      <Menu>
        <MenuItem active={activeMenuItem === 'Home'} href="#" onClick={() => handleMenuItemClick('Home')}>Home</MenuItem>
        <MenuItem active={activeMenuItem === 'About'} href="#" onClick={() => handleMenuItemClick('About')}>About</MenuItem>
        <MenuItem active={activeMenuItem === 'Services'} href="#" onClick={() => handleMenuItemClick('Services')}>Services</MenuItem>
        <MenuItem active={activeMenuItem === 'HoContactme'} href="#" onClick={() => handleMenuItemClick('Contact')}>Contact</MenuItem>
      </Menu>
    );
  };
