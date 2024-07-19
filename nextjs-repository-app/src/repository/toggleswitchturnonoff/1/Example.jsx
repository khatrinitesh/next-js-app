import React, { useState } from "react";
// import "./style.css";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleSwitch}
          id="toggle"
        />
        <label
          htmlFor="toggle"
          className={`relative w-12 h-6 rounded-full cursor-pointer ${
            isChecked ? "bg-blue-400" : "bg-gray-300"
          }`}
        >
          <span
            className={`transition-all duration-500 block absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md ${
              isChecked ? "transform translate-x-full left-3" : ""
            }`}
          ></span>
        </label>
        <span className="ml-2">{isChecked ? "TURN OFF" : "TURN ON"}</span>
      </div>
    </>
  );
};

export default Example;
