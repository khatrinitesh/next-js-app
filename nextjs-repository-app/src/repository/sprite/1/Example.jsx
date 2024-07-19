import React, { useState, useEffect } from "react";
import "./style.css";

const Example = ({ primaryAction, secondaryActions }) => {
  

  return (
    <>
    <div className="sprite-container">
      <div className="sprite cursor-pointer sprite1"></div>
      <div className="sprite cursor-pointer sprite2"></div>
      <div className="sprite cursor-pointer sprite3"></div>
      <div className="sprite cursor-pointer sprite4"></div>
      <div className="sprite cursor-pointer sprite5"></div>
    </div>
    </>
  );
};

export default Example;
