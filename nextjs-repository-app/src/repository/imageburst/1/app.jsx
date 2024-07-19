import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
      <ImgBurst />
    </>
  );
};

export default CustomApp;

const ImgBurst = () => {
  const [burst, setBurst] = useState(false);

  const handleBurst = () => {
    setBurst(true);
    setTimeout(() => setBurst(false),1000) // rest bursst after 1 sec
  };

  return (
    <>
      <div className="image-container">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/309/713/290/color-burst-macos-wallpaper-preview.jpg"
          alt="Bursting Image"
          className={burst ? "burst-image" : ""}
          onClick={handleBurst}
        />
      </div>
    </>
  );
};
