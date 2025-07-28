import { BRAND_LOGOS } from '../constants';

const Brands: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">We Install Air Cond From Leading Brands</h2>
        </div>
        
        <div className="w-full overflow-hidden">
            <div className="flex items-center animate-marquee hover:pause">
                {BRAND_LOGOS.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 mx-8 lg:mx-12">
                        <img 
                          src={logo} 
                          alt={`Brand Logo ${index + 1}`} 
                          className="h-16 md:h-20 lg:h-24 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                ))}
                {BRAND_LOGOS.map((logo, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 lg:mx-12">
                        <img 
                          src={logo} 
                          alt={`Brand Logo ${index + 1}`} 
                          className="h-16 md:h-20 lg:h-24 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                ))}
                {BRAND_LOGOS.map((logo, index) => (
                    <div key={`triplicate-${index}`} className="flex-shrink-0 mx-8 lg:mx-12">
                        <img 
                          src={logo} 
                          alt={`Brand Logo ${index + 1}`} 
                          className="h-16 md:h-20 lg:h-24 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>

         <div className="text-center mt-12">
          <button className="bg-brand-blue-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-blue-deep transition-colors duration-300">
            Enquiry Aircond Installation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;