import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  GraduationCap,
  Calendar,
  Phone,
  MapPin,
  MessageSquareText,
  Clock,
  BookOpen,
  Stethoscope,
  Building2,
  HeartPulse,
  Users,
  Brain,
  Microscope,
  Landmark,
  Activity,
  Radio,
  FileCheck
} from 'lucide-react';
import './NursingCollege.css';

export default function AlliedHealthCollege({ openEnquiry }) {
  const collegeName = 'Surannavar College of Allied Health Sciences';
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const careerDestinations = [
    {
      icon: Building2,
      title: 'Hospitals & Multispecialty Healthcare',
      desc: 'Tertiary hospitals, superspeciality health networks, trauma centers and multispeciality clinics.',
      tag: 'Clinical Facilities'
    },
    {
      icon: Microscope,
      title: 'Medical Laboratories & Diagnostics',
      desc: 'Pathology testing centers, clinical biochemistry units, hematology and molecular diagnostic labs.',
      tag: 'Diagnostic Pathology'
    },
    {
      icon: Radio,
      title: 'Medical Imaging & Diagnostic Services',
      desc: 'Digital X-Ray facilities, CT scan centers, MRI diagnostic suites and ultrasound technology units.',
      tag: 'Radiology & Imaging'
    },
    {
      icon: Activity,
      title: 'Operation Theatre & Surgical Care',
      desc: 'Advanced surgical suites, minimally invasive surgery rooms, cardiac cath labs and OT management.',
      tag: 'Surgical Technology'
    },
    {
      icon: HeartPulse,
      title: 'Anesthesia & Perioperative Care',
      desc: 'Pre-anesthesia clinics, intra-operative patient monitoring and post-anesthesia care units (PACU).',
      tag: 'Perioperative Care'
    },
    {
      icon: Stethoscope,
      title: 'Emergency & Critical Care',
      desc: 'Accident and emergency triage, intensive care units (ICU) and rapid response medical teams.',
      tag: 'Emergency Response'
    }
  ];

  const updateScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const card = sliderRef.current.querySelector('.career-slide-card');
      const cardWidth = card ? card.clientWidth + 24 : 344;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveSlideIndex(Math.min(careerDestinations.length - 1, Math.max(0, index)));
    }
  };

  const slidePrev = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.career-slide-card');
      const cardWidth = card ? card.clientWidth + 24 : 344;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const slideNext = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.career-slide-card');
      const cardWidth = card ? card.clientWidth + 24 : 344;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollToSlide = (idx) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.career-slide-card');
      const cardWidth = card ? card.clientWidth + 24 : 344;
      sliderRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="nursing-page-wrapper">
      
      {/* ----------------- Breadcrumbs Bar ----------------- */}
      <nav className="nursing-breadcrumbs-bar" aria-label="Breadcrumb">
        <div className="site-container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="breadcrumb-item">
              <Link to="/#colleges">Our Colleges</Link>
            </li>
            <li className="breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Surannavar College of Allied Health Sciences
            </li>
          </ul>
        </div>
      </nav>

      {/* ----------------- 1. School Hero Banner ----------------- */}
      <section className="nursing-hero-banner">
        <img
          src="/required pic/Allied Health Sciences.jpg"
          alt="Surannavar College of Allied Health Sciences Campus"
          className="nursing-hero-bg"
        />
        <div className="nursing-hero-overlay"></div>

        <div className="site-container">
          <div className="nursing-hero-content">
            <div className="nursing-tag-badge">
              SURANNAVAR GROUP OF INSTITUTIONS
            </div>
            
            <h1 className="nursing-hero-title">
              Surannavar College Of Allied Health
            </h1>
          </div>
        </div>
      </section>

      {/* ----------------- 1b. School Faculty Banner Strip ----------------- */}
      <section className="school-faculty-strip">
        <div className="site-container">
          <div className="school-faculty-layout">
            
            {/* Left: Brand Name in Serif Italic */}
            <div className="school-faculty-brand">
              <span className="school-faculty-parent">Surannavar Group of Institutions</span>
              <h2 className="school-faculty-title">College of Allied Health</h2>
            </div>

            {/* Vertical Divider */}
            <div className="school-faculty-divider" aria-hidden="true"></div>

            {/* Right: Tagline, Live Pill & Action Buttons */}
            <div className="school-faculty-info">
              <div className="school-faculty-meta">
                <p className="school-faculty-tagline">
                  Specialise in Healthcare. Build Skills That Matter.
                </p>
                <div className="school-faculty-pill">
                  <span className="school-faculty-pulse" aria-hidden="true"></span>
                  <span>Admissions Open (NEET not mandatory for 2026–27)</span>
                </div>
              </div>

              <div className="school-faculty-actions">
                <Link
                  to="/contact#enquiry"
                  className="school-faculty-btn-primary"
                >
                  Apply Now <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact#enquiry"
                  className="school-faculty-btn-secondary"
                >
                  Enquire Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 2. About College Section ----------------- */}
      <section className="nursing-about-section">
        <div className="site-container nursing-about-container">
          <span className="section-eyebrow">EXCELLENCE IN SPECIALISED HEALTHCARE</span>
          <h2 className="nursing-about-title">
            Where Science Meets Specialised Healthcare
          </h2>
          <div className="nursing-accent-bar" aria-hidden="true"></div>

          <div className="nursing-about-body">
            <p className="nursing-lead-para">
              Allied health professionals play an essential role in modern healthcare, supporting diagnosis, treatment, monitoring and patient care alongside doctors, nurses and other healthcare professionals.
            </p>
            <p className="nursing-secondary-para">
              At Surannavar College of Allied Health Sciences, students combine scientific knowledge, technical training and practical learning to develop the skills needed for specialised healthcare practice.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- 3. Programme Key Stats Strip ----------------- */}
      <section className="nursing-stats-strip">
        <div className="site-container">
          <div className="stats-grid">
            
            <div className="stat-column">
              <div className="stat-icon-wrap">
                <Clock size={44} strokeWidth={1.6} className="stat-strip-icon" />
              </div>
              <h3 className="stat-value">3 + 1 Years</h3>
              <p className="stat-desc">Academic learning followed by practical internship experience</p>
            </div>

            <div className="stat-column">
              <div className="stat-icon-wrap">
                <BookOpen size={44} strokeWidth={1.6} className="stat-strip-icon" />
              </div>
              <h3 className="stat-value">12th / PUC Science</h3>
              <p className="stat-desc">Eligibility for students from the Science stream</p>
            </div>

            <div className="stat-column">
              <div className="stat-icon-wrap">
                <Microscope size={44} strokeWidth={1.6} className="stat-strip-icon" />
              </div>
              <h3 className="stat-value">Theory + Practical</h3>
              <p className="stat-desc">Learn through a combination of academic and hands-on training</p>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 4. Sydney-Style Exploration Cards ----------------- */}
      <section className="nursing-explore-section">
        <div className="site-container">
          
          <div className="explore-header-area">
            <span className="section-eyebrow">ACADEMIC & CLINICAL IMMERSION</span>
            <h2 className="explore-section-title">
              Explore Specializations at Surannavar Allied Health
            </h2>
          </div>

          <div className="explore-cards-grid">
            
            {/* Card 1: Medical Laboratory Technology */}
            <div className="explore-pillar-card">
              <div className="card-media-wrap">
                <img
                  src="/required pic/Campus_Faculty_section.jpg"
                  alt="Medical laboratory technology testing and diagnostic procedures"
                  className="card-media-img"
                />
              </div>
              <div className="card-content-wrap">
                <h3 className="card-pillar-title">Medical Laboratory Technology</h3>
                <p className="card-pillar-desc">
                  Explore the science behind laboratory testing, diagnostic procedures and sample analysis.
                </p>
              </div>
            </div>

            {/* Card 2: Imaging Technology */}
            <div className="explore-pillar-card">
              <div className="card-media-wrap">
                <img
                  src="/required pic/why_choose_us.png"
                  alt="Medical imaging technologies and modern diagnostic healthcare"
                  className="card-media-img"
                />
              </div>
              <div className="card-content-wrap">
                <h3 className="card-pillar-title">Imaging Technology</h3>
                <p className="card-pillar-desc">
                  Learn about medical imaging technologies and their role in supporting diagnosis and patient care.
                </p>
              </div>
            </div>

            {/* Card 3: Operation Theatre & Anesthesia Technology */}
            <div className="explore-pillar-card">
              <div className="card-media-wrap">
                <img
                  src="/required pic/Learn_Through_Practice.png"
                  alt="Operation theatre procedures and perioperative surgical equipment"
                  className="card-media-img"
                />
              </div>
              <div className="card-content-wrap">
                <h3 className="card-pillar-title">Operation Theatre & Anesthesia Technology</h3>
                <p className="card-pillar-desc">
                  Develop knowledge of surgical support, operation theatre procedures, equipment and perioperative care.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- 5. Career Opportunities Section (Interactive Slider) ----------------- */}
      <section className="nursing-careers-section">
        <div className="site-container">
          
          <div className="careers-header-row">
            <div className="careers-header-text">
              <span className="section-eyebrow">PROFESSIONAL HORIZONS</span>
              <h2 className="careers-section-title">
                Where Can Allied Health Sciences Take You?
              </h2>
              <p className="careers-lead-text">
                After completing Allied Health Sciences, graduates can explore opportunities in:
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="slider-nav-controls">
              <button
                type="button"
                className={`slider-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={slidePrev}
                aria-label="Previous career destination"
                disabled={!canScrollLeft}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className={`slider-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
                onClick={slideNext}
                aria-label="Next career destination"
                disabled={!canScrollRight}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Slider Viewport & Track */}
          <div
            className="careers-slider-container"
            ref={sliderRef}
            onScroll={updateScrollButtons}
          >
            <div className="careers-slider-track">
              {careerDestinations.map((dest, index) => {
                const IconComponent = dest.icon;
                return (
                  <div key={index} className="career-slide-card">
                    <div className="slide-card-top">
                      <div className="career-icon-box" aria-hidden="true">
                        <IconComponent size={24} strokeWidth={1.75} />
                      </div>
                      <span className="career-tag-pill">{dest.tag}</span>
                    </div>
                    <div className="career-slide-body">
                      <h4 className="career-slide-title">{dest.title}</h4>
                      <p className="career-slide-desc">{dest.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Pagination */}
          <div className="slider-dots-row">
            {careerDestinations.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slider-dot ${idx === activeSlideIndex ? 'active' : ''}`}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- 6. Counsellor Contact Banner & Cards ----------------- */}
      <section className="nursing-contact-section">
        <div className="site-container">
          
          {/* Top Banner Tagline */}
          <div className="contact-banner-box">
            <h3 className="contact-banner-tagline">
              Your Passion. Our Guidance. A Healthier Tomorrow.
            </h3>
            <p className="contact-banner-desc">
              Take the first step toward a prestigious career in specialized allied health sciences. Our admissions team and academic advisors are here to support your journey.
            </p>
          </div>

          {/* 3 Action Cards */}
          <div className="contact-cards-grid">
            
            {/* Action 1: Talk to an Admission Counsellor */}
            <div className="contact-action-card">
              <div className="action-card-icon">
                <MessageSquareText size={24} />
              </div>
              <h4>Talk to an Admission Counsellor</h4>
              <p>
                Have questions about admissions? Our counsellors are here to help you with eligibility, documentation, and course details.
              </p>
              <Link
                to="/contact#enquiry"
                className="contact-card-btn"
              >
                Speak with Counsellor <ArrowRight size={14} />
              </Link>
            </div>

            {/* Action 2: Visit Us */}
            <div className="contact-action-card">
              <div className="action-card-icon">
                <MapPin size={24} />
              </div>
              <h4>Visit Us</h4>
              <p>
                Surannavar College of Allied Health Sciences Campus, Near Surannavar Superspeciality Hospital, Belagavi, Karnataka 590001, India.
              </p>
              <Link
                to="/contact#find-us"
                className="contact-card-btn"
              >
                Campus Location <ArrowRight size={14} />
              </Link>
            </div>

            {/* Action 3: Call Us */}
            <div className="contact-action-card">
              <div className="action-card-icon">
                <Phone size={24} />
              </div>
              <h4>Call Us</h4>
              <p>
                Admissions: +91 8105605163 / +91 98450 00000<br />
                Email: admissions@surannavarinstitutions.edu.in
              </p>
              <a
                href="tel:+918312400000"
                className="contact-card-btn"
              >
                Call Admissions <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
