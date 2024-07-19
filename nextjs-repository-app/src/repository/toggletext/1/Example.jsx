import React, { useState } from "react";
// import "./style.css";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
    <button onClick={toggleSwitch}>Click toggle</button>
      {isChecked ? 'yes' : 'no'}
    </>
  );
};

export default Example;
