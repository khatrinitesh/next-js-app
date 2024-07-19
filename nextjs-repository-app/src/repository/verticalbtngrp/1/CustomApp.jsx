import React from "react";
import Example from "./Example";

const CustomApp = () => {

    const handleButtonClick = (label) => {
        alert(`Button "${label}" clicked!`);
      };

      const buttons = [
        { label: "Button 1", onClick: () => handleButtonClick("Button 1") },
        { label: "Button 2", onClick: () => handleButtonClick("Button 2") },
        { label: "Button 3", onClick: () => handleButtonClick("Button 3") },
      ];
    
  return (
    <>
     <div className="flex items-center justify-center h-screen">
      <Example buttons={buttons} />
      </div>
    </>
  );
};

export default CustomApp;
