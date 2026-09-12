import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout & Global Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EnquiryModal from './components/Modals/EnquiryModal';
import StoryModal from './components/Modals/StoryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NursingCollege from './pages/NursingCollege';
import PhysiotherapyCollege from './pages/PhysiotherapyCollege';
import AlliedHealthCollege from './pages/AlliedHealthCollege';
import HospitalLegacy from './pages/HospitalLegacy';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Fellowship from './pages/Fellowship';
import Career from './pages/Career';

gsap.registerPlugin(ScrollTrigger);

// Helper component to auto-scroll top or to hash anchors on page transition
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        try {
          const elem = document.querySelector(hash);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
            return true;
          }
        } catch {
          // Invalid selector safeguard
        }
        return false;
      };

      // Try immediately, then after 60ms and 250ms if DOM is still mounting
      if (!scrollToHash()) {
        const timer1 = setTimeout(() => {
          if (!scrollToHash()) {
            setTimeout(scrollToHash, 200);
          }
        }, 60);
        return () => clearTimeout(timer1);
      }
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  // Navigation & Drawer States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Application States
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Application Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    message: ''
  });

  // DOM Refs for Homepage GSAP ScrollTrigger Animations
  const heroRef = useRef(null);
  const heroCardRef = useRef(null);
  const excellenceRef = useRef(null);
  const collegesGridRef = useRef(null);
  const aboutRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ctaBannerRef = useRef(null);

  useEffect(() => {
    // GSAP Scroll Animations Context
    const ctx = gsap.context(() => {
      // 1. Hero Card Animation
      if (heroCardRef.current) {
        gsap.fromTo(
          heroCardRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2
          }
        );
      }

      // 2. Excellence Section Scroll Animation
      if (excellenceRef.current) {
        gsap.fromTo(
          excellenceRef.current.querySelectorAll('.animate-on-scroll'),
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: excellenceRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      // 3. Colleges Cards Scroll Animation
      if (collegesGridRef.current) {
        gsap.fromTo(
          collegesGridRef.current.querySelectorAll('.college-editorial-card'),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: collegesGridRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      // 4. About Section Scroll Animation
      if (aboutRef.current) {
        gsap.fromTo(
          aboutRef.current.querySelectorAll('.about-feature-item'),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      // 5. Why Choose Us Section Scroll Animation
      if (whyChooseRef.current) {
        gsap.fromTo(
          whyChooseRef.current.querySelectorAll('.why-animate'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: whyChooseRef.current,
              start: 'top 80%'
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Modal Handlers
  const openEnquiry = (college = '') => {
    setSelectedCollege(college);
    setFormData(prev => ({ ...prev, college }));
    setIsEnquiryModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsEnquiryModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', college: '', message: '' });
    }, 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <ScrollToTop />
        
        {/* Site Header & Navigation */}
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          openEnquiry={openEnquiry}
        />

        {/* Page Routes */}
        <main id="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  heroRef={heroRef}
                  heroCardRef={heroCardRef}
                  excellenceRef={excellenceRef}
                  collegesGridRef={collegesGridRef}
                  aboutRef={aboutRef}
                  whyChooseRef={whyChooseRef}
                  ctaBannerRef={ctaBannerRef}
                  openEnquiry={openEnquiry}
                  setIsStoryModalOpen={setIsStoryModalOpen}
                />
              }
            />
            <Route
              path="/about"
              element={<About openEnquiry={openEnquiry} />}
            />
            <Route
              path="/about-us"
              element={<Navigate to="/about" replace />}
            />
            <Route
              path="/colleges/nursing"
              element={<NursingCollege openEnquiry={openEnquiry} />}
            />
            <Route
              path="/college-nursing"
              element={<Navigate to="/colleges/nursing" replace />}
            />
            <Route
              path="/colleges/physiotherapy"
              element={<PhysiotherapyCollege openEnquiry={openEnquiry} />}
            />
            <Route
              path="/college-physio"
              element={<Navigate to="/colleges/physiotherapy" replace />}
            />
            <Route
              path="/college-physiotherapy"
              element={<Navigate to="/colleges/physiotherapy" replace />}
            />
            <Route
              path="/colleges/allied-health"
              element={<AlliedHealthCollege openEnquiry={openEnquiry} />}
            />
            <Route
              path="/colleges/allied-health-sciences"
              element={<Navigate to="/colleges/allied-health" replace />}
            />
            <Route
              path="/college-allied"
              element={<Navigate to="/colleges/allied-health" replace />}
            />
            <Route
              path="/hospital-legacy"
              element={<HospitalLegacy openEnquiry={openEnquiry} />}
            />
            <Route
              path="/hospital"
              element={<Navigate to="/hospital-legacy" replace />}
            />
            <Route
              path="/our-history"
              element={<Navigate to="/hospital-legacy" replace />}
            />
            <Route
              path="/legacy"
              element={<Navigate to="/hospital-legacy" replace />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/contact-us"
              element={<Navigate to="/contact" replace />}
            />
            <Route
              path="/gallery"
              element={<Gallery />}
            />
            <Route
              path="/fellowship"
              element={<Fellowship openEnquiry={openEnquiry} />}
            />
            <Route
              path="/career"
              element={<Career />}
            />
            <Route
              path="/careers"
              element={<Navigate to="/career" replace />}
            />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer
          openEnquiry={openEnquiry}
          scrollToTop={scrollToTop}
        />

        {/* Global Admissions Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={() => setIsEnquiryModalOpen(false)}
          selectedCollege={selectedCollege}
          formData={formData}
          setFormData={setFormData}
          formSubmitted={formSubmitted}
          onSubmit={handleFormSubmit}
        />

        {/* Global Hospital Story Modal */}
        <StoryModal
          isOpen={isStoryModalOpen}
          onClose={() => setIsStoryModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
