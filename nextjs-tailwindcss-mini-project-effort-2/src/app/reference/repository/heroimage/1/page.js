"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {
  const data = [
    {
        id:1,title:'hello title',src:"https://images.unsplash.com/photo-1500423079914-b65af272b8db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQ0NTA3fHxlbnwwfHx8fHw%3D",desc:'Proident adipisicing incididunt reprehenderit adipisicing consectetur aliquip excepteur dolore adipisicing.',alt:'hello title 1'
    },
    {
        id:2,title:'hello title',src:"https://images.unsplash.com/photo-1500423079914-b65af272b8db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQ0NTA3fHxlbnwwfHx8fHw%3D",desc:'Proident adipisicing incididunt reprehenderit adipisicing consectetur aliquip excepteur dolore adipisicing.',alt:'hello title 2'
    },
    {
        id:3,title:'hello title',src:"https://images.unsplash.com/photo-1500423079914-b65af272b8db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQ0NTA3fHxlbnwwfHx8fHw%3D",desc:'Proident adipisicing incididunt reprehenderit adipisicing consectetur aliquip excepteur dolore adipisicing.',alt:'hello title 3'
    },
  ]

  const [items,setItems] = useState(data);

  const handleDel = (index) => {
     // Create a copy of the items array
    const updatedData = [...items]
    // Remove the item at the specified index
    updatedData.splice(index,1)
    // Update the state with the new array
    setItems(updatedData)
  }

  return (
    <>
      {
        items.map((val,index) => {
            const {title,desc,src,alt} = val
            return(
                <>
                <HeroSection key={index} title={title} desc={desc} src={src} alt={alt} onDel={() => handleDel(index)}/>
                </>
            )
        })
      }
    </>
  );
};

export default CustomApp;

const HeroSection = ({src,title,desc,alt,herostyling,onDel}) => {
    return (
      <div className="hero-container">
        <img
          src={src} // Replace with your actual image URL
          alt={alt}
          className="hero-image"
        />
        <div className={`${herostyling} hero-content`}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <button>Learn More</button>
          <button onClick={onDel}>Delete</button>
        </div>
      </div>
    );
  };

  


