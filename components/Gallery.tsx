
import React from 'react';
import { IMAGE_GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">See What's In Store</h2>
          <p className="mt-4 text-xl text-gray-600">New inventory arriving weekly. Styles for everyone!</p>
        </div>
        <div className="mt-12 grid gap-6 max-w-4xl mx-auto lg:grid-cols-3">
          <div className="aspect-square rounded-xl shadow-lg overflow-hidden group bg-gray-100">
            <img 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                src="/instore1.jpg" 
                alt="Store interior view 1" 
            />
          </div>
          <div className="aspect-square rounded-xl shadow-lg overflow-hidden group bg-gray-100">
            <img 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                src="/instore2.jpg" 
                alt="Store interior view 2" 
            />
          </div>
          <div className="aspect-square rounded-xl shadow-lg overflow-hidden group bg-gray-100">
            <img 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                src="/instore3.jpg" 
                alt="Store interior view 3" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
