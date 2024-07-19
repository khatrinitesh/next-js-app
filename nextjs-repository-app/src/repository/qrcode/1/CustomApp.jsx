import React from "react";
import Example from "./Example";

const CustomApp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="qr-code-container">
          <Example value="https://quickchart.io/qr?text=Here's my text" />
        </div>
      </div>
    </>
  );
};

export default CustomApp;
