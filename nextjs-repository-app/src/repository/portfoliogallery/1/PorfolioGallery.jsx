import React, { useState } from 'react';

const PortfolioGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const images = [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      // Add more image URLs
    ];
  
    const openModal = (image) => {
      setSelectedImage(image);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="cursor-pointer"
            onClick={() => openModal(image)}
          />
        ))}
        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
            <button
              className="absolute top-4 right-4 text-white bg-gray-700 px-2 py-1 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default PortfolioGallery;