"use client"
import { useState } from 'react';
import './style.css';
const CustomApp = ({items}) => {
    const {activeIndex,toggleItem} = UseAccordion(null);

  return (
    <div>
      {items.map((item,index) => {
        return(
            <div key={index} className='accordion-item'>
                <div className={`accordion-title ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                    <span className=''>{activeIndex === index ? '-' : '+'}</span>
                    {item.title}</div>
                {activeIndex === index && (<div className='accordion-content'>{item.desc}</div>)}
            </div>
        )
      })}
    </div>
  )
}

export default CustomApp

const UseAccordion = (initialState) => {
    const [activeIndex,setActiveIndex] = useState(initialState);

    const toggleItem = (index) => {
        setActiveIndex((prevIndex) => prevIndex === index ? null : index)
    }
    return {
        activeIndex,
        toggleItem
    }
}
