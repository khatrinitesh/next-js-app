"use client"

import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname()
  

  // Your regular header content goes here
  return (
    <header>
      <ul>
        <li>
            <Link href="/" className={pathname ===  '/' ? 'active text-[red] font-bold' : ''}>Home</Link>
        </li>
        <li>
            <Link href="/about" className={pathname ===  '/about' ? 'active text-[red] font-bold' : ''}>About</Link>
        </li>
        <li>
            <Link href="/service" className={pathname ===  '/service' ? 'active text-[red] font-bold' : ''}>Service</Link>
        </li>
        <li>
            <Link href="/products" className={pathname ===  '/products' ? 'active text-[red] font-bold' : ''}>Products</Link> {/* Add this line for the Products link */}
        </li>
        <li>
            <Link href="/contact" className={pathname ===  '/contact' ? 'active text-[red] font-bold' : ''}>Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
