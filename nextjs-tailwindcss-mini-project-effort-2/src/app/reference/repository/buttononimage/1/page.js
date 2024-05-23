"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {

    const [isHovered,setIsHovered] = useState(false);

    const handleME = () => {
        setIsHovered(true)
    }
    const handleML = () => {
        setIsHovered(false)
    }

    const handleBtnClick = () => {
        // logic for btn click 
        console.log('button clicked');
    }
   

  return (
    <>
     <div className="image-button-container">
      <img
        src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
        alt="Your Image"
        className="image"
        onMouseEnter={handleME}
        onMouseLeave={handleML}
      />
      {isHovered && (
        <button className="animated-button" onClick={handleBtnClick}>
          Click Me
        </button>
      )}
    </div>
    </>
  );
};
export default CustomApp;


