import React, { useState } from 'react';
import { STORE_ADDRESS, STORE_HOURS } from '../constants';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';

interface VisitPageProps {
  onNavigate?: (page: string) => void;
}

const VisitPage: React.FC<VisitPageProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="w-full px-0">
          <div className="relative flex items-center h-[160px] md:h-[200px] py-1">
            <button onClick={() => onNavigate?.('home')} className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img className="h-[176px] md:h-[198px] w-auto object-contain" src="/logo.png" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX////tHSUAgQAAfgD60tPsAABIjQD85+f3w8P83t/sAAD+8/P84eH5ycn0pqb2u7zxb3HwVloAgwD60NDvQlP0rK/xZmf96+zwUFXuLTTsDhbvPVH4xMXsCBHxcm/4wsT+9vb5zM7tHyj5z9DuLkH0qKj2vL/vSFbwnqTyl5jxgIf0mZpP7e4cAAAC9UlEQVR4nO3c63KqQBCFYRSkEUSsEhAVFUXB+/+/2t1oUokEEkggbTvf1J95uDPdDTehGGwYAAAAAAAAAAAAAAAAAAAAAADg73K5XEe2221r3k73WvJ3e7+6J/b7XUuSXu8PtdC62+1Gq9WaD1L1Qk8lM9vtdnN/2F/7G7NZrUZG5J5yS7lSzlY+lMsojbJd722pLOUzyj85Z8Q3i3r5+Ld5uD/tK40yo2hSjA8qjTJG8t+c5R8lMp+a+U1mPjXzmyb5zcyGqTz/y423qL85b73dbyJ8Rmnm8DdqV3m4532lURblEsqjZJ0p9eZp5R2lURZZL6/Vq2pVeWz5R2mURd4XU26rVVV53fJHacoyU26rV1V53fJHacoyk26rV1V53fJHacoyE26rV1V53fJHacoyE26rV1V53fJHacoyU26rV1V53fJHacoyk26rV1V53fJHacoy026rV1V53fJHacoyk26rV1V53fJHacoyE26rV1V53fJHacoyE26rV1V53fJHacoyU26rV1V53fJHacoyk26rV1V53fJHacoyE26rV1V53fJHacoyk26rV1V53fJHacoyE26rV1V53fJHacoyU26rV1V53fJHacoyk26rV1V53fJHacoy026rV1V53fJHacoyk26rV1V53fJHacoyE26rV1V53fJHacoyE26rV1V53fJHacoyU26rV1V5/Wf/w14KAAAAAAAAAAAAAAAAAAAAAMDu/ADq+Q4pE7l18QAAAABJRU5ErkJggg=='; }} alt="Off Price Outlets Logo" />
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 absolute right-20 top-1/2 -translate-y-1/2">
              <button onClick={() => onNavigate?.('home')} className="text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50">Home</button>
              <button onClick={() => onNavigate?.('about')} className="text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50">About Us</button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden absolute right-4 p-2 rounded-lg border border-gray-300 hover:border-brand-dark hover:bg-gray-50"
              style={{ top: 'calc(50% - 8px)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-2">
                <button
                  onClick={() => {
                    onNavigate?.('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    onNavigate?.('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50"
                >
                  About Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl mb-6">Visit Us</h1>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">Come see us in person to see what the hype is all about!</p>
        </div>

        {/* Store Hours and Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Store Hours - Left Side */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="flex justify-center items-center bg-brand-red h-12 w-12 rounded-full mr-4">
                <ClockIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">Store Hours</h2>
            </div>
            
            <div className="space-y-3">
              {STORE_HOURS.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-lg text-brand-dark">{item.day}</div>
                    <div className={`text-lg font-bold ${item.hours === 'Closed' ? 'text-red-600' : 'text-brand-red'}`}>
                      {item.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location - Right Side */}
          <div className="bg-white rounded-lg shadow-lg p-8 pb-6">
            <div className="flex items-center mb-6">
              <div className="flex justify-center items-center bg-brand-red h-12 w-12 rounded-full mr-4">
                <LocationIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">Our Location</h2>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-2">{STORE_ADDRESS}</p>
              <p className="text-lg text-gray-600 mb-4 italic">Movie Theater Plaza, Across From The Former Big Lots Location</p>
              <a
                href="https://maps.app.goo.gl/qMgbiTfKSNEUVFs2A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">

          {/* Interactive Map */}
          <div className="mt-8">
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Explore the area around our store location</p>
            </div>
            
            {/* Embedded Google Maps */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=972+North+Colony+Road+Wallingford+CT&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Off Price Outlets Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Map Action Buttons */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://maps.app.goo.gl/qMgbiTfKSNEUVFs2A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Get Directions
              </a>
              
              <a
                href="https://maps.apple.com/?q=972+North+Colony+Road+Wallingford+CT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Open in Apple Maps
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">What to Expect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Parking</h4>
              <p className="text-gray-600">Free parking available in front of the store</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Accessibility</h4>
              <p className="text-gray-600">Wheelchair accessible entrance and aisles</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Payment</h4>
              <p className="text-gray-600">We accept cash, credit cards, and mobile payments</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Returns</h4>
              <p className="text-gray-600">We offer exchanges only for same day store credit</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="https://www.facebook.com/p/Off-Price-Outlets-61576845511237/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/offpriceoutletsct/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <h3 className="text-center text-xl font-bold text-white mb-2">Off Price Outlets</h3>
              <p className="mt-4 text-center text-base text-gray-400">
                972 North Colony Road, Wallingford, CT
              </p>
              <p className="mt-4 text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} Off Price Outlets. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisitPage;
