
import React, { useState } from 'react';
import { LOGO_BASE64, LOGO_URL } from '../constants';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="w-full px-0">
        <div className="relative flex items-center h-[160px] md:h-[200px] py-1">
          {/* Logo - Centered on both mobile and desktop */}
          <a href="#" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <img className="h-[176px] md:h-[198px] w-auto object-contain" src={LOGO_URL} onError={(e) => { (e.currentTarget as HTMLImageElement).src = LOGO_BASE64; }} alt="Off Price Outlets Logo" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 absolute right-20 top-1/2 -translate-y-1/2">
            <button onClick={() => onNavigate?.('about')} className="text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50">About Us</button>
            <button onClick={() => onNavigate?.('visit')} className="text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50">Visit Us</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-4 p-2 rounded-lg border border-gray-300 hover:border-brand-dark hover:bg-gray-50"
            style={{ top: 'calc(50%)' }}
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
                  onNavigate?.('about');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  onNavigate?.('visit');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-lg font-medium text-gray-500 hover:text-brand-dark transition-colors border border-gray-300 rounded-lg hover:border-brand-dark hover:bg-gray-50"
              >
                Visit Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
