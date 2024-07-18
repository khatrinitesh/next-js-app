"use client"

import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
    const images = [
        { src: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', alt: 'image1', text: 'Top Left', position: 'top-left' },
        { src: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', alt: 'image2', text: 'Top Right', position: 'top-right' },
        { src: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', alt: 'image3', text: 'Bottom Left', position: 'bottom-left' },
        { src: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', alt: 'image4', text: 'Bottom Right', position: 'bottom-right' },
      ];

  return (
    <>
        {images.map((val,index) => {
            const {src,alt,text,position} = val
            return(
                <ImageWithText key={index} src={src} alt={alt} text={text} position={position}/>
            )
        })}
    </>
  );
};

export default CustomApp;

const ImageWithText  = ({ src,alt,text,position }) => {
    return (
      <div className="image-container">
        <img src={src} className="black-and-white" alt={alt} />
        <div className={`text ${position}`}>{text}</div>
      </div>
    );
  };

