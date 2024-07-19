import React, { useState } from "react";
import './style.css';

const ProgressBars = () => {
  const [progress, setProgress] = useState(50); // Set initial progress (between 0 and 100)
  const handleIncrement = () => {
    setProgress((prevProgress) =>
      prevProgress < 100 ? prevProgress + 10 : 100
    ); // Increment progress by 10%
  };

  const handleDecrement = () => {
    setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : 0)); // Decrement progress by 10%
  };
  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div>
          <button onClick={handleIncrement}>Increase Progress</button>
          <button onClick={handleDecrement}>Decrease Progress</button>
        </div>
      </div>
    </>
  );
};

export default ProgressBars;
