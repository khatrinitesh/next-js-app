"use client"

import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
    const images = [
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alt:'image1'},
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alt:'image2'},
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alt:'image3'},
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alt:'image4'},
      ];
  

  return (
    <>
        {images.map((val,index) => {
            const {src,alternate} = val
            return(
                <BlackWhiteImg key={index} src={src} alternate={alternate}/>
            )
        })}
    </>
  );
};

export default CustomApp;

const BlackWhiteImg = ({ src,alt }) => {
    return (
      <div className="image-container">
        <img src={src} className="black-and-white" alt={alt} />
      </div>
    );
  };

