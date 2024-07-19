import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {
    const [count,setCount] = useState(0);

    const handleInc = () => {
        setCount((prevC) => prevC + 1)
    }
    const handleDec = () => {
        setCount((prevC) => prevC - 1)
    }
    const handleRes = () => {
        setCount(0)
    }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="qr-code-container">
          <Example btnRes={handleRes} btnInc={handleInc} btnDec={handleDec} count={count}/>
        </div>
      </div>
    </>
  );
};

export default CustomApp;
