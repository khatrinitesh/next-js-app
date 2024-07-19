import React from "react";
import Example from "./Example";

const CustomApp = () => {

    const handleclick= () => {
        alert('hi')
    }

  return (
    <>
       <Example text="clicked" onClick={handleclick} />
    </>
  );
};

export default CustomApp;
