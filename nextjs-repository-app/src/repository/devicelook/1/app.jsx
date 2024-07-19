import React, { useEffect, useState } from "react";

const CustomApp = () => {
  return (
    <>
    <DeviceLook/>
    </>
  )
};

export default CustomApp;

const DeviceLook = () => {
  // state to track viewport width
  const [viewportWidth, setViewportwidth] = useState(window.innerWidth);

  // update viewport width when window is resized
  useEffect(() => {
    const handleResize = () => {
      setViewportwidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // determine device size based on viewport width
  let deviceSize = "";
  if (viewportWidth < 640) {
    deviceSize = "mobile";
  } else if (viewportWidth < 1024) {
    deviceSize = "tablet";
  } else {
    deviceSize = "desktop";
  }

  return (
    <>
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className={`p-8 bg-white rounded-lg shadow-lg ${deviceSize === 'mobile' ? 'w-full max-w-xs' : 'w-96'}`}>
        <h1 className="text-xl font-bold mb-4">Responsive Design Demo</h1>
        <p className="text-gray-700">This is a demonstration of how UI can adapt to different device sizes.</p>
        <p className="text-gray-700">Current Device Size: {deviceSize}</p>
      </div>
    </div>
    </>
  )
};
