import React, { useState, useEffect } from "react";
// import "./style.css";

const Example = () => {
  return (
    <>
     <div className="flex justify-center items-center h-screen">
      <div className="w-64 h-64 bg-gray-300 flex justify-center items-center transition-transform duration-300 transform hover:scale-110 cursor-pointer">
        <span className="text-lg font-bold">Hover me</span>
      </div>
    </div>
    </>
  );
};

export default Example;
