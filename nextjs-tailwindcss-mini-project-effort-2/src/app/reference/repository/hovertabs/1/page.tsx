"use client"
import React, { useState ,useEffect } from 'react';
import './style.css';

const Tabbed = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabMouseEnter = (index) => {
      setActiveTab(index);
    };
  
    const handleTabMouseLeave = () => {
      setActiveTab(null);
    };

  return (
    <>
       <ul id="tabs-nav">
        <li
          onMouseEnter={() => handleTabMouseEnter(0)}
          onMouseLeave={handleTabMouseLeave}
          className={`tablinks ${activeTab === 0 ? 'active' : ''}`}
        >
          <a href="#tab1">Tab 1</a>
        </li>
        <liD:\Nitesh\practical\reference-upskills\js-framework\next.js\nextjs-mini-project-effort\src\app\reference\repository\splitnavigation\1
          onMouseEnter={() => handleTabMouseEnter(1)}
          onMouseLeave={handleTabMouseLeave}
          className={`tablinks ${activeTab === 1 ? 'active' : ''}`}
        >
          <a href="#tab2">Tab 2</a>
        </liD:>
        {/* Add more tab links as needed */}
      </ul>

      <div className="tab-content">
        <div id="tab1" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
          <h2>Tab 1 Content</h2>
          <p>This is the content for Tab 1.</p>
        </div>
        <div id="tab2" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
          <h2>Tab 2 Content</h2>
          <p>This is the content for Tab 2.</p>
        </div>
        {/* Add more tab contents as needed */}
      </div>
    </>
  )
}

export default Tabbed
