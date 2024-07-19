import React, { useState, useEffect } from "react";
import "./style.css";




const Example = ({speed }) => {
    // Calculate rotation angle for the needle
  const rotation = (speed / 220) * 180 - 90;
  
  return (
    <>
        <div className="speed-meter">
      <svg className="meter" viewBox="0 0 100 100">
        {/* Meter background */}
        <circle cx="50" cy="50" r="45" />
        {/* Meter dial */}
        <circle cx="50" cy="50" r="40" className="dial" />
        {/* Meter needle */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          className="needle"
          transform={`rotate(${rotation} 50 50)`}
        />
        {/* Meter label */}
        <text x="50" y="90" textAnchor="middle" className="label">
          {speed} km/h
        </text>
      </svg>
    </div>

    </>
  );
};

export default Example;
