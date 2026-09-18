'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import './Gallery.css';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Surannavar Superspeciality Hospital',
      category: 'Hospital & Infrastructure',
      src: '/required pic/Gallery 3.webp',
      alt: 'Surannavar Superspeciality Hospital exterior facade in Belagavi',
      desc: 'Exterior facade of our multi-speciality hospital featuring 24x7 Emergency and Advanced Ortho & Trauma Centre.'
    },
    {
      id: 2,
      title: 'Executive Hospital Reception',
      category: 'Hospital & Infrastructure',
      src: '/required pic/Gallery 2.webp',
      alt: 'Surannavar Hospital Reception Desk and Patient Assistance',
      desc: 'Welcoming reception and patient assistance lounge at Surannavar Superspeciality Hospital.'
    },
    {
      id: 3,
      title: 'MISSO Robotic Surgery System',
      category: 'Robotic Surgery & OT',
      src: '/required pic/Gallery 7.webp',
      alt: 'Dr. Jagadish Surannavar with MISSO Robotic System in the operation theatre',
      desc: 'Dr. Jagadish Surannavar in the sterile operation theatre with North Karnataka\'s premier robotic joint replacement system.'
    },
    {
      id: 4,
      title: 'Digital Radiodiagnostics Suite',
      category: 'Robotic Surgery & OT',
      src: '/required pic/Gallery 4.webp',
      alt: 'Digital X-Ray and radiodiagnostic workstation at Surannavar Hospital',
      desc: 'High-precision digital X-Ray suite with computerized imaging console for accurate musculoskeletal diagnostics.'
    },
    {
      id: 5,
      title: 'Electrotherapy & Physiotherapy Ward',
      category: 'Clinical Care',
      src: '/required pic/Gallery 1.webp',
      alt: 'Physiotherapy rehabilitation electrotherapy ward and treatment beds',
      desc: 'Specialized physiotherapy recovery ward equipped with advanced neuromuscular stimulation units and therapy beds.'
    },
    {
      id: 6,
      title: 'Orthopedic Clinical Consultation',
      category: 'Clinical Care',
      src: '/required pic/Gallery 5.webp',
      alt: 'Dr. Jagadish Surannavar in consultation room reviewing joint anatomy with patients',
      desc: 'Dr. Jagadish Surannavar conducting comprehensive joint evaluation and diagnostic review with patients.'
    },
    {
      id: 7,
      title: 'Patient Recovery & Rehabilitation',
      category: 'Clinical Care',
      src: '/required pic/Gallery 8.webp',
      alt: 'Dr. Jagadish Surannavar with recovered joint replacement patient',
      desc: 'Patient rehabilitation and mobility consultation showcasing successful joint replacement recovery.'
    },
    {
      id: 8,
      title: 'Surgical Recovery & Multidisciplinary Care',
      category: 'Clinical Care',
      src: '/required pic/Gallery 9.webp',
      alt: 'Clinical team with rehabilitated knee surgery patients in recovery ward',
      desc: 'Multidisciplinary clinical care team with rehabilitated knee surgery patients in the recovery ward.'
    },
    {
      id: 9,
      title: 'Hospital Clinical & Academic Fraternity',
      category: 'Campus & Fraternity',
      src: '/required pic/Gallery 6.webp',
      alt: 'Surannavar Hospital and Institutions doctors, nurses, and administrative staff',
      desc: 'Our dedicated fraternity of orthopedic surgeons, consultant physicians, nursing staff, and educators.'
    },
    {
      id: 10,
      title: 'Institutional Campus & Central Library',
      category: 'Campus & Fraternity',
      src: '/required pic/Campus_Faculty_section.jpg',
      alt: 'Modern academic campus and central library',
      desc: 'Comprehensive library and academic learning environment supporting nursing and healthcare education.'
    },
    {
      id: 11,
      title: 'Clinical Simulation & Skills Laboratory',
      category: 'Campus & Fraternity',
      src: '/required pic/Learn_Through_Practice.png',
      alt: 'Nursing clinical simulation and hands-on laboratory practice',
      desc: 'Advanced nursing and clinical skills simulation lab with interactive training mannequins and monitoring equipment.'
    },
    {
      id: 12,
      title: 'Inpatient Healthcare Ward',
      category: 'Hospital & Infrastructure',
      src: '/required pic/CTA.jpg',
      alt: 'Inpatient recovery ward with privacy curtains and patient monitoring beds',
      desc: 'Clean, modern multi-bed inpatient ward with continuous monitoring and patient care infrastructure.'
    },
    {
      id: 13,
      title: 'College of Physiotherapy',
      category: 'Campus & Fraternity',
      src: '/required pic/Physiotherapy_college.jpg',
      alt: 'Surannavar College of Physiotherapy students and campus',
      desc: 'Students and faculty engaging in movement science, rehabilitation protocols, and clinical studies.'
    },
    {
      id: 14,
      title: 'Allied Health Diagnostic Laboratory',
      category: 'Campus & Fraternity',
      src: '/required pic/Allied Health Sciences.jpg',
      alt: 'Allied Health Sciences high-tech diagnostic training laboratory',
      desc: 'State-of-the-art diagnostic testing and clinical laboratory technology training center.'
    }
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryItems.length]);

  return (
    <div className="gallery-page-wrapper">
      
      {/* ----------------- Breadcrumbs Bar ----------------- */}
      <nav className="gallery-breadcrumbs-bar" aria-label="Breadcrumb">
        <div className="site-container">
          <ul className="gallery-breadcrumb-list">
            <li className="gallery-breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="gallery-breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="gallery-breadcrumb-item active" aria-current="page">
              Gallery
            </li>
          </ul>
        </div>
      </nav>

      {/* ----------------- 1. Hero Section ----------------- */}
      <section className="gallery-hero-section">
        <div className="site-container">
          <div className="gallery-hero-container">
            <span className="gallery-hero-badge">
              <Sparkles size={14} />
              CAMPUS & CLINICAL LIFE
            </span>
            <h1 className="gallery-hero-title">Visual Showcase</h1>
            <p className="gallery-hero-desc">
              Explore our state-of-the-art superspeciality hospital, robotic surgery suites, academic campus, and vibrant healthcare education fraternity in Belagavi.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- 2. Gallery Grid Section ----------------- */}
      <section className="gallery-grid-section">
        <div className="site-container">
          <div className="gallery-cards-grid">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                className="gallery-item-card"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="gallery-media-wrap">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="gallery-media-img"
                    loading="lazy"
                  />
                  <div className="gallery-hover-overlay">
                    <div className="gallery-hover-content">
                      <h3 className="gallery-hover-title">{item.title}</h3>
                      <div className="gallery-hover-meta">
                        <span className="gallery-hover-badge">{item.category}</span>
                        <span className="gallery-hover-icon" aria-label="Enlarge photo">
                          <Maximize2 size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 4. Tour CTA Banner ----------------- */}
      <section className="gallery-cta-section">
        <div className="site-container">
          <div className="gallery-cta-box">
            <div className="gallery-cta-text">
              <span className="gallery-cta-tag">SCHEDULE A VISIT</span>
              <h2 className="gallery-cta-heading">Experience Surannavar in Person</h2>
              <p className="gallery-cta-desc">
                Visit our Belagavi campus and superspeciality hospital. Meet academic advisors, tour the robotic surgery facilities, and explore our laboratories.
              </p>
            </div>
            <div className="gallery-cta-actions">
              <Link href="/contact#find-us" className="btn-gallery-primary">
                Schedule a Campus Visit <ArrowRight size={16} />
              </Link>
              <Link href="/contact#enquiry" className="btn-gallery-secondary">
                Enquire for Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. Interactive Lightbox Modal ----------------- */}
      {lightboxIndex !== null && galleryItems[lightboxIndex] && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery photo"
        >
          <div
            className="lightbox-content-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close photo preview"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            {galleryItems.length > 1 && (
              <button
                type="button"
                className="lightbox-nav-btn prev"
                onClick={() => setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
                aria-label="Previous photo"
              >
                <ChevronLeft size={26} />
              </button>
            )}

            {/* Photo Viewport */}
            <div className="lightbox-img-area">
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].alt}
                className="lightbox-img"
              />
            </div>

            {/* Next Button */}
            {galleryItems.length > 1 && (
              <button
                type="button"
                className="lightbox-nav-btn next"
                onClick={() => setLightboxIndex((prev) => (prev + 1) % galleryItems.length)}
                aria-label="Next photo"
              >
                <ChevronRight size={26} />
              </button>
            )}

            {/* Caption & Category Footer Bar */}
            <div className="lightbox-caption-bar">
              <div className="lightbox-caption-text">
                <h3>{galleryItems[lightboxIndex].title}</h3>
                <p>{galleryItems[lightboxIndex].desc}</p>
              </div>
              <span className="lightbox-tag-pill">
                {galleryItems[lightboxIndex].category} • {lightboxIndex + 1} of {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
