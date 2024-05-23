"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {

    const data =[
        {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',maxLength:50},
        {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',maxLength:20},
        {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',maxLength:30},
    ]

    const [item,setItem] = useState(data)
    

  return (
    <>
    {item.map((val,index) => {
        const {text,maxLength} = val
        return(
            <>
             <ReadMoreLess key={index} text={text} maxLength={maxLength}/>
             <br />
            </>
        )
    })}
    </>
  );
};
export default CustomApp;

const ReadMoreLess = ({text,maxLength}) => {
    const [isTruncated,setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated)
    }

      // Check if 'text' is defined before using 'slice'
  const truncatedText = text ? `${text.slice(0, maxLength)}...` : '';
    return(
        <>
        {isTruncated ? truncatedText : text}
        <span onClick={toggleTruncate} className="read-more-link font-bold cursor-pointer">
            {isTruncated ? 'read more' : 'read less'}
        </span>
        </>
    )
}
