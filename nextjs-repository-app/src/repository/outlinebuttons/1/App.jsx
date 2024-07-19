import React from 'react';
import OutlineBtns from './OutlineBtns';

const CustomApp = () => {
    const handleClick = () => {
        console.log('button clicked');
    }
  return (
    <div>
        <OutlineBtns onClick={handleClick}>Click me</OutlineBtns>
    </div>
  )
}

export default CustomApp