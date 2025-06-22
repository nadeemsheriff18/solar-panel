import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const planDetails = {
  '2kw': {
    title: '2kW Solar System',
    price: '₹1.2L',
    features: [
      'Ideal for small homes',
      'Saves ~₹1000/month on electricity bills',
      'Supports 1.5-ton AC, lighting, and fans',
      'Subsidy up to ₹60,000 available',
    ],
    image: '/images/2kw.jpeg',
    description:
      'The 2kW solar system is perfect for compact households looking to reduce their energy bills and move toward sustainability. Installation is quick and can be done on terraces or rooftops with minimal space.',
  },
  '3kw': {
    title: '3kW Solar System',
    price: '₹1.6L',
    features: [
      'Perfect for 2 BHK homes',
      'Saves ~₹1500/month',
      'Runs 1.5-ton AC, refrigerator, lighting, and TV',
      'Eligible for ₹78,000 subsidy',
    ],
    image: '/images/3kw.jpeg',
    description:
      'The 3kW system strikes the right balance for medium-sized families. It ensures consistent power output and helps reduce grid dependency significantly.',
  },
  '5kw': {
    title: '5kW Solar System',
    price: '₹2.5L',
    features: [
      'Best suited for large homes or villas',
      'Saves ~₹2500/month or more',
      'Powers most home appliances including ACs, geysers, and washing machines',
      'Eligible for ₹78,000 subsidy',
    ],
    image: '/images/5kw.jpeg',
    description:
      'This system is ideal for homes with higher energy consumption. It offers long-term savings, excellent ROI, and is backed by government subsidies and installation support.',
  },
} as const;

type PlanSlug = keyof typeof planDetails;

export default async function PlanPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!Object.keys(planDetails).includes(params.slug)) return notFound();

  const plan = planDetails[params.slug as PlanSlug];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{plan.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{plan.price}</p>

        {/* Image */}
        {/* Image */}
<div className="mb-6 flex justify-center">
  <Image
    src={plan.image}
    alt={plan.title}
    width={600} // 👈 smaller base size
    height={300}
    className="rounded-lg max-w-full h-auto object-cover"
  />
</div>


        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">{plan.description}</p>

        {/* Features List */}
        <h2 className="text-xl font-semibold text-green-700 mb-2">Key Benefits:</h2>
        <ul className="list-disc list-inside text-gray-800 mb-8 space-y-2">
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* CTA */}
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
