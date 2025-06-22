import Link from "next/link";

export default function Subsidy() {
  return (
    <section className="bg-white py-20 px-6 text-center border-t border-gray-200">
      <h2 className="text-3xl font-bold text-green-700 mb-8">Get Government Subsidy</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-6">
        We’re a Govt. Empanelled Vendor providing up to <strong>₹78,000</strong> in solar subsidies
        with bank loan assistance through major partners like Indian Bank, Canara Bank, and more.
      </p>
      <Link
  href="/form"
  className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition duration-300"
>
  Apply for Subsidy
</Link>
    </section>
  );
}
