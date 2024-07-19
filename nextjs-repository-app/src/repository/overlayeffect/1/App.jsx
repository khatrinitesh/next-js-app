import React, { useState } from "react";
import OvelayEffect from "./OvelayEffect";

const CustomApp = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };
  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openOverlay}
        >
          Open Overlay
        </button>
        <OvelayEffect isOpen={isOverlayOpen} onClose={closeOverlay} />
      </div>
    </>
  );
};

export default CustomApp;
