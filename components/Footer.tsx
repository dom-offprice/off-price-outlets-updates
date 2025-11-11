
import React from 'react';
import { SOCIAL_LINKS, LOGO_BASE64, LOGO_URL, STORE_ADDRESS } from '../constants';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-16 w-16" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-16 w-16" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <h3 className="text-center text-xl font-bold text-white mb-2">Off Price Outlets</h3>
            <div className="mt-4 text-center text-base text-gray-400 space-y-1">
              <p>{STORE_ADDRESS}</p>
              <p>410 Universal Drive N, North Haven, CT</p>
            </div>
             <p className="mt-4 text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Off Price Outlets. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
