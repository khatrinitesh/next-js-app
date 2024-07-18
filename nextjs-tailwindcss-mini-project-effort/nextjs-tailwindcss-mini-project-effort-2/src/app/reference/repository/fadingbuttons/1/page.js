"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        // Add your button click logic here
    };
   

  return (
    <>
    <button className={`fading-button ${isClicked ? 'fade-out' : ''} `} onClick={handleClick}>Click</button>
    
    </>
  );
};
export default CustomApp;


