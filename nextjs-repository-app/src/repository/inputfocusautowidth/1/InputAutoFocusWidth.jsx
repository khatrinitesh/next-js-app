// AutoAdjustInput.js

import React, { useRef, useEffect } from 'react';
import './style.css';

const AutoAdjustInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }
  }, []);

  const handleChange = () => {
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }
  };

  return (
    <input
      ref={inputRef}
      className="auto-adjust-input"
      autoFocus
      onChange={handleChange}
    />
  );
};

export default AutoAdjustInput;
