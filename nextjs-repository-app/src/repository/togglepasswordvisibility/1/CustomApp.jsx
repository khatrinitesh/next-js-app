import React from "react";
import Example from "./Example";

const CustomApp = () => {
    
  return (
    <>
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Like/Dislike Toggle Example</h1>
      <Example />
      {/* Other content */}
    </div>
    </>
  );
};

export default CustomApp;
