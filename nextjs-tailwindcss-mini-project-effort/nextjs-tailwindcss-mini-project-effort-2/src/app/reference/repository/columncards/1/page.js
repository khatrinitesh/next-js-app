'use client';

import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
    const items = [
        {
          id: 1,
          title: 'Card 1',
          content: 'This is the content for Card 1.',
          column: 'Column A',
        },
        {
          id: 2,
          title: 'Card 2',
          content: 'This is the content for Card 2.',
          column: 'Column B',
        },
        {
          id: 3,
          title: 'Card 3',
          content: 'This is the content for Card 3.',
          column: 'Column C',
        },
        // Add more data as needed
      ];

      const [data,setData] = useState(items)

      const btnDel = (index) => {
        const newData = [...data]
        newData.splice(index,1)
        setData(newData)
      }
 
    
  return (
    <>
     <div className="card-container">
       {data.map((val,index) => {
        const {title,content,column}=  val;
        return(
            <div key={index} className="card">
                <h3>{title}</h3>
                <p>{content}</p>
                <p className="column">{column}</p>
                <button onClick={() => btnDel(index)}>&times;</button>
            </div>
        )
       })}
       </div>
    </>
  )
}

export default CustomApp