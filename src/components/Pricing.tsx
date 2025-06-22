'use client';

import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  const plans = [
    { size: '2kW', price: '₹83,000', subsidy: '₹60,000', slug: '2kw' },
    { size: '3kW', price: '₹1,03,500', subsidy: '₹78,000', slug: '3kw' },
    { size: '5kW', price: '₹2,24,500', subsidy: '₹78,000', slug: '5kw' },
  ];

  const handleClick = (slug: string) => {
    router.push(`/plan/${slug}`);
  };

  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-12">Choose Your Solar Plan</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {plans.map(({ size, price, subsidy, slug }) => (
          <div
            key={slug}
            className="bg-white p-6 rounded-xl shadow-lg border hover:scale-105 transition-transform duration-300 w-72 cursor-pointer"
            onClick={() => handleClick(slug)}
          >
            <h3 className="text-xl font-bold text-green-800 mb-2">{size} System</h3>
            <p className="text-gray-600 mb-1">Total Cost: <strong>{price}</strong></p>
            <p className="text-green-600 font-semibold mb-4">Subsidy: {subsidy}</p>
            <span className="inline-block bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded transition">
              View Plan Details
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
