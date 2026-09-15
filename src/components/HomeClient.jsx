'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './Hero/Hero';
import ClinicalHeritage from './ClinicalHeritage/ClinicalHeritage';
import Colleges from './Colleges/Colleges';
import AboutUs from './AboutUs/AboutUs';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import StayConnected from './StayConnected/StayConnected';
import VisionBand from './VisionBand/VisionBand';
import { useModal } from '../../context/ModalContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeClient() {
  const { openEnquiry, openStoryModal } = useModal();

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
            delay: 0.2,
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
              start: 'top 80%',
            },
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
              start: 'top 80%',
            },
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
              start: 'top 80%',
            },
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
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        heroRef={heroRef}
        heroCardRef={heroCardRef}
        openEnquiry={openEnquiry}
      />

      {/* 2. Pioneering Clinical Heritage */}
      <ClinicalHeritage
        excellenceRef={excellenceRef}
        setIsStoryModalOpen={openStoryModal}
      />

      {/* 3. Academic Colleges & Institutional Pillars */}
      <Colleges
        collegesGridRef={collegesGridRef}
        openEnquiry={openEnquiry}
      />

      {/* 4. About Us Preview & Campus Facilities */}
      <AboutUs
        aboutRef={aboutRef}
        openEnquiry={openEnquiry}
      />

      {/* 5. Why Choose Surannavar Group */}
      <WhyChooseUs
        whyChooseRef={whyChooseRef}
      />

      {/* 6. Stay Connected CTA */}
      <StayConnected
        ctaBannerRef={ctaBannerRef}
        openEnquiry={openEnquiry}
      />

      {/* 7. Pre-Footer Vision Quote Band */}
      <VisionBand />
    </>
  );
}
