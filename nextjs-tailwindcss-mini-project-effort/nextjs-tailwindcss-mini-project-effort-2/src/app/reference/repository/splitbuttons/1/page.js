"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {
   

  return (
    <>
    <SplitButton/>
    </>
  );
};
export default CustomApp;

const SplitButton = () => {
    const handlePrimaryClick = () => {
      // Logic for primary button click
      console.log('Primary Button Clicked');
    };
  
    const handleSecondaryClick = () => {
      // Logic for secondary button click
      console.log('Secondary Button Clicked');
    };
  
    return (
      <div className="split-button-container">
        <button className="primary-button" onClick={handlePrimaryClick}>
          Primary Button
        </button>
        <div className="dropdown">
          <button className="secondary-button" onClick={handleSecondaryClick}>
            &#9662; {/* Unicode character for down arrow */}
          </button>
          <div className="dropdown-content">
            <button onClick={handleSecondaryClick}>Option 1</button>
            <button onClick={handleSecondaryClick}>Option 2</button>
            <button onClick={handleSecondaryClick}>Option 3</button>
          </div>
        </div>
      </div>
    );
  };