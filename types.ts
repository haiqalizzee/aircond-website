
export interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceLocation {
  name: string;
  area: string;
}
