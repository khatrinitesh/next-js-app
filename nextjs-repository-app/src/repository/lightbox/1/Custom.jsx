import React, { useState } from 'react';
import './style.css';

const images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg',
    'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg',
    // Add more image URLs as needed
  ];

const Custom = () => {
  return (
    <>
    <h1>Lightbox Gallery Example</h1>
      <LightboxGallery />
    </>
  )
}

export default Custom

const LightboxGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const openLightbox = (image) => {
      setSelectedImage(image);
      setLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setLightboxOpen(false);
    };
  
    return (
      <div className="gallery-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
            onClick={() => openLightbox(image)}
          />
        ))}
  
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img src={selectedImage} alt="Selected" className="lightbox-image" />
              <button className="close-button" onClick={closeLightbox}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };