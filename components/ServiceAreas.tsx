import React from 'react';
import { SERVICE_LOCATIONS } from '../constants';

const ServiceAreas: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Servicing Klang Valley & Surrounding Areas</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {SERVICE_LOCATIONS.map((location, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-xl hover:border-brand-blue transition-all duration-300">
            <h3 className="font-bold text-gray-800">{location.name}</h3>
            <p className="text-sm text-gray-500">{location.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;