import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TikTokIcon from './icons/TikTokIcon';

const UpcomingSale: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="upcoming-sales" className="py-0">
      {/* Red bar */}
      <div className="bg-brand-red text-white py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl font-bold">
            Thank you to everyone who came out—we&apos;re restocking and will announce the next sale soon!
          </p>
        </div>
      </div>

      {/* White box with clickable CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0 pt-8 pb-16 sm:pb-24">
        <div className="max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200 text-center hover:shadow-xl hover:border-gray-300 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            <p className="text-gray-900 text-lg sm:text-xl font-semibold">
              Follow us for the next sale dates!
            </p>
          </button>
        </div>
      </div>

      {/* Social modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="social-modal-title"
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="social-modal-title" className="text-xl font-bold text-brand-dark text-center mb-6">
              Follow us
            </h2>
            <div className="flex justify-center gap-8">
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-gray-700 hover:text-brand-dark transition-colors"
              >
                <TikTokIcon className="h-12 w-12" />
                <span className="text-sm font-medium">TikTok</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-gray-700 hover:text-brand-dark transition-colors"
              >
                <FacebookIcon className="h-12 w-12" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-gray-700 hover:text-brand-dark transition-colors"
              >
                <InstagramIcon className="h-12 w-12" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="mt-8 w-full py-3 px-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingSale;
