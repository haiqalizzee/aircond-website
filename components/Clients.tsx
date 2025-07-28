
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Our Clients</h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
          {CLIENT_LOGOS.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Client Logo ${index + 1}`} 
              className="h-10 md:h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
