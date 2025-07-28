
import React, { useState, useEffect, useRef } from 'react';

const stats = [
    { value: 3211, title: "AIRCOND SERVICE", description: "Residential, Office, Shops, Buildings" },
    { value: 19, title: "YEAR EXPERIENCE", description: "" },
    { value: 1437, title: "AIRCOND INSTALLATION", description: "Residential, Office, Shops, Buildings" },
];

const CountUp: React.FC<{ end: number, duration?: number }> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationId: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);
            
            setCount(currentCount);
            
            if (progress < 1) {
                animationId = requestAnimationFrame(animate);
            }
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [isVisible, end, duration]);

    return (
        <span ref={ref} className="text-5xl lg:text-6xl font-extrabold text-brand-blue mb-2">
            {count.toLocaleString()}+
        </span>
    );
};

const Stats: React.FC = () => {
  return (
    <div className="bg-brand-blue-light/10 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {stats.map((stat, index) => (
                    <div key={index} className="py-8 md:py-4 px-4">
                        <CountUp end={stat.value} />
                        <h3 className="text-lg font-bold text-gray-800">{stat.title}</h3>
                        {stat.description && <p className="text-gray-500 text-sm mt-1">{stat.description}</p>}
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-600 mt-8 max-w-4xl mx-auto">
                We pride in delivering excellent service and honest guidance to help customers choose the best air conditioning solutions for home or business. Our customers are at the heart of everything we do, and we are committed to providing punctual, courteous, and professional service every time.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
