import React, { useState } from 'react';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
              <button onClick={() => onNavigate?.('visit')} className="text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50">Visit Us</button>
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
              <div className="px-4 py-4 space-y-1">
                <button
                  onClick={() => {
                    onNavigate?.('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-4 text-lg font-semibold text-brand-dark hover:text-brand-red transition-colors border-b border-gray-200 hover:border-brand-red"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    onNavigate?.('visit');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-4 text-lg font-semibold text-brand-dark hover:text-brand-red transition-colors border-b border-gray-200 hover:border-brand-red"
                >
                  Visit Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl mb-6">A little about us...</h1>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Off Price Outlets, we've spent over 25 years in the clothing industry as wholesalers—supplying retailers across the country with top-quality name-brand apparel. After decades of experience behind the scenes, we decided to bring that same value directly to our local communities through retail and event sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: to offer premium, name-brand clothing at unbeatable prices. We believe everyone should have access to stylish, high-quality fashion without paying full retail.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Family-Owned</h3>
              <p className="text-gray-700 leading-relaxed">
                As a family-owned and operated business, we take pride in creating a shopping experience that feels personal and welcoming. Our stores are kept clean, organized, and easy to shop, with a friendly staff always ready to help you find the best deals.
              </p>
            </div>
          </div>

          <div className="bg-brand-red text-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Quality You Can Trust</h3>
            <p className="text-lg leading-relaxed">
              We're not a thrift store—everything we sell is new, name-brand clothing, sourced directly from trusted partners and major brands. Our inventory is constantly changing, so every visit brings something new—from classic everyday wear to seasonal favorites and limited-edition finds.
            </p>
          </div>

          <div className="bg-white border-2 border-brand-red rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Growing Together</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              With the success of our retail stores and pop-up events, we're always looking to expand into more locations and host more event sales throughout the region. Whether you're a first-time shopper or a loyal regular, we're here to make sure you always leave with incredible deals and a great experience.
            </p>
          </div>

          <div className="text-center">
            <div className="text-white rounded-lg px-8 py-4" style={{ backgroundColor: '#0A0A0A' }}>
              <p className="text-xl font-semibold text-white">Quality. Value. Community.</p>
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
              <div className="mt-4 text-center text-base text-gray-400 space-y-1">
                <p>972 North Colony Road, Wallingford, CT</p>
                <p>410 Universal Drive N, North Haven, CT</p>
              </div>
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

export default AboutPage;
