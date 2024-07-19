import React, { useState } from "react";

const Example = ({ buttons }) => {
  return (
    <>
      <div className="flex flex-col">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={button.onClick}
          >
            {button.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Example;
