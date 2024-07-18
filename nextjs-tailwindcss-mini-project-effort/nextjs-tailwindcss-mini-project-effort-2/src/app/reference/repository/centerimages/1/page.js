import React from 'react';
import './style.css';

const CustomApp = () => {

    const items = [
        { imageUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', alt: 'Image 1', altText: 'Description for Image 1' },
        { imageUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', alt: 'Image 2', altText: 'Description for Image 2' },
      ];

  return (
    <>
      <YourComponent data={items} />
    </>
  )
}

export default CustomApp

const YourComponent = ({ data }) => {
    return (
      <div>
        {data.map((item, index) => (
          <div key={index} className="image-container">
            <img src={item.imageUrl} alt={item.altText} />
          </div>
        ))}
      </div>
    );
  };