
import React, { useState } from 'react';
import classNames from 'classnames';

const CustomApp = () => {
  return (
    <>
     <FadingButton/> 
    </>
  )
}

export default CustomApp

const FadingButton = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <button
        className={classNames(
          'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-opacity duration-500',
          { 'opacity-50': isHovered }
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover me
      </button>
    );
  };
