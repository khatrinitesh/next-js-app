import React, { useState ,useRef} from "react";
import './style.css';

const Example = ({ videoUrl, posterUrl }) => {
  const videoWrapperClasses = "max-w-xl mx-auto w-full h-full relative cursor-grab";
  const videoClasses = "w-full";

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className={videoWrapperClasses}>
        <video  ref={videoRef} className={videoClasses} controls poster={posterUrl} onClick={togglePlayPause}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="bg-blue-500 text-white rounded-[3px] px-[10px] py-[5px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      </div>
    </>
  );
};

export default Example;
