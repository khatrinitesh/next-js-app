import React, { useState,useEffect } from "react";
// import "./style.css";

const Example = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <>
        <nav>
        <ul className="flex fixed top-0">
          <li onClick={() => scrollToSection('section1')}>Section 1</li>
          <li onClick={() => scrollToSection('section2')}>Section 2</li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div id="section1" style={{ height: '100vh', padding:'100px 0',backgroundColor: 'lightblue' }}>
        <h1>Section 1</h1>
      </div>
      <div id="section2" style={{ height: '100vh', padding:'100px 0',backgroundColor: 'lightgreen' }}>
        <h1>Section 2</h1>
      </div>
    </>
  );
};

export default Example;
