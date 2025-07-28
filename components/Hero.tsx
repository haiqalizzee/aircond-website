import React from 'react';
import { CheckIcon } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-blue-light text-white py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/ac/1920/1080')", opacity: 0.15 }}>
      </div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-white/10 rounded-full"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            YOUR TRUSTED AIRCOND EXPERT IN KLANG VALLEY
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            Stay Cool With <br /> Fresh Air
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 font-light">
            AirCool Pro - Certified air conditioning contractor in Klang Valley, offering top quality air conditioner servicing and installation for houses, shops lot and office buildings, all at an affordable price with guaranteed excellence.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-4 mb-8 text-lg font-semibold">
            <div className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-white" /> SERVICE</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-white" /> REPAIR</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-white" /> INSTALLATION</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
             <a href="#pricing" className="bg-white text-brand-blue font-bold px-8 py-4 rounded-full shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 text-lg">
                Book Service Now
            </a>
            <div className="flex items-center gap-3">
                <span className="font-semibold text-lg">HOTLINE →</span>
                <a href="tel:012-6789765" className="bg-brand-blue-deep text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 text-lg">
                    012-6789 765
                </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
            <img src="https://picsum.photos/seed/technician/600/700" alt="Air Conditioner Technician" className="rounded-2xl shadow-2xl z-10 max-w-sm w-full" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-24 h-24 bg-yellow-300 rounded-full z-20 flex items-center justify-center flex-col text-gray-800 text-xs font-bold leading-tight transform -rotate-12">
                <span>CERTIFIED</span>
                <span>TECHNICIANS</span>
                <span>(ACCT)</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/20 rounded-2xl z-0 transform rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;