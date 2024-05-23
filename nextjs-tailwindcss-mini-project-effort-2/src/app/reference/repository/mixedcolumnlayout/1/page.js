'use client';

import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
    const items = [
        { type: 'text', content: 'Text Content 1' },
        { type: 'image', src: 'https://placekitten.com/200/300', alt: 'Kitten' },
        { type: 'text', content: 'Text Content 2' },
        { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Rick Astley - Never Gonna Give You Up' },
        { type: 'image', src: 'https://placekitten.com/250/250', alt: 'Kitten' },
      ];

      const [data,setData] = useState(items)

 
    
  return (
    <>
     <div className="mixed-layout">
        <div className='column'>
            {data.filter((item) => item.type === 'text').map((item,index) => {
                return(
                    <div key={index}>
                        <h2>{item.content}</h2>
                    </div>
                )
            })}
        </div>
        <div className='column'>
            {data.filter((item) => item.type === 'image').map((item,index) => {
                return(
                    <>
                    <img key={index} src={item.src} alt={item.alt}/></>
                )
            })}
        </div>
        <div className='column'>
            {data.filter((item) => item.type === 'video').map((item,index) => {
                return(
                    <>
                    <iframe key={index} title={item.title} src={item.src}></iframe>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default CustomApp