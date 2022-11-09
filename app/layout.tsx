'use client';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
