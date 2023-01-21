'use client';
import Footer from '@/components/organisms/Footer';
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
        dark:bg-midnight
        text-gray-900
        dark:text-gray
        transition-colors"
        >
          <Header />
          <main className="mx-6">{children}</main>
          {/* <Footer /> */}
        </body>
      </ThemeProvider>
    </html>
  );
}
