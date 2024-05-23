"use client"

import { useRouter } from 'next/navigation';

const Footer = () => {


    const getFullYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Copyright {getFullYear}</p>
    </footer>
  )
}

export default Footer
