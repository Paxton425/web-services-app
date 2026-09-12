import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

import './HeroSection.css'
import LaptopWrapper from './LaptopWrapper';
import RequestServiceModal from './RequestServiceModal';
function HeroSection(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalToggleHandler =()=> setIsModalOpen(!isModalOpen);

    return(
      <section className='hero-section'>
        <div className="hero-container">
          
          {/* Headline Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', color: '#22d3ee', fontWeight: '600', marginBottom: '24px' }}>
              <Sparkles size={14} /> High Impact Web Development
            </div>

            <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.15', margin: '0 0 24px 0', letterSpacing: '-1px' }}>
              Beautiful Websites.<br />
              Powerful Solutions.<br />
              <span className="glow-underline">Real Results.</span>
            </h1>

            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.6', maxWidth: '480px', margin: '0 0 32px 0' }}>
              We build custom, modern, fast, and conversion-focused websites that position your brand ahead of the competition.
            </p>

            <div className='hero-button-container'>
              <button className="hero-button btn-primary" onClick={() => modalToggleHandler()}>
                Let's Build Something Amazing <ArrowRight size={18} />
              </button>
            </div>
            {isModalOpen && (<RequestServiceModal setIsModalOpen={setIsModalOpen} />)}
          </div>

          {/* Realistic Laptop Showcase */}
          <LaptopWrapper />
        </div>
      </section>
    );
}

export default HeroSection;