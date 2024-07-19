import React, { useState } from "react";
import "./style.css";

const Example = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-4 py-2 bg-transparent border-l focus:outline-none"
        >
          {passwordVisible ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default Example;
