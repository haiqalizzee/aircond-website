import React from 'react';

const steps = [
  {
    number: 1,
    title: "Choose Date and Time",
    description: "Confirm date and time",
  },
  {
    number: 2,
    title: "Book Service Online",
    description: "Contact us via Whatsapp",
  },
  {
    number: 3,
    title: "We Service Aircond",
    description: "We come to your place for service",
  },
];

const BookingProcess: React.FC = () => {
  return (
    <div className="text-white text-center lg:text-left">
      <h2 className="text-4xl font-bold text-white mb-8">How to Booking Air Cond Service?</h2>
      <p className="text-lg text-gray-200 mb-10">Follow the step below:</p>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {step.number}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#quote" className="inline-block mt-12 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        Contact Us
      </a>
    </div>
  );
};

export default BookingProcess;