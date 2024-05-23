"use client"
import React  from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
  const pathname = usePathname();
  return (
    <>
     <ul className="flex items-center w-full">
        <li className="group relative">
          <Link
            href="/"
            className={`relative z-30 block px-2 font-poppinsSB text-lg font-medium dark:text-white text-primaryD transition-colors group-hover:text-defaultgreen dark:group-hover:text-secondaryL ${pathname === '/' ? 'active' : ''}`}
          >
            Intro
          </Link>
          </li>
          <li className="group relative">
            <Link
              href="/blog"
              className={`relative z-30 block px-2 font-poppinsSB text-lg font-medium dark:text-white text-primaryD transition-colors group-hover:text-defaultgreen dark:group-hover:text-secondaryL ${pathname === '/blog' ? 'active' : ''}`}
            >
              Blog
            </Link>
          </li>
          <li className="group relative">
          <Link
              href="/product"
              className={`relative z-30 block px-2 font-poppinsSB text-lg font-medium dark:text-white text-primaryD transition-colors group-hover:text-defaultgreen dark:group-hover:text-secondaryL ${pathname === '/product' ? 'active' : ''}`}
            >
              Product
            </Link>
          </li>
          <li className="group relative">
          <Link
            href="/uses"
            className={`relative z-30 block px-2 font-poppinsSB text-lg font-medium dark:text-white text-primaryD transition-colors group-hover:text-defaultgreen dark:group-hover:text-secondaryL ${pathname === '/uses' ? 'active' : ''}`}
          >
            Uses
          </Link>
          </li>
          <li className="group relative">
          <Link
            href="/contact"
            className={`relative z-30 block px-2 font-poppinsSB text-lg font-medium dark:text-white text-primaryD transition-colors group-hover:text-defaultgreen dark:group-hover:text-secondaryL ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </li>
     </ul>
    </>
  )
}

export default Nav