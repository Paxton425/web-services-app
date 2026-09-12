import React, { useState, useEffect } from 'react';
import './LaptopWrapper.css';

const slidesData = [
  {
    id: 1,
    tag: "PREVIEW #1",
    title: "Elevate Your Brand",
    description: "We build modern, fast, and responsive websites that help your business grow.",
    btnText: "LET'S BUILD >",
    badge: "MODERN WEB DESIGN"
  },
  {
    id: 2,
    tag: "PREVIEW #2",
    title: "E-Commerce Solutions",
    description: "Sell online effortlessly with custom digital storefronts and secure checkouts.",
    btnText: "EXPLORE STORE >",
    badge: "BOOST SALES"
  },
  {
    id: 3,
    tag: "PREVIEW #3",
    title: "High Performance SEO",
    description: "Rank higher on Google and convert visitors into paying clients faster.",
    btnText: "GET RANKED >",
    badge: "MAX VISIBILITY"
  }
];

function LaptopWrapper({ onOpenModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="laptop-wrapper">
      <div className="laptop-container">
        <div className="laptop-screen-frame">
          <div className="laptop-inner-screen">
            
            {/* Top Mock Header / Navbar */}
            <div className="laptop-header">
              <span className="laptop-brand">{slidesData[currentSlide].tag}</span>
              <div className="laptop-nav">
                <span className="nav-item">HOME</span>
                <span className="nav-item">SERVICES</span>
                <span className="nav-item">PORTFOLIO</span>
              </div>
            </div>

            {/* Slideshow Content Container */}
            <div className="laptop-slides-container">
              {slidesData.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className={`laptop-slide ${index === currentSlide ? 'slide-active' : ''}`}
                >
                  <div className="slide-badge">{slide.badge}</div>
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                  <button 
                    className="slide-btn"
                    onClick={onOpenModal}
                  >
                    {slide.btnText}
                  </button>
                </div>
              ))}
            </div>

            {/* Slide Indicator Dots */}
            <div className="laptop-dots">
              {slidesData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Laptop Hardware Base */}
        <div className="laptop-base">
          <div className="laptop-0notch" />
        </div>
      </div>
    </section>
  );
}

export default LaptopWrapper;