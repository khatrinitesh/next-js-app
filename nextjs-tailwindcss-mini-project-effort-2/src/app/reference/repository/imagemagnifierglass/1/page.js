"use client";
import React,{useState } from 'react'

const CustomApp = () => {

    const imageUrl = 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600'; 
  return (
    <>
      <ImageMagnifier width={"200px"}
        src={imageUrl}/>
    </>
  )
}

export default CustomApp

function ImageMagnifier({
    src,
    width,
    height,
    magnifierHeight = 100,
    magnifieWidth = 100,
    zoomLevel = 1.5
  }) {
    // HOOKS EFFECT
    const [xy, setXY] = useState([0, 0]);
    const [imgSize, setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
  
    // MOUSE ENTER
    const handleMouseEnter = (e) => {
      const elem = e.currentTarget;
      const { width, height } = elem.getBoundingClientRect();
      setSize([width, height]);
      setShowMagnifier(true);
    };
  
    // MOUSE MOVE
    const handleMouseMove = (e) => {
      const elem = e.currentTarget;
      const { top, left } = elem.getBoundingClientRect();
  
      const x = e.pageX - left - window.pageXOffset;
      const y = e.pageY - top - window.pageYOffset;
      setXY([x, y]);
    };
  
    // MOUSE LEAVE
    const handleMouseLeave = () => {
      setShowMagnifier(false);
    };
  
    return (
      <div
        style={{
          position: "relative",
          height: height,
          width: width
        }}
      >
        <img
          src={src}
          style={{ height: height, width: width }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          alt={"img"}
        />
  
        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",
            pointerEvents: "none",
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            top: `${xy[1] - magnifierHeight / 2}px`,
            left: `${xy[0] - magnifieWidth / 2}px`,
            opacity: "1",
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgSize[0] * zoomLevel}px ${
              imgSize[1] * zoomLevel
            }px`,
            backgroundPositionX: `${-xy[0] * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-xy[1] * zoomLevel + magnifierHeight / 2}px`
          }}
        ></div>
      </div>
    );
  }