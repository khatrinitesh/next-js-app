'use client'
// next link
import Link from 'next/link'
// next navigation
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();

  return (
    <header className="header bg-black">
        <div className="container mx-auto">
        <ul className="flex">
            <li>
                <Link className={`text-white block p-2 ${pathname === '/' ? 'active' : ''}`} href="/">home</Link>
            </li>
            <li>
                <Link className={`text-white block p-2 ${pathname === '/about' ? 'active' : ''}`} href="/about">about</Link>
            </li>
            <li>
                <Link className={`text-white block p-2 ${pathname === '/service' ? 'active' : ''}`} href="/service">service</Link>
            </li>
            <li>
                <Link className={`text-white block p-2 ${pathname === '/contact' ? 'active' : ''}`} href="/contact">contact</Link>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header