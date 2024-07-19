import React from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
    <Wallpaper/>
    </>
  )
};

export default CustomApp;


const Wallpaper =() => {
    return (
      <>
        <div className="cartoon">
          <div className="chin"></div>
          <div className="chin-top b"></div>
          <div className="lip-bottom"></div>
          <div className="lip-top"></div>
          <div className="lip-top-top f"></div>
          <div className="nose-tip"></div>
          <div className="nose s"></div>
          <div className="eye-line"></div>
          <div className="forehead"></div>
          <div className="neck"></div>
          <div className="shadow"></div>
        </div>

        <a
          id="youtube"
          href="https://www.youtube.com/watch?v=geQdX9MBZ6M"
          target="_blank"
        >
          <span>See how this video was made</span>
        </a>
      </>
    );
}