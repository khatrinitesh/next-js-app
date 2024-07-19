import React, { useState, useEffect } from "react";
// import "./style.css";

const Example = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
          <div className="bg-blue-200 h-20 flex items-center justify-center">Item 1</div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
          <div className="bg-green-200 h-20 flex items-center justify-center">Item 2</div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
          <div className="bg-yellow-200 h-20 flex items-center justify-center">Item 3</div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
          <div className="bg-pink-200 h-20 flex items-center justify-center">Item 4</div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
          <div className="bg-purple-200 h-20 flex items-center justify-center">Item 5</div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
          <div className="bg-orange-200 h-20 flex items-center justify-center">Item 6</div>
        </div>
      </div>
    </>
  );
};

export default Example;
