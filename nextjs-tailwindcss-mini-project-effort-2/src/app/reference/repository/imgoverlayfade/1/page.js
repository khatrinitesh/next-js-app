"use client"

import React, { useState } from "react";
import './style.css';

const CustomApp = () => {

  

  return (
    <>
    <OverlayImage imageSrc="https://www.allcrestedbutte.com/assets/img/allcabins-featured.jpg" iconClass="fas fa-heart" />
      <OverlayImage imageSrc="https://www.allcrestedbutte.com/assets/img/allcabins-featured.jpg" iconClass="fas fa-star" />
      <OverlayImage imageSrc="https://www.allcrestedbutte.com/assets/img/allcabins-featured.jpg" iconClass="fas fa-thumbs-up" />
    </>
  );
};

export default CustomApp;


const OverlayImage = ({ imageSrc, iconClass }) => {
    const { overlayVisible, showOverlay, hideOverlay } = useOverlay();
  
    return (
      <div className="overlay-image" onMouseEnter={showOverlay} onMouseLeave={hideOverlay}>
        <img src={imageSrc} alt="Overlay Image" />
        {overlayVisible && (
          <div className="overlay">
            <i className={iconClass}></i>
          </div>
        )}
      </div>
    );
};
  

const useOverlay = () => {
    const [overlayVisible, setOverlayVisible] = useState(false);

    const showOverlay = () => {
        setOverlayVisible(true);
    };

    const hideOverlay = () => {
        setOverlayVisible(false);
    };

return { overlayVisible, showOverlay, hideOverlay };
};