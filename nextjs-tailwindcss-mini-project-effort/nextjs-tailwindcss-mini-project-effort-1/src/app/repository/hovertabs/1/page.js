"use client";
import  { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <Tabs /> 
    </>
  )
}

export default CustomApp

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
  
    const handleTabChange = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  
    return (
      <div className='tabsContainer'>
        <div className='tabHeaders'>
          <TabHeader tabIndex={1} activeTab={activeTab} onClick={handleTabChange}>
            Tab 1
          </TabHeader>
          <TabHeader tabIndex={2} activeTab={activeTab} onClick={handleTabChange}>
            Tab 2
          </TabHeader>
          <TabHeader tabIndex={3} activeTab={activeTab} onClick={handleTabChange}>
            Tab 3
          </TabHeader>
        </div>
        <div className='tabContent'>
          {activeTab === 1 && <div>Content for Tab 1</div>}
          {activeTab === 2 && <div>Content for Tab 2</div>}
          {activeTab === 3 && <div>Content for Tab 3</div>}
        </div>
      </div>
    );
  };

const TabHeader = ({ tabIndex, activeTab, onClick, children }) => {
    const isActive = tabIndex === activeTab;
  
    return (
      <div className={`$'tabHeader} ${isActive ? activeTab : ''}`} onClick={() => onClick(tabIndex)}>
        {children}
      </div>
    );
  };
