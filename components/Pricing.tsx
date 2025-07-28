import React from 'react';
import { PRICING_PLANS } from '../constants';
import { PricingPlan } from '../types';
import { CheckIcon, CrossIcon } from '../constants';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const cardClasses = `bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col relative ${plan.popular ? 'border-4 border-brand-blue' : 'border-4 border-transparent'}`;
  
  return (
    <div className={cardClasses}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
      <p className="text-5xl font-extrabold text-brand-blue-dark mb-2">
        RM{plan.price}<span className="text-2xl font-bold text-gray-400">.00</span>
      </p>
      <div className="bg-yellow-300 text-yellow-800 font-semibold px-3 py-2 rounded-md text-center text-sm mb-6 whitespace-pre-line">
          {plan.description}
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            {feature.included ? <CheckIcon className="text-green-500 w-5 h-5 flex-shrink-0" /> : <CrossIcon className="text-red-500 w-5 h-5 flex-shrink-0" />}
            <span className={`text-gray-600 ${!feature.included && 'line-through text-gray-400'}`}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className="w-full mt-auto bg-brand-blue-dark text-white font-bold py-4 rounded-xl shadow-lg hover:bg-brand-blue-deep transition-colors duration-300">
        BOOKING NOW
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-brand-blue-light/10 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Air Cond Service Package</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            With AirCool Pro, we ensure complete pricing transparency with no hidden fees. Our rates are competitive and reflect the true value of our air conditioning services in Melaka. The price we quote is the price you pay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;