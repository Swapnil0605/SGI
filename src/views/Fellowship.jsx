'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Award,
  Clock,
  UserCheck,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  Activity,
  Stethoscope,
  Scissors,
  ShieldCheck,
  GraduationCap,
  ExternalLink,
  Quote,
  Layers,
  HelpCircle
} from 'lucide-react';
import './Fellowship.css';

export default function Fellowship({ openEnquiry }) {
  const [activeTab, setActiveTab] = useState('arthroscopy');
  const [activeFaq, setActiveFaq] = useState(0);

  // Key highlights
  const infoHighlights = [
    { label: 'Program Duration', val: '6 Months', detail: 'Intensive full-time surgical curriculum', icon: Clock },
    { label: 'Specialization', val: 'Arthroscopy & Arthroplasty', detail: 'Advanced Joint Reconstruction', icon: Activity },
    { label: 'Training Level', val: 'Hands-on Operative', detail: 'Independent procedures under mentorship', icon: Scissors },
    { label: 'Mentorship', val: 'Dr. Jagadish Surannavar', detail: 'Pioneer Orthopedic & Robotic Surgeon', icon: UserCheck },
    { label: 'Eligibility', val: 'MS Ortho / DNB Ortho', detail: 'Recognized post-graduate degree', icon: GraduationCap },
    { label: 'Certification', val: 'Hospital Certified', detail: 'Awarded by Surannavar Hospital', icon: Award },
  ];

  // Why Choose Fellowship Pillars
  const whyChoosePoints = [
    {
      num: '01',
      title: 'High Surgical Volume & Hands-On Exposure',
      desc: 'Fellows actively scrub into daily high-volume orthopedic operating lists, progressing from first assistant to performing complex procedures independently under faculty supervision.'
    },
    {
      num: '02',
      title: 'Advanced Arthroscopic Procedures',
      desc: 'Comprehensive training in diagnostic and therapeutic arthroscopy across knee, shoulder, and hip joints using high-definition visualization systems and modern fixation techniques.'
    },
    {
      num: '03',
      title: 'Primary & Complex Joint Replacement',
      desc: 'Extensive operative exposure to Total Knee Replacement (TKR) and Total Hip Replacement (THR), encompassing conventional, minimally invasive, and complex biomechanical reconstructions.'
    },
    {
      num: '04',
      title: 'Robotic-Assisted Surgery Exposure',
      desc: 'Gain insight and hands-on exposure with the cutting-edge MISSO Robotic Joint Replacement system, experiencing next-generation precision bone resection and soft tissue balancing.'
    },
    {
      num: '05',
      title: 'Complex Trauma & Peri-Articular Fractures',
      desc: 'Learn advanced open reduction and internal fixation (ORIF) techniques for challenging peri-articular fractures, intra-articular trauma, and poly-trauma stabilization.'
    },
    {
      num: '06',
      title: 'Pre-Operative Planning & Digital Templating',
      desc: 'Master digital radiographic templating, deformity analysis, component sizing, and customized surgical planning tailored to each patient\'s unique anatomical geometry.'
    },
    {
      num: '07',
      title: 'Post-Operative Care & Fast-Track Rehabilitation',
      desc: 'Active involvement in post-surgical ward rounds, pain management protocols, wound healing oversight, and coordinated recovery with specialized physiotherapy teams.'
    },
    {
      num: '08',
      title: 'Academic Sessions & Case Discussions',
      desc: 'Weekly journal clubs, clinical mortality-morbidity audits, complex case presentations, and support for clinical research and surgical publications.'
    }
  ];

  // Training Exposure Categories
  const surgicalDomains = {
    arthroscopy: {
      title: 'Arthroscopic Procedures',
      subtitle: 'Minimally Invasive Joint Reconstruction',
      badge: 'High Precision Surgery',
      image: '/required pic/Gallery 7.webp',
      imageAlt: 'Surgical team in operation theatre with advanced visualization',
      procedures: [
        {
          joint: 'Knee Arthroscopy',
          items: [
            'Anterior Cruciate Ligament (ACL) Reconstruction (Hamstring / Bone-Patellar Tendon-Bone)',
            'Posterior Cruciate Ligament (PCL) & Multi-ligament Knee Reconstructions',
            'Meniscal Balancing, Inside-Out & All-Inside Meniscal Suture Repair',
            'Chondral Defect Management, Microfracture & Cartilage Preservation Protocols'
          ]
        },
        {
          joint: 'Shoulder Arthroscopy',
          items: [
            'Arthroscopic Rotator Cuff Repair (Single & Double Row Fixation)',
            'Bankart Repair & Capsulolabral Reconstruction for Shoulder Instability',
            'Subacromial Decompression & Acromioplasty',
            'SLAP Lesion Debridement & Biceps Tenodesis / Tenotomy'
          ]
        },
        {
          joint: 'Hip Arthroscopy',
          items: [
            'Diagnostic Hip Arthroscopy & Synovial Biopsy',
            'Acetabular Labral Repair & Debridement',
            'Femoroacetabular Impingement (FAI) Cam/Pincer Resection Osteochondroplasty'
          ]
        }
      ]
    },
    arthroplasty: {
      title: 'Joint Replacement Surgeries',
      subtitle: 'Total Joint Arthroplasty & Robotic Precision',
      badge: 'Reconstructive Excellence',
      image: '/required pic/Gallery 8.webp',
      imageAlt: 'Joint replacement recovery and clinical assessment',
      procedures: [
        {
          joint: 'Total Knee Replacement (TKR)',
          items: [
            'Conventional Kinematic & Mechanical Alignment Total Knee Arthroplasty',
            'Exposure to Robotic-Assisted Knee Replacement (MISSO Robotic System)',
            'Cruciate Retaining (CR) vs. Posterior Stabilized (PS) Implant Selection',
            'Soft Tissue Balancing in Severe Varus, Valgus & Flexion Contractures'
          ]
        },
        {
          joint: 'Total Hip Replacement (THR)',
          items: [
            'Uncemented Press-Fit & Cemented Femoral/Acetabular Fixation Approaches',
            'Direct Lateral and Posterior Surgical Approaches to the Hip',
            'Bearing Couple Selection: Ceramic-on-Polyethylene & Ceramic-on-Ceramic',
            'Management of Avascular Necrosis (AVN) and Severe Secondary Osteoarthritis'
          ]
        },
        {
          joint: 'Shoulder Arthroplasty',
          items: [
            'Hemiarthroplasty for Complex Proximal Humerus Fractures',
            'Total Anatomical Shoulder Arthroplasty',
            'Reverse Shoulder Arthroplasty (RSA) for Cuff Tear Arthropathy'
          ]
        }
      ]
    },
    traumaRevisions: {
      title: 'Trauma & Complex Revisions',
      subtitle: 'High-Energy Reconstructions & Complex Salvage',
      badge: 'Complex Surgical Cases',
      image: '/required pic/Gallery 4.webp',
      imageAlt: 'Digital radiodiagnostics and surgical planning suite',
      procedures: [
        {
          joint: 'Complex & Revision Cases',
          items: [
            'Evaluation & Surgical Staging of Painful/Failing Joint Replacements',
            'Component Extraction Techniques & Bone Defect Reconstruction using Augments',
            'Constraint Progression: Constrained Condylar Knee (CCK) & Hinged Implants',
            'Revision Ligament Reconstructions and Meniscal Root Repair'
          ]
        },
        {
          joint: 'Peri-Articular Trauma Surgeries',
          items: [
            'Distal Femur & Proximal Tibia Locking Plate Osteosynthesis',
            'Bicolumnar Acetabular & Pelvic Ring Stabilization',
            'Intra-Articular Pilon Fractures & Complex Shoulder/Elbow Trauma',
            'Management of Acute Septic Arthritis & Musculoskeletal Infections'
          ]
        },
        {
          joint: 'Pre- & Post-Op Patient Continuum',
          items: [
            'Weekly Pre-Operative Templating & Case Discussion Rounds',
            'Multidisciplinary Inpatient ICU & High-Dependency Unit Management',
            'Enhanced Recovery After Surgery (ERAS) Mobilization Protocols',
            'Long-term Outpatient Follow-up & Joint Registry Documentation'
          ]
        }
      ]
    }
  };

  // Authentic Fellow Testimonials with images from required pic
  const fellows = [
    {
      name: 'Dr. Kunal',
      qualification: 'Orthopedic Surgeon',
      tenure: 'Completed 6-Month Fellowship',
      image: '/required pic/Dr Kunal.jpeg',
      achievement: 'Mastery in Independent Arthroscopy',
      quote: 'The fellowship at Surannavar Hospital was truly a life-changing experience. Under Dr. Jagadish Surannavar\'s clinical teaching methods and mentorship principles, I gained immense precision and the confidence to perform arthroscopic procedures independently early in my career.'
    },
    {
      name: 'Dr. Sourabh Singh',
      alias: 'Dr. Sourab',
      qualification: 'Orthopedic Surgeon',
      tenure: 'Completed Fellowship in Arthroscopy & Arthroplasty',
      image: '/required pic/Dr Sourab.jpeg',
      achievement: 'Advanced Joint Arthroplasty Proficiency',
      quote: 'Completing my fellowship under Dr. Jagadish Surannavar was a pivotal turning point in my surgical career. He is an extraordinary master surgeon and a mentor who is deeply invested in each student\'s clinical judgment and operative growth. The hands-on exposure across primary and complex cases is unparalleled.'
    },
    {
      name: 'Dr. Shakib',
      qualification: 'MBBS, MS Ortho',
      tenure: 'Completed 9-Month Fellowship | Practicing in Mysore',
      image: '/required pic/Dr. Shakib.jpeg',
      achievement: '45 Knee & 15+ Hip Replacements Performed',
      quote: 'The fellowship provided comprehensive hands-on operative training across Trauma, Arthroplasty, and Arthroscopy. I had the privilege to independently perform 45 total knee replacements and over 15 total hip replacements under supervision. It completely transformed my surgical acumen and made me an independent, confident surgeon.'
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'Who is eligible to apply for the Fellowship program?',
      a: 'The fellowship is open to qualified MS Orthopaedic surgeons or postgraduate doctors holding a recognized DNB Orthopaedics qualification from a recognized university or medical council. Candidates must possess a valid Medical Council registration and demonstrate a dedicated commitment to reconstructive orthopedic surgery.'
    },
    {
      q: 'What is the duration of the Fellowship in Arthroscopy & Joint Replacement?',
      a: 'The core fellowship is a structured, intensive 6-month full-time residency. In select instances, specialized advanced rotations can extend up to 9 months based on candidate goals and clinical caseload requirements.'
    },
    {
      q: 'Is the fellowship program recognized and certified?',
      a: 'Yes. Upon successful completion of the training period, clinical evaluations, and fulfilling surgical logbook criteria, candidates are awarded an official Certificate of Fellowship in Arthroscopy & Joint Replacement Surgery from Surannavar Multispeciality Hospital.'
    },
    {
      q: 'What surgeries and procedures will fellows be exposed to?',
      a: 'Fellows receive high-volume hands-on exposure to Knee, Shoulder, and Hip Arthroscopy; Total Knee Replacement (TKR) including conventional and robotic-assisted surgical platforms; Total Hip Replacement (THR); Shoulder Arthroplasty; complex peri-articular trauma surgeries; and revision joint reconstructions.'
    },
    {
      q: 'Who will be mentoring the fellows during the program?',
      a: 'The program is directed and mentored by Dr. Jagadish Surannavar, Chief Orthopedic & Joint Replacement Surgeon at Surannavar Superspeciality Hospital, renowned for pioneering robotic joint replacements in North Karnataka, supported by experienced consultant orthopedic faculty.'
    },
    {
      q: 'How do candidates apply for the fellowship?',
      a: 'Interested candidates should email their updated Curriculum Vitae (CV) along with a cover letter outlining their surgical background and fellowship interests directly to surannavarhospital@gmail.com, or reach out to the hospital administration at 0831-2454539 / +91 89718 37363.'
    }
  ];

  return (
    <div className="fellowship-page">
      
      {/* ----------------- Breadcrumb Bar ----------------- */}
      <nav className="fellowship-breadcrumbs" aria-label="Breadcrumb">
        <div className="site-container">
          <ul className="breadcrumb-trail">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li><Link href="/hospital">Hospital Legacy</Link></li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li className="active" aria-current="page">Fellowship in Arthroscopy & Arthroplasty</li>
          </ul>
        </div>
      </nav>

      {/* ----------------- 1. Fellowship Hero Section ----------------- */}
      <section className="fellowship-hero-section">
        <div className="fellowship-hero-bg-overlay" />
        <div className="site-container">
          <div className="fellowship-hero-container">
          <div className="fellowship-hero-content">
            <div className="fellowship-hero-badge-wrap">
              <span className="fellowship-pill-badge">
                <Sparkles size={14} /> POSTGRADUATE ORTHOPEDIC TRAINING
              </span>
              <span className="fellowship-pill-subbadge">
                SURANNAVAR SUPERSPECIALITY HOSPITAL
              </span>
            </div>

            <h1 className="fellowship-hero-title">
              Fellowship in Arthroscopy & Joint Replacement Surgery
            </h1>

            <p className="fellowship-hero-lead">
              An intensive, hands-on clinical and operative fellowship designed for qualified MS/DNB Orthopaedic surgeons seeking clinical mastery, cutting-edge surgical exposure, and direct mentorship in minimally invasive arthroscopy and complex reconstructive joint replacement.
            </p>

            <div className="fellowship-hero-metrics">
              <div className="hero-metric-item">
                <strong>6 Months</strong>
                <span>Intensive Duration</span>
              </div>
              <div className="hero-metric-divider" />
              <div className="hero-metric-item">
                <strong>1-on-1</strong>
                <span>Direct Surgical Mentorship</span>
              </div>
              <div className="hero-metric-divider" />
              <div className="hero-metric-item">
                <strong>Robotic & OT</strong>
                <span>Advanced Surgical Suites</span>
              </div>
            </div>

            <div className="fellowship-hero-ctas">
              <a href="#apply" className="btn-fellowship-primary">
                Apply for Fellowship <ArrowRight size={16} />
              </a>
              <a href="#curriculum" className="btn-fellowship-secondary">
                Explore Curriculum & Procedures
              </a>
            </div>
          </div>

          <div className="fellowship-hero-visual">
            <div className="hero-image-frame">
              <img
                src="/required pic/Gallery 7.webp"
                alt="Dr. Jagadish Surannavar with MISSO Robotic System in the operation theatre"
                className="hero-frame-img"
              />
              <div className="hero-floating-card">
                <div className="card-icon-bubble">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className="floating-card-title">North Karnataka Pioneer</span>
                  <span className="floating-card-sub">Robotic Joint Replacement & Arthroscopy Centre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ----------------- 2. Fellowship Information Highlight Band ----------------- */}
      <section className="fellowship-info-strip" aria-label="Program Highlights">
        <div className="site-container">
          <div className="info-strip-grid">
            {infoHighlights.map((info, idx) => {
              const IconComp = info.icon;
              return (
                <div key={idx} className="info-strip-card">
                  <div className="info-icon-box">
                    <IconComp size={22} />
                  </div>
                  <div className="info-text-box">
                    <span className="info-label">{info.label}</span>
                    <strong className="info-val">{info.val}</strong>
                    <span className="info-detail">{info.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- 3. Fellowship Overview ----------------- */}
      <section className="fellowship-overview-section" id="overview">
        <div className="site-container">
          <div className="overview-editorial-grid">
            <div className="overview-text-col">
              <span className="section-eyebrow">PROGRAM OVERVIEW</span>
              <h2 className="section-main-heading">
                Where Surgical Precision Meets Master Mentorship
              </h2>
              <p className="overview-lead-text">
                The Fellowship Program in Arthroscopy and Joint Replacement Surgery at Surannavar Superspeciality Hospital provides a rigorous balance of theoretical learning, clinical diagnostic practice, and intensive operative exposure.
              </p>
              <p className="overview-body-text">
                Under the direct leadership of Dr. Jagadish Surannavar, candidates bridge the gap between textbook orthopedics and confident operative independence. Fellows are not passive observers—they actively assist and perform surgeries under expert supervision, gaining fluency in patient diagnosis, pre-operative planning, intricate intra-operative decision making, and longitudinal post-operative care.
              </p>
              
              <div className="overview-feature-pills">
                <div className="feature-pill">
                  <CheckCircle2 size={16} />
                  <span>High-volume reconstructive case exposure</span>
                </div>
                <div className="feature-pill">
                  <CheckCircle2 size={16} />
                  <span>Robotic-assisted joint replacement protocols</span>
                </div>
                <div className="feature-pill">
                  <CheckCircle2 size={16} />
                  <span>Dedicated arthroscopic reconstruction suites</span>
                </div>
                <div className="feature-pill">
                  <CheckCircle2 size={16} />
                  <span>Structured academic seminars & case audits</span>
                </div>
              </div>

              <div className="overview-quote-card">
                <Quote size={24} className="quote-icon" />
                <p>
                  "Our mission is to train the next generation of orthopedic surgeons with precision, clinical judgment, and unwavering ethical practice, enabling them to lead arthroplasty and arthroscopy centers anywhere in the country."
                </p>
                <div className="quote-author">
                  <strong>Dr. Jagadish Surannavar</strong>
                  <span>Chief Mentor & Orthopedic Surgeon</span>
                </div>
              </div>
            </div>

            <div className="overview-visual-col">
              <div className="overview-image-stack">
                <div className="image-stack-main">
                  <img
                    src="/required pic/Gallery 5.webp"
                    alt="Dr. Jagadish Surannavar reviewing clinical joint anatomy"
                    className="overview-img-primary"
                  />
                  <span className="image-caption-tag">Clinical Consultation & Diagnostics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. Why Choose Our Fellowship? ----------------- */}
      <section className="fellowship-why-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-eyebrow">WHY SURANNAVAR FELLOWSHIP?</span>
            <h2 className="section-main-heading">
              Key Pillars of Our Fellowship Curriculum
            </h2>
            <p className="section-subtext">
              Engineered to transform post-graduate knowledge into independent, advanced operative capability across arthroscopy, joint replacement, and complex trauma.
            </p>
          </div>

          <div className="why-choose-editorial-grid">
            {whyChoosePoints.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="card-num-header">
                  <span className="num-pill">{item.num}</span>
                  <div className="num-line" />
                </div>
                <h3 className="card-pillar-title">{item.title}</h3>
                <p className="card-pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. Training & Surgical Exposure ----------------- */}
      <section className="fellowship-exposure-section" id="curriculum">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-eyebrow">OPERATIVE EXPOSURE</span>
            <h2 className="section-main-heading">
              Comprehensive Surgical & Clinical Domains
            </h2>
            <p className="section-subtext">
              Fellows receive structured operative exposure across three core surgical disciplines under the direct guidance of senior faculty.
            </p>
          </div>

          {/* Interactive Exposure Tabs */}
          <div className="exposure-tabs-nav" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'arthroscopy'}
              className={`exposure-tab-btn ${activeTab === 'arthroscopy' ? 'active' : ''}`}
              onClick={() => setActiveTab('arthroscopy')}
            >
              <Activity size={18} />
              <span>Arthroscopic Procedures</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'arthroplasty'}
              className={`exposure-tab-btn ${activeTab === 'arthroplasty' ? 'active' : ''}`}
              onClick={() => setActiveTab('arthroplasty')}
            >
              <Scissors size={18} />
              <span>Joint Replacement (TKR & THR)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'traumaRevisions'}
              className={`exposure-tab-btn ${activeTab === 'traumaRevisions' ? 'active' : ''}`}
              onClick={() => setActiveTab('traumaRevisions')}
            >
              <Layers size={18} />
              <span>Trauma, Revisions & Clinical Care</span>
            </button>
          </div>

          {/* Tab Content Display */}
          {surgicalDomains[activeTab] && (
            <div className="exposure-content-panel">
              <div className="exposure-panel-grid">
                <div className="exposure-procedures-col">
                  <div className="panel-header-wrap">
                    <span className="panel-badge">{surgicalDomains[activeTab].badge}</span>
                    <h3 className="panel-title">{surgicalDomains[activeTab].title}</h3>
                    <p className="panel-subtitle">{surgicalDomains[activeTab].subtitle}</p>
                  </div>

                  <div className="procedures-list-grouped">
                    {surgicalDomains[activeTab].procedures.map((proc, pIdx) => (
                      <div key={pIdx} className="procedure-subgroup">
                        <h4 className="joint-category-title">
                          <CheckCircle2 size={16} className="title-bullet-icon" />
                          {proc.joint}
                        </h4>
                        <ul className="procedure-items-list">
                          {proc.items.map((it, itIdx) => (
                            <li key={itIdx} className="procedure-item-row">
                              <span className="dot-marker" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="exposure-media-col">
                  <div className="exposure-image-card">
                    <img
                      src={surgicalDomains[activeTab].image}
                      alt={surgicalDomains[activeTab].imageAlt}
                      className="exposure-card-img"
                    />
                    <div className="exposure-card-footer">
                      <strong>Surannavar Superspeciality Hospital</strong>
                      <span>Advanced Orthopedic Surgical Suite & Diagnostics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ----------------- 6. Fellowship Mentor Section ----------------- */}
      <section className="fellowship-mentor-section" id="mentor">
        <div className="site-container">
          <div className="mentor-profile-card">
            <div className="mentor-photo-wrap">
              <div className="mentor-img-frame">
                <img
                  src="/required pic/Dr_Jagadish_Surannavar.webp"
                  alt="Dr. Jagadish Surannavar - Fellowship Mentor and Chief Orthopedic Surgeon"
                  className="mentor-img"
                />
                <div className="mentor-badge-ribbon">
                  <Award size={14} />
                  <span>Program Director</span>
                </div>
              </div>
            </div>

            <div className="mentor-bio-wrap">
              <span className="section-eyebrow">FELLOWSHIP MENTOR</span>
              <h2 className="mentor-name">Dr. Jagadish Surannavar</h2>
              <p className="mentor-creds">
                MBBS, MS (Orthopaedics) • Chief Orthopedic & Joint Replacement Surgeon
              </p>

              <p className="mentor-about-p">
                Dr. Jagadish Surannavar is widely recognized for his surgical precision and pioneering role in introducing robotic-assisted joint replacement surgery to North Karnataka. With decades of surgical experience, he has performed thousands of successful arthroscopic reconstructions, primary total joint replacements, and revision surgeries.
              </p>
              
              <p className="mentor-about-p">
                As a fellowship mentor, Dr. Surannavar believes in hands-on clinical immersion. Rather than limiting candidates to observational roles, he actively guides fellows through surgical nuances, pre-operative planning, patient communication, and independent surgical execution. His teaching focuses on surgical safety, anatomical precision, and ethical decision-making.
              </p>

              <div className="mentor-key-highlights">
                <div className="mentor-stat-box">
                  <strong>Pioneer</strong>
                  <span>1st Robotic Joint Replacement in Belagavi</span>
                </div>
                <div className="mentor-stat-box">
                  <strong>10,000+</strong>
                  <span>Orthopedic & Joint Procedures</span>
                </div>
                <div className="mentor-stat-box">
                  <strong>1-on-1</strong>
                  <span>Dedicated Surgical Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. Fellow Candidates / Experiences ----------------- */}
      <section className="fellowship-candidates-section" id="testimonials">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-eyebrow">FELLOW CANDIDATES & EXPERIENCES</span>
            <h2 className="section-main-heading">
              Hear From Our Fellowship Alumni
            </h2>
            <p className="section-subtext">
              Qualified orthopedic surgeons who completed their hands-on training under Dr. Jagadish Surannavar share their experience.
            </p>
          </div>

          <div className="fellows-cards-grid">
            {fellows.map((fellow, fIdx) => (
              <article key={fIdx} className="fellow-experience-card">
                <div className="fellow-card-top">
                  <div className="fellow-avatar-frame">
                    <img
                      src={fellow.image}
                      alt={`${fellow.name} - Fellowship Candidate`}
                      className="fellow-avatar-img"
                    />
                  </div>
                  <div className="fellow-identity">
                    <h3 className="fellow-name">{fellow.name}</h3>
                    {fellow.alias && <span className="fellow-alias">({fellow.alias})</span>}
                    <span className="fellow-qual">{fellow.qualification}</span>
                    <span className="fellow-tenure-tag">{fellow.tenure}</span>
                  </div>
                </div>

                <div className="fellow-achievement-pill">
                  <Award size={14} />
                  <span>{fellow.achievement}</span>
                </div>

                <blockquote className="fellow-quote-body">
                  <Quote size={20} className="quote-glyph" />
                  <p>“{fellow.quote}”</p>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. Eligibility & Application ----------------- */}
      <section className="fellowship-apply-section" id="apply">
        <div className="site-container">
          <div className="apply-dual-box">
            
            {/* Left: Eligibility Criteria */}
            <div className="eligibility-info-col">
              <span className="section-eyebrow">WHO CAN APPLY?</span>
              <h2 className="apply-heading">Eligibility Criteria</h2>
              <p className="apply-intro">
                The Fellowship in Arthroscopy & Joint Replacement is open to motivated orthopedic surgeons aiming to specialize in advanced reconstruction.
              </p>

              <div className="eligibility-criteria-list">
                <div className="crit-item">
                  <div className="crit-icon-wrap">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <strong>Educational Qualification</strong>
                    <p>Qualified <strong>MS (Orthopaedics)</strong> or <strong>DNB (Orthopaedics)</strong> from a recognized medical institution or National Board of Examinations.</p>
                  </div>
                </div>

                <div className="crit-item">
                  <div className="crit-icon-wrap">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong>Medical Council Registration</strong>
                    <p>Valid registration with the National Medical Commission (NMC) or any State Medical Council in India.</p>
                  </div>
                </div>

                <div className="crit-item">
                  <div className="crit-icon-wrap">
                    <Activity size={20} />
                  </div>
                  <div>
                    <strong>Commitment & Aptitude</strong>
                    <p>Demonstrated interest in arthroscopic procedures, joint replacement surgery, clinical research, and patient-centered healthcare.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: How to Apply Box */}
            <div className="apply-action-card">
              <span className="apply-card-tag">OFFICIAL APPLICATION PROCESS</span>
              <h3 className="apply-card-title">Ready to Advance Your Orthopedic Career?</h3>
              <p className="apply-card-desc">
                Candidates are selected based on academic credentials, surgical aptitude, and letter of motivation. To apply, please submit your complete dossier directly to the hospital admissions desk:
              </p>

              <div className="required-docs-box">
                <span className="docs-title">Required Documents:</span>
                <ul>
                  <li>Updated Curriculum Vitae (CV)</li>
                  <li>Cover Letter / Statement of Purpose</li>
                  <li>Copies of MS/DNB Degree Certificates</li>
                  <li>State Medical Council Registration Copy</li>
                </ul>
              </div>

              <div className="contact-action-block">
                <a
                  href="mailto:surannavarhospital@gmail.com?subject=Application for Fellowship in Arthroscopy & Joint Replacement"
                  className="btn-apply-email"
                >
                  <Mail size={18} />
                  <span>Email Application to dr.jsconprincipal@gmail.com</span>
                </a>

                <div className="helpline-row">
                  <div className="helpline-item">
                    <Phone size={15} />
                    <span>Hospital Desk: 0831-2454539</span>
                  </div>
                  <div className="helpline-item">
                    <Phone size={15} />
                    <span>Admissions: +91 9036654503 / +91 8105605163</span>
                  </div>
                </div>

                <Link
                  href="/contact#enquiry"
                  className="eligibility-apply-btn"
                >
                  Submit Online Inquiry
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 9. FAQ Accordion ----------------- */}
      <section className="fellowship-faq-section" id="faq">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-main-heading">
              Fellowship Program FAQs
            </h2>
            <p className="section-subtext">
              Common questions regarding eligibility, hands-on clinical exposure, mentorship, and the application procedure.
            </p>
          </div>

          <div className="fellowship-accordion-wrap">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`fellowship-accordion-item ${activeFaq === idx ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="accordion-trigger"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${activeFaq === idx ? 'rotated' : ''}`}
                  />
                </button>
                
                {activeFaq === idx && (
                  <div className="accordion-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 10. Tour / Visit Campus Banner ----------------- */}
      <section className="fellowship-bottom-cta">
        <div className="site-container">
          <div className="bottom-cta-banner">
            <div className="cta-banner-text">
              <span className="banner-tag">CLINICAL EXCELLENCE IN BELAGAVI</span>
              <h2>Step Into Advanced Orthopedic Practice</h2>
              <p>
                Visit Surannavar Superspeciality Hospital to inspect our operation theatres, robotic surgery setup, and interact with current fellows and mentors.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <a
                href="mailto:surannavarhospital@gmail.com?subject=Fellowship Inquiry"
                className="btn-cta-light"
              >
                Send Direct Email <ArrowRight size={16} />
              </a>
              <Link href="/contact#find-us" className="btn-cta-outline">
                Visit Campus / Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
