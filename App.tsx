
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import StoreInfo from './components/StoreInfo';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import VisitPage from './components/VisitPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'about') {
      return <AboutPage onNavigate={setCurrentPage} />;
    }
    
    if (currentPage === 'visit') {
      return <VisitPage onNavigate={setCurrentPage} />;
    }
    
    return (
      <div className="bg-white text-brand-dark font-sans">
        <Header onNavigate={setCurrentPage} />
        <main>
          <Hero onNavigate={setCurrentPage} />
          <About />
          <Gallery />
          <StoreInfo onNavigate={setCurrentPage} />
        </main>
        <Footer />
      </div>
    );
  };

  return renderPage();
};

export default App;
