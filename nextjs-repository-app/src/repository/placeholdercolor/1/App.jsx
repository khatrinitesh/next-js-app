import React from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
    <InputWithPlaceholderColor/>
    </>
  )
};

export default CustomApp;


const InputWithPlaceholderColor = () => {
    return (
      <input
        type="text"
        placeholder="Enter text here"
        className="custom-input"
      />
    );
  };