import React from 'react'

const CustomApp = () => {
  return (
    <>
     <div className="h-screen flex justify-center items-center bg-gray-200">
        <LineWithWords/>
    </div>
    </>
  )
}

export default CustomApp

const LineWithWords = () => {
    return (
      <div className="relative flex items-center justify-center">
        {/* Horizontal line */}
        <div className="w-full border-t-2 border-gray-300"></div>
  
        {/* Words overlaying the line */}
        <div className="absolute bg-white px-4">
          <span className="text-gray-600 text-lg font-semibold">Your Words</span>
        </div>
      </div>
    );
  };
  