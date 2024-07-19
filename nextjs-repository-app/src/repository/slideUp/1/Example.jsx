import React,{useState} from "react";
import "./style.css";

const Example = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="container">
        <button onClick={toggleVisibility} className="toggle-button">
          Toggle Content
        </button>
        <div className={`content ${isVisible ? "visible" : "hidden"}`}>
          {/* Content to be toggled */}
          <p>This content slides down when toggled.</p>
        </div>
      </div>
    </>
  );
};

export default Example;
