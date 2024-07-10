"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = ({footer}) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
    const currentDate = new Date();
    const currentFullYear = currentDate.getFullYear();
  return (
    <footer className={`${footer}  text-white p-4 ${isHomePage ? 'bg-blue-500' : 'bg-black'}`}>
        <p>&copy; {currentFullYear}</p>
    </footer>
  )
}

export default Footer