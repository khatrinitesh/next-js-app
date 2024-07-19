import React from "react";
// import "./style.css";

const Example = ({ text, onClick }) => {
  return (
    <>
     <button 
      className="text-blue-500 hover:text-blue-700 focus:outline-none"
      onClick={onClick}
    >
      {text}
    </button>
    </>
  );
};

export default Example;
