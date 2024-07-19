import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <NavBar/>
    </>
  )
}

export default CustomApp

const NavBar = () => {
    return (
      <nav className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="nav-link transition ease-in-out delay-1000">Home</a>
          </li>
          <li>
            <a href="#" className="nav-link">About</a>
          </li>
          <li>
            <a href="#" className="nav-link">Services</a>
          </li>
          <li>
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    );
};
