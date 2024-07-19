import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <BlackWhiteImage
        src="https://images.unsplash.com/photo-1500423079914-b65af272b8db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQ0NTA3fHxlbnwwfHx8fHw%3D"
        alt="wallpaper"
      />
    </>
  );
};

export default CustomApp;

const BlackWhiteImage = ({ src, alt }) => {
    const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

    // Function to toggle between color and black & white
    const toggleColorMode = () => {
      setIsBlackAndWhite(!isBlackAndWhite);
    };

  // Function to convert an image to grayscale
  const toGrayscale = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous"; // Ensure CORS compatibility
    img.src = src;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const brightness = (3 * data[i] + 6 * data[i + 1] + data[i + 2]) / 10;
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
      }

      ctx.putImageData(imageData, 0, 0);

      // Convert canvas to base64 URL
      const grayscaleURL = canvas.toDataURL();
      // Set grayscale image URL
      setGrayscaleImageURL(grayscaleURL);
    };
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600"
          onClick={toggleColorMode}
        >
          {isBlackAndWhite ? "Show Color" : "Show Black & White"}
        </button>
        <img
          src={isBlackAndWhite ? grayscaleImageURL : src}
          alt={alt}
          className="ml-4 border border-gray-400 rounded"
          onLoad={toGrayscale} // Convert image to grayscale when loaded
        />
      </div>
    </>
  );
};
