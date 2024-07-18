"use client"
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

    // Assuming you have an array of data
  const data = [
    {
      title: 'Jane Doe',
      category: 'web',
      id: 1,
    //   email: 'example@example.com',
      imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      title: 'Mike Ross',
      category: 'web',
      id: 2,
    //   email: 'example@example.com',
      imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      title: 'John Doe',
      category: 'Designer',
      id: 3,
    //   email: 'example@example.com',
      imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
  ];

  const [items,setItems] = useState(data)
  

  return (
    <>
        {items.map((val,index)=>{
            return(
                <PortfolioGallery key={index} {...val}/>
            )
        })}
    </>
  )
}

export default CustomApp

const PortfolioGallery = ({title,category,id,imgUrl}) => {

    return(
        <div className="portfolio-grid">
            <div key={id} className={`portfolio-item ${category}`}>
                <img src={imgUrl} alt={title}/>
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </div>
    )
}
  