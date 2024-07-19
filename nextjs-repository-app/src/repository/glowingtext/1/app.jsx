import React from "react";

const CustomApp = () => {
  return (
    <>
    <GlowingText/>
    </>
  )
};

export default CustomApp;

const GlowingText = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-4xl font-bold text-gray-800">
          Glowing Text Example
        </h1>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl z-0 animate-pulse"></div>
        <h1 className="relative z-10 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Glowing Text
        </h1>
      </div>
    </>
  );
};
