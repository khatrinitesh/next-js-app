"use client"

import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
    const images = [
        {
          src: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
          alt: "image1",
          text: "This is a sample text 1",
        },
        {
            src: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
            alt: "image2",
            text: "This is a sample text 2",
          },
          {
            src: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
            alt: "image3",
            text: "This is a sample text 3",
          },
      ];
      
  return (
    <>
        <FullPageImage src='https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg' alt='full pageimage'/>
    </>
  );    
};

export default CustomApp;

const FullPageImage = ({ src, alt }) => {
    return (
      <div className="full-page-image">
        <img src={src} alt={alt} />
      </div>
    );
};

