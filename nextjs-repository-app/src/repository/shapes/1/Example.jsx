import React, { useState } from "react";
// import './style.css';

const Example = () => {
    
   
  return (
    <>
       <svg width="400" height="400" viewBox="0 0 400 400">
      {/* Circle */}
      <circle cx="100" cy="100" r="50" fill="red" />

      {/* Rectangle */}
      <rect x="200" y="50" width="100" height="100" fill="blue" />

      {/* Triangle */}
      <polygon points="300,200 350,300 250,300" fill="green" />
    </svg>
    </>
  )
};

export default Example;
