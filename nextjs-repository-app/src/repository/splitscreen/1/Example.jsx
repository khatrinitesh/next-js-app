import React  from "react";
// import "./style.css";

const Example = () => {
  return (
    <>
    <div className="flex">
      <LeftSection />
      <RightSection />
    </div>
    </>
  );
};

export default Example;

const LeftSection = () => {
    return (
      <div className="w-1/2 bg-gray-300 h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">Left Section</h1>
      </div>
    );
  };

  
  const RightSection = () => {
    return (
      <div className="w-1/2 bg-gray-500 h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Right Section</h1>
      </div>
    );
  };
