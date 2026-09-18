import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Building,
  GraduationCap,
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import './About.css';

export default function About({ openEnquiry }) {
  return (
    <div className="about-page-wrapper">
      
      {/* ----------------- Breadcrumbs Bar ----------------- */}
      <nav className="about-breadcrumbs-bar" aria-label="Breadcrumb">
        <div className="site-container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ul>
        </div>
      </nav>

      {/* ----------------- 1. About Hero Banner ----------------- */}
      <section className="about-hero-banner">
        <img
          src="/images/hero_banner.jpg"
          alt="Surannavar Group of Institutions Campus"
          className="about-hero-bg"
        />
        <div className="about-hero-overlay"></div>

        <div className="site-container">
          <div className="about-hero-content">
            <div className="about-hero-tag">
              <Sparkles size={14} />
              SURANNAVAR GROUP OF INSTITUTIONS
            </div>
            
            <h1 className="about-hero-title">
              About Surannavar Group
            </h1>

            <p className="about-hero-subtitle">
              A healthcare-driven educational institution in Belagavi, committed to academic rigor, clinical excellence, and nurturing compassionate healthcare leaders.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- 2. About Overview Section ----------------- */}
      <section className="about-overview-section" id="overview">
        <div className="site-container">
          <div className="about-overview-container">
            <span className="about-tag-pill">ACADEMIC FOUNDATION</span>
            <h2 className="about-overview-title">
              Committed to Excellence in Healthcare Education
            </h2>
            <div className="about-lead-rule" aria-hidden="true"></div>
            
            <div className="about-hero-lead-box">
              <p className="about-lead-text">
                Surannavar Group of Institutions, an initiative by Surannavar Superspeciality Hospital led by Dr. Jagadish Vittal Surannavar, is founded with a vision to nurture compassionate, skilled, and competent nursing professionals. Backed by a legacy of excellence in orthopedic and trauma care, the college aims to provide quality healthcare education that blends academic rigor with real-world clinical exposure.
              </p>
              <p className="about-secondary-text">
                Our institution is committed to building a strong foundation in theory, ethics, and practice, preparing students to meet the evolving healthcare needs of the society. With expert faculty, modern infrastructure, and hands-on training, we aim to develop future-ready professionals who serve with care, confidence, and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 2. Founder Note / President's Message ----------------- */}
      <section className="about-president-section" id="presidents-message">
        <div className="site-container">
          <div className="president-grid">
            
            {/* Left Column: President Message */}
            <div className="president-left">
              <div className="president-badge-row">
                <span className="president-arrow">→</span>
                <span>President’s Message</span>
              </div>
              <h2 className="president-name">Dr. Jagadish Surannavar</h2>
              <span className="president-role">President, Surannavar College of Nursing</span>

              <div className="president-quote-wrapper">
                <div className="quote-decor-mark" aria-hidden="true">“</div>
                <div className="president-quote-content">
                  <p className="president-quote-para">
                    "As a doctor and surgeon, I’ve witnessed firsthand the critical role nurses play in patient care, healing, and recovery. With the launch of Surannavar College of Nursing, my vision is to create a center of excellence where students not only learn the science of nursing but also the art of empathy and service.
                  </p>
                  <p className="president-quote-para">
                    This college is more than just an academic institution—it is a stepping stone for those who aspire to serve humanity with dedication and integrity. With the right mentorship, training, and infrastructure, we are confident in shaping the next generation of healthcare heroes."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Dr. Jagadish Surannavar Photo */}
            <div className="president-right">
              <div className="president-portrait-card">
                <div className="president-portrait-img-wrap">
                  <img
                    src="/required pic/Dr_Jagadish_Surannavar.webp"
                    alt="Dr. Jagadish Surannavar - President, Surannavar College of Nursing"
                    className="president-portrait-img"
                  />
                </div>
                <div className="president-portrait-caption">
                  <strong className="caption-title">Dr. Jagadish Surannavar</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 3. Vision & Mission Section ----------------- */}
      <section className="about-vm-section" id="vision-mission">
        <div className="site-container">
          <div className="vm-section-header">
            <span className="about-tag-pill">OUR GUIDING PRINCIPLES</span>
            <h2 className="vm-section-title">Vision & Mission</h2>
          </div>

          <div className="vm-grid">
            
            {/* Vision Card */}
            <div className="vm-card">
              <div className="vm-card-title-row">
                <span className="vm-arrow-tag">→</span>
                <h3>Vision</h3>
              </div>
              <ul className="vm-bullets-list">
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    To inspire excellence in nursing education and practice.
                  </span>
                </li>
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    To shape compassionate and competent nursing professionals.
                  </span>
                </li>
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    To become a center of academic and clinical leadership in nursing.
                  </span>
                </li>
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    To contribute to the advancement of healthcare through quality nursing education.
                  </span>
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="vm-card">
              <div className="vm-card-title-row">
                <span className="vm-arrow-tag">→</span>
                <h3>Mission</h3>
              </div>
              <ul className="vm-bullets-list">
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    Deliver ethical, evidence-based nursing education.
                  </span>
                </li>
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    Promote hands-on training through clinical exposure.
                  </span>
                </li>
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    Encourage leadership, research, and community service.
                  </span>
                </li>
                <li className="vm-bullet-item">
                  <div className="vm-bullet-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="vm-bullet-text">
                    Prepare students for global healthcare challenges with confidence.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 4. Accreditations & Recognition Section ----------------- */}
      <section className="about-accred-section" id="accreditations">
        <div className="site-container">
          <div className="accred-grid">
            
            {/* Left Side */}
            <div className="accred-left">
              <h2 className="accred-main-title">
                Recognised. Affiliated.<br />Built on Trust.
              </h2>
            </div>

            {/* Right Side: Respective Logos & Details */}
            <div className="accred-stats-grid">
              
              {/* RGUHS Item */}
              <div className="accred-stat-item">
                <div className="accred-logo-wrap">
                  <img
                    src="/required pic/RGUHS.png"
                    alt="Rajiv Gandhi University of Health Sciences Logo"
                    className="accred-stat-logo"
                  />
                </div>
                <h3 className="accred-stat-title">RGUHS</h3>
                <p className="accred-stat-desc">
                  Affiliated to Rajiv Gandhi University of Health Sciences
                </p>
              </div>

              {/* KNC Item */}
              <div className="accred-stat-item">
                <div className="accred-logo-wrap">
                  <img
                    src="/required pic/KNC_cropped.png"
                    alt="Karnataka Nursing Council Logo"
                    className="accred-stat-logo"
                  />
                </div>
                <h3 className="accred-stat-title">KNC</h3>
                <p className="accred-stat-desc">
                  Recognised by Karnataka Nursing Council
                </p>
              </div>

              {/* INC Item */}
              <div className="accred-stat-item">
                <div className="accred-logo-wrap">
                  <img
                    src="/required pic/INC.png"
                    alt="Indian Nursing Council Logo"
                    className="accred-stat-logo"
                  />
                </div>
                <h3 className="accred-stat-title">INC</h3>
                <p className="accred-stat-desc">
                  Recognised by Indian Nursing Council
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 5. Campus & Faculty Section ----------------- */}
      <section className="about-campus-faculty-section" id="campus-faculty">
        <div className="site-container">
          
          <div className="cf-header-area">
            <span className="cf-section-tag">LEARNING INFRASTRUCTURE & MENTORSHIP</span>
            <h2 className="cf-section-title">
              An Environment Designed for Healthcare Learning
            </h2>
          </div>

          {/* Two Structured Feature Blocks */}
          <div className="cf-pillars-grid">
            
            <div className="cf-pillar-card">
              <div className="cf-pillar-icon-box">
                <Building size={26} />
              </div>
              <div className="cf-pillar-content">
                <h4>Our Campus</h4>
                <p>
                  The institution provides a supportive academic environment with facilities that encourage learning, practical training and professional development.
                </p>
              </div>
            </div>

            <div className="cf-pillar-card">
              <div className="cf-pillar-icon-box">
                <GraduationCap size={26} />
              </div>
              <div className="cf-pillar-content">
                <h4>Our Faculty</h4>
                <p>
                  Our faculty members are committed to guide students with academic learning, practical training and mentorship throughout their academic journey.
                </p>
              </div>
            </div>

          </div>

          {/* Panoramic Campus Visual Showcase with Motto */}
          <div className="cf-showcase-container">
            <div className="cf-panoramic-img-wrap">
              <img
                src="/required pic/Campus_Faculty_section.jpg"
                alt="Surannavar Group Campus & Clinical Faculty"
                className="cf-panoramic-img"
              />
            </div>
            <div className="cf-panoramic-overlay">
              <div className="cf-overlay-left">
                <h3>State-of-the-Art Learning & Hospital Training</h3>
                <p>Modern classrooms, clinical simulation labs, and direct immersion in hospital wards under senior medical guidance.</p>
              </div>
              <div className="cf-motto-badge">
                Learn. Develop. Serve.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- 6. CTA Strip ----------------- */}
      <section className="about-cta-strip">
        <div className="site-container">
          <div className="about-cta-strip-inner">
            <h3>Ready to Begin Your Healthcare Career?</h3>
            <p>
              Admissions are open for academic year 2026–27. Join Surannavar Group of Institutions and gain hands-on clinical mastery.
            </p>
            <div className="about-cta-buttons">
              <Link
                href="/contact#enquiry"
                className="btn btn-primary"
              >
                Apply for Admissions 2026–27
              </Link>
              <Link href="/#colleges" className="btn btn-outline-white">
                Explore Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
