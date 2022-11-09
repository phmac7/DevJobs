'use client';

import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

export default function Page() {
  return (
    <div className="max-w-screen-md mx-auto">
      <header className="flex justify-between items-center p-8">
        <h1 className="text-xl">Hello world</h1>
        <ThemeToggle />
      </header>
    </div>
  );
}
