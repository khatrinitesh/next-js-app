import React, { useRef, useState } from 'react';

const CustomApp = () => {
  return (
    <>
      <ImageComparisonSlider beforeImage="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" afterImage="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"/>
    </>
  )
}

export default CustomApp

const ImageComparisonSlider = ({ beforeImage, afterImage }) => {
    const sliderRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(50);
  
    const handleMouseMove = (e) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPosition(newPosition);
      }
    };
  
    return (
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Before Image */}
          <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {/* After Image */}
          <img src={afterImage} alt="After" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute inset-y-0 left-0 w-full h-full cursor-pointer"
          ref={sliderRef}
          onMouseMove={handleMouseMove}
        >
          <div
            className="absolute left-0 top-0 bg-white w-px h-full"
            style={{ left: `${sliderPosition}%` }}
          ></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow cursor-pointer -ml-2"></div>
        </div>
      </div>
    );
  };
  


