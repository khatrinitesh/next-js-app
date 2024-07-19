import React from 'react';
import './style.css';
import { FaTwitter,FaPlane,FaYoutube } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
     <div className="wrapper">
      <h1>
        coming soon<span className="dot">.</span>
      </h1>
      <p>Put some text here.</p>
      <div className="icons flex">
        <a href="/">
          <FaTwitter/>
        </a>
        <a href="/">
        <FaYoutube />
        </a>
        <a href="/">
        <FaPlane />
        </a>
      </div>
    </div> 
    </>
  )
}

export default CustomApp
