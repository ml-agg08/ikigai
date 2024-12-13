import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight * 0.6) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <HeroSection isScrolled={isScrolled} />
      <ContentSection isScrolled={isScrolled} />
    </div>
  );
};

export default App;
