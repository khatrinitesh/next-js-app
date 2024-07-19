import React, { useState } from "react";
import "./style.css";

const Example = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      // Save the theme preference to localStorage or a global state management solution
      // For simplicity, we'll just store it in localStorage here
      localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    };
  return (
    <>
       <div className="flex items-center justify-center mt-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
      >
        {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
    </>
  );
};

export default Example;
