"use client"
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

    const [data, setData] = useState([
        {
          title: 'Item 1',
          description: 'Description for Item 1',
          thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
        },
        {
          title: 'Item 2',
          description: 'Description for Item 2',
          thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
        },
      ]);

      const handleDel = (index) => {
        const updatedData = [...data]
        updatedData.splice(index,1)
        setData(updatedData)
      }


  return (
    <>
      <ThumbnailList  data={data} onDel={handleDel} />
    </>
  )
}

export default CustomApp

const ThumbnailList = ({ data,onDel }) => {
    return (
      <div>
        {data.map((item, index) => (
          <Thumbnail key={index} data={item} onDel={() => onDel(index)} />
        ))}
      </div>
    );
  };

  const Thumbnail = ({ data,onDel }) => {
    // Assuming each item in the data array has a 'thumbnail' property
    const { thumbnail, title, description } = data;
  
    return (
      <div className="thumbnail-container">
        <img src={thumbnail} alt={title} />
        <div className="thumbnail-details">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={onDel}>Delete</button>
        </div>
      </div>
    );
  };
  