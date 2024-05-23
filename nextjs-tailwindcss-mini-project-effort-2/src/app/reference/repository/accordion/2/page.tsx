"use client";
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <Accordion/>
    </>
  )
}

export default CustomApp


const Accordion = () => {
    const [activeIndex,setActiveIndex] = useState([])
    const [accordionData,setAccordionData] = useState([])

    const baseurl = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(baseurl)
            if(!response.ok){
                throw new Error(`Http error status :${response.status}`)
            }
            const result = await response.json();
            setAccordionData(result)
        }
        fetchData()
    },[]);
    

      const handleToggle = (index) => {
        if(activeIndex === index){
            setActiveIndex(null);
        }
        else{
            setActiveIndex(index);
        }
      }

    return(
        <>
            <div className='accordion'>
                {accordionData.map((item,index) => {
                    return(
                        <div key={index} className={`set ${activeIndex === index ? 'active' : ''}`}>
                             <a onClick={() => handleToggle(index)}>
                                {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                {item.title}
                            </a>
                            <div className="content" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                                {item.body}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
