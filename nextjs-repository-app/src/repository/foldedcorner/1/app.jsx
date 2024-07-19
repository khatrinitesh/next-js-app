import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
    <FoldedCorner/>
    </>
  )
}

export default CustomApp

const FoldedCorner = () => {
    return (
      <div className="relative overflow-hidden max-w-[500px] mx-auto">
        <div className="bg-red-500 rounded-lg shadow-md p-6 corner text-center text-white">
          <p className="text-gray-800">
            This is the content with a folded corner.
          </p>
        </div>
      </div>
    );
  };