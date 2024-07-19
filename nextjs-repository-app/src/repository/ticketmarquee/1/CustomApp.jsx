import React from "react";
import Example from "./Example";

const CustomApp = () => {

  return (
    <>
      <div className="flex justify-center">
      <Example>
        <span className="text-blue-500">This is a ticker message. </span>
        <span className="text-red-500">Another ticker message. </span>
        <span className="text-green-500">Yet another ticker message. </span>
      </Example>
      </div>
    </>
  );
};

export default CustomApp;
