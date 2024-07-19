import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <AnimateSearch />
    </>
  );
};

export default CustomApp;

const AnimateSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }
  return (
    <>
      <div className="relative w-64">
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          value={searchText}
          placeholder="Search...."
          className={`border border-gray-300 rounded-lg px-4 pr-[40px] py-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300 ${
            isFocused ? "shadow-md" : ""
          }`}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.6 17.6l4.6 4.6"
          />
        </svg>
      </div>
    </>
  );
};
