import React from 'react'

const CustomApp = () => {
  return (
    <>
        <ImageWithTextOverlay/>
    </>
  )
}

export default CustomApp

const ImageWithTextOverlay = () => {
    return (
      <div className="relative w-full max-w-xs">
        {/* Image */}
        <img
          className="object-cover w-full h-auto rounded-md"
          src="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg"
          alt="Your image"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity">
          <div>
            <h2 className="text-2xl font-bold mb-2">Overlay Title</h2>
            <p className="text-lg">Overlay Description</p>
          </div>
        </div>
      </div>
    );
  };