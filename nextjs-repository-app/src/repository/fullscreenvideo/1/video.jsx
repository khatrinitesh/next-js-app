// VideoPlayer.js

import React, { useRef } from 'react';
import './style.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} className="video-player" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="fullscreen-button" onClick={toggleFullScreen}>
        Fullscreen
      </button>
    </div>
  );
};

export default VideoPlayer;
