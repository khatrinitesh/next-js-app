import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
      <IconButton/>
    </>
  )
}

export default CustomApp

// Your icon button component
function IconButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        {/* Use the ArrowRightIcon component */}
        <FaArrowRight  className="w-6 h-6 mr-2" />
        {/* Optionally, add label text */}
        <span>Next</span>
      </button>
    );
  }