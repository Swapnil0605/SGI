import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs({ aboutRef }) {
  return (
    <section className="about-us-section" id="about" ref={aboutRef}>
      <div className="site-container">
        
        <div className="about-top-lead">
          <div className="section-tag-pill">ACADEMIC & CLINICAL ENVIRONMENT</div>
          <h2 className="section-title-large">An Environment Built for Healthcare Learning.</h2>
          <p className="about-lead-paragraph">
            Surannavar Group of Institutions brings together quality education, clinical learning and professional development to create an environment where students can learn, practise and grow with confidence.
          </p>
        </div>

        <div className="about-content-grid">
          
          {/* Features list */}
          <div className="about-features-container">
            
            <div className="about-feature-item">
              <div className="feature-arrow-icon">→</div>
              <div className="feature-body">
                <h3 className="feature-title">Experienced Faculty</h3>
                <p className="feature-text">Learn from experienced educators and healthcare professionals.</p>
              </div>
            </div>

            <div className="about-feature-item">
              <div className="feature-arrow-icon">→</div>
              <div className="feature-body">
                <h3 className="feature-title">Modern Labs & Practical Learning</h3>
                <p className="feature-text">Build practical skills through modern laboratories and hands-on training.</p>
              </div>
            </div>

            <div className="about-feature-item">
              <div className="feature-arrow-icon">→</div>
              <div className="feature-body">
                <h3 className="feature-title">Clinical Exposure</h3>
                <p className="feature-text">Gain valuable experience in real-world healthcare environments.</p>
              </div>
            </div>

            <div className="about-feature-item">
              <div className="feature-arrow-icon">→</div>
              <div className="feature-body">
                <h3 className="feature-title">Career Guidance</h3>
                <p className="feature-text">Develop the skills & confidence needed to shape your professional journey.</p>
              </div>
            </div>

            <div className="about-cta-container">
              <Link
                href="/about"
                className="btn btn-primary"
              >
                Find Out More About Us <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* Visual Showcase */}
          <div className="about-visual-showcase">
            <div className="showcase-card-main">
              <img
                src="/images/hero_banner.jpg"
                alt="Surannavar Academic Environment"
                className="showcase-img"
              />
              <div className="showcase-floating-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Committed to Clinical Practice & Ethical Patient Care</span>
              </div>
            </div>
            <div className="showcase-subcard">
              <div className="subcard-icon">
                <Sparkles size={26} />
              </div>
              <div className="subcard-info">
                <strong>Empowering Belagavi & Beyond</strong>
                <p>Nurturing future healthcare champions equipped with empathy, knowledge, and clinical precision.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
