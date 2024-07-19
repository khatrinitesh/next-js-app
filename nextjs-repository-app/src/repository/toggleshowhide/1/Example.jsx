import React, { useState } from "react";
// import "./style.css";

const Example = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <button onClick={togglePasswordVisibility}>Toggle</button>
      {passwordVisible && <div>NITESH KHATRI</div>}
    </>
  );
};

export default Example;
