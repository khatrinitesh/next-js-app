"use client"

import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
    const images = [
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alternate:'image1'},
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alternate:'image2'},
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alternate:'image3'},
        {src:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',alternate:'image4'},
      ];
  

  return (
    <>
        {images.map((val,index) => {
            const {src,alternate} = val
            return(
                <ImageComponent key={index} src={src} alternate={alternate}/>
            )
        })}
    </>
  );
};

export default CustomApp;

const ImageComponent = ({ src,alternate }) => {
    return (
      <div className="image-container">
        <img src={src} alt="Image" className="grayscale" alternate={alternate} />
      </div>
    );
  };

