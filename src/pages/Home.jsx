import React from 'react';

import Hero from '../components/Hero/Hero';
import ClinicalHeritage from '../components/ClinicalHeritage/ClinicalHeritage';
import Colleges from '../components/Colleges/Colleges';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import StayConnected from '../components/StayConnected/StayConnected';
import VisionBand from '../components/VisionBand/VisionBand';

export default function Home({
  heroRef,
  heroCardRef,
  excellenceRef,
  collegesGridRef,
  aboutRef,
  whyChooseRef,
  ctaBannerRef,
  openEnquiry,
  setIsStoryModalOpen
}) {
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
        setIsStoryModalOpen={setIsStoryModalOpen}
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
