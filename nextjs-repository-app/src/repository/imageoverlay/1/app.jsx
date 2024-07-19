import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <ImageOverlay/>
    </>
  )
}

export default CustomApp

const ImageOverlay = () => {
    return (
      <div className="image-container">
        <img src="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg" alt="Your image" />
        <div className="overlay">
          <div className="overlay-text">Overlay Text</div>
        </div>
      </div>
    );
  };