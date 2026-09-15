import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './Colleges.css';

export default function Colleges({ collegesGridRef, openEnquiry }) {
  return (
    <section className="colleges-section" id="colleges">
      <div className="site-container">
        
        <div className="section-header-center">
          <span className="section-subtitle-badge">DISCOVER YOUR PATH IN HEALTHCARE</span>
          <h2 className="section-title-large">Explore Our Colleges</h2>
          <p className="section-intro-text">
            Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS) and backed by Surannavar Hospital.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="colleges-cards-grid" ref={collegesGridRef}>
          
          {/* Card 1: Nursing */}
          <article className="college-editorial-card" id="college-nursing">
            <div className="card-media-wrap">
              <img
                src="/required pic/nursing_college.jpg"
                alt="Surannavar College of Nursing"
                className="card-img"
              />
              <div className="card-crest-overlay">
                <img
                  src="/required pic/our colleges.png"
                  alt="College Emblem"
                  className="crest-mini"
                />
              </div>
              <span className="card-badge">Admissions 2026–27</span>
            </div>
            <div className="card-body">
              <span className="card-category">COLLEGE OF NURSING</span>
              <h3 className="card-title">
                <Link href="/colleges/nursing">Surannavar College of Nursing</Link>
              </h3>
              <p className="card-description">
                Build a strong foundation in nursing through healthcare knowledge, clinical skills and patient-centred care. Prepare to serve with confidence, competence and compassion.
              </p>
              <div className="card-pills-list">
                <span className="card-pill">Patient-Centred Care</span>
                <span className="card-pill">Bedside Training</span>
                <span className="card-pill">RGUHS Affiliated</span>
              </div>
              <div className="card-footer-link">
                <Link
                  href="/colleges/nursing"
                  className="editorial-card-btn"
                >
                  Explore College & Programmes <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2: Physiotherapy */}
          <article className="college-editorial-card" id="college-physio">
            <div className="card-media-wrap">
              <img
                src="/required pic/Physiotherapy_college.jpg"
                alt="Surannavar College of Physiotherapy"
                className="card-img"
              />
              <span className="card-badge">Admissions 2026–27</span>
            </div>
            <div className="card-body">
              <span className="card-category">COLLEGE OF PHYSIOTHERAPY</span>
              <h3 className="card-title">Surannavar College of Physiotherapy</h3>
              <p className="card-description">
                Learn the science of movement and rehabilitation through practical training and clinical exposure. Develop the skills to support recovery, mobility and better quality of life.
              </p>
              <div className="card-pills-list">
                <span className="card-pill">Rehab Science</span>
                <span className="card-pill">Robotic Post-Op Exposure</span>
                <span className="card-pill">Movement Labs</span>
              </div>
              <div className="card-footer-link">
                <Link
                  href="/colleges/physiotherapy"
                  className="editorial-card-btn"
                >
                  Explore College & Programmes <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3: Allied Health Sciences */}
          <article className="college-editorial-card" id="college-allied">
            <div className="card-media-wrap">
              <img
                src="/required pic/Allied Health Sciences.jpg"
                alt="Surannavar College of Allied Health Sciences"
                className="card-img"
              />
              <span className="card-badge">Admissions 2026–27</span>
            </div>
            <div className="card-body">
              <span className="card-category">ALLIED HEALTH SCIENCES</span>
              <h3 className="card-title">Surannavar College of Allied Health Sciences</h3>
              <p className="card-description">
                Explore specialised healthcare fields that combine scientific, technology and practical skills. Contribute to modern healthcare delivery alongside healthcare professionals.
              </p>
              <div className="card-pills-list">
                <span className="card-pill">Medical Diagnostics</span>
                <span className="card-pill">Lab & OT Technology</span>
                <span className="card-pill">High-Tech Equipment</span>
              </div>
              <div className="card-footer-link">
                <Link
                  href="/colleges/allied-health"
                  className="editorial-card-btn"
                >
                  Explore College & Programmes <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>

        </div>

        {/* Sydney Webpage Style Institutional Pillars Feature */}
        <div className="institutional-pillars-strip">
          <div className="pillar-box">
            <div className="pillar-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="21" cy="21" r="13" />
                <ellipse cx="21" cy="21" rx="6" ry="13" />
                <path d="M8 21h26" />
                <path d="M26 31l9-4.5 9 4.5-9 4.5-9-4.5z" fill="#ffffff" stroke="currentColor" strokeWidth="1.7" />
                <path d="M30 33v4.5c0 1.5 2 2.5 5 2.5s5-1 5-2.5V33" />
                <path d="M44 31v5" />
              </svg>
            </div>
            <h4 className="pillar-heading">Healthcare Legacy</h4>
            <p className="pillar-desc">Backed by an established healthcare ecosystem.</p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M26 7.5c-2.4 0-4.6 1.4-5.5 3.5-1-2.1-3.1-3.5-5.5-3.5-3.6 0-6.5 2.9-6.5 6.5 0 5 8 11.5 12 14.5 4-3 12-9.5 12-14.5 0-3.6-2.9-6.5-6.5-6.5z" />
                <path d="M20.5 11v6" />
                <path d="M17.5 14h6" />
                <path d="M6 31h10l6 4h12a3.5 3.5 0 0 0 0-7h-5" />
              </svg>
            </div>
            <h4 className="pillar-heading">Clinical Exposure</h4>
            <p className="pillar-desc">Learn through practical training and real healthcare environments.</p>
          </div>

          <div className="pillar-box">
            <div className="pillar-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="24" cy="17" r="11" />
                <path d="M20 17l2.5 2.5 5.5-5.5" />
                <path d="M18.5 27.5L14 41l10-4.5 10 4.5-4.5-13.5" />
              </svg>
            </div>
            <h4 className="pillar-heading">Recognized Programmes</h4>
            <p className="pillar-desc">Affiliated to RGUHS and recognised by relevant professional bodies.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
