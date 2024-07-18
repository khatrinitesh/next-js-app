"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';


const CustomApp = () => {

    const testimonialsData = [
        {id:1,name:'name1',position:'fe developer',text:'test1',photo:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"},
        {id:2,name:'name2',position:'ui developer',text:'test2',photo:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"},
        {id:3,name:'name3',position:'react developer',text:'test3',photo:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"},
    ]
  
    
  return (
    <>
    <TestimonialCarousel testimonials={testimonialsData}/>
    </>
  )
}

export default CustomApp

const TestimonialCarousel = ({ testimonials }) => {
    const settings = {
      centerMode: true,
      centerPadding: '40px',
      dots: true,
      slidesToShow: 3,
      infinite: true,
      arrows: false,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <Slider {...settings} className="testimonial-reel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            {/* Your testimonial content here */}
            <p>{testimonial.text}</p>
            <div className="user">
              <img src={testimonial.photo} alt="user" className="user-image" />
              <div className="user-details">
                <h4 className="username">{testimonial.name}</h4>
                <p className="role">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };