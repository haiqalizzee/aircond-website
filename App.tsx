import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesHighlight from './components/ServicesHighlight';
import Stats from './components/Stats';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Brands from './components/Brands';
import ServiceAreas from './components/ServiceAreas';
import BookingProcess from './components/BookingProcess';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <div id="home"><Hero /></div>
        <ServicesHighlight />
        <Stats />
        <div id="service"><ServicesOverview /></div>
        <div id="about"><WhyChooseUs /></div>
        <div id="package"><Pricing /></div>
        <Brands />
        <div className="bg-white py-16 lg:py-24">
            <ServiceAreas />
        </div>
        <div className="bg-brand-blue-deep">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center container mx-auto px-4 py-16 lg:py-24">
                <BookingProcess />
                <QuoteForm />
            </div>
        </div>
        <div id="feedback"><Testimonials /></div>
        <Clients />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;