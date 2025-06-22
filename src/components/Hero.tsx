'use client';
import Link from 'next/link';
import Image from 'next/image';
import bgImage from '@/../public/images/bg.jpeg';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center min-h-[90vh] px-6 md:px-12 lg:px-24 py-12 bg-white">
      {/* Left: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xs md:text-sm uppercase text-green-500 tracking-widest mb-2">
          Green • Clean • Smart
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Renewable Energy,<br className="hidden md:block" />
          Clean Energy for a Better Tomorrow.
        </h1>
        

<div className="flex justify-center md:justify-start gap-4">
  <Link
    href="/form"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow-md font-medium text-sm transition"
  >
    Get Started
  </Link>
</div>

      </div>

      {/* Right: Image */}
      <div className="flex-1 mb-10 md:mb-0 flex justify-center">
        <div className="w-80 sm:w-100 md:w-100 lg:w-180">
          <Image
            src={bgImage}
            alt="Renewable Energy"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
