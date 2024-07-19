import React, { useState,useEffect } from "react";
// import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

const Example = () => {
    

  return (
    <>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div>
            <img src="image1.jpg" alt="Slide 1" />
            <audio controls>
              <source src="audio1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="image2.jpg" alt="Slide 2" />
            <audio controls>
              <source src="audio2.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </>
  );
};

export default Example;
