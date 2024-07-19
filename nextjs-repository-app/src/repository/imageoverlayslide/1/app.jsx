import React from 'react';

const CustomApp = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Image Overlay Slide Example</h1>
      <div className="grid grid-cols-3 gap-4">
        <ImageOverlaySlide
          imageUrl="https://via.placeholder.com/300"
          overlayText="Overlay Text 1"
        />
        <ImageOverlaySlide
          imageUrl="https://via.placeholder.com/300"
          overlayText="Overlay Text 2"
        />
        <ImageOverlaySlide
          imageUrl="https://via.placeholder.com/300"
          overlayText="Overlay Text 3"
        />
      </div>
    </div>
  )
}

export default CustomApp

const ImageOverlaySlide = ({ imageUrl, overlayText }) => {
    return (
      <div className="relative">
        <img src={imageUrl} alt="Image" className="w-full h-auto" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
          <div className="text-white text-center">{overlayText}</div>
        </div>
      </div>
    );
  };