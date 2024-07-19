import React from "react";
import Example from "./Example";

const CustomApp = () => {

    // Use the full URL of the YouTube video
    const videoUrl = "https://www.youtube.com/embed/PlRb4aROhAE?si=jWOKnukMzFNrjTlH";
    
  return (
    <>
      <Example src={videoUrl}/>
    </>
  );
};

export default CustomApp;
