"use client";
import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import happy from './styles.module.css';

const CustomApp = () => {
  return (
    <>
    <nav className={happy.navbar}>
      <Link href="/" className={happy.navLink}>
          <FaHome className={happy.icon} />
          Home
      </Link>
      <Link href="/about" className={happy.navLink}>
          <FaInfoCircle className={happy.icon} />
          About
      </Link>
      <Link href="/contact" className={happy.navLink}>
          <FaEnvelope className={happy.icon} />
          Contact
      </Link>
    </nav>
    </>
  )
}

export default CustomApp
