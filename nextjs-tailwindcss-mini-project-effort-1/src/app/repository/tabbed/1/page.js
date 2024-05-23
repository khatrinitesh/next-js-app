'use client'
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
    const tabs = [
        { label: 'Tab 1', content: 'Content for Tab 1' },
        { label: 'Tab 2', content: 'Content for Tab 2' },
        { label: 'Tab 3', content: 'Content for Tab 3' },
      ];
  return (
    <div>
      <Tabbed tabs={tabs}/>
    </div>
  )
}

export default CustomApp

const Tabbed = ({tabs}) => {
    const [tabbedActive,setTabbedActive] = useState(0);

    const handleTablClick = (index) => {
        setTabbedActive(index);
    }
    return(
        <>
        <div className='tabbedUI'>
        <div className='tabs'>
         {tabs.map((tab,index) => {
            return(
                <div className={`tabs ${tabbedActive === index ? 'activeTab' : ''}`} key={index} onClick={() => handleTablClick(index)}>{tab.label}</div>
            )
         })}
         </div>
         </div>
         <div className='tabContent'>
            {tabs[tabbedActive].content}
         </div>
        </>
    )
}
