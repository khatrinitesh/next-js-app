"use client";

import React, { useEffect, useState } from 'react';
import "./style.css";

const CustomApp = () => {
  

  return (
    <>
      <ScrollBackground/>
    </>
  );
};

export default CustomApp;

const ScrollBackground = () => {
    const [backgroundImage, setBackgroundImage] = useState('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg'); // Initial background image
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const getBackgroundImage = () => {
      if (scrollPosition < 500) {
        return 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg';
      } else if (scrollPosition < 1000) {
        return 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg';
      } else {
        return 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg';
      }
    };
  
    return (
      <>
       <div
      className="scroll-background-container"
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      <div className="content">
        <h1>Your Content Here</h1>
        <p>This is some sample text.</p>
      </div>
    </div>
      </>
    );
  };
  