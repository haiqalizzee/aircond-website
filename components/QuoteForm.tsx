
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  return (
    <div id="quote" className="bg-brand-blue-light rounded-2xl p-8 md:p-12 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-2">QUOTATION / ENQUIRY</h2>
      <p className="text-white/90 mb-8">Fill in your details below to get in touch:</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/90 rounded-lg border-2 border-transparent focus:outline-none focus:border-white focus:bg-white transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-white font-semibold mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/90 rounded-lg border-2 border-transparent focus:outline-none focus:border-white focus:bg-white transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-semibold mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/90 rounded-lg border-2 border-transparent focus:outline-none focus:border-white focus:bg-white transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white font-semibold mb-2">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/90 rounded-lg border-2 border-transparent focus:outline-none focus:border-white focus:bg-white transition"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-brand-blue-dark text-white font-bold py-4 rounded-lg shadow-lg hover:bg-brand-blue-deep transition-colors duration-300 transform hover:scale-105">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
