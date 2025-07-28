import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1);
    }, []);
    
    useEffect(() => {
        const slideInterval = setInterval(nextTestimonial, 5000); // 5 seconds
        return () => clearInterval(slideInterval);
    }, [nextTestimonial]);

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <div className="inline-block bg-brand-blue-light text-white font-bold py-4 px-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl">Customers Feedback</h2>
                        <div className="flex items-center justify-center mt-2">
                            <span className="text-xl mr-2">5.0</span>
                            <div className="flex text-yellow-300">
                                {[...Array(5)].map((_, i) => <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                            </div>
                        </div>
                        <p className="text-sm mt-1">43 Google Reviews</p>
                    </div>
                </div>

                <div className="relative max-w-3xl mx-auto flex items-center justify-center">
                    <div className="w-full text-center px-8 overflow-hidden relative h-64">
                         {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="flex justify-center mb-4">
                                   <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                   </div>
                                </div>
                                <h3 className="font-bold text-xl text-gray-800">{testimonial.name}</h3>
                                 <div className="flex justify-center my-2">
                                    {[...Array(testimonial.rating)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.review}"</p>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;