"use client"
import React, { useState ,useEffect } from 'react';
import './style.css';

const Tabbed = () => {
    useEffect(() => {
        // Set the initial display for the default tab
        document.getElementById("Tab1").style.display = "block";
        document.getElementsByClassName("tablinks")[0].classList.add("active");
      }, []); // Empty dependency array ensures this effect runs only once after the initial render
    
      const openTab = (tabName) => {
        // Hide all tab contents
        document.querySelectorAll('.tabcontent').forEach(tabcontent => {
          tabcontent.style.display = "none";
        });
    
        // Remove "active" class from all tab links
        document.querySelectorAll('.tablinks').forEach(tablink => {
          tablink.classList.remove("active");
        });
    
        // Show the current tab and add "active" class to the button that opened the tab
        const currentTab = document.getElementById(tabName);
        if (currentTab) {
          currentTab.style.display = "block";
          document.querySelector(`.tablinks[data-tab="${tabName}"]`).classList.add("active");
        }
      };

  return (
    <>
     {/* Assuming you have tab buttons with class "tablinks" and corresponding tab contents with class "tabcontent" */}
     <button onClick={() => openTab('Tab1')} className="tablinks" data-tab="Tab1">
        Tab 1
      </button>
      <button onClick={() => openTab('Tab2')} className="tablinks" data-tab="Tab2">
        Tab 2
      </button>

      {/* Corresponding tab content elements */}
      <div id="Tab1" className="tabcontent">
        Content for Tab 1
      </div>
      <div id="Tab2" className="tabcontent">
        Content for Tab 2
      </div>
      {/* Add more tab contents as needed */}
    </>
  )
}

export default Tabbed
