import React from "react";
import PillNavg from './PillNavigation';

const CustomApp = () => {
  const [activeItem, setActiveItem] = React.useState(1);

  const items = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Services" },
    { id: 4, text: "Contact" },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <>
     <PillNavg items={items} activeItem={activeItem} onItemClick={handleItemClick}/>
    </>
  )
};

export default CustomApp;

