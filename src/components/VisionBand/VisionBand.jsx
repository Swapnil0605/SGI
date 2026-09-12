import React from 'react';
import './VisionBand.css';

export default function VisionBand() {
  return (
    <section className="above-footer-section">
      <div className="site-container">
        <div className="vision-band-grid">
          
          {/* Left Content with Exact Quote & Attribution */}
          <div className="vision-band-left">
            <div className="vision-quote-icon" aria-hidden="true">“</div>
            <p className="vision-band-quote">
              From advancing healthcare to nurturing healthcare professionals, Surannavar Group of Institutions carries forward a vision rooted in healthcare excellence by creating opportunities for the next generation of healthcare professionals to learn, grow and make a meaningful difference.
            </p>
            <span className="vision-band-attribution">
              — SURANNAVAR GROUP OF INSTITUTIONS & SUPERSPECIALITY HOSPITAL
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="vision-band-divider" aria-hidden="true"></div>

          {/* Right Brand & Logo with Original Data */}
          <div className="vision-band-right">
            <div className="vision-brand-card">
              <img
                src="/required pic/main_logo_cropped.png"
                alt="Surannavar Superspeciality Hospital Logo"
                className="vision-brand-logo"
              />
              <div className="vision-brand-tagline">
                <strong>RESTORE • RECOVER • REVIVE</strong>
                <span>Belagavi, Karnataka</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
