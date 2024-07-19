import React from 'react';
import './style.css';

const PillBtns = ({text,color,onClick}) => {
  return (
    <>
        <button onClick={onClick} className={`${color} pill-button`}>{text}</button>
    </>
  )
}

export default PillBtns