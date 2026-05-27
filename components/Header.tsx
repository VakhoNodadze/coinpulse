'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
          <Image src="logo.svg" alt="CoinPulse logo" width={132} height={40} />
        </Link>
        <nav>
          <Link
            href="/"
            className={cn(
              'nav-link',
              'is-home',
              pathname === '/' && 'is-active',
            )}
          >
            Home
          </Link>
          <p className="nav-link">Search Modal</p>
          <Link
            href="/coins"
            className={cn('nav-link', pathname === '/coins' && 'is-active')}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
