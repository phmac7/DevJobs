import { ThemeToggle } from '@/components/atoms';
import Logo from '@/components/atoms/Logo';
import Image from 'next/image';
import React from 'react';
import './Header.module.css';

const Header = () => {
  return (
    <nav className={`header w-full h-36`}>
      <div className="flex pt-8 px-6 gap-8 flex-col">
        <div className="flex justify-between items-center">
          <Logo />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
