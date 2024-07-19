import React from "react";
import "./style.css";

const PillNavg = ({ items, activeItem, onItemClick }) => {
  return (
    <>
      <nav className="flex space-x-2">
        {items.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2 rounded-full ${
              activeItem === item.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => onItemClick(item.id)}
          >
            {item.text}
          </button>
        ))}
      </nav>
    </>
  );
};

export default PillNavg;
