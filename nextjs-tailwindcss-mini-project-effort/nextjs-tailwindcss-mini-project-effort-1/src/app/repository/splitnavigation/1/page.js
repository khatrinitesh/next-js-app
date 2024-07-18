import React from 'react';
import Link from 'next/link';
import './style.css';

const CustomApp = () => {
  return (
    <>
       <div className='splitNavContainer'>
      <div className='leftNav'>
        <Link href="/">
         Home
        </Link>
      </div>
      <div className='rightNav'>
        <Link href="/about">
         About
        </Link>
        <Link href="/services">
         Services
        </Link>
        <Link href="/contact">
         Contact
        </Link>
      </div>
    </div>
    </>
  )
}

export default CustomApp
