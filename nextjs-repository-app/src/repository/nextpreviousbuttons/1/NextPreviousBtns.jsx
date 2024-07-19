import React, { useState } from "react";

const NavigationButtons = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <>
       <div className="container">
      <h1>Simple Navigation Example</h1>
      <div className="item-container">
        <p>{items[currentIndex]}</p>
      </div>
      <div className="button-container">
        <button onClick={goToPrevious} disabled={currentIndex === 0}>Previous</button>
        <button onClick={goToNext} disabled={currentIndex === items.length - 1}>Next</button>
      </div>
    </div>
    </>
  )
};

export default NavigationButtons;
