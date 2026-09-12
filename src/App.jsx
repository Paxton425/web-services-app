import './App.css';
import logo from './assets/logo.png'
import React from 'react';
import { 
  Monitor, 
  Rocket, 
  ShieldCheck, 
  TrendingUp, 
  Headphones, 
  Code, 
  MessageSquare, 
  Globe, 
  PhoneCall,
  ExternalLink,
  Dot
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import CallToActionSection from './components/CallToActionSection';

export default function App() {
  return (
    <div className="sphe-root">
      {/* Ambient Lighting */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* --- TOP NAVBAR --- */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0' }}>
        <div className='logo'>

        </div>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="brand-icon-box" style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
              <Code size={24} color="#030712" style={{ margin: 'auto' }} />
            </div>
            <div>
              <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px' }}>Sphe’s</span>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '700', color: '#22d3ee', letterSpacing: '3px', marginTop: '-2px' }}>
                WEB SERVICES
              </span>
            </div>
          </div>

          <a className='top-nav-phone' href="tel:+27799514260">
            <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneCall size={14} color="#22d3ee" />
              +27 79 951 4260
            </button>
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- DIVIDER BANNER --- */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(15, 23, 42, 0.3)', padding: '16px 0', textAlign: 'center' }}>
        <span style={{ color: '#22d3ee', fontSize: '13px', fontWeight: '800', letterSpacing: '6px', textTransform: 'uppercase' }}>
          WE BUILD <Dot size={22} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0' }} /> YOU GROW
        </span>
      </div>

      {/* --- SERVICES GRID --- */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', margin: '0 0 12px 0' }}>What We Deliver</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px' }}>Engineered for speed, security, and sales.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px' }}>
            
            <div className="glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Monitor color="#22d3ee" size={28} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0' }}>Custom Websites</h3>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>Tailored designs representing your brand accurately.</p>
            </div>

            <div className="glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Rocket color="#22d3ee" size={28} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0' }}>Fast & Responsive</h3>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>Speed-optimized for smartphones, tablets & desktop.</p>
            </div>

            <div className="glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <ShieldCheck color="#22d3ee" size={28} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0' }}>Secure & Reliable</h3>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>Built using best practices to keep your site online 24/7.</p>
            </div>

            <div className="glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <TrendingUp color="#22d3ee" size={28} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0' }}>SEO Optimized</h3>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>Structured to rank on search engines & attract leads.</p>
            </div>

            <div className="glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Headphones color="#22d3ee" size={28} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0' }}>Reliable Support</h3>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>Dedicated support before, during, and after launch.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUE PROP & CALL TO ACTION --- */}
      <CallToActionSection />

      {/* --- FOOTER / CONTACT BAR --- */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: '#020617', padding: '48px 0 24px 0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', paddingBottom: '40px' }}>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '12px', borderRadius: '10px' }}>
                <MessageSquare color="#22d3ee" size={20} />
              </div>
              <div>
                <div style={{ color: '#22d3ee', fontWeight: '700', fontSize: '14px' }}>Let's Talk</div>
                <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '2px' }}>Tell us about your project.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '12px', borderRadius: '10px' }}>
                <MessageSquare color="#22c55e" size={20} />
              </div>
              <div>
                <div style={{ color: '#22d3ee', fontWeight: '700', fontSize: '14px' }}>WhatsApp</div>
                <a href="https://wa.me/27799514260" style={{ color: '#e2e8f0', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>+27 79 951 4260</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '12px', borderRadius: '10px' }}>
                <Globe color="#22d3ee" size={20} />
              </div>
              <div>
                <div style={{ color: '#22d3ee', fontWeight: '700', fontSize: '14px' }}>Website</div>
                <a href="https://www.spheswebservices.com" target="_blank" rel="noreferrer" style={{ color: '#e2e8f0', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>
                  www.spheswebservices.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '12px', borderRadius: '10px' }}>
                <PhoneCall color="#22d3ee" size={20} />
              </div>
              <div>
                <div style={{ color: '#22d3ee', fontWeight: '700', fontSize: '14px' }}>Call / WhatsApp</div>
                <a href="tel:+27799514260" style={{ color: '#e2e8f0', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>+27 79 951 4260</a>
              </div>
            </div>

          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', textAlign: 'center', fontSize: '12px', color: '#64748b', letterSpacing: '2px' }}>
            CREATIVE. &nbsp; RELIABLE. &nbsp; PROFESSIONAL. &nbsp;
            <span style={{ color: '#22d3ee', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '14px', letterSpacing: '0' }}>
              That's Sphe's Web Services.
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}