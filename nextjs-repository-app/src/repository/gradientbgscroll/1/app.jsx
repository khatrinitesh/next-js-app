import React, { useEffect, useState } from "react";

const CustomApp = () => {
  return (
    <>
     <ScrollingGradientBackground/>
    </>
  )
};

export default CustomApp;

const ScrollingGradientBackground = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPos(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradient = `linear-gradient(90deg, rgba(0,0,0,0.7) ${scrollPos}px, transparent 100%)`;

  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{ backgroundImage: gradient }}
      >
        <h1 className="text-white text-4xl font-bold">
          Scrolling Gradient Background
        </h1>
      </div>
    </>
  );
};
