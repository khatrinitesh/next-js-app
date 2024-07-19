import React from 'react';
// import "./style.css";

const Example = ({ imageUrl, altText }) => {
    
  return (
    <>
    <div className="border border-gray-200 rounded overflow-hidden">
      <img src={imageUrl} alt={altText} className="w-full" />
    </div>
    </>
  );
};

export default Example;
