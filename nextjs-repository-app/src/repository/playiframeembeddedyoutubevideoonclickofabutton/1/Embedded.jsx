import React, { useState } from 'react';

const EmbeddedYouTube = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!showVideo ? (
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Play Video
        </button>
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/87i0pejrULw?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default EmbeddedYouTube;
