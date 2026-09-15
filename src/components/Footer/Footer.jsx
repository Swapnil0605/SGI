'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { useModal } from '../../../context/ModalContext';

export default function Footer({ openEnquiry: propOpenEnquiry, scrollToTop }) {
  const modalContext = useModal();
  const openEnquiry = propOpenEnquiry || modalContext?.openEnquiry;

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
              <Link href="/" aria-label="Surannavar Group Home">
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
              <li><Link href="/colleges/nursing">Surannavar College of Nursing</Link></li>
              <li><Link href="/colleges/physiotherapy">Surannavar College of Physiotherapy</Link></li>
              <li><Link href="/colleges/allied-health">Surannavar College of Allied Health Sciences</Link></li>
              <li><Link href="/colleges/nursing">B.Sc Nursing (4 Years)</Link></li>
              <li><Link href="/colleges/physiotherapy">Bachelor of Physiotherapy (BPT)</Link></li>
              <li><Link href="/colleges/allied-health">B.Sc Allied Health Sciences</Link></li>
            </ul>
          </div>

          {/* Col 3: Admissions */}
          <div className="footer-col">
            <h4 className="footer-col-title">Admissions 2026–27</h4>
            <ul className="footer-links">
              <li>
                <Link href="/contact#enquiry" className="footer-link-btn">
                  Online Application
                </Link>
              </li>
              <li><Link href="/about">About Institutions & Leadership</Link></li>
              <li><Link href="/#why-choose">Clinical Facilities & Labs</Link></li>
              <li><Link href="/hospital">Hospital Rotations</Link></li>
              <li><Link href="/fellowship">Fellowship Program</Link></li>
              <li><Link href="/gallery">Campus & Clinical Gallery</Link></li>
              <li><Link href="/contact#contact">Contact & Campuses</Link></li>
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
