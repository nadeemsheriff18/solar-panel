'use client';

import { useEffect, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    plan: '2kW',
  });

  const [submitted, setSubmitted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // ✅ NEW

  useEffect(() => {
    setHasMounted(true); // ✅ ensure this is client-side only
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', location: '', plan: '2kW' });
    }
  };

  if (!hasMounted) return null; // ✅ prevent premature server mismatch

  return (
    <section id="contact" className="bg-green-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Get a Free Quote</h2>

      {submitted ? (
        <p className="text-green-600 text-lg">Thank you! We will contact you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded"
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded"
          />
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded"
          >
            <option value="2kW">2kW</option>
            <option value="3kW">3kW</option>
            <option value="5kW">5kW</option>
          </select>
          <button
            type="submit"
            className="bg-green-700 text-white font-semibold py-3 px-6 rounded hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
