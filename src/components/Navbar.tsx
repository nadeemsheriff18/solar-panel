'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/solar-cell.png" // 🔁 Replace with your actual solar panel logo
            alt="Solar Panel Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-lg font-semibold text-green-700">SolarBright</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#pricing" className="hover:text-green-700">Plans</a>
          <a href="#subsidy" className="hover:text-green-700">Subsidy</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 py-3 shadow-sm">
          <a href="#pricing" className="block py-2 text-gray-700">Plans</a>
          <a href="#subsidy" className="block py-2 text-gray-700">Subsidy</a>
          <a href="#contact" className="block py-2 text-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
}
