import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <BackgroundChange />
    </>
  );
};

export default CustomApp;

const BackgroundChange = () => {
  // state to manage background color and dropdown selection
  const [bgColor, setBgColor] = useState("white");

  // function to handle dropdown change event
  const handleColorChange = (e) => {
    setBgColor(e.target.value);
  };
  return (
    <>
      <div
        className={`h-screen bg-${bgColor}-500 flex justify-center items-center`}
      >
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Background Color Changer</h1>
          <div className="flex items-center">
            <label htmlFor="colorSelector" className="mr-2">
              Select a color:
            </label>
            <select
              id="colorSelector"
              onChange={handleColorChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              {/* Add more color options as needed */}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
