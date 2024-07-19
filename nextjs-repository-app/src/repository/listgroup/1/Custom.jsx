import React from 'react';
import './style.css';

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Add more items as needed
  ];

const CustomApp = () => {
  return (
    <>
        <ListGrp items={items}/>
    </>
  )
}

export default CustomApp

const ListGrp = ({items}) => {
    return(
        <>
        <ul>
         {items.map((item) => (
            <li key={item.id}>{item.name}</li>
         ))}
         </ul>
        </>
    )
}