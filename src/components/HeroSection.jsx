import React from 'react';
import cover from "./cover.jpg"

const HeroSection = ({ isScrolled }) => {
  return (
    <div className={`hero-section ${isScrolled ? 'hidden' : ''}`}>
      <div className="image-container">
        <img
          src={cover}
          alt="Hero"
          className="hero-image"
        />
      </div>
      <div className="white-section">
        <h1 className="initial-text">IKIGAI</h1>
        <h3>GET YOUR POLAROIDS FOR JUST 10/-</h3>
        <h5>Our Photographers will be waiting for you !!</h5>
      </div>
    </div>
  );
};

export default HeroSection;
