'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  Building2,
  GraduationCap,
  Sparkles,
  Maximize2
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'Admissions Enquiry',
    collegeOrDept: 'Surannavar College of Nursing',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Active Map Location State ('hospital' | 'colleges')
  const [activeLocation, setActiveLocation] = useState('hospital');
  const [useFallbackMap, setUseFallbackMap] = useState(false);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});

  const locationsData = {
    hospital: {
      id: 'hospital',
      name: 'Surannavar Super Speciality Hospital',
      shortName: 'Hospital',
      tag: 'Healthcare & Clinical Center',
      lat: 15.8786,
      lng: 74.5220,
      zoom: 16,
      address: 'Surannavar Superspeciality Hospital, Near Dharmanath Circle, Ashok Nagar, Belagavi, Karnataka 590016, India',
      highlights: [
        'Center for Advanced Orthopedics',
        '1st Robotic Joint Replacement in Belagavi',
        '24/7 Trauma & Emergency Units'
      ],
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=15.8786,74.5220'
    },
    colleges: {
      id: 'colleges',
      name: 'Surannavar Group of Institutions / Colleges',
      shortName: 'Colleges',
      tag: 'Institutional Campus',
      lat: 15.8768,
      lng: 74.5082,
      zoom: 16,
      address: 'Surannavar Group of Institutions Campus, SP Office Road, Sadashiv Nagar, Belagavi, Karnataka 590010, India',
      highlights: [
        'Surannavar College of Nursing',
        'Surannavar College of Physiotherapy',
        'Surannavar College of Allied Health Sciences'
      ],
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=15.8768,74.5082'
    }
  };

  const currentLocation = locationsData[activeLocation];

  // Initialize interactive Leaflet map with exact lat/lng and custom red pins (with failsafe fallback)
  useEffect(() => {
    let isMounted = true;

    const setupLeafletMap = () => {
      try {
        if (!isMounted || !mapContainerRef.current || !window.L) return;

        const container = mapContainerRef.current;

        // Clean up previous map instance if exists
        if (mapInstanceRef.current) {
          try {
            mapInstanceRef.current.off();
            mapInstanceRef.current.remove();
          } catch (e) {
            // ignore cleanup errors
          }
          mapInstanceRef.current = null;
        }

        // Reset leaflet id and innerHTML to completely eliminate "Map container is already initialized" error
        if (container._leaflet_id) {
          container._leaflet_id = null;
        }
        container.innerHTML = '';

        const L = window.L;
        const initialLoc = locationsData[activeLocation] || locationsData.hospital;

        const map = L.map(container, {
          center: [initialLoc.lat, initialLoc.lng],
          zoom: initialLoc.zoom,
          zoomControl: false,
          scrollWheelZoom: false
        });

        mapInstanceRef.current = map;

        // Place zoom controls in bottom-right
        L.control.zoom({ position: 'bottom-right' }).addTo(map);

        // High quality OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const createRedPinIcon = (title, iconType, isActive) => {
          return L.divIcon({
            className: 'custom-map-pin-wrapper',
            html: `
              <div class="custom-red-pin ${isActive ? 'is-active' : ''}">
                <div class="pin-marker-body">
                  <svg viewBox="0 0 38 52" width="38" height="52" fill="none" xmlns="http://www.w3.org/2000/svg" class="pin-svg-icon">
                    <path d="M19 0C8.5 0 0 8.5 0 19C0 33.2 19 52 19 52C19 52 38 33.2 38 19C38 8.5 29.5 0 19 0Z" fill="#DC2626" stroke="#991B1B" stroke-width="1.5"/>
                    <circle cx="19" cy="19" r="10" fill="#FFFFFF"/>
                    ${iconType === 'hospital'
                      ? '<path d="M19 12V26M12 19H26" stroke="#DC2626" stroke-width="2.8" stroke-linecap="round"/>'
                      : '<path d="M13 17L19 14L25 17L19 20L13 17ZM15 19V22.5C15 23.5 16.8 24.5 19 24.5C21.2 24.5 23 23.5 23 22.5V19" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
                    }
                  </svg>
                  ${isActive ? '<div class="pin-radar-pulse"></div>' : ''}
                </div>
                <div class="pin-title-label">${title}</div>
              </div>
            `,
            iconSize: [38, 52],
            iconAnchor: [19, 52],
            popupAnchor: [0, -54]
          });
        };

        const buildPopupContent = (loc) => {
          return `
            <div class="map-popup-styled">
              <span class="popup-badge">${loc.tag}</span>
              <h4 class="popup-title">${loc.name}</h4>
              <p class="popup-address">${loc.address}</p>
              <div class="popup-actions">
                <a href="${loc.directionsUrl}" target="_blank" rel="noopener noreferrer" class="popup-dir-btn">
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          `;
        };

        // Create Red Markers for both Hospital and Colleges
        const createdMarkers = {};
        Object.values(locationsData).forEach((loc) => {
          const isActive = loc.id === activeLocation;
          const icon = createRedPinIcon(loc.shortName, loc.id, isActive);

          const marker = L.marker([loc.lat, loc.lng], {
            icon,
            title: loc.name,
            riseOnHover: true
          }).addTo(map);

          marker.bindPopup(buildPopupContent(loc), {
            maxWidth: 290,
            className: 'custom-leaflet-popup'
          });

          marker.on('click', () => {
            setActiveLocation(loc.id);
          });

          createdMarkers[loc.id] = marker;
        });

        markersRef.current = createdMarkers;

        // Open popup for initial active marker
        if (createdMarkers[activeLocation]) {
          createdMarkers[activeLocation].openPopup();
        }
      } catch (err) {
        console.warn('Leaflet map error, switching to fallback:', err);
        if (isMounted) {
          setUseFallbackMap(true);
        }
      }
    };

    if (window.L) {
      setupLeafletMap();
    } else {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (window.L) {
          clearInterval(interval);
          setupLeafletMap();
        } else if (attempts > 12) {
          clearInterval(interval);
          if (isMounted) {
            setUseFallbackMap(true);
          }
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.off();
          mapInstanceRef.current.remove();
        } catch (e) {
          // ignore
        }
        mapInstanceRef.current = null;
      }
      if (mapContainerRef.current) {
        mapContainerRef.current._leaflet_id = null;
      }
    };
  }, []);

  // Update map pan, active marker state, and popup when activeLocation changes
  useEffect(() => {
    try {
      const map = mapInstanceRef.current;
      const L = window.L;
      if (!map || !L) return;

      const loc = locationsData[activeLocation];
      if (!loc) return;

      map.flyTo([loc.lat, loc.lng], loc.zoom, {
        duration: 1.1,
        easeLinearity: 0.25
      });

      // Re-render marker pin states
      Object.values(locationsData).forEach((item) => {
        const marker = markersRef.current[item.id];
        if (marker) {
          const isActive = item.id === activeLocation;
          const icon = L.divIcon({
            className: 'custom-map-pin-wrapper',
            html: `
              <div class="custom-red-pin ${isActive ? 'is-active' : ''}">
                <div class="pin-marker-body">
                  <svg viewBox="0 0 38 52" width="38" height="52" fill="none" xmlns="http://www.w3.org/2000/svg" class="pin-svg-icon">
                    <path d="M19 0C8.5 0 0 8.5 0 19C0 33.2 19 52 19 52C19 52 38 33.2 38 19C38 8.5 29.5 0 19 0Z" fill="#DC2626" stroke="#991B1B" stroke-width="1.5"/>
                    <circle cx="19" cy="19" r="10" fill="#FFFFFF"/>
                    ${item.id === 'hospital'
                      ? '<path d="M19 12V26M12 19H26" stroke="#DC2626" stroke-width="2.8" stroke-linecap="round"/>'
                      : '<path d="M13 17L19 14L25 17L19 20L13 17ZM15 19V22.5C15 23.5 16.8 24.5 19 24.5C21.2 24.5 23 23.5 23 22.5V19" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
                    }
                  </svg>
                  ${isActive ? '<div class="pin-radar-pulse"></div>' : ''}
                </div>
                <div class="pin-title-label">${item.shortName}</div>
              </div>
            `,
            iconSize: [38, 52],
            iconAnchor: [19, 52],
            popupAnchor: [0, -54]
          });
          marker.setIcon(icon);

          if (isActive) {
            marker.openPopup();
          }
        }
      });
    } catch (err) {
      console.warn('Marker update error:', err);
    }
  }, [activeLocation]);

  const handleShowBoth = () => {
    try {
      const map = mapInstanceRef.current;
      const L = window.L;
      if (!map || !L) return;
      const bounds = L.latLngBounds([
        [locationsData.hospital.lat, locationsData.hospital.lng],
        [locationsData.colleges.lat, locationsData.colleges.lng]
      ]);
      map.fitBounds(bounds, { padding: [80, 80], maxZoom: 15 });
    } catch (err) {
      console.warn('Fit bounds error:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = '918105605163';

  const whatsappMessage = `
*New Enquiry – Surannavar Institutions*

*Full Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Enquiry Type:* ${formData.enquiryType}
*College/Department:* ${formData.collegeOrDept}
*Message:* ${formData.message || 'N/A'}
  `.trim();

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, '_blank');

  // Reset form after submission
  setFormData({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'Admissions Enquiry',
    collegeOrDept: 'Surannavar College of Nursing',
    message: ''
  });
};

  return (
    <div className="contact-page-wrapper">
      
      {/* ----------------- Breadcrumbs Bar ----------------- */}
      <nav className="contact-breadcrumbs-bar" aria-label="Breadcrumb">
        <div className="site-container">
          <ul className="contact-breadcrumb-list">
            <li className="contact-breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="contact-breadcrumb-sep" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="contact-breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ul>
        </div>
      </nav>

      {/* ----------------- 1. Hero / Header ----------------- */}
      <section className="contact-hero-section" id="contact">
        <div className="site-container">
          <div className="contact-hero-container">
            <span className="contact-hero-tag">
              <Sparkles size={14} />
              CONNECT WITH US
            </span>
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              Have a question about admissions, our institutions or healthcare services? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- 2. Contact Information Cards ----------------- */}
      <section className="contact-info-section">
        <div className="site-container">
          
          <div className="contact-info-header">
            <span className="contact-section-eyebrow">COMMUNICATION DIRECTORY</span>
            <h2 className="contact-section-title">How Can We Assist You?</h2>
          </div>

          <div className="contact-cards-grid">
            
            {/* Card 1: Phone Directory */}
            <div className="info-card">
              <div className="info-card-icon-box" aria-hidden="true">
                <Phone size={24} strokeWidth={1.8} />
              </div>
              <h3 className="info-card-title">Phone Enquiries</h3>
              <p className="info-card-lead">
                Call our direct enquiry helplines for swift admissions and hospital support.
              </p>
              <div className="info-card-content">
                <div>
                  <span className="info-subtext">Admissions Helpline:</span>
                  <br />
                  <a href="tel:+918312400000" className="info-link">
                    +91 9036654503
                  </a>
                </div>
                <div>
                  <span className="info-subtext">General Enquiry:</span>
                  <br />
                  <a href="tel:+918312400000" className="info-link">
                    +91 8105605163
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Email Inquiries */}
            <div className="info-card">
              <div className="info-card-icon-box" aria-hidden="true">
                <Mail size={24} strokeWidth={1.8} />
              </div>
              <h3 className="info-card-title">Email Addresses</h3>
              <p className="info-card-lead">
                Write to our academic counsel or hospital administrative team anytime.
              </p>
              <div className="info-card-content">
                <div>
                  <span className="info-subtext">Admissions Office:</span>
                  <br />
                  <a href="mailto:admissions@surannavarinstitutions.edu.in" className="info-link">
                    dr.jsconprincipal@gmail.com
                  </a>
                </div>
                <div>
                  <span className="info-subtext"></span>
                  <br />
                  <a href="mailto:info@surannavarinstitutions.edu.in" className="info-link">
                    
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Address & Campus Hours */}
            <div className="info-card">
              <div className="info-card-icon-box" aria-hidden="true">
                <MapPin size={24} strokeWidth={1.8} />
              </div>
              <h3 className="info-card-title">Campus & Hospital Address</h3>
              <p className="info-card-lead">
                Centrally located healthcare and education ecosystem in North Karnataka.
              </p>
              <div className="info-card-content">
                <div>
                  <span className="info-subtext">Registered Location:</span>
                  <p style={{ margin: '0.2rem 0 0 0', fontWeight: 600, color: 'var(--color-primary)' }}>
                    Belagavi, Karnataka 590001, India
                  </p>
                </div>
                <div>
                  <span className="info-subtext">Admissions Desk Hours:</span>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.86rem', color: '#64748b' }}>
                    Monday – Saturday: 9:00 AM – 5:30 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- 3. Enquiry / Contact Form Section ----------------- */}
      <section className="contact-enquiry-section" id="enquiry">
        <div className="site-container">
          <div className="enquiry-layout-grid">
            
            {/* Left Column: Context & Guidelines */}
            <div className="enquiry-info-pane">
              <span className="contact-section-eyebrow">SUBMIT AN ENQUIRY</span>
              <h2 className="enquiry-pane-title">
                Send Us a Message
              </h2>
              <p className="enquiry-pane-desc">
                Fill out the form below with your requirements or questions. Our academic counselors and administrative representatives review each inquiry promptly.
              </p>

              <ul className="enquiry-features-list">
                <li className="enquiry-feature-item">
                  <div className="enquiry-feature-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="enquiry-feature-text">
                    <strong>Direct Academic Consultation</strong>
                    <span>Get personalized guidance regarding eligibility, PCB criteria, and entrance requirements.</span>
                  </div>
                </li>
                <li className="enquiry-feature-item">
                  <div className="enquiry-feature-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="enquiry-feature-text">
                    <strong>Curriculum & Clinical Rotation Details</strong>
                    <span>Learn about hospital postings at Surannavar Superspeciality Hospital and lab infrastructure.</span>
                  </div>
                </li>
                <li className="enquiry-feature-item">
                  <div className="enquiry-feature-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="enquiry-feature-text">
                    <strong>Hostel & Campus Facilities</strong>
                    <span>Information regarding student accommodation, transportation, and campus life.</span>
                  </div>
                </li>
              </ul>

              <div className="enquiry-quick-note">
                <p>
                  ⚡ Prefer immediate answers? You can also reach our admissions desk directly at <strong>+91 8105605163</strong> during office hours.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="enquiry-form-card">
              <span className="form-header-badge">ONLINE ENQUIRY FORM</span>
              <h3 className="form-main-heading">Connect with Admissions</h3>

              <form onSubmit={handleSubmit} className="enquiry-form-grid">
                
                {/* Row 1: Full Name & Phone Number */}
                <div className="form-two-col">
                  <div className="form-field-group">
                    <label htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="form-input-styled"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="phone">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98450 12345"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input-styled"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Enquiry Type */}
                <div className="form-two-col">
                  <div className="form-field-group">
                    <label htmlFor="email">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input-styled"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="enquiryType">
                      Enquiry Type <span className="req">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      className="form-select-styled"
                    >
                      <option value="Admissions Enquiry">Admissions Enquiry</option>
                      <option value="Course Information">Course Information</option>
                      <option value="Hospital Enquiry">Hospital Enquiry</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Select College / Department */}
                <div className="form-field-group">
                  <label htmlFor="collegeOrDept">
                    Select College / Department <span className="req">*</span>
                  </label>
                  <select
                    id="collegeOrDept"
                    name="collegeOrDept"
                    required
                    value={formData.collegeOrDept}
                    onChange={handleInputChange}
                    className="form-select-styled"
                  >
                    <option value="Surannavar College of Nursing">Surannavar College of Nursing</option>
                    <option value="Surannavar College of Physiotherapy">Surannavar College of Physiotherapy</option>
                    <option value="Surannavar College of Allied Health Sciences">Surannavar College of Allied Health Sciences</option>
                    <option value="Surannavar Super Speciality Hospital">Surannavar Super Speciality Hospital</option>
                    <option value="General / Central Office">General Enquiry / Central Office</option>
                  </select>
                </div>

                {/* Row 4: Message */}
                <div className="form-field-group">
                  <label htmlFor="message">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Describe your inquiry, intended course of study, or questions for our counselors..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea-styled"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send size={16} /> Submit Enquiry
                    </>
                  )}
                </button>

                {/* Success Feedback Alert */}
                {submitSuccess && (
                  <div className="form-alert-banner success" role="alert">
                    <CheckCircle2 size={20} />
                    <span>
                      Thank you for contacting us! Your inquiry has been logged successfully. Our admissions representative will be in touch shortly.
                    </span>
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 4. TWO-LOCATION MAP SECTION (Directly Above Footer) ----------------- */}
      <section className="contact-map-section" id="find-us">
        <div className="site-container">
          
          <div className="map-section-header">
            <span className="contact-section-eyebrow">LOCATION & ACCESSIBILITY</span>
            <h2 className="contact-section-title">Find Us</h2>
            <p className="map-section-lead">
              Visit us at our healthcare and educational campuses.
            </p>
          </div>

          {/* Location Selector / Toggle Pill */}
          <div className="location-selector-wrap">
            <div className="location-toggle-pill" role="tablist" aria-label="Campus location selector">
              <button
                type="button"
                role="tab"
                aria-selected={activeLocation === 'hospital'}
                className={`location-toggle-btn ${activeLocation === 'hospital' ? 'active' : ''}`}
                onClick={() => setActiveLocation('hospital')}
              >
                <Building2 size={16} /> HOSPITAL
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeLocation === 'colleges'}
                className={`location-toggle-btn ${activeLocation === 'colleges' ? 'active' : ''}`}
                onClick={() => setActiveLocation('colleges')}
              >
                <GraduationCap size={16} /> COLLEGES
              </button>
              <button
                type="button"
                className="location-toggle-btn fit-both-toggle-btn"
                onClick={handleShowBoth}
                title="Fit both locations in view"
              >
                <Maximize2 size={15} /> SHOW BOTH
              </button>
            </div>
          </div>

          {/* Map Interactive Stage */}
          <div className="map-interactive-stage">
            
            {useFallbackMap ? (
              <iframe
                title={currentLocation.name}
                src={`https://maps.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}&z=${currentLocation.zoom}&hl=en&output=embed`}
                className="map-iframe-element"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div
                ref={mapContainerRef}
                className="map-canvas-container"
                id="contact-leaflet-map"
                tabIndex={0}
                aria-label="Interactive Map of Hospital and College Campuses"
              ></div>
            )}

            {/* Floating Location Overlay Card */}
            <div className="map-location-overlay-card">
              <span className="overlay-badge">
                {activeLocation === 'hospital' ? (
                  <><Building2 size={12} /> {currentLocation.tag}</>
                ) : (
                  <><GraduationCap size={12} /> {currentLocation.tag}</>
                )}
              </span>
              <h3 className="overlay-title">{currentLocation.name}</h3>
              <p className="overlay-address">
                <MapPin size={18} />
                <span>{currentLocation.address}</span>
              </p>
              
              <div className="overlay-tags-list">
                {currentLocation.highlights.map((item, idx) => (
                  <span key={idx} className="overlay-tag-item">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={currentLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-directions-btn"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
