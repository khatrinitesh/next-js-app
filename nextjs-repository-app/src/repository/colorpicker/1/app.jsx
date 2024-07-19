import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <ColorPicker/>
    </>
  )
};

export default CustomApp;

const ColorPicker = () => {
  const [selectcolor, setSelectcolor] = useState("#fff");

  const handleToggle = (color) => {
    setSelectcolor(color);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div
            className="w-16 h-16 rounded-full mb-4"
            style={{ backgroundColor: selectcolor }}
          ></div>
          <input type="color" value={selectcolor} onChange={(e) => handleToggle(e.target.value)} className="mb-4" />
          <div className="flex justify-between w-32">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => handleToggle("#3498db")}>
                blue
            </button>
            <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleToggle('#2ecc71')}
          >
            Green
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleToggle('#e74c3c')}
          >
            Red
          </button>
          </div>
        </div>
      </div>
    </>
  );
};
