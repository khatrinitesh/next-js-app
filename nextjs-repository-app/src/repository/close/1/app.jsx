import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <ToggleBtn/>
    </>
  )
};

export default CustomApp;

const ToggleBtn = () => {
  // State to track the toggle
  const [isOn, setIson] = useState(false);

  // function to handle toggle
  const handleToggle = () => {
    setIson(!isOn);
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {/* Toggle button */}
        <button
          className={`px-4 py-2 rounded ${
            isOn ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={handleToggle}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
};
