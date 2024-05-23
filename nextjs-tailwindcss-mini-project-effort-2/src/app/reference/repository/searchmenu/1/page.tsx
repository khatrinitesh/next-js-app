"use client"
import React, { useState } from 'react';
import { BsSearch, BsArrowBack } from 'react-icons/bs'; // Import icons as needed

const CustomApp = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsSearchOpen((prev) => !prev)
    }
    const handleSearchCancel = () => {
        setIsSearchOpen(false)
    }

  return (
    <>
       <header className="header" id="header">
            <nav className="navbar container">
                <a href="./index.html" className="brand">Brand</a>
                <div className="burger" id="burger">
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                </div>
                <span className="overlay"></span>
                <div className={`menu ${isSearchOpen ? 'search-open' : ''}`} id="menu">
                <ul className="menu-inner">
                    <li className="menu-item"><a className="menu-link" href="#">Home</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">About</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Service</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Project</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Support</a></li>
                </ul>
                </div>
                <span onClick={handleSearchToggle}><BsSearch className="search-toggle" /></span>
                <div className={`search-block ${isSearchOpen ? 'active' : ''}`}>
                <form className="search-form">
                    <span onClick={handleSearchCancel}><BsArrowBack className="search-cancel" /></span>
                    <input type="search" name="search" className="search-input" placeholder="Search here..." />
                </form>
                </div>
            </nav>
        </header>
    </>
  )
}

export default CustomApp
