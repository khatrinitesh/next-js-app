import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
      <AnimatedIcons/>
    </>
  )
}

export default CustomApp

const AnimatedIcons = () => {
    const [isHovered,setIsHovered] = useState(false);
    
    
    return(
        <>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={isHovered ? "blue" : "currentColor"}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>
        </>
    )
}
