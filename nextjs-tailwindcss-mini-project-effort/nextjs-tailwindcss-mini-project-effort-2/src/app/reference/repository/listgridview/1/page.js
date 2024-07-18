'use client';

import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

  const initialData = [
    { title: 'Item 1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Item 2', content: 'Consectetur adipiscing elit.' },
    { title: 'Item 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  const [data,setData] = useState(initialData);
  const [viewMode,setViewMode] = useState('list');

    const toggleViewMode  =() => {
      setViewMode((prevMode) => prevMode === 'list' ? 'otherMode' : 'list')
    }
    
  return (
    <>
     <button className='p-[10px] bg-blue-100' onClick={toggleViewMode}>Toggle View Mode</button>
     <DataView data={data} viewMode={viewMode}/>
    </>
  )
}

export default CustomApp

const DataView = ({data,viewMode}) => {
    return(
        <>
        <div className={`data-view ${viewMode}`}>
          {data.map((item,index) => {
            return(
              <div key={index} className='data-item'>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            )
          })}
        </div>
        </>
    )
}