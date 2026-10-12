'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BlogHero from '@/components/blog/BlogHero';
import FeaturedArticle from '@/components/blog/FeaturedArticle';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogCTA from '@/components/blog/BlogCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <div className="w-full bg-white text-[#06182f] overflow-x-hidden min-h-screen">
      {/* 1. Blog Hero with Laptop 3D Background Artwork */}
      <BlogHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* 2. Featured Article Banner with AI Robot Background Artwork */}
      <FeaturedArticle />

      {/* 3. Interactive Curated Articles Grid with Filter Tabs & Search */}
      <BlogGrid
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 3. Tech Updates & Newsletter CTA */}
      <BlogCTA />
    </div>
  );
}
