"use client"
import React from 'react';
import './style.css';

const CustomApp = () => {
    const Data = [
        {imageUrl:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',altText:'wallpaper 1'},
        {imageUrl:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',altText:'wallpaper 2'},
        {imageUrl:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',altText:'wallpaper 3'},
        {imageUrl:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',altText:'wallpaper 4'},
        {imageUrl:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',altText:'wallpaper 5'},
    ]
  return (
    <>
    <div className='flex justify-center'>
      {Data.map((val,index) => {
        const {imageUrl,altText} = val
        const isLastItem = index === Data.length - 1;
        return(
            <RoundedImage key={index} imageUrl={imageUrl} altText={altText} styleImg={`mr-[20px] ${isLastItem ? 'mb-0' : ''}`}/>
        )
      })}
      </div>
    </>
  )
}

export default CustomApp

const RoundedImage = ({ imageUrl, altText,styleImg }) => {
    return (
      <img 
        src={imageUrl} 
        alt={altText} 
        className={`rounded-image ${styleImg}`} 
      />
    );
  };