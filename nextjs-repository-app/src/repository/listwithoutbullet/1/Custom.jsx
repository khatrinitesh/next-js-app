import React from 'react';
import './style.css';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];


const CustomApp = () => {
  return (
    <>
        <h1>List Without Bullets Example</h1>
        <ListWithoutBullets items={items} />
    </>
  )
}

export default CustomApp

const ListWithoutBullets = ({ items }) => {
    return (
      <ul className="list-without-bullets">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    );
  };