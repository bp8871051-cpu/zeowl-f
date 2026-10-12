'use client';

import React, { useEffect } from 'react';
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
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => clearTimeout(refreshTimer);
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
