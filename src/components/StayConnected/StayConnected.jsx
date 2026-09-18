import React from 'react';
import Link from 'next/link';
import './StayConnected.css';

export default function StayConnected({ ctaBannerRef }) {
  return (
    <section className="cta-connected-section" id="stay-connected" ref={ctaBannerRef}>
      <div className="site-container">
        <div className="cta-banner-box">
          <div className="cta-banner-content">
            <span className="cta-mini-tag">GET IN TOUCH</span>
            <h2 className="cta-main-title">Stay Connected</h2>
            <p className="cta-main-desc">
              Stay updated with admissions, important dates, campus updates and opportunities at Surannavar Group of Institutions.
            </p>
            <div className="cta-action-buttons">
              <Link
                href="/contact#enquiry"
                className="btn-cta-enquire"
              >
                Enquire Now
              </Link>
              <Link
                href="/contact#contact"
                className="btn-cta-contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
