import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import './Footer.css';

export default function Footer({ openEnquiry, scrollToTop }) {
  const handleScrollToTop = () => {
    if (scrollToTop) {
      scrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="site-container footer-container">
        
        <div className="footer-top-grid">
          
          {/* Col 1: Brand & Contact */}
          <div className="footer-col col-main">
            <div className="footer-brand">
              <Link to="/" aria-label="Surannavar Group Home">
                <img
                  src="/required pic/main_logo_cropped.png"
                  alt="Surannavar Group"
                  className="footer-logo"
                />
              </Link>
              <p className="footer-tagline">
                Surannavar Group of Institutions brings together quality education, clinical learning and professional development.
              </p>
            </div>
            <div className="footer-contact-details">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Belagavi, Karnataka 590001, India</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>Admissions Helpline: +91 9036654503 / +91 8105605163</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>dr.jsconprincipal@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Our Colleges */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Colleges</h4>
            <ul className="footer-links">
              <li><Link to="/colleges/nursing">Surannavar College of Nursing</Link></li>
              <li><Link to="/colleges/physiotherapy">Surannavar College of Physiotherapy</Link></li>
              <li><Link to="/colleges/allied-health">Surannavar College of Allied Health Sciences</Link></li>
              <li><Link to="/colleges/nursing">B.Sc Nursing (4 Years)</Link></li>
              <li><Link to="/colleges/physiotherapy">Bachelor of Physiotherapy (BPT)</Link></li>
              <li><Link to="/colleges/allied-health">B.Sc Allied Health Sciences</Link></li>
            </ul>
          </div>

          {/* Col 3: Admissions */}
          <div className="footer-col">
            <h4 className="footer-col-title">Admissions 2026–27</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact#enquiry" className="footer-link-btn">
                  Online Application
                </Link>
              </li>
              <li><Link to="/about">About Institutions & Leadership</Link></li>
              <li><a href="/#why-choose">Clinical Facilities & Labs</a></li>
              <li><Link to="/hospital-legacy">Hospital Rotations</Link></li>
              <li><Link to="/fellowship">Fellowship Program</Link></li>
              <li><Link to="/gallery">Campus & Clinical Gallery</Link></li>
              <li><Link to="/contact#contact">Contact & Campuses</Link></li>
            </ul>
          </div>

          {/* Col 4: Recognitions */}
          <div className="footer-col">
            <h4 className="footer-col-title">Recognitions</h4>
            <div className="footer-affiliation-box">
              <span className="affil-title">Affiliated to:</span>
              <p className="affil-name">Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru, Karnataka</p>
              <span className="affil-title">Hospital Partner:</span>
              <p className="affil-name">Surannavar Superspeciality Hospital (1st Robotic Joint Replacement in Belagavi)</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-copy">
            © 2026 Surannavar Group of Institutions. All rights reserved.
          </div>
          
          <button type="button" className="back-to-top-btn" onClick={handleScrollToTop}>
            Back to top <ChevronUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
