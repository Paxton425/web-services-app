import { Send, CheckCircle } from 'lucide-react';
import './CallToActionSection.css';

function CallToActionSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div
          className="glass-card cta-grid"
        >
          {/* CTA Box */}
          <div>
            <h2 className="cta-heading">
              Let's turn your ideas into a <br />
              <span className="cta-heading-accent">powerful online presence.</span>
            </h2>
            <p className="cta-paragraph">
              Ready to take your business to the next level? Get in touch today for a tailored quote.
            </p>

            <button className="btn-primary cta-button">
              <Send size={18} />
              LET'S BUILD SOMETHING AMAZING
            </button>
          </div>

          {/* Checklist */}
          <div className="cta-checklist">
            <div className="cta-tagline">
              <span className="cta-tagline-muted">More than a website. </span>
              <span className="cta-tagline-accent">A growth partner.</span>
            </div>

            <div className="cta-check-item">
              <CheckCircle color="#22d3ee" size={22} className="cta-check-icon" />
              <div>
                <strong className="cta-check-title">Affordable Packages</strong>
                <span className="cta-check-desc">Tailored packages for startups and growing brands.</span>
              </div>
            </div>

            <div className="cta-check-item">
              <CheckCircle color="#22d3ee" size={22} className="cta-check-icon" />
              <div>
                <strong className="cta-check-title">Modern Design</strong>
                <span className="cta-check-desc">Clean, conversion-driven aesthetic layouts.</span>
              </div>
            </div>

            <div className="cta-check-item">
              <CheckCircle color="#22d3ee" size={22} className="cta-check-icon" />
              <div>
                <strong className="cta-check-title">Focused on Results</strong>
                <span className="cta-check-desc">Built strategically around your commercial goals.</span>
              </div>
            </div>
          </div>

          {/* Circular Stamp */}
          <div className="cta-stamp-wrapper">
            <div className="badge-circle">
              <div className="badge-content">
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#94a3b8', letterSpacing: '1px' }}>LET'S</span>
                <div style={{ fontSize: '11px', fontWeight: '800', color: '#ffffff' }}>BUILD YOUR</div>
                <div style={{ fontSize: '18px', fontWeight: '900', color: '#22d3ee', margin: '2px 0' }}>SUCCESS</div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#22d3ee' }}>STORY</div>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#ffffff' }}>TOGETHER.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;