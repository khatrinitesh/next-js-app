import React from 'react'

const CustomApp = () => {
  return (
    <>
        <ImageOverlayZoom/>
    </>
  )
}

export default CustomApp

const ImageOverlayZoom = () => {
    return (
      <div className="relative group">
        <img
          className="block w-full h-auto transition duration-300 transform group-hover:scale-110"
          src="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg"
          alt="Your image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold">Overlay Title</h2>
            <p className="text-lg">Overlay Description</p>
          </div>
        </div>
      </div>
    );
};