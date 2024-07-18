"use client"
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

    // Assuming you have an array of data
  const data = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      description: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'example@example.com',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      name: 'Mike Ross',
      role: 'Art Director',
      description: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'example@example.com',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      name: 'John Doe',
      role: 'Designer',
      description: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'example@example.com',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
  ];

  const [items,setItems] = useState(data)

  return (
    <>
        <ShakingImage images={items}/>
    </>
  )
}

export default CustomApp

const ShakingImage  = ({ images }) => {
    const [isShaking, setShaking] = useState(false);

    const handleImageClick = () => {
        setShaking(true);
    
        // Reset the shaking state after the animation duration (e.g., 1 second)
        setTimeout(() => {
          setShaking(false);
        }, 1000);
    };

    return (
      <div>
        {images.map((image, index) => (
          <>
            <img key={index} src={image.imgSrc} alt={`Image ${index}`} className={`image ${isShaking ? 'shake' : ''}`} onClick={handleImageClick} />
          </>
        ))}
      </div>
    );
  };

  