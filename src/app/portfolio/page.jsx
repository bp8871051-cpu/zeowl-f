'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  'All Projects',
  'Web Apps',
  'Mobile Apps',
  'UI/UX Design',
  'AI & Automation',
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  useEffect(() => {
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <div className="w-full bg-white text-[#06182f] overflow-x-hidden min-h-screen">
      {/* 1. Our Work Section with 3D Background Artwork */}
      <PortfolioHero />

      {/* 2. Interactive Curated Case Studies Grid with Domain Filter Pills */}
      <PortfolioGrid
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />

      {/* 3. Let's Build Together Conversion CTA */}
      <PortfolioCTA />
    </div>
  );
}
