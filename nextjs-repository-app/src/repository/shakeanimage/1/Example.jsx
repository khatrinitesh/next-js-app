import React, { useState } from "react";
import './style.css';

const Example = () => {
    const [shaking, setShaking] = useState(false);

    const handleClick = () => {
        setShaking(true);
        // Reset shaking after the animation duration (0.5s)
        setTimeout(() => {
            setShaking(false)
        },1000)
      };
   
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
        alt="Shake Image"
        className={shaking ? "shake-animation" : ""}
        onClick={handleClick}
      />
    </div>
    </>
  )
};

export default Example;
