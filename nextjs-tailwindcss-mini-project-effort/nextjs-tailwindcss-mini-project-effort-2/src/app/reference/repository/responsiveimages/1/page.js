import React from 'react';
import './style.css';

const CustomApp = () => {

    const imageData = [
        { url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', alt: 'Image 1', caption: 'Description for Image 1' },
        { url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', alt: 'Image 2', caption: 'Description for Image 2' },
        // Add more image data as needed
      ];

  return (
    <>
      <ImageGallery imageData={imageData} />
    </>
  )
}

export default CustomApp

const ImageGallery = ({ imageData }) => {
    return (
      <div className="image-gallery">
        {imageData.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image.url}
              alt={image.alt}
              className="responsive-image"
            />
            <p className="image-caption">{image.caption}</p>
          </div>
        ))}
      </div>
    );
  };
