import React from "react";

const CustomApp = () => {

    const handleLeftClick= () => {
        // Handle left arrow click
        console.log('Left arrow clicked');
    }
    const handleRightClick= () => {
        // Handle right arrow click
        console.log('Right arrow clicked')
    }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Arrow direction="left" onClick={handleLeftClick} />
        <Arrow direction="right" onClick={handleRightClick} />
      </div>
    </>
  );
};

export default CustomApp;

const Arrow = ({ direction, onClick }) => {
    return (
      <>
        <div
          className={`w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-110`}
          onClick={onClick}
        >
          {direction === 'left' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      </>
    );
  };