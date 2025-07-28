import { PricingPlan, Testimonial, FAQItem, ServiceLocation } from './types';

export const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const CrossIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

export const MinusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
);

export const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);


export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Package 1",
    price: 140,
    description: "FOR WALL MOUNTED 1HP - 2.5HP ONLY\nRecommended",
    features: [
      { text: "Amp & Gas Injection", included: true },
      { text: "Whole Unit Observation", included: true },
      { text: "Indoor Filter Cleaning", included: true },
      { text: "Indoor Housing Cover Cleaning", included: true },
      { text: "Outdoor Housing Cover Cleaning", included: true },
      { text: "Chemical Cleaning Indoor & Outdoor Coil", included: false },
      { text: "Using Eco Friendly Canvas", included: true },
      { text: "Unit Dismantle (Major)", included: false },
      { text: "Steaming Cleaning", included: false },
    ],
    popular: true,
  },
  {
    title: "Package 2",
    price: 160,
    description: "FOR WALL MOUNTED 1HP - 2.5HP ONLY\nSteam Cleaning",
    features: [
      { text: "Amp & Gas Injection", included: true },
      { text: "Whole Unit Observation", included: true },
      { text: "Indoor Filter Cleaning", included: true },
      { text: "Indoor Housing Cover Cleaning", included: true },
      { text: "Outdoor Housing Cover Cleaning", included: true },
      { text: "Chemical Cleaning Indoor & Outdoor Coil", included: false },
      { text: "Using Eco Friendly Canvas", included: true },
      { text: "Unit Dismantle (Major)", included: false },
      { text: "Steaming Cleaning", included: true },
    ],
  },
  {
    title: "Package 3",
    price: 220,
    description: "FOR WALL MOUNTED 1HP - 2.5HP ONLY\nAdvance",
    features: [
      { text: "Amp & Gas Injection", included: true },
      { text: "Whole Unit Observation", included: true },
      { text: "Indoor Filter Cleaning", included: true },
      { text: "Indoor Housing Cover Cleaning", included: true },
      { text: "Outdoor Housing Cover Cleaning", included: true },
      { text: "Chemical Cleaning Indoor & Outdoor Coil", included: true },
      { text: "Using Eco Friendly Canvas", included: true },
      { text: "Unit Dismantle (Major)", included: false },
      { text: "Steaming Cleaning", included: false },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Madam Red One",
    review: "Alhamdulillah good job. There is not a lot of dust to clean up. Just vacuum a little and mop aettle. It shows the work of neat and experienced people. The price is reasonable. Fast work. Relocate and install in just 3 hours and it's ready.",
    rating: 5,
  },
  {
    name: "Nurul Ateeqah",
    review: "I am very satisfied with the service provided. The technician came on time and was very professional. My aircond works better after servicing. I also asked the technician to change the lights in the bedroom, the bathroom, change the sink pipe and also install a wall fan in the yard where the clothes hang. Alhamdulillah all their tasks are done efficiently, quickly and cleanly. The price is also very reasonable.",
    rating: 5,
  },
   {
    name: "John Doe",
    review: "Fantastic service from start to finish. The team was punctual, efficient, and left my place spotless. My AC has never worked better. Highly recommend AirCool Pro!",
    rating: 5,
  },
];

export const FAQ_DATA: FAQItem[] = [
    { question: "How often should I service my air conditioner?", answer: "We recommend servicing your air conditioner every 6 months to maintain its efficiency, improve air quality, and extend its lifespan." },
    { question: "What types of air conditioning services do you provide?", answer: "We offer a comprehensive range of services including general servicing, chemical cleaning, repair, and installation for all types of air conditioning units." },
    { question: "Do you offer same-day service?", answer: "Yes, we offer same-day service subject to availability. Please call our hotline to check for the earliest slot." },
    { question: "How do I book a service with AirCool Pro?", answer: "You can book a service by calling our hotline, sending us a message on WhatsApp, or filling out the quotation form on our website." },
    { question: "Are your technicians certified and experienced?", answer: "Absolutely. All our technicians are certified, highly trained, and have extensive experience in the air conditioning industry." },
    { question: "What brands of air conditioners do you install?", answer: "We install and service all major air conditioner brands including Daikin, Midea, Haier, Acson, and Panasonic." },
];

export const SERVICE_LOCATIONS: ServiceLocation[] = [
    { name: "Petaling Jaya", area: "Selangor" },
    { name: "Subang Jaya", area: "Selangor" },
    { name: "Shah Alam", area: "Selangor" },
    { name: "Klang", area: "Selangor" },
    { name: "Puchong", area: "Selangor" },
    { name: "Damansara", area: "Kuala Lumpur" },
    { name: "Cheras", area: "Kuala Lumpur" },
    { name: "Ampang", area: "Selangor" },
    { name: "Kuala Lumpur", area: "City Center" },
    { name: "Gombak", area: "Selangor" },
];

export const BRAND_LOGOS = [
    "/daikin-logo.png", // Daikin
    "/midea-logo.png", // Midea
    "/haier-logo.png", // Haier
    "/acson-logo.png", // Acson
    "/panasonic-logo.png", // Panasonic
];

export const CLIENT_LOGOS = [
    "https://i.imgur.com/kFLWf1N.png", // Coway
    "https://i.imgur.com/0uBq2o4.png", // Pantai Hospital
    "https://i.imgur.com/D8i7G3j.png", // Politeknik
    "https://i.imgur.com/7gO8sZf.png", // Melaka
    "https://i.imgur.com/2A2n9wG.png", // KBS
    "https://i.imgur.com/kFLWf1N.png", // Coway
];