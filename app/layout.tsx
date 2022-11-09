'use client';
import '@/styles/globals.css';
import { Kumbh_Sans } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kumbh.className}>
      <ThemeProvider attribute="class">
        <body
          className="bg-gray-50
        dark:bg-gray-900
        text-gray-900
        dark:text-gray-50
        transition-colors"
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
