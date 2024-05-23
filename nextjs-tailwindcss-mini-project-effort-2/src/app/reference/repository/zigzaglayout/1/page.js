'use client';

import React, { useState } from 'react';

const CustomApp = () => {
    const items = [
        {
          title: 'Item 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'Item 2',
          content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Item 3',
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        // Add more items as needed
      ];

      const [data,setData] = useState(items)

      const btnDel = (index) => {
        const newData = [...data]
        newData.splice(index,1)
        setData(newData)
      }
 
    
  return (
    <>
       {data.map((val,index) => {
        const {title,content}=  val;
        return(
            <div key={index}>
                <h3>{title}</h3>
                <p>{content}</p>
                <button onClick={() => btnDel(index)}>&times;</button>
            </div>
        )
       })}
    </>
  )
}

export default CustomApp