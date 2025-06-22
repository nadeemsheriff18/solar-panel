'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type PlanKey = '2kw' | '3kw' | '5kw';

interface PlanData {
  title: string;
  price: string;
  features: string[];
  image: string;
  description: string;
}

const planDetails: Record<PlanKey, PlanData> = {
  '2kw': {
    title: '2kW Solar System',
    price: '₹1.2L',
    features: [
      'Ideal for small homes',
      'Saves ~₹1000/month',
      'Works with 1.5-ton AC, lights, and fans',
      'Eligible for subsidy up to ₹60,000',
    ],
    image: '/images/2kw.jpeg',
    description: 'Great choice for compact homes aiming to reduce energy costs.',
  },
  '3kw': {
    title: '3kW Solar System',
    price: '₹1.6L',
    features: [
      'Perfect for 2 BHK homes',
      'Saves ~₹1500/month',
      'Handles most appliances and a 1.5-ton AC',
      'Eligible for subsidy up to ₹78,000',
    ],
    image: '/images/3kw.jpeg',
    description: 'Balanced choice for medium households to maximize ROI.',
  },
  '5kw': {
    title: '5kW Solar System',
    price: '₹2.5L',
    features: [
      'Ideal for large homes or villas',
      'Saves ~₹2500/month or more',
      'Supports multiple ACs, fridges, and TVs',
      'Eligible for ₹78,000 subsidy',
    ],
    image: '/images/5kw.jpeg',
    description: 'Ultimate choice for full home independence with solar energy.',
  },
};

export default function PlanPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<PlanData | null>(null);

  useEffect(() => {
    const slug = window.location.pathname.split('/').pop() as PlanKey;
    if (slug && slug in planDetails) {
      setPlan(planDetails[slug]);
    } else {
      router.push('/not-found');
    }
  }, [router]);

  if (!plan) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{plan.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{plan.price}</p>

        <div className="mb-6 flex justify-center">
          <Image
            src={plan.image}
            alt={plan.title}
            width={500}
            height={280}
            className="rounded-lg max-w-full h-auto object-cover"
          />
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{plan.description}</p>

        <h2 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h2>
        <ul className="list-disc list-inside text-gray-800 mb-8 space-y-2">
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/form"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-sm font-medium transition"
          >
            Apply for this Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
