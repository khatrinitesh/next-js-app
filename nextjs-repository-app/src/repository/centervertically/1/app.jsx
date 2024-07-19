import React from "react";

const CustomApp = () => {
  return (
    <>
        <CenterVertically/>
    </>
  )
};

export default CustomApp;

const CenterVertically = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        {/* Content to be centered vertically */}
        <div className="bg-gray-200 p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Centered Content</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
};
