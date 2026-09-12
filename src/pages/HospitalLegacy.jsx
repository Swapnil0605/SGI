import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Cpu,
  UserCheck,
  Crosshair,
  Building2,
  Bone,
  Activity,
  HeartPulse,
  Sparkles,
  MapPin,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import './HospitalLegacy.css';

export default function HospitalLegacy({ openEnquiry }) {
  const capabilities = [
    {
      icon: Activity,
      title: 'Joint Replacement',
      desc: 'Advanced surgical care for patients requiring joint replacement, restoring mobility and function.'
    },
    {
      icon: Bone,
      title: 'Trauma & Fracture Care',
      desc: 'Comprehensive management of acute orthopedic injuries, complex fractures and polytrauma emergencies.'
    },
    {
      icon: ShieldCheck,
      title: 'Arthroscopy & Sports Injuries',
      desc: 'Minimally invasive approaches for selected joint conditions, ligament reconstruction and sports injuries.'
    },
    {
      icon: HeartPulse,
      title: 'Spine Care',
      desc: 'Specialised evaluation, surgical management and therapeutic treatment for diverse spinal conditions.'
    },
    {
      icon: Building2,
      title: 'Rehabilitation & Recovery',
      desc: 'Multidisciplinary therapy supporting patients through structured post-op recovery and return to active mobility.'
    }
  ];

  const precisionPillars = [
    {
      icon: Cpu,
      title: 'Advanced Technology',
      desc: 'Tools that support detailed surgical planning and high-precision intraoperative execution.'
    },
    {
      icon: UserCheck,
      title: 'Orthopedic Expertise',
      desc: 'Clinical decision-making and surgical experience remain firmly at the centre of every procedure.'
    },
    {
      icon: Crosshair,
      title: 'Precision-Focused Surgery',
      desc: 'Technology assists surgeons in achieving planned anatomical parameters with millimeter accuracy.'
    },
    {
      icon: HeartPulse,
      title: 'Patient-Centred Care',
      desc: 'Every treatment decision begins with the patient\'s condition, individual anatomy and recovery goals.'
    }
  ];

  return (
    <div className="legacy-page-wrapper">
      
      {/* ----------------- Breadcrumbs Bar ----------------- */}
      <nav className="legacy-breadcrumbs-bar" aria-label="Breadcrumb">
        <div className="site-container">
          <ul className="legacy-breadcrumb-list">
            <li className="legacy-breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="legacy-breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="legacy-breadcrumb-item active" aria-current="page">
              Hospital Legacy
            </li>
          </ul>
        </div>
      </nav>

      {/* ----------------- 1. Banner Section ----------------- */}
      <section className="legacy-hero-banner">
        <img
          src="/images/robotic_hospital.jpg"
          alt="Surannavar Superspeciality Hospital"
          className="legacy-hero-bg"
        />
        <div className="legacy-hero-overlay"></div>

        <div className="site-container">
          <div className="legacy-hero-content">
            <div className="legacy-tag-badge">
              <Sparkles size={14} />
              HEALTHCARE LEGACY & ORTHOPEDIC LEADERSHIP
            </div>
            
            <h1 className="legacy-hero-title">
              Surannavar Superspeciality Hospital
            </h1>

            <p className="legacy-hero-subtitle">
              A leading orthopedic hospital in Belagavi dedicated to clinical excellence, evolving surgical technology and patient-centred treatment.
            </p>

            <Link
              to="/contact#find-us"
              className="legacy-hero-btn"
            >
              Visit Surannavar Hospital <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- 2. Intro Split Section ----------------- */}
      <section className="legacy-intro-section">
        <div className="site-container">
          <div className="legacy-intro-grid">
            
            {/* Left Column: Narrative */}
            <div className="legacy-intro-left">
              <span className="section-chapter-eyebrow">A FOUNDATION OF TRUST</span>
              <h2 className="legacy-section-heading">
                A Legacy of Healthcare Excellence
              </h2>
              <p className="legacy-lead-text">
                Surannavar Hospital represents a commitment to advancing orthopedic and trauma care through clinical expertise, evolving technology and patient-centred treatment.
              </p>
              <p className="legacy-body-text">
                Built with a vision to provide specialised and quality orthopedic care, the hospital has continued to grow with advancements in surgical techniques, technology and clinical practice.
              </p>
              <p className="legacy-body-text">
                Today, Surannavar Hospital brings together medical expertise, advanced technology and a multidisciplinary approach to deliver comprehensive care across joint replacement, trauma care and other musculoskeletal conditions.
              </p>
            </div>

            {/* Right Column: Hospital Image */}
            <div className="legacy-intro-right">
              <div className="legacy-media-frame">
                <img
                  src="/required pic/CTA.jpg"
                  alt="Surannavar Superspeciality Hospital Inpatient Care Ward"
                  className="legacy-media-img"
                />
                <div className="legacy-media-badge">
                  <strong>Surannavar Superspeciality Hospital</strong>
                  <span>Centre for Advanced Orthopedics & Trauma Care • Belagavi</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 3. Our Beginnings Section ----------------- */}
      <section className="legacy-beginnings-section">
        <div className="site-container">
          <div className="legacy-narrative-container">
            <span className="section-chapter-eyebrow">OUR BEGINNINGS</span>
            <h2 className="legacy-section-heading">
              A Vision Rooted in Orthopedic Excellence
            </h2>
            <p className="legacy-narrative-lead">
              Surannavar Hospital began with a vision to deliver specialised orthopedic and trauma care with clinical expertise, advanced treatment and a strong focus on patient recovery.
            </p>
            <p>
              From its early years, the hospital has remained committed to advancing orthopedic care, building expertise in joint replacement, trauma management and surgical treatment while creating a patient-centred environment for recovery and rehabilitation.
            </p>
            <p>
              As orthopedic care continued to evolve, so did Surannavar Hospital. The hospital embraced advancements in surgical techniques, technology and clinical practice to strengthen its capabilities and provide increasingly precise and effective care.
            </p>
            <div className="legacy-highlight-box">
              <p>
                What began with a focus on specialised orthopedic and trauma care has grown into a trusted centre for advanced orthopedic treatment, serving patients from Belagavi and across North Karnataka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. Evolving With Orthopedic Care ----------------- */}
      <section className="legacy-evolving-section">
        <div className="site-container">
          
          <div className="legacy-evolving-header">
            <span className="section-chapter-eyebrow">EVOLVING WITH ORTHOPEDIC CARE</span>
            <h2 className="legacy-section-heading">
              From Expertise to Advanced Treatment
            </h2>
            <p className="legacy-lead-text">
              Orthopedic care has changed significantly with advances in medical science, surgical techniques and technology. Surannavar Hospital has evolved alongside these developments, strengthening its capabilities across:
            </p>
          </div>

          <div className="legacy-capabilities-grid">
            {capabilities.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="capability-card">
                  <div className="capability-icon-box" aria-hidden="true">
                    <IconComp size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="capability-title">{item.title}</h3>
                  <p className="capability-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="capability-footer-note">
            <p>
              "This continued evolution reflects the hospital's commitment to bringing contemporary orthopedic care closer to the communities it serves."
            </p>
          </div>

        </div>
      </section>

      {/* ----------------- 5. Robotic Joint Replacement Milestone ----------------- */}
      <section className="legacy-robotic-section">
        <div className="site-container">
          <div className="legacy-robotic-grid">
            
            {/* Left: Text & Milestone details */}
            <div className="robotic-content-col">
              <div className="robotic-badge-flag">
                <Sparkles size={14} />
                A MILESTONE IN ROBOTIC JOINT REPLACEMENT
              </div>
              <h2 className="legacy-section-heading">
                Pioneering Robotic Technology in North Karnataka
              </h2>
              
              <div className="robotic-pioneer-callout">
                <p>
                  A defining milestone in Surannavar Hospital's journey has been the introduction of robotic technology for joint replacement, making it the first hospital in North Karnataka to introduce robotic technology for joint replacement.
                </p>
              </div>

              <p className="legacy-body-text">
                The adoption of robotic-assisted technology represents an important step in the evolution of joint replacement surgery.
              </p>
              <p className="legacy-body-text">
                By combining advanced technology with orthopedic expertise, robotic-assisted procedures can support detailed preoperative planning and precise execution of surgery, while enabling a more personalised approach to joint replacement.
              </p>
              <p className="legacy-body-text">
                For Surannavar Hospital, technology is not simply about adopting something new. It is about using meaningful advances in healthcare to improve the surgical experience and care provided to patients.
              </p>
              <p className="legacy-body-text">
                The introduction of robotic technology marks another step in Surannavar Hospital’s pursuit of advanced orthopedic care. By combining robotic-assisted technology with specialised surgical expertise, the hospital continues to adopt evolving techniques that support greater precision and personalised surgical planning in joint replacement.
              </p>
            </div>

            {/* Right: Robotic Surgical Suite Image */}
            <div className="robotic-image-col">
              <div className="robotic-image-frame">
                <img
                  src="/images/robotic_hospital.jpg"
                  alt="Robotic Joint Replacement Surgery at Surannavar Superspeciality Hospital"
                  className="robotic-image-img"
                />
                <div className="robotic-image-overlay-pill">
                  <Sparkles size={14} />
                  1st Robotic Joint Replacement in North Karnataka
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 6. Technology That Supports Precision ----------------- */}
      <section className="legacy-precision-section">
        <div className="site-container">
          
          <div className="legacy-precision-header">
            <span className="section-chapter-eyebrow">TECHNOLOGY THAT SUPPORTS PRECISION</span>
            <h2 className="legacy-section-heading">
              Where Orthopedic Expertise Meets Innovation
            </h2>
            <p>
              Modern orthopedic care requires more than surgical expertise. It requires the right combination of technology, planning and clinical experience. Surannavar Hospital continues to integrate advanced technologies and contemporary surgical approaches into its orthopedic practice. Its robotic joint replacement programme represents this approach, bringing together:
            </p>
          </div>

          <div className="precision-cards-grid">
            {precisionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="precision-card">
                  <div className="precision-icon-circle" aria-hidden="true">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="precision-card-title">{pillar.title}</h3>
                  <p className="precision-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ----------------- 7. The Legacy Continues ----------------- */}
      <section className="legacy-bridge-section">
        <div className="site-container">
          <div className="legacy-bridge-box">
            
            <div className="legacy-bridge-header">
              <span className="section-chapter-eyebrow" style={{ color: '#5eead4' }}>THE LEGACY CONTINUES</span>
              <h2 className="legacy-section-heading">
                From Orthopedic Excellence to Healthcare Education
              </h2>
              <p>
                Surannavar Hospital's journey in healthcare has created a strong foundation of clinical experience, expertise and a commitment to learning.
              </p>
              <p>
                That experience now extends into a new chapter through Surannavar Group of Institutions. Building on its healthcare legacy, the Group of Institutions is creating opportunities for students to pursue careers across Nursing, Physiotherapy and Allied Health Sciences.
              </p>
            </div>

            <div className="legacy-quote-highlight">
              <p>
                "From treating patients to preparing the professionals who will care for them."
              </p>
            </div>

            <div className="college-portals-grid">
              
              <Link to="/colleges/nursing" className="college-portal-card">
                <div>
                  <span className="portal-tag">COLLEGE OF NURSING</span>
                  <h4 className="portal-title">Surannavar College of Nursing</h4>
                </div>
                <span className="portal-link-text">
                  Explore Programmes <ArrowRight size={14} />
                </span>
              </Link>

              <Link to="/colleges/physiotherapy" className="college-portal-card">
                <div>
                  <span className="portal-tag">COLLEGE OF PHYSIOTHERAPY</span>
                  <h4 className="portal-title">Surannavar College of Physiotherapy</h4>
                </div>
                <span className="portal-link-text">
                  Explore Programmes <ArrowRight size={14} />
                </span>
              </Link>

              <Link to="/colleges/allied-health" className="college-portal-card">
                <div>
                  <span className="portal-tag">ALLIED HEALTH SCIENCES</span>
                  <h4 className="portal-title">Surannavar College of Allied Health</h4>
                </div>
                <span className="portal-link-text">
                  Explore Programmes <ArrowRight size={14} />
                </span>
              </Link>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
