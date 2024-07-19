import React from 'react';
import PillBtns from './PillBtns';

const CustomApp = () => {

    const handleClick= (text) => {
        console.log(text);
    }
  return (
    <>
    <PillBtns color="primary" text="primary" onClick={() => handleClick('primary')}/>
    <PillBtns color="secondary" text="secondary"  onClick={() => handleClick('secondary')}/>
    <PillBtns color="success" text="success"  onClick={() => handleClick('success')}/>
    <PillBtns color="danger" text="danger"  onClick={() => handleClick('danger')}/>
    </>
  )
}

export default CustomApp