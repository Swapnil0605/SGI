import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Building, Award } from 'lucide-react';
import './Hero.css';

export default function Hero({ heroRef, heroCardRef }) {
  return (
    <>
      {/* 1. Banner Section (Sydney Uni Typography Hero) */}
      <section className="hero-banner-section" id="banner" ref={heroRef}>
        {/* Background Image with Clean Dark Gradient Overlay */}
        <div className="hero-media-wrapper">
          <img
            src="/images/hero_banner.png"
            alt="Surannavar Group of Institutions Campus"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Foreground Content: Direct Text and Buttons */}
        <div className="site-container hero-content-container">
          <div className="hero-text-content" ref={heroCardRef}>
            <div className="admissions-badge">
              <span className="badge-pulse"></span>
              <span className="badge-text">Admissions Open | 2026–27</span>
            </div>
            <h1 className="hero-headline">
              Learn Today. <br />
              <span className="highlight-lead">Lead Tomorrow.</span>
            </h1>
            <p className="hero-subheading">
              Shape your future in healthcare with quality education, practical experience and the guidance to make a difference.
            </p>
            <div className="hero-cta-group">
              <a href="#colleges" className="btn btn-primary hero-btn-main">
                Explore Our Colleges
                <ArrowRight size={18} className="btn-arrow" />
              </a>
              <Link
                to="/contact#enquiry"
                className="btn btn-outline-white hero-btn-sec"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Strip (Sydney Uni Explore Bar) */}
      <div className="hero-quick-strip">
        <div className="site-container strip-grid">
          <div className="strip-item">
            <div className="strip-icon-circle">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="strip-title">Premier Healthcare Colleges</span>
              <p className="strip-desc">Nursing, Physiotherapy & Allied Sciences</p>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon-circle">
              <Building size={22} />
            </div>
            <div>
              <span className="strip-title">Hospital Backed Training</span>
              <p className="strip-desc">1st in Belagavi with Robotic Joint Tech</p>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon-circle">
              <Award size={22} />
            </div>
            <div>
              <span className="strip-title">RGUHS Affiliated</span>
              <p className="strip-desc">State & National Regulatory Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
