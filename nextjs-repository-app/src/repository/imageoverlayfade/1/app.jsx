import React from "react";

const CustomApp = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Image Overlay Example</h1>
        <ImageOverlay />
      </div>
    </>
  );
};

export default CustomApp;

const ImageOverlay = () => {
  return (
    <div className="relative overflow-hidden group">
      <img
        className="block w-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
        src="https://source.unsplash.com/random/800x600"
        alt="Random"
      />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-75 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-lg font-bold">Image Title</h2>
          <p className="mt-1">Overlay Description</p>
        </div>
      </div>
    </div>
  );
};
