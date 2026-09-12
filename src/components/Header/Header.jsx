import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

export default function Header({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  openEnquiry
}) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileCollegesOpen, setIsMobileCollegesOpen] = useState(
    location.pathname.startsWith('/colleges')
  );
  const [isDesktopCollegesOpen, setIsDesktopCollegesOpen] = useState(false);

  // Automatically close mobile menu and reset dropdowns on page route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopCollegesOpen(false);
    if (!location.pathname.startsWith('/colleges')) {
      setIsMobileCollegesOpen(false);
    }
  }, [location.pathname]);

  return (
    <header className="header-wrapper" id="site-header">
      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="site-container nav-flex">
          <Link to="/" className="brand-link" aria-label="Surannavar Group Home">
            <img
              src="/required pic/new_logo.png"
              alt="Surannavar Group of Institutions Logo"
              className="brand-logo"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="primary-nav" aria-label="Main navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
              </li>
              <li 
                className={`nav-item has-dropdown ${isDesktopCollegesOpen ? 'open' : ''}`}
                onMouseEnter={() => setIsDesktopCollegesOpen(true)}
                onMouseLeave={() => setIsDesktopCollegesOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle-btn ${location.pathname.startsWith('/colleges') ? 'active' : ''}`}
                  onClick={() => setIsDesktopCollegesOpen(!isDesktopCollegesOpen)}
                  aria-expanded={isDesktopCollegesOpen}
                  aria-haspopup="true"
                >
                  Colleges <ChevronDown size={14} className={`dropdown-chevron ${isDesktopCollegesOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`dropdown-menu ${isDesktopCollegesOpen ? 'show' : ''}`}>
                  <Link to="/colleges/nursing" className="dropdown-link" onClick={() => setIsDesktopCollegesOpen(false)}>
                    <strong>Surannavar College of Nursing</strong>
                    <span>B.Sc, Post-Basic & M.Sc Nursing</span>
                  </Link>
                  <Link to="/colleges/physiotherapy" className="dropdown-link" onClick={() => setIsDesktopCollegesOpen(false)}>
                    <strong>Surannavar College of Physiotherapy</strong>
                    <span>BPT Rehabilitation & Movement Science</span>
                  </Link>
                  <Link to="/colleges/allied-health" className="dropdown-link" onClick={() => setIsDesktopCollegesOpen(false)}>
                    <strong>Surannavar College of Allied Health Sciences</strong>
                    <span>Lab Tech, Radiology & OT Technology</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/hospital-legacy" className={`nav-link ${location.pathname === '/hospital-legacy' ? 'active' : ''}`}>Hospital Legacy</Link>
              </li>
              <li className="nav-item">
                <Link to="/fellowship" className={`nav-link ${location.pathname === '/fellowship' ? 'active' : ''}`}>Fellowship</Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className={`nav-link ${location.pathname.startsWith('/career') ? 'active' : ''}`}>Career</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${location.pathname.startsWith('/contact') ? 'active' : ''}`}>Contact</Link>
              </li>
              <li className="nav-item visit-hospital-item">
  <a
    href="https://surannavarhospital.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="visit-hospital-btn"
  >
    Visit Hospital
  </a>
</li>
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Menu</span>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-nav-links">
          <Link
            to="/"
            className={`mob-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`mob-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Colleges Accordion Dropdown */}
          <div className="mob-dropdown-wrap">
            <button
              type="button"
              className={`mob-link mob-dropdown-trigger ${location.pathname.startsWith('/colleges') ? 'active' : ''} ${isMobileCollegesOpen ? 'expanded' : ''}`}
              onClick={() => setIsMobileCollegesOpen(!isMobileCollegesOpen)}
              aria-expanded={isMobileCollegesOpen}
            >
              <span>Colleges</span>
              <ChevronDown
                size={18}
                className={`mob-chevron-icon ${isMobileCollegesOpen ? 'rotate' : ''}`}
              />
            </button>
            <div className={`mob-dropdown-content ${isMobileCollegesOpen ? 'open' : ''}`}>
              <Link
                to="/colleges/nursing"
                className={`mob-sublink-item ${location.pathname === '/colleges/nursing' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="mob-sublink-bullet"></div>
                <div className="mob-sublink-meta">
                  <strong>Surannavar College of Nursing</strong>
                  <small>B.Sc, Post-Basic & M.Sc Nursing</small>
                </div>
              </Link>
              <Link
                to="/colleges/physiotherapy"
                className={`mob-sublink-item ${location.pathname === '/colleges/physiotherapy' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="mob-sublink-bullet"></div>
                <div className="mob-sublink-meta">
                  <strong>Surannavar College of Physiotherapy</strong>
                  <small>BPT Rehabilitation & Movement Science</small>
                </div>
              </Link>
              <Link
                to="/colleges/allied-health"
                className={`mob-sublink-item ${location.pathname === '/colleges/allied-health' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="mob-sublink-bullet"></div>
                <div className="mob-sublink-meta">
                  <strong>Surannavar College of Allied Health Sciences</strong>
                  <small>Lab Tech, Radiology & OT Technology</small>
                </div>
              </Link>
            </div>
          </div>

          <Link
            to="/hospital-legacy"
            className={`mob-link ${location.pathname === '/hospital-legacy' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hospital Legacy
          </Link>
          <Link
            to="/fellowship"
            className={`mob-link ${location.pathname === '/fellowship' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fellowship
          </Link>
          <Link
            to="/career"
            className={`mob-link ${location.pathname.startsWith('/career') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Career
          </Link>
          <Link
            to="/gallery"
            className={`mob-link ${location.pathname === '/gallery' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={`mob-link ${location.pathname.startsWith('/contact') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mobile-nav-cta">
            <Link
              to="/contact#enquiry"
              className="btn btn-primary btn-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now (2026–27)
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
