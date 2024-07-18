"use client";

import React, { useEffect, useState } from 'react';
import "./style.css";

const CustomApp = () => {
  

  return (
    <>
      <ImageGrid/>
    </>
  );
};

export default CustomApp;

const ImageGrid = () => {
    const images = [
      'https://placekitten.com/200/300',
      'https://placekitten.com/201/300',
      'https://placekitten.com/202/300',
    ];
  
    return (
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Index example ${index + 1}`} className="grid-item" />
        ))}
      </div>
    );
  };