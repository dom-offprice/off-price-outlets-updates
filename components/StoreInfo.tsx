
import React from 'react';
import { STORE_ADDRESS, STORE_HOURS } from '../constants';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';

interface StoreInfoProps {
  onNavigate?: (page: string) => void;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ onNavigate }) => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Come Visit Us</h2>
          <p className="mt-4 text-xl text-gray-600">See what the hype is all about!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Location Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center items-center mx-auto bg-brand-red h-12 w-12 rounded-full">
              <LocationIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-brand-dark">Our Locations</h3>
            <div className="mt-4 space-y-6">
              <div>
                <p className="text-lg text-gray-600 mb-2">{STORE_ADDRESS}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('visit');
                  }}
                  className="inline-block text-brand-red font-semibold hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  Get Directions &rarr;
                </button>
              </div>
              <div>
                <p className="text-lg text-gray-600 mb-2">410 Universal Drive N, North Haven, CT</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('visit');
                  }}
                  className="inline-block text-brand-red font-semibold hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  Get Directions &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center items-center mx-auto bg-brand-red h-12 w-12 rounded-full">
              <ClockIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-brand-dark">Store Hours</h3>
            <ul className="mt-2 space-y-1 text-lg text-gray-600">
              {STORE_HOURS.map(item => (
                <li key={item.day} className="flex justify-center space-x-2">
                  <span className="font-semibold w-32 text-right">{item.day}:</span>
                  <span className="w-32 text-left">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Customer Reviews Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"Exceptional customer service. Huge selection! Many sizes. Women, men and children. Beyond thrilled to enjoy my new wardrobe!"</p>
              <p className="text-brand-dark font-semibold">- Tina</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"Great clothing! Great prices! Great staff! A win for everyone here!"</p>
              <p className="text-brand-dark font-semibold">- Martha</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"My mom recommended this place to me, I came looking for low waisted pants and ended up getting 4 pairs that fit perfectly for $60! Great place, great quality clothes for the low."</p>
              <p className="text-brand-dark font-semibold">- Erica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
