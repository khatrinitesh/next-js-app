import React from "react";
import Example from "./Example";

const CustomApp = () => {
    const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
    const posterUrl = "https://w0.peakpx.com/wallpaper/797/488/HD-wallpaper-html5-metal-logo-grunge-programming-language-signs-blue-metal-background-html5-creative-programming-language-html5-logo.jpg";
  
  return (
    <>
     <Example videoUrl={videoUrl} posterUrl={posterUrl} />
    </>
  );
};

export default CustomApp;
