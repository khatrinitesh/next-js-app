import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

const CustomApp = () => {
  return (
    <>
      <FullscreenSearch />
    </>
  );
};

export default CustomApp;

const FullscreenSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery(""); // Clear search query when closing search
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Perform search logic here (e.g., filter items based on searchQuery)
  };

  const handleClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="relative">
      {/* Search button */}
      <button
        onClick={toggleSearch}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none"
      >
        <HiSearch className="w-6 h-6" />
      </button>

      {/* Fullscreen search overlay */}
      {isSearchOpen && (
        <>
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-black h-[100vh] bg-opacity-50 flex justify-center items-center z-[-1]"
          ></div>
          <div className="bg-white p-4 rounded-lg shadow-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {/* Search input */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none "
            />

            {/* Close button */}
            <button
              onClick={toggleSearch}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
