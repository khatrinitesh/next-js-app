"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {
  

  return (
    <>
      <BlurBackground/>
    </>
  );
};

export default CustomApp;

const BlurBackground = () => {
    return (
      <div className="blur-container">
        <div className="background-image"></div>
        <div className="content">
          <h1>Your Content Here</h1>
          <p>This is some sample text.</p>
        </div>
      </div>
    );
  };

  


