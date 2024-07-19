import React from "react";

const CustomApp = () => {
  return (
    <>
      <FullScreenWindow>
        <h1 className="text-2xl">Welcome to My Fullscreen Window</h1>
        <p>This is some content inside the fullscreen window.</p>
      </FullScreenWindow>
    </>
  );
};

export default CustomApp;

const FullScreenWindow = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md">{children}</div>
    </div>
  );
};
