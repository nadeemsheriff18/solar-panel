// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Solar Veedu',
  description: 'Market-leading solar panel systems with subsidy support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
