import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <ClearableInput/>
    </>
  );
};

export default CustomApp;

const ClearableInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };
  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <input
          type="text"
          className="outline-none flex-grow"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        {inputValue && (
          <button
            className="ml-2 px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={clearInput}
          >
            Clear
          </button>
        )}
      </div>
    </>
  );
};
