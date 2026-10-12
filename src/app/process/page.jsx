'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProcessHeroSection from '@/components/process/ProcessHeroSection';
import OurJourneySection from '@/components/process/OurJourneySection';
import GrowthCTASection from '@/components/services/GrowthCTASection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessPage() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

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
    gsap.ticker.lagSmoothing(500, 33);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full bg-white text-[#06182F] overflow-x-hidden min-h-screen">
      {/* 1. Custom 3D Process Hero Section with Lightbulb & Mountain Summit Background */}
      <ProcessHeroSection />

      {/* 2. Our Journey Section with Mountain Summit Waypoint Background */}
      <OurJourneySection />

      {/* 3. Let's Build Something Great CTA */}
      <GrowthCTASection />
    </div>
  );
}
