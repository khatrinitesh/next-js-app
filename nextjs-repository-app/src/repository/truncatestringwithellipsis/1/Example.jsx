import React, { useState,useRef} from "react";
// import "./style.css";

const Example = () => {
    const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.asdaddddasdsaddsdadsaddadadd";
    
  return (
    <>
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Truncated Text Example</h1>
      <TruncatedText text={longText} maxLength={20} />
    </div>
    </>
  );
};

export default Example;

const TruncatedText = ({ text, maxLength }) => {
    // Function to truncate the text
    const truncate = (str, max) => {
      return str.length > max ? str.slice(0, max) + '...' : str;
    };
  
    return (
      <div className="truncate">
        {truncate(text, maxLength)}
      </div>
    );
  };
