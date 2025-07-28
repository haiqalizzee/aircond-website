import React from 'react';

const services = [
  {
    title: "Air Cond Service",
    description: "Regular servicing to keep your air conditioner running smooth and efficient.",
    imgSrc: "https://picsum.photos/seed/service/400/500",
  },
  {
    title: "Air Cond Repair",
    description: "Quick and reliable fixes to get your system back to perfect condition.",
    imgSrc: "https://picsum.photos/seed/repair/400/500",
  },
  {
    title: "Air Cond Installation",
    description: "Efficient and precise air conditioning system setups for your home.",
    imgSrc: "https://picsum.photos/seed/install/400/500",
  },
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Provide High Quality Air Conditioning Service</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            We offers comprehensive air conditioning services to customers, especially on residential, shops, and office buildings across the state of Melaka.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-50">
              <div className="relative h-64">
                <img src={service.imgSrc} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 h-12">{service.description}</p>
                <button className="w-full bg-brand-blue-dark text-white font-semibold py-3 rounded-lg shadow-md hover:bg-brand-blue-deep transition-colors duration-300">
                  BOOKING NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;