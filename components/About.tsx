
import React from 'react';
import { IMAGE_GALLERY } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Quality Clothing For The Whole Family
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              We are wholesalers bringing you clothing directly from brands and other trusted partners at incredible prices. Discover new arrivals every week and find your next favorite outfit without breaking the bank!
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-6">
             <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                  src="/family.jpg" 
                  alt="Family shopping for quality clothing" 
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
