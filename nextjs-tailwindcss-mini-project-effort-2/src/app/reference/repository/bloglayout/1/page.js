'use client';

import React, { useState } from 'react';

const CustomApp = () => {
    const blogPosts = [
        {
          title: 'React Basics',
          content: 'This is a blog post about the basics of React.',
          date: 'February 24, 2024',
        },
        {
          title: 'State and Props',
          content: 'Learn how to manage state and props in React applications.',
          date: 'February 25, 2024',
        },
      ];
    const [data,setData] = useState(blogPosts)


    const handleDelete = (index) => {
        const newData = [...data]
        newData.splice(index,1)
        setData(newData)
    }
    
  return (
    <>
       {data.map((val,index) => {
        return(
            <BlogPost key={index} {...val} btnDel={() => handleDelete(index)}/>
        )
       })}
    </>
  )
}

export default CustomApp

const BlogPost = ({id,title,content,date,btnDel}) => {

    
    return(
        <>
         <div className='blogpost' style={{color:'red',marginBottom:'10px',paddingBottom:'10px',borderBottom:'1px solid red'}}>
            <h3>{title}</h3>
            <p>{content}</p>
            <span className='date'>{date}</span>
            <button onClick={btnDel}>&times;</button>
         </div>
        </>
    )
}
