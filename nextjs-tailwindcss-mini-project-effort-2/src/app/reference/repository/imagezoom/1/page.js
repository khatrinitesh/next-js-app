"use client"
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

    const data = [
        {imgSrc:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'},
        {imgSrc:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}    
    ]
      return (
    <>
        {data.map((item, index) => (
        <ImageZoom key={index} imageUrl={item.imgSrc} />
      ))}
    </>
  )
}

export default CustomApp

const ImageZoom = ({ imageUrl }) => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleZoomIn = () => {
      setZoomLevel(prevZoom => prevZoom + 0.2);
    };
  
    const handleZoomOut = () => {
      setZoomLevel(prevZoom => Math.max(1, prevZoom - 0.2));
    };
  
    const handleMouseMove = (e) => {
      setPosition({ 
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      });
    };
  
    return (
      <div className="image-zoom-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={imageUrl}
          alt="Zoomable Image"
          style={{
            width: `calc(100% * ${zoomLevel})`,
            transform: `translate(-${position.x * (zoomLevel - 1)}px, -${position.y * (zoomLevel - 1)}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseMove={handleMouseMove}
        />
        <div className="zoom-controls">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </div>
    );
  };
  
