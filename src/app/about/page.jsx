'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AboutHero from '@/components/about/AboutHero';
import WhoWeAre from '@/components/about/WhoWeAre';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import TechnologyStack from '@/components/about/TechnologyStack';
import ProjectMindCTA from '@/components/about/ProjectMindCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white text-[#06182F] overflow-x-hidden min-h-screen">
      {/* 1. About Hero Section */}
      <AboutHero />

      {/* 2. Section 2: Who We Are */}
      <WhoWeAre />

      {/* 3. Section 3: Our Mission & Vision */}
      <MissionVision />

      {/* 4. Section 4: Our Core Values */}
      <CoreValues />

      {/* 5. Section 5: Technologies We Work With */}
      <TechnologyStack />

      {/* 6. Section 6: Have a Project in Mind CTA */}
      <ProjectMindCTA />
    </div>
  );
}
