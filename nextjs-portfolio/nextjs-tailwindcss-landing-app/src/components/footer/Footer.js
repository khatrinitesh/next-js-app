import React from 'react';
import SocialMedia from './socialmedia';

const Footer = () => {
    const currentdate = new Date();
    const currentfullyear = currentdate.getFullYear();
  return (
    <footer className="bg-primaryLight text-textLight dark:bg-primaryDark dark:text-textDark py-[10px]">
       <div className="px-[20px] container mx-auto">
        <div className="md:flex justify-between">
        <p>&copy; {currentfullyear}</p>
        <SocialMedia/>
        </div>
        </div>
    </footer>
  )
}

export default Footer