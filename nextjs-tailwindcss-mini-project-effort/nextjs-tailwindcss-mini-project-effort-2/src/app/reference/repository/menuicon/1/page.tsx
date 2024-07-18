"use client";

import { useState } from 'react';

const CustomApp = () => {
    const [isMenuToggle,setIsMenuToggle] = useState(false);

    const toggleMenu = () => {
        setIsMenuToggle(!isMenuToggle)
    }
  return (
    <div>
      <button onClick={toggleMenu}>Click toggle</button>
      <br />
      {isMenuToggle ? 'yes' : 'no'}
    </div>
  )
}

export default CustomApp
