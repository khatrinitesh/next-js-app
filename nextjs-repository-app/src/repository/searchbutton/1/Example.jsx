import React, { useState } from "react";

const Example = ({onClick }) => {
  
  return (
    <>
      <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
    >
      Search
    </button>
    </>
  );
};

export default Example;
