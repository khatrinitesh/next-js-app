"use client"
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/constants/navigation';
import { useRouter } from 'next/navigation';

const TopNavigation = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {NAVIGATION_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={item.url} className={router.pathname === item.url ? 'active' : ''}>
             {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavigation;