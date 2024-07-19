import React from "react";
import Example from "./Example";

const CustomApp = () => {

    // Assuming you have an array of image URLs
  const imageUrls = [
    'https://via.placeholder.com/640x360',
    'https://via.placeholder.com/640x360',
    'https://via.placeholder.com/640x360',
    // Add more image URLs as needed
  ];
  return (
    <>
     <div className="flex flex-wrap justify-center">
      {imageUrls.map((url, index) => (
        <Example key={index} imageUrl={url} altText={`Image ${index + 1}`} />
      ))}
    </div>
    </>
  );
};

export default CustomApp;
