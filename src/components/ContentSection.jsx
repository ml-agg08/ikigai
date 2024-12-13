import React, { useState, useEffect, useRef } from 'react';
import coffee from './coffee.jpg'; 
import library from './library.jpg'
import apjpark from "./apjpark.jpg"
import apjhall from './apjhall.jpg'
import cover from './cover.jpg'
import auditorium from "./auditorium.jpg"
import ground from "./ground.jpg"
import cp from "./cp.jpg"


const places = [
  {
    name: 'Auditorium',
    image: auditorium,
    description: 'Step into the spotlight and let the grandeur of the auditorium frame your moment. A Polaroid here, Pure star vibes',
  },
  {
    name: 'College Ground',
    image: ground,
    description: 'Open skies, festival buzz, and the perfect backdrop for your Polaroid. Capture the vibe, the energy, and a little bit of Ikigai magic.'
  },
  {
    name: 'Central Portico',
    image: cp,
    description: 'Arched ceilings, golden light, and endless charm—this hallway turns every Polaroid into a masterpiece. Walk in, pose, and let the magic happen',
  },
  {
    name: 'APJ Hall',
    image: apjhall,
    description: 'A stage, a moment, a Polaroid to seal it all. Step into the spotlight and let your photo speak the language of Ikigai.',
  },
];

const ContentSection = ({ isScrolled }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  const handleClose = () => {
    setSelectedPlace(null);
  };

  return (
    <div
      className={`content-section ${isScrolled ? 'visible' : ''}`}
      ref={contentRef}
    >
      <div className={`place-buttons ${isVisible ? 'fade-in' : ''}`}>
        {places.map((place) => (
          <button
            key={place.name}
            className="place-button"
            onClick={() => handlePlaceClick(place)}
          >
            {place.name}
          </button>
        ))}
      </div>

      {selectedPlace && (
        <div className="place-card-container">
          <div className="place-card">
            <img src={selectedPlace.image} alt={selectedPlace.name} className="place-image" />
            <div className="place-description">
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.description}</p>
              <button className="close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
          <div className="overlay" onClick={handleClose}></div>
        </div>
      )}
    </div>
  );
};

export default ContentSection;
