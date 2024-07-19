import React from 'react'

const CustomApp = () => {
  return (
    <>
      <ButtonOnImage/>
    </>
  )
}

export default CustomApp

const ButtonOnImage = () => {
    return (
      <div className="relative w-full h-screen">
        <img
          src="https://i.pinimg.com/originals/1a/b0/89/1ab089aaf438547bc56b14d3e597807d.jpg"
          alt="Your image alt text"
          className="object-cover w-full h-full"
        />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Button
        </button>
      </div>
    );
  };
