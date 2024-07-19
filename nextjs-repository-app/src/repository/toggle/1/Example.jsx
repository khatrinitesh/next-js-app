import React, { useState } from "react";
import "./style.css";

const Example = () => {
  const [showText, setShowText] = useState(false);

  const btnToggle = () => {
    setShowText(!showText);
  };
  return (
    <>
      <button onClick={btnToggle}>Click</button>
      <div className={`text-container ${showText ? "show" : ""}`}>
        Show text
      </div>
    </>
  );
};

export default Example;
