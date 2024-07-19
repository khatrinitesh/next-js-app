import React from 'react'

const CustomApp = () => {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Image Overlay Example</h1>
      <ImageOverlay />
    </>
  )
}

export default CustomApp

const ImageOverlay = () => {
    return (
      <div className="relative group">
        <img src="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg" alt="Your image" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
          <div className="text-white text-center">
            <h2 className="text-xl font-bold">Overlay Text</h2>
            <p className="text-sm">Additional description</p>
          </div>
        </div>
      </div>
    );
  };