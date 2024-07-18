"use client";

import React from 'react';
import "./style.css";

const CustomApp = () => {

    const images = [
        { src: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 1' },
        { src: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 3' },
      ];

  return (
    <>
      <SideBySide images={images}/>
    </>
  );
};

export default CustomApp;

const SideBySide = ({images}) => {
    return(
        <>
         {images.map((val,index) => {
            const {img,alt} = val
            return(
                <>
                 <img key={index} src={img} alt={alt}/>
                </>
            )
         })}
        </>
    )
}