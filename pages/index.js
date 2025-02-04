// /pages/index.js

import React from 'react';

// Import correcto de cada componente
import NavigationBar from '../components/landing/NavigationBar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import PlansSection from '../components/landing/PlansSection';
import FaqSection from '../components/landing/FaqSection';
import FooterSection from '../components/landing/FooterSection';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Nosotros */}
        <AboutSection />

        {/* Servicios */}
        <ServicesSection />

        {/* Planes */}
        <PlansSection />

        {/* FAQ */}
        <FaqSection />

        {/* Footer */}
        <FooterSection />
      </main>
    </>
  );
}
