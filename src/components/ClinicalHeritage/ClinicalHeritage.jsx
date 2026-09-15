import React from 'react';
import Link from 'next/link';
import { Activity, Stethoscope, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import './ClinicalHeritage.css';

export default function ClinicalHeritage({ excellenceRef }) {
  return (
    <section className="excellence-section" id="story" ref={excellenceRef}>
      <div className="site-container">
        <div className="excellence-grid">
          
          {/* Left Column: Hospital Heritage & Clinical Excellence */}
          <div className="excellence-left animate-on-scroll">
            <div className="heritage-tag-badge">PIONEERING CLINICAL HERITAGE</div>
            <h2 className="heritage-main-title">
              From Healthcare Excellence to Healthcare Education
            </h2>
            <div className="heritage-accent-bar" aria-hidden="true"></div>
            
            <p className="heritage-lead-text">
              Surannavar Hospital, the first in Belagavi to introduce robotic technology for joint replacement, now takes its legacy of healthcare excellence forward with the Surannavar Group of Institutions.
            </p>
            <p className="heritage-sub-text">
              Creating skilled healthcare professionals through quality education, practical learning and clinical exposure.
            </p>

            {/* 3 Clinical Excellence Highlights */}
            <div className="clinical-highlights-list">
              <div className="highlight-point">
                <div className="highlight-point-icon">
                  <Activity size={18} />
                </div>
                <div className="highlight-point-text">
                  <strong>Robotic Surgery Pioneer:</strong> 1st hospital in Belagavi equipped with advanced robotic joint replacement technology.
                </div>
              </div>

              <div className="highlight-point">
                <div className="highlight-point-icon">
                  <Stethoscope size={18} />
                </div>
                <div className="highlight-point-text">
                  <strong>Multi-Bed ICU & Emergency Exposure:</strong> Direct training across high-dependency wards, diagnostic labs, and active OT suites.
                </div>
              </div>

              <div className="highlight-point">
                <div className="highlight-point-icon">
                  <Award size={18} />
                </div>
                <div className="highlight-point-text">
                  <strong>Bedside Doctor Mentorship:</strong> Direct patient-care learning guided by experienced surgeons and senior consultants.
                </div>
              </div>
            </div>

            {/* Hospital Showcase Box */}
            <div className="hospital-highlight-card">
              <div className="hospital-img-wrap">
                <img
                  src="/images/robotic_hospital.jpg"
                  alt="Surannavar Hospital Robotic Surgery Suite"
                  className="hospital-thumb"
                />
                <div className="hospital-badge">Center of Excellence</div>
              </div>
              <div className="hospital-info">
                <h4>Surannavar Superspeciality Hospital</h4>
                <p>Equipped with robotic joint replacement technology, multi-bed ICUs, and comprehensive clinical departments right here in Belagavi.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Clinical Pathway */}
          <div className="excellence-right animate-on-scroll">
            <div className="heritage-tag-badge pathway-tag-badge">STRUCTURED CLINICAL PATHWAY</div>
            <h2 className="heritage-main-title">
              Translating Hospital Practice into Clinical Mastery
            </h2>
            <div className="heritage-accent-bar pathway-accent-bar" aria-hidden="true"></div>
            
            <p className="heritage-lead-text">
              Our structured clinical pathway ensures every student bridges classroom theory with real patient care through active hospital immersion:
            </p>
            <p className="heritage-sub-text">
              Progressive stages from foundation science to bedside procedure rotations ensure career-ready competence.
            </p>

            {/* Pathway Track Card */}
            <div className="pathway-track-card">
              <div className="pathway-track">
                
                <div className="track-step">
                  <div className="track-indicator">
                    <span className="track-num">01</span>
                    <div className="track-line"></div>
                  </div>
                  <div className="track-content">
                    <h4 className="track-title">Healthcare Expertise</h4>
                    <p className="track-desc">Rooted in years of active superspeciality healthcare delivery and patient trust.</p>
                  </div>
                </div>

                <div className="track-step">
                  <div className="track-indicator">
                    <span className="track-num">02</span>
                    <div className="track-line"></div>
                  </div>
                  <div className="track-content">
                    <h4 className="track-title">Clinical Exposure</h4>
                    <p className="track-desc">Direct hands-on rotations in hospital wards, diagnostic labs, and robotic suites.</p>
                  </div>
                </div>

                <div className="track-step">
                  <div className="track-indicator">
                    <span className="track-num">03</span>
                    <div className="track-line"></div>
                  </div>
                  <div className="track-content">
                    <h4 className="track-title">Practical Learning</h4>
                    <p className="track-desc">Advanced simulation labs, biomechanics workstations, and mentor-led training.</p>
                  </div>
                </div>

                <div className="track-step final-step">
                  <div className="track-indicator">
                    <span className="track-num final-num">
                      <CheckCircle2 size={16} />
                    </span>
                  </div>
                  <div className="track-content">
                    <h4 className="track-title">Future Healthcare Professionals</h4>
                    <p className="track-desc">Competent, compassionate, and career-ready healthcare leaders.</p>
                  </div>
                </div>

              </div>

              <div className="pathway-footer-row">
                <span className="pathway-stage-badge">Pathway: 01 → 02 → 03 → 04</span>
                <Link
                  href="/hospital"
                  className="btn-editorial-cta"
                >
                  Discover Our Story <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
