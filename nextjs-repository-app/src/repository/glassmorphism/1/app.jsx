import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <Glassmorphism/>
    </>
  )
}

export default CustomApp

const Glassmorphism = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 flex justify-center items-center">
        <div className="max-w-[100%] mx-auto bg-white bg-opacity-25 backdrop-blur-lg rounded-lg p-8">
        
          <h1 className="text-fsheadtitle  text-white mb-4">Glassmorphism Effect</h1>
          <p className=" textParagraph text-white text-fs16">This is an example of Glassmorphism effect created using React.js and Tailwind CSS.</p>
        </div>
      </div>
    );
  };