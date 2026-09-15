'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Building2,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Clock,
  MapPin,
  Send
} from 'lucide-react';
import './Career.css';

export default function Career() {
  const [selectedDept, setSelectedDept] = useState('all');

  const openings = [
    {
      id: 1,
      title: 'Assistant Professor / Lecturer in Nursing',
      dept: 'nursing',
      institution: 'Surannavar College of Nursing',
      type: 'Full-Time',
      location: 'Belagavi, Karnataka',
      experience: '2+ Years Teaching / Clinical Experience',
      qualification: 'M.Sc Nursing (Medical-Surgical / OBG / Paediatrics / Community Health)',
      responsibilities: [
        'Deliver classroom lectures, laboratory demonstrations, and clinical bedside instruction.',
        'Supervise nursing students during hospital rotations at Surannavar Superspeciality Hospital.',
        'Participate in academic curriculum development, assessments, and university examinations.'
      ]
    },
    {
      id: 2,
      title: 'Clinical Tutor / Nursing Demonstrator',
      dept: 'nursing',
      institution: 'Surannavar College of Nursing',
      type: 'Full-Time',
      location: 'Belagavi, Karnataka',
      experience: '1+ Years Clinical Experience',
      qualification: 'B.Sc Nursing / Post-Basic B.Sc Nursing with valid KNC/INC registration',
      responsibilities: [
        'Guide undergraduate nursing students through clinical simulation lab practicals.',
        'Assist senior faculty in evaluating clinical logs and patient care case studies.',
        'Coordinate hospital ward postings and procedural skill evaluations.'
      ]
    },
    {
      id: 3,
      title: 'Lecturer / Assistant Professor in Physiotherapy',
      dept: 'physiotherapy',
      institution: 'Surannavar College of Physiotherapy',
      type: 'Full-Time',
      location: 'Belagavi, Karnataka',
      experience: '2+ Years Academic / Clinical',
      qualification: 'MPT (Orthopaedics / Sports / Neurological / Cardiorespiratory Physiotherapy)',
      responsibilities: [
        'Conduct theory and practical sessions for Bachelor of Physiotherapy (BPT) students.',
        'Oversee outpatient rehabilitation postings and orthopedic post-op mobilization clinics.',
        'Mentor students in kinesiology, biomechanics, electrotherapy, and evidence-based practice.'
      ]
    },
    {
      id: 4,
      title: 'Senior Clinical Physiotherapist',
      dept: 'hospital',
      institution: 'Surannavar Superspeciality Hospital',
      type: 'Full-Time',
      location: 'Belagavi, Karnataka',
      experience: '3+ Years Hospital Experience',
      qualification: 'BPT / MPT with experience in Orthopedic Rehabilitation',
      responsibilities: [
        'Manage post-operative robotic joint replacement patient rehabilitation and gait training.',
        'Design customized musculoskeletal recovery programs for sports injury and trauma patients.',
        'Collaborate with orthopedic surgical teams to ensure rapid patient recovery protocols.'
      ]
    },
    {
      id: 5,
      title: 'Faculty / Trainer in Allied Health Sciences',
      dept: 'allied',
      institution: 'Surannavar College of Allied Health Sciences',
      type: 'Full-Time',
      location: 'Belagavi, Karnataka',
      experience: '2+ Years Lab / Teaching',
      qualification: 'M.Sc / B.Sc in Medical Laboratory Technology (MLT), Radiodiagnosis, or OT Tech',
      responsibilities: [
        'Train students in automated hematology, clinical pathology, biochemistry, and microbiology.',
        'Demonstrate radiography, imaging workstations, and sterile operation theatre technology.',
        'Ensure rigorous adherence to diagnostic quality control and hospital laboratory safety standards.'
      ]
    },
    {
      id: 6,
      title: 'Staff Nurse (ICU, OT & Inpatient Care)',
      dept: 'hospital',
      institution: 'Surannavar Superspeciality Hospital',
      type: 'Full-Time (Rotational)',
      location: 'Belagavi, Karnataka',
      experience: '1–5 Years Experience',
      qualification: 'GNM / B.Sc Nursing with valid State Nursing Council registration',
      responsibilities: [
        'Provide high-standard patient care across Surgical ICU, Emergency, and Post-Operative Wards.',
        'Administer medications, monitor vital parameters, and assist doctors during surgical rounds.',
        'Maintain strict infection control and documentation standards.'
      ]
    }
  ];

  const filteredOpenings = selectedDept === 'all'
    ? openings
    : openings.filter(item => item.dept === selectedDept);

  const perks = [
    {
      icon: Building2,
      title: 'Hospital-Backed Ecosystem',
      desc: 'Work in an integrated healthcare and academic environment with direct exposure to advanced robotic surgery, trauma care, and multidisciplinary clinics.'
    },
    {
      icon: GraduationCap,
      title: 'Academic & Professional Growth',
      desc: 'Encouragement for continuous learning, attending medical conferences, conducting clinical research, and pursuing higher qualifications.'
    },
    {
      icon: Users,
      title: 'Collaborative Work Culture',
      desc: 'Join a committed fraternity of medical doctors, nursing educators, senior physiotherapists, and healthcare administrators in Belagavi.'
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      desc: 'Attractive salary packages commensurate with qualification and experience, along with professional stability and medical benefits.'
    }
  ];

  return (
    <div className="career-page-wrapper">
      
      {/* ----------------- Breadcrumbs Bar ----------------- */}
      <nav className="career-breadcrumbs-bar" aria-label="Breadcrumb">
        <div className="site-container">
          <ul className="career-breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li className="active" aria-current="page">Careers</li>
          </ul>
        </div>
      </nav>

      {/* ----------------- 1. Hero Section ----------------- */}
      <section className="career-hero-section">
        <div className="site-container career-hero-container">
          <div className="career-hero-content">
            <span className="career-hero-badge">
              <Sparkles size={14} />
              JOIN OUR FRATERNITY
            </span>
            <h1 className="career-hero-title">
              Build a Rewarding Career in Healthcare & Education
            </h1>
            <p className="career-hero-desc">
              Surannavar Group of Institutions and Surannavar Superspeciality Hospital invite passionate healthcare educators, medical faculty, nursing specialists, and clinical professionals to shape the future of healthcare.
            </p>
            <div className="career-hero-ctas">
              <a href="#openings" className="btn-career-primary">
                View Open Positions <ArrowRight size={16} />
              </a>
              <a href="#apply" className="btn-career-secondary">
                Submit Your CV
              </a>
            </div>
          </div>
          <div className="career-hero-visual">
            <div className="career-img-frame">
              <img
                src="/required pic/Build_Your_Career.png"
                alt="Healthcare professionals building careers at Surannavar Group"
                className="career-hero-img"
              />
              <div className="career-stat-badge">
                <Briefcase size={20} />
                <div>
                  <strong>Surannavar Fraternity</strong>
                  <span>Academic & Clinical Excellence in Belagavi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 2. Why Join Us ----------------- */}
      <section className="career-why-section">
        <div className="site-container">
          <div className="career-section-header">
            <span className="section-eyebrow">WHY WORK WITH US</span>
            <h2 className="section-main-heading">
              Empowering Healthcare Educators & Professionals
            </h2>
            <p className="section-subtext">
              We provide a supportive, technology-enabled environment where talent thrives, careers advance, and patient care meets educational integrity.
            </p>
          </div>

          <div className="career-perks-grid">
            {perks.map((perk, idx) => {
              const IconComp = perk.icon;
              return (
                <div key={idx} className="perk-card">
                  <div className="perk-icon-circle">
                    <IconComp size={24} />
                  </div>
                  <h3 className="perk-title">{perk.title}</h3>
                  <p className="perk-desc">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- 3. Current Openings ----------------- */}
      <section className="career-openings-section" id="openings">
        <div className="site-container">
          <div className="career-section-header">
            <span className="section-eyebrow">OPPORTUNITIES</span>
            <h2 className="section-main-heading">Current Job Openings</h2>
            <p className="section-subtext">
              Explore our current teaching and healthcare roles across colleges and the hospital.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="openings-filter-row">
            {[
              { id: 'all', label: 'All Departments' },
              { id: 'nursing', label: 'Nursing Faculty' },
              { id: 'physiotherapy', label: 'Physiotherapy Faculty' },
              { id: 'allied', label: 'Allied Health Sciences' },
              { id: 'hospital', label: 'Hospital & Clinical Staff' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`filter-pill-btn ${selectedDept === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedDept(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Openings Grid */}
          <div className="openings-cards-grid">
            {filteredOpenings.map(job => (
              <article key={job.id} className="job-card">
                <div className="job-card-header">
                  <div>
                    <span className="job-inst-tag">{job.institution}</span>
                    <h3 className="job-title">{job.title}</h3>
                  </div>
                  <span className="job-type-pill">{job.type}</span>
                </div>

                <div className="job-meta-row">
                  <span className="meta-item">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="meta-item">
                    <Clock size={14} /> {job.experience}
                  </span>
                </div>

                <div className="job-qualification-box">
                  <strong>Eligibility:</strong>
                  <p>{job.qualification}</p>
                </div>

                <div className="job-responsibilities-box">
                  <strong>Key Responsibilities:</strong>
                  <ul>
                    {job.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-card-footer">
                  <a
                    href={`mailto:admissions@surannavarinstitutions.edu.in?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="btn-job-apply"
                  >
                    Apply for Position <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 4. General Application Section ----------------- */}
      <section className="career-apply-section" id="apply">
        <div className="site-container">
          <div className="career-apply-box">
            <div className="career-apply-text">
              <span className="career-apply-tag">SEND YOUR APPLICATION</span>
              <h2>Don't See a Matching Role?</h2>
              <p>
                We are always seeking talented educators, medical specialists, and administrative professionals. Submit your CV and portfolio to our HR department, and we will contact you when a relevant vacancy arises.
              </p>
              
              <div className="career-contact-items">
                <div className="career-contact-item">
                  <Mail size={18} />
                  <div>
                    <span className="contact-label">Email Your Resume to:</span>
                    <a href="mailto:admissions@surannavarinstitutions.edu.in">admissions@surannavarinstitutions.edu.in</a>
                  </div>
                </div>
                <div className="career-contact-item">
                  <Phone size={18} />
                  <div>
                    <span className="contact-label">HR / Administrative Helpline:</span>
                    <a href="tel:+918312454539">0831-2454539</a> / <a href="tel:+918971837363">+91 89718 37363</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-apply-action-card">
              <h3>Quick Application Submission</h3>
              <p>You can also use our dedicated contact form to get in touch with our recruitment team directly.</p>
              <div className="apply-card-buttons">
                <a
                  href="mailto:admissions@surannavarinstitutions.edu.in?subject=General Career Application - Surannavar Group"
                  className="btn-apply-email-primary"
                >
                  <Send size={16} /> Email Your Resume
                </a>
                <Link href="/contact#enquiry" className="btn-apply-form-secondary">
                  Open Contact & Enquiry Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
