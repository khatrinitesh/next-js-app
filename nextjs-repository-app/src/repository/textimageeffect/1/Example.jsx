import React from "react";
// import "./style.css";

const Example = ({ text, onClick }) => {
  return (
    <>
     <div className="relative">
      {/* Image */}
      <img src="https://via.placeholder.com/640x360" alt="Image" className="w-full h-auto" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold bg-black bg-opacity-50 p-4">Your Text Overlay</h1>
      </div>
    </div>
    </>
  );
};

export default Example;
