import React from 'react';
import Banner from './components/Banner';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='mainContent'>
      <Banner bannerStyle='bg-[orange]' bannerTitle="404 Page not found" bannerDesc="Anim ad voluptate adipisicing nulla cillum excepteur laborum."/>
      <Link href="/">Go Back</Link>
    </div>
  )
}

export default NotFound
