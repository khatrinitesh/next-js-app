import React, { useState } from 'react';
import './style.css';

const menuItems = [
    { label: 'Home', submenu: [] },
    {
      label: 'Products',
      submenu: [
        { label: 'Electronics' },
        { label: 'Clothing' },
        { label: 'Books' }
      ]
    },
    {
      label: 'Services',
      submenu: [
        { label: 'Delivery' },
        { label: 'Support' },
        { label: 'Returns' }
      ]
    }
  ];

const CustomApp = () => {
  return (
    <>
      <h1>Mega Menu Example</h1>
      <MegaMenu menuItems={menuItems} /> 
    </>
  )
}

export default CustomApp


const MegaMenu = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
  
    const handleMenuClick = (index) => {
      setIsOpen(true);
      setActiveMenu(index);
    };
  
    const handleSubMenuClose = () => {
      setIsOpen(false);
      setActiveMenu(null);
    };
  
    return (
      <div className="mega-menu">
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item" onMouseEnter={() => handleMenuClick(index)}>
              {item.label}
              {isOpen && activeMenu === index && (
                <div className="sub-menu">
                  {item.submenu.map((subItem, subIndex) => (
                    <div key={subIndex} className="sub-menu-item" onClick={handleSubMenuClose}>
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

