import React from "react";
import Example from "./Example";

const CustomApp = () => {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4">Tooltip Example</h1>
          <div className="flex justify-between">
            <Example text="Top tooltip" position="top">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Top
              </button>
            </Example>
            <Example text="Right tooltip" position="right">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Right
              </button>
            </Example>
            <Example text="Bottom tooltip" position="bottom">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Bottom
              </button>
            </Example>
            <Example text="Left tooltip" position="left">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Left
              </button>
            </Example>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomApp;
