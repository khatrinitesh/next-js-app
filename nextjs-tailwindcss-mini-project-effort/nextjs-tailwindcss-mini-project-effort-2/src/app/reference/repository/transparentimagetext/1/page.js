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
        {images.map((val,index) => {
            const {src,alt,text} = val
            return(
                <TransparentImageText key={index} src={src} alt={alt} text={text} />
            )
        })}
    </>
  );
};

export default CustomApp;

const TransparentImageText = ({ src, alt, text }) => {
    return (
      <div className="image-container">
        <img src={src} alt={alt} className="image" />
        <div className="text-container">
          <p className="text">{text}</p>
        </div>
      </div>
    );
  };

