import React from "react";

const Parallax = () => {
  return (
    <>
      <div className="parallax-container">
        <div className="parallax-layer layer1">
          {/* Content for the first layer */}
          <h1 className="text-white text-4xl">Welcome to Parallax!</h1>
        </div>
        <div className="parallax-layer layer2"></div>
        <div className="parallax-layer layer3">
          {/* Content for the third layer */}
          <p className="text-white text-lg">Scroll down to see the effect</p>
        </div>
      </div>
    </>
  );
};

export default Parallax;
