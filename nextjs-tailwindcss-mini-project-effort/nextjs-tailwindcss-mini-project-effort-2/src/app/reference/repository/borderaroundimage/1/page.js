"use client"
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

    const data = [
        { imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' },
        { imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' },
        { imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' },
      ];


  return (
    <>
      <ImageGallery imgUrls={data} />
    </>
  )
}

export default CustomApp

const ImageGallery = ({imgUrls}) => {
    return(
        <div className='image-gallery'>
            {imgUrls.map((image,index) => {
                return(
                    <div className='image-container' key={index}>
                        <img src={image.imgUrl} alt={`Image ${index + 1}`} className='bordered-image'/>
                    </div>
                )
            })}
        </div>
    )
}

  