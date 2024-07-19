import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <Element/>
    </>
  )
};

export default CustomApp;

const Element = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className={`p-4 border border-gray-300 rounded-lg transition-colors duration-300 ${
            isHovered ? "bg-blue-200" : "bg-[red] text-white"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p>Hover me!</p>
        </div>
      </div>
    </>
  );
};
