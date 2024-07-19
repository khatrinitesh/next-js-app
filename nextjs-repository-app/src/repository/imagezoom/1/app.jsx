import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div>
         <div className="flex justify-center items-center h-screen">
        <ImageZoom imageUrl="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg" />
        </div>
    </div>
  )
}

export default CustomApp

const ImageZoom = ({ imageUrl }) => {
    const { isZoomed, handleZoomToggle } = useImageZoom();
  
    return (
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt="Image"
          className={`w-full ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={handleZoomToggle}
        />
        {isZoomed && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <img src={imageUrl} alt="Zoomed Image" className="max-w-full max-h-full" />
          </div>
        )}
      </div>
    );
  };
  

const useImageZoom = () => {
    const [isZoomed, setIsZoomed] = useState(false);
  
    const handleZoomToggle = () => {
      setIsZoomed(prevZoomed => !prevZoomed);
    };
  
    return { isZoomed, handleZoomToggle };
  };