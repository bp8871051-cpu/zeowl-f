'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Sparkles, BookOpen, Clock, TrendingUp } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export default function BlogHero({
  searchQuery = '',
  setSearchQuery,
  activeCategory = 'All Articles',
  setActiveCategory,
}) {
  return (
    <section
      id="blog-hero"
      className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[820px] flex items-center overflow-hidden bg-white text-[#06182f] pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 font-sans"
    >
      {/* ======================================================== */}
      {/* 1. HIGH-DEFINITION BLOG BACKGROUND ARTWORK               */}
      {/* Laptop with Blog Mockup, Floating Post Cards, Bulb, Orbs */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/blog/blog-hero-bg.png"
          alt="Zeowl Blog & Technology Insights Background Artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-center opacity-40 sm:opacity-65 lg:opacity-100 select-none filter contrast-[1.02] transition-opacity duration-300"
        />

        {/* Soft edge blend overlays for seamless header & section transitions */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />

        {/* Responsive mobile/tablet background protective overlay */}
        <div className="absolute inset-0 bg-white/80 sm:bg-white/60 lg:bg-transparent pointer-events-none" />

        {/* Directional gradient mask: vertical blend on mobile, horizontal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/70 lg:to-transparent pointer-events-none" />

        {/* Ambient warm glow behind the laptop & lightbulb graphic */}
        <div
          className="absolute right-12 top-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full pointer-events-none blur-[140px] -z-10 opacity-35"
          style={{
            background:
              'radial-gradient(circle, rgba(245,126,32,0.35) 0%, rgba(6,24,47,0.08) 60%, transparent 80%)',
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. FOREGROUND CONTENT CONTAINER                           */}
      {/* ======================================================== */}
      <div className="max-w-[1420px] w-[92%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography, Search Input & Quick Tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/25 text-[#f57e20] text-[11px] sm:text-xs font-bold font-mono tracking-wider uppercase backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#f57e20]" />
                <span>INSIGHTS &amp; PERSPECTIVES • ZEOWL BLOG</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading font-black tracking-[-0.03em] leading-[1.08] sm:leading-[1.05] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px] text-[#06182f] text-center lg:text-left"
            >
              Ideas, Insights &amp; <br className="hidden sm:inline" />
              <span className="text-[#f57e20]">Engineering Trends.</span>
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-[#475569] text-[16px] sm:text-[18px] leading-[1.65] max-w-xl mt-5 mb-7 font-normal text-center lg:text-left mx-auto lg:mx-0"
            >
              Actionable technology guides, full-stack architecture deep dives,
              AI automation strategies, and UI/UX design perspectives curated by
              the Zeowl engineering team.
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={fadeInUp} className="max-w-xl w-full mb-6">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#64748B] absolute left-4.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery?.(e.target.value)}
                  placeholder="Search articles by title, topic, or keyword..."
                  className="w-full pl-12 pr-28 py-4 bg-white/90 backdrop-blur-md border border-[#06182f]/15 focus:border-[#f57e20] focus:ring-2 focus:ring-[#f57e20]/20 rounded-full text-sm sm:text-base text-[#06182f] placeholder-[#94A3B8] shadow-[0_8px_30px_rgba(6,24,47,0.06)] outline-none transition-all"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery?.('')}
                    className="absolute right-3.5 px-3 py-1.5 text-xs font-bold text-[#64748B] hover:text-[#06182f] bg-[#06182f]/5 hover:bg-[#06182f]/10 rounded-full transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                ) : (
                  <span className="absolute right-3.5 px-3.5 py-1.5 bg-[#f57e20] text-white text-xs font-bold rounded-full pointer-events-none shadow-xs">
                    Search
                  </span>
                )}
              </div>
            </motion.div>

            {/* Quick Filter Tags */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 text-xs font-medium"
            >
              <span className="text-[#64748B] font-mono font-bold uppercase tracking-wider mr-1">
                Trending:
              </span>
              {['AI & Automation', 'Web Development', 'UI/UX Design', 'Mobile Apps'].map(
                (topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveCategory?.(topic)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeCategory === topic
                        ? 'bg-[#f57e20] text-white shadow-xs'
                        : 'bg-white/80 hover:bg-white text-[#06182f] border border-[#06182f]/10 hover:border-[#f57e20]/40'
                    }`}
                  >
                    #{topic}
                  </button>
                )
              )}
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#06182f]/85 pt-4 border-t border-[#06182f]/[0.08]"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#f57e20] shrink-0" />
                <span>Weekly Engineering Deep Dives</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#f57e20] shrink-0" />
                <span>5-Min Actionable Reads</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#f57e20] shrink-0" />
                <span>Zero Clickbait, 100% Value</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Spacer on Desktop so the full 3D laptop & cards artwork is visible */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
