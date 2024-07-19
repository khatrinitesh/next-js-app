import React, { useState,useEffect } from "react";
// import "./style.css";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Example = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          {/* Add more slides as needed */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default Example;
