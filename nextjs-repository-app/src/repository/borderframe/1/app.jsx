import React from "react";

const CustomApp = () => {
  return (
    <>
      <BorderFrame
        src="https://i.pinimg.com/originals/1a/b0/89/1ab089aaf438547bc56b14d3e597807d.jpg"
        alt="wallpaper"
      />
    </>
  );
};

export default CustomApp;

const BorderFrame = ({ src, alt }) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          {/* Frame border */}
          <div className="absolute border-2 border-gray-500 top-0 left-0 right-0 bottom-0 z-10"></div>
          {/* Image */}
          <img src={src} alt={alt} className="relative z-20" />
        </div>
      </div>
    </>
  );
};
