"use client";

import React, { useState } from "react";
import {FaYoutube,FaLinkedinIn } from 'react-icons/fa';
import "./style.css";

const CustomApp = () => {

    const data = [
        {icon:<FaYoutube/>,link:'https://www.youtube.com/',textSM:'YouTube'},
        {icon:<FaLinkedinIn />,link:'https://www.linkedin.com/',textSM:'Linkedin'},
    ]

  return (
    <>
    {data.map((val,index) => {
        const {icon,link,textSM} = val
        return(
            <>
                <SocialMediaButton key={index} icon={icon} link={link} textSM={textSM}/>
            </>
        )
    })}
    </>
  );
};
export default CustomApp;

const SocialMediaButton = ({ icon, link,textSM }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="social-media-button">
        <span className="icon">{icon}</span>
        {textSM}
      </a>
    );
  };

