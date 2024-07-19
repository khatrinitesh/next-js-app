import React, { useState } from "react";
// import "./style.css";

const Example = ({ text, position, children }) => {

    const [showTooltip, setShowTooltip] = useState(false);

    const toggleTooltip = () => {
      setShowTooltip(!showTooltip);
    };
  
 
  return (
    <>
    <div className="relative inline-block">
      {showTooltip && (
        <div
          className={`absolute bg-gray-800 text-white text-xs px-2 py-1 rounded ${getPositionStyles(position)}`}
        >
          {text}
        </div>
      )}
      <span onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
      </span>
    </div>
    </>
  );
};

export default Example;

const getPositionStyles = (position) => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-full';
      case 'right':
        return 'top-1/2 right-full transform translate-y-1/2 translate-x-full';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 translate-y-full';
      case 'left':
        return 'top-1/2 left-full transform -translate-y-1/2 -translate-x-full';
      default:
        return '';
    }
  };
