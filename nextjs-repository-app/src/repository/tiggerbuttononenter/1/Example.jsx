import React, { useState,useRef} from "react";
// import "./style.css";

const Example = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
      // Handle button click event
      console.log('Button clicked!');
    };
  
    const handleKeyPress = (event) => {
      // Check if the Enter key is pressed (key code 13)
      if (event.keyCode === 13) {
        // Trigger button click event
        inputRef.current.click();
      }
    };
  return (
    <>
    <h1 className="text-3xl font-bold mb-4">Trigger button on Enter</h1>
       <input
        type="text"
        placeholder="Press Enter to click the button"
        onKeyPress={handleKeyPress}
      />
      <button ref={inputRef} onClick={handleClick} style={{ display: 'none' }}>
        Hidden Button
      </button>
    </>
  );
};

export default Example;
