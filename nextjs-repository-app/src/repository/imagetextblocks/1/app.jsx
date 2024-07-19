import React from 'react'

const CustomApp = () => {
  return (
    <>
        <TextBlocksOverImage/>
    </>
  )
}

export default CustomApp

const TextBlocksOverImage = () => {
    return (
      <div className="relative">
        {/* Image */}
        <img
          className="w-full h-auto"
          src="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg"
          alt="wallpaper"
        />
        
        {/* Text Blocks */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Text Block 1</h1>
          <p className="text-lg">Description of Text Block 1</p>
        </div>
      </div>
    );
  };