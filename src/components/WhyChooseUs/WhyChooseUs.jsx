import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs({ whyChooseRef }) {
  return (
    <section className="why-choose-section" id="why-choose" ref={whyChooseRef}>
      <div className="site-container">
        
        <div className="why-triptych-grid">
          
          {/* Column 1: Institutional Narrative & Direct Action */}
          <div className="why-col-editorial why-animate">
            <div className="why-editorial-top">
              <div className="section-tag-pill why-tag-pill">
                <Sparkles size={13} className="tag-sparkle" />
                <span>PRACTICAL LEARNING FOCUS</span>
              </div>
              <h2 className="why-triptych-heading">
                Why Choose Surannavar Group of Institutions?
              </h2>
              <h3 className="why-triptych-sub">
                Learning That Goes Beyond the Classroom
              </h3>
              <p className="why-triptych-body">
                A career in healthcare demands more than classroom knowledge. Surannavar Group of Institutions creates opportunities for students to learn, practise and experience healthcare, building the technical skills, professional confidence and understanding needed for their future careers.
              </p>
            </div>
            
            <div className="why-editorial-action">
              <a href="#colleges" className="btn btn-primary why-compact-cta" id="btn-discover-courses">
                Discover the Courses <ArrowRight size={17} className="btn-arrow" />
              </a>
            </div>
          </div>

          {/* Column 2: Visual Simulation Stage */}
          <div className="why-col-visual why-animate">
            <div className="why-stage-card">
              <img
                src="/required pic/why_choose_us.png"
                alt="Clinical Simulation and Practical Training at Surannavar"
                className="why-stage-img"
              />
              <div className="why-stage-overlay" aria-hidden="true"></div>
            </div>
          </div>

          {/* Column 3: 3 Pathway Pillars */}
          <div className="why-col-pillars why-animate">
            <a href="#colleges" className="why-pillar-card">
              <div className="why-pillar-header">
                <span className="why-pillar-num">01</span>
                <div className="why-pillar-arrow">
                  <ArrowRight size={15} />
                </div>
              </div>
              <h4 className="why-pillar-title">Learn through practical experience</h4>
            </a>

            <a href="#about" className="why-pillar-card">
              <div className="why-pillar-header">
                <span className="why-pillar-num">02</span>
                <div className="why-pillar-arrow">
                  <ArrowRight size={15} />
                </div>
              </div>
              <h4 className="why-pillar-title">Build skills in modern learning environments</h4>
            </a>

            <a href="#story" className="why-pillar-card">
              <div className="why-pillar-header">
                <span className="why-pillar-num">03</span>
                <div className="why-pillar-arrow">
                  <ArrowRight size={15} />
                </div>
              </div>
              <h4 className="why-pillar-title">Experience real-world healthcare practice</h4>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
