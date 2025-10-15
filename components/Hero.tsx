
import React from 'react';
import { GOOGLE_MAPS_URL, IMAGE_GALLERY } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src="/mainpage.jpg" alt="Store hero background" />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-12xl font-extrabold tracking-tight text-white" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility' }}>
            Name Brand Clothing
          </h1>
          <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility', fontSmooth: 'always', WebkitTextStroke: '0.01em transparent', letterSpacing: '0.01em', fontVariantLigatures: 'none' }}>
            Up&nbsp;To&nbsp;&nbsp;<span className="font-bold text-red-600 drop-shadow-lg">90%&nbsp;Off</span>&nbsp;&nbsp;Retail&nbsp;Prices
          </p>
        </div>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <a
              href="https://maps.app.goo.gl/qMgbiTfKSNEUVFs2A"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-md shadow-sm text-brand-dark bg-white hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              Get Directions
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
