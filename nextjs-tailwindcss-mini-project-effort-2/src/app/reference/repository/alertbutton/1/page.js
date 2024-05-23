"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {
     // State to track whether each alert is open or closed
  const [alerts, setAlerts] = useState({
    'style-a': true,
    'style-b': true,
    'style-c': true,
    'style-d': true,
  });

   // Function to handle close button click
  const handleClose = (style) => {
    setAlerts((prevAlerts) => ({
        ...prevAlerts,
        [style]:false,
    }));
  }

  return (
    <>
      <div className="container">
        {Object.keys(alerts).map((style) => (
          alerts[style] && (
            <div className={`alert ${style}`} key={style}>
              <p>
                <strong className="status success">Alert!</strong>
                Indicates a successful or positive action.
              </p>
              <span className="closebtn" onClick={() => handleClose(style)}>
                &times;
              </span>
            </div>
          )
        ))}
      </div>
    </>
  );
};
export default CustomApp;
