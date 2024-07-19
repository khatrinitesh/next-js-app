import React, { useState, useEffect } from "react";
import "./style.css";

const Example = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, [showSnackbar]);
  
    const handleClick = () => {
      setShowSnackbar(true);
    };
  
  return (
    <>
      <button onClick={handleClick}>Show Snackbar</button>
      <div id="snackbar" className={showSnackbar ? 'show' : ''}>
        Some text some message..
      </div>
    </>
  );
};

export default Example;
