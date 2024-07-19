import React, { useState } from "react";
// import "./style.css";

const Example = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`py-2 px-4 rounded-md bg-blue-500 text-white transition-colors duration-300 ${
        isHovered ? 'bg-blue-600' : 'bg-blue-500'
      }`}
    >
      Hover me
    </button>
    </>
  );
};

export default Example;
