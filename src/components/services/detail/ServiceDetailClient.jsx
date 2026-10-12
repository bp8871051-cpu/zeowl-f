'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ServiceHero from './ServiceHero';
import ServiceIntro from './ServiceIntro';
import ServiceCapabilities from './ServiceCapabilities';
import ServiceSolutions from './ServiceSolutions';
import ServiceProcess from './ServiceProcess';
import ServiceTechnology from './ServiceTechnology';
import ServiceBenefits from './ServiceBenefits';
import ServiceProjects from './ServiceProjects';
import ServiceTestimonials from './ServiceTestimonials';
import ServiceFAQ from './ServiceFAQ';
import ServiceCTA from './ServiceCTA';
import ServiceNavigation from './ServiceNavigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetailClient({ service }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    // Synchronize Lenis smooth momentum scroll with GSAP ScrollTrigger
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [service.slug]);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#071D35] overflow-x-hidden min-h-screen">
      {/* 01. HERO SECTION */}
      <ServiceHero service={service} />

      {/* 02. BIG SERVICE STATEMENT / INTRO */}
      <ServiceIntro service={service} />

      {/* 03. CORE CAPABILITIES (Dark Navy Interactive) */}
      <ServiceCapabilities service={service} />

      {/* 04. WHAT WE CAN BUILD (8 Solutions Editorial Grid) */}
      <ServiceSolutions service={service} />

      {/* 05. OUR PROCESS (Dark Navy 7-Step SVG Timeline) */}
      <ServiceProcess service={service} />

      {/* 06. TECHNOLOGY STACK (Asymmetric Tech Grid) */}
      <ServiceTechnology service={service} />

      {/* 07. WHY CHOOSE US (4 Editorial Asymmetric Blocks) */}
      <ServiceBenefits service={service} />

      {/* 08. SELECTED WORK (Masonry Editorial Case Studies) */}
      <ServiceProjects service={service} />

      {/* 09. CLIENT TRUST / TESTIMONIAL (Editorial Quotation) */}
      <ServiceTestimonials service={service} />

      {/* 10. FAQ (Clean White Accordion) */}
      <ServiceFAQ service={service} />

      {/* 11. FINAL CTA (Dark Navy with Orbit & Floating Tags) */}
      <ServiceCTA service={service} />

      {/* 12. PREVIOUS / NEXT SERVICE NAVIGATION */}
      <ServiceNavigation currentSlug={service.slug} />
    </div>
  );
}
