'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ServicesShowcaseSection from '@/components/services/ServicesShowcaseSection';
import ServicesIntro from '@/components/services/ServicesIntro';
import ServicesGrid from '@/components/services/ServicesGrid';
import ProcessSection from '@/components/services/ProcessSection';
import IndustriesIntroSection from '@/components/services/IndustriesIntroSection';
import GrowthCTASection from '@/components/services/GrowthCTASection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  useEffect(() => {
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <div className="w-full bg-[#F6F7F9] text-[#10243E] overflow-x-hidden min-h-screen">

      {/* 1. Custom 3D Services Showcase Hero (Replacing ServicesHero) */}
      <ServicesShowcaseSection />

      {/* 2. Services Intro with Animated Divider */}
      <ServicesIntro />

      {/* 3. Our Complete Portfolio */}
      <ServicesGrid />

      {/* 4. From Strategy to Success - Process Section */}
      <ProcessSection />

      {/* 5. Industries & Businesses We Work With - Text Only */}
      <IndustriesIntroSection />

      {/* 6. Grow Your Business Together - Premium CTA Section */}
      <GrowthCTASection />
    </div>
  );
}
