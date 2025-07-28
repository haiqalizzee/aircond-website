
import React, { useState, useRef, useEffect } from 'react';
import { FAQ_DATA } from '../constants';
import { PlusIcon } from '../constants';

const FAQItem: React.FC<{ item: typeof FAQ_DATA[0], index: number, openIndex: number | null, setOpenIndex: React.Dispatch<React.SetStateAction<number | null>> }> = ({ item, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [item.answer]);

    const toggleOpen = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={toggleOpen}
                className="w-full flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg p-2 -m-2"
            >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <div className={`text-brand-blue transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <PlusIcon />
                </div>
            </button>
            <div 
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                    maxHeight: isOpen ? `${contentHeight}px` : '0px',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
                }}
            >
                <div ref={contentRef} className="pt-4">
                    <p className="text-gray-600 pr-8 leading-relaxed">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
                    <div className="mt-4 mx-auto w-24 border-b-4 border-brand-blue"></div>
                </div>
                <div className="max-w-3xl mx-auto">
                    {FAQ_DATA.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            item={item} 
                            index={index} 
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
