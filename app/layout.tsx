'use client';
import Header from '@/components/organisms/Header';
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
          className="bg-light-gray
        dark:bg-very-dark-blue
        text-gray-900
        dark:text-gray-50
        transition-colors"
        >
          <Header />
          <main className="mx-4">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
