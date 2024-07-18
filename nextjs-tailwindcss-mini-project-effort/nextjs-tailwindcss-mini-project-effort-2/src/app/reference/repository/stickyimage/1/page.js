"use client"
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

    // Assuming you have an array of data
  const data = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      description: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'example@example.com',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      name: 'Mike Ross',
      role: 'Art Director',
      description: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'example@example.com',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      name: 'John Doe',
      role: 'Designer',
      description: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'example@example.com',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
  ];

  const [items,setItems] = useState(data)

  return (
    <>
        <Sticky data={items}/>
    </>
  )
}

export default CustomApp

const Sticky = ({data}) => (
    <>
     {data.map((val,index) => {
        return(
            <div key={index} className='sticky-image-container'>
                <img src={val.imgSrc} alt={`Image ${index + 1}`}/>
                {/* {other data related components can be added here} */}
            </div>
        )
     })}
    </>
  );

  