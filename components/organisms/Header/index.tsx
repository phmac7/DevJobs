import { ThemeToggle } from '@/components/atoms';
import { SearchInput } from '@/components/molecules';
import Image from 'next/image';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} w-full h-36`}>
      <div className="flex pt-8 px-6 gap-8 flex-col">
        <div className="flex justify-between items-center">
          <Image
            src={'/assets/desktop/logo.svg'}
            alt={'DevJobs logo: just the word in white color'}
            width={115}
            height={32}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
