import React from 'react';
import Nav from './Nav';

const CustomApp = () => {

  const navItems = [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#' },
    { label: 'Services', url: '#' },
    { label: 'Portfolio', url: '#' },
    { label: 'Contact', url: '#' }
  ];
  return (
    <>
      <Nav navItems={navItems}/>
    </>
  )
}

export default CustomApp
