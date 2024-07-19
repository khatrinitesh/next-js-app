import React, { useState } from "react";
// import "./style.css";

const Example = () => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
 
  return (
    <>
    <div className="mt-4">
      <label className={`text-gray-700 ${isFocused ? 'text-blue-500' : ''}`}>
        Username
      </label>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Enter your username"
      />
    </div>
    </>
  );
};

export default Example;
