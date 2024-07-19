import React, { useState } from "react";
// import './style.css';

const Example = ({ url, title }) => {
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="flex justify-center items-center my-4">
        <button
          onClick={shareOnFacebook}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded"
        >
          Share on Facebook
        </button>
        <button
          onClick={shareOnTwitter}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Share on Twitter
        </button>
      </div>
    </>
  );
};

export default Example;
