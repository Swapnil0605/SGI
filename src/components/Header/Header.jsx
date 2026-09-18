'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useModal } from '../../../context/ModalContext';

export default function Header({
  isMobileMenuOpen: propIsMobileMenuOpen,
  setIsMobileMenuOpen: propSetIsMobileMenuOpen,
  openEnquiry: propOpenEnquiry
}) {
  const pathname = usePathname() || '/';
  const modalContext = useModal();
  const openEnquiry = propOpenEnquiry || modalContext?.openEnquiry;

  const [localIsMobileMenuOpen, setLocalIsMobileMenuOpen] = useState(false);
  const isMobileMenuOpen = propIsMobileMenuOpen !== undefined ? propIsMobileMenuOpen : localIsMobileMenuOpen;
  const setIsMobileMenuOpen = propSetIsMobileMenuOpen || setLocalIsMobileMenuOpen;

  const [isMobileCollegesOpen, setIsMobileCollegesOpen] = useState(
    pathname.startsWith('/colleges')
  );
  const [isDesktopCollegesOpen, setIsDesktopCollegesOpen] = useState(false);

  // Automatically close mobile menu and reset dropdowns on page route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopCollegesOpen(false);
    if (!pathname.startsWith('/colleges')) {
      setIsMobileCollegesOpen(false);
    }
  }, [pathname]);

  return (
    <header className="header-wrapper" id="site-header">
      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="site-container">
          <div className="nav-flex">
          <Link href="/" className="brand-link" aria-label="Surannavar Group Home">
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
                <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
              </li>
              <li 
                className={`nav-item has-dropdown ${isDesktopCollegesOpen ? 'open' : ''}`}
                onMouseEnter={() => setIsDesktopCollegesOpen(true)}
                onMouseLeave={() => setIsDesktopCollegesOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle-btn ${pathname.startsWith('/colleges') ? 'active' : ''}`}
                  onClick={() => setIsDesktopCollegesOpen(!isDesktopCollegesOpen)}
                  aria-expanded={isDesktopCollegesOpen}
                  aria-haspopup="true"
                >
                  Colleges <ChevronDown size={14} className={`dropdown-chevron ${isDesktopCollegesOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`dropdown-menu ${isDesktopCollegesOpen ? 'show' : ''}`}>
                  <Link href="/colleges/nursing" className="dropdown-link" onClick={() => setIsDesktopCollegesOpen(false)}>
                    <strong>Surannavar College of Nursing</strong>
                    <span>B.Sc, Post-Basic & M.Sc Nursing</span>
                  </Link>
                  <Link href="/colleges/physiotherapy" className="dropdown-link" onClick={() => setIsDesktopCollegesOpen(false)}>
                    <strong>Surannavar College of Physiotherapy</strong>
                    <span>BPT Rehabilitation & Movement Science</span>
                  </Link>
                  <Link href="/colleges/allied-health" className="dropdown-link" onClick={() => setIsDesktopCollegesOpen(false)}>
                    <strong>Surannavar College of Allied Health Sciences</strong>
                    <span>Lab Tech, Radiology & OT Technology</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/hospital" className={`nav-link ${pathname === '/hospital' ? 'active' : ''}`}>Hospital Legacy</Link>
              </li>
              <li className="nav-item">
                <Link href="/fellowship" className={`nav-link ${pathname === '/fellowship' ? 'active' : ''}`}>Fellowship</Link>
              </li>
              <li className="nav-item">
                <Link href="/career" className={`nav-link ${pathname.startsWith('/career') ? 'active' : ''}`}>Career</Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${pathname.startsWith('/contact') ? 'active' : ''}`}>Contact</Link>
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
            href="/"
            className={`mob-link ${pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`mob-link ${pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Colleges Accordion Dropdown */}
          <div className="mob-dropdown-wrap">
            <button
              type="button"
              className={`mob-link mob-dropdown-trigger ${pathname.startsWith('/colleges') ? 'active' : ''} ${isMobileCollegesOpen ? 'expanded' : ''}`}
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
                href="/colleges/nursing"
                className={`mob-sublink-item ${pathname === '/colleges/nursing' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="mob-sublink-bullet"></div>
                <div className="mob-sublink-meta">
                  <strong>Surannavar College of Nursing</strong>
                  <small>B.Sc, Post-Basic & M.Sc Nursing</small>
                </div>
              </Link>
              <Link
                href="/colleges/physiotherapy"
                className={`mob-sublink-item ${pathname === '/colleges/physiotherapy' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="mob-sublink-bullet"></div>
                <div className="mob-sublink-meta">
                  <strong>Surannavar College of Physiotherapy</strong>
                  <small>BPT Rehabilitation & Movement Science</small>
                </div>
              </Link>
              <Link
                href="/colleges/allied-health"
                className={`mob-sublink-item ${pathname === '/colleges/allied-health' ? 'active' : ''}`}
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
            href="/hospital"
            className={`mob-link ${pathname === '/hospital' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hospital Legacy
          </Link>
          <Link
            href="/fellowship"
            className={`mob-link ${pathname === '/fellowship' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fellowship
          </Link>
          <Link
            href="/career"
            className={`mob-link ${pathname.startsWith('/career') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Career
          </Link>
          <Link
            href="/gallery"
            className={`mob-link ${pathname === '/gallery' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`mob-link ${pathname.startsWith('/contact') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mobile-nav-cta">
            <Link
              href="/contact#enquiry"
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
