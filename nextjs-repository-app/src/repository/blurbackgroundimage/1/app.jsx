import React from 'react'

const CustomApp = () => {
  return (
    <>
      <BlurBackgroundImage/>
    </>
  )
}

export default CustomApp

const BlurBackgroundImage = () => {
    return (
      <div className="relative h-screen overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg")', // Replace with your background image URL
            filter: 'blur(8px)', // Adjust the blur intensity as needed
            zIndex: -1, // Ensure background stays behind content
          }}
        ></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Blur Background Image</h1>
            <p className="text-lg text-gray-700">This is a blurred background image with Tailwind CSS.</p>
          </div>
        </div>
      </div>
    );
  };
