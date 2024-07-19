import React, { useState, useEffect } from "react";
import "./style.css";

const Example = () => {
    const [value, setValue] = useState(50); // Initial value of the slider

    const handleChange = (event) => {
      setValue(event.target.value); // Update the state with the slider value
    };

  return (
    <>
       <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p> {/* Display the current value of the slider */}
    </>
  );
};

export default Example;
