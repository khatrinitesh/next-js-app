'use client'
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
    const tabs = [
        { title: 'Tab 1', content: 'Content for Tab 1' },
        { title: 'Tab 2', content: 'Content for Tab 2' },
        { title: 'Tab 3', content: 'Content for Tab 3' },
      ];
  return (
    <div>
      <HoverTabs tabs={tabs}/>
    </div>
  )
}

export default CustomApp

const HoverTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(2);
  
    return (
      <div>
        <div className='tabs'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div>
          {tabs.map((tab, index) => (
            <div key={index} className={`tabContent ${activeTab === index ? 'active' : ''}`}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };
  


