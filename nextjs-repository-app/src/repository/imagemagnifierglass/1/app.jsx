import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
    <Magnifier imageSrc="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg" magnification={2} />
    </>
  )
}

export default CustomApp

const Magnifier = ({ imageSrc, magnification }) => {
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const offsetX = e.clientX - left;
      const offsetY = e.clientY - top;
      const percentageX = (offsetX / width) * 100;
      const percentageY = (offsetY / height) * 100;
  
      setMagnifierPosition({ x: percentageX, y: percentageY });
    };
  
    return (
      <div className="magnifier-container" onMouseMove={handleMouseMove}>
        <div    
          className="magnifier"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: `-${magnifierPosition.x}% -${magnifierPosition.y}%`,
            backgroundSize: `${magnification * 100}% ${magnification * 100}%`,
          }}
        ></div>
      </div>
    );
  };