"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Header:React.FC = () => {

    const pathname = usePathname();

  return (
    <header className='bg-black header'>
        <div className="container mx-auto">
            <ul className='flex'>
                <li>
                    <Link className={`text-white font-bold p-[10px] block ${pathname === '/' ? 'border border-white' : 'inactive'}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`text-white font-bold p-[10px] block ${pathname === '/about' ? 'border border-white' : 'inactive'}`} href="/about">About</Link>
                </li>
                <li>
                    <Link className={`text-white font-bold p-[10px] block ${pathname === '/service' ? 'border border-white' : 'inactive'}`} href="/service">Service</Link>
                </li>
                <li>
                    <Link className={`text-white font-bold p-[10px] block ${pathname === '/contact' ? 'border border-white' : 'inactive'}`} href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header