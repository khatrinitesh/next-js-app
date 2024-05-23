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
    <ul>
        {items.map((val,index) => {
            return(
                <Card key={index} {...val}/>
            )
        })}
    </ul>
    </>
  )
}

export default CustomApp

const Card = ({name,description,role,imgSrc,email}) => (
    <div>
      <div className="card">
        <img src={imgSrc} alt={name} style={{ width: '100%' }} />
        <div className="container">
          <h2>{name}</h2>
          <p className="title">{role}</p>
          <p>{description}</p>
          <p>{email}</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>
  );

  