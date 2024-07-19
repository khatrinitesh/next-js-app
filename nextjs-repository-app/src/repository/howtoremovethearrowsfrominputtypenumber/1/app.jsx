import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div>
       <input
        className="appearance-none border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
        type="number"
        style={{ '-moz-appearance': 'textfield' }} // For Firefox
        pattern="\d*" // For Firefox
      />
    </div>
  )
}

export default CustomApp
