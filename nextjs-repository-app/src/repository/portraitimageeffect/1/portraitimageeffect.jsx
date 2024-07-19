import React, { useState } from 'react';

const PortraitImageEffect = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div
        className={`portrait-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" // Replace with your image URL
          alt="Portrait"
          className="portrait-image"
        />
      </div>
    );
  };
  
  export default PortraitImageEffect;