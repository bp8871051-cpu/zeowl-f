'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Smartphone,
  Palette,
  Bot,
  Layers,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
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

export default function PortfolioHero() {
  return (
    <section
      id="our-work"
      className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[840px] flex items-center overflow-hidden bg-white text-[#06182f] pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 font-sans"
    >
      {/* ======================================================== */}
      {/* 1. HIGH-DEFINITION 3D PORTFOLIO BACKGROUND ARTWORK       */}
      {/* Modern Laptop, Floating UI Mockups, Plane & Glowing Orbs */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/our-work-bg.png"
          alt="Zeowl Portfolio Our Work Background Artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-center opacity-40 sm:opacity-65 lg:opacity-100 select-none filter contrast-[1.02] transition-opacity duration-300"
        />

        {/* Soft edge blend overlays for smooth seamless integration */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />

        {/* Responsive mobile/tablet background protective overlay */}
        <div className="absolute inset-0 bg-white/80 sm:bg-white/60 lg:bg-transparent pointer-events-none" />

        {/* Directional gradient mask: vertical blend on mobile, horizontal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/70 lg:to-transparent pointer-events-none" />

        {/* Ambient warm glow behind the laptop graphic */}
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none blur-[140px] -z-10 opacity-30"
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
          {/* Left Column: Typography, Categories & CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={fadeInUp} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/25 text-[#f57e20] text-[11px] sm:text-xs font-bold font-mono tracking-wider uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#f57e20] animate-pulse" />
                <span>OUR WORK • CLIENT PORTFOLIO</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading font-black tracking-[-0.03em] leading-[1.08] sm:leading-[1.04] text-[30px] sm:text-[42px] md:text-[52px] lg:text-[60px] xl:text-[66px] text-[#06182f] text-center lg:text-left"
            >
              Ideas Turned Into <br className="hidden sm:inline" />
              <span className="text-[#f57e20]">Real Projects.</span>
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-[#475569] text-[16px] sm:text-[18px] leading-[1.65] max-w-xl mt-5 mb-7 font-normal text-center lg:text-left mx-auto lg:mx-0"
            >
              A glimpse of the high-impact digital solutions, scalable web
              platforms, mobile applications, and AI automation systems we've
              engineered for ambitious brands and growing businesses.
            </motion.p>

            {/* Quick Trust Highlights */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#06182f]/85 mb-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f57e20] shrink-0" />
                <span>50+ High-Impact Deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f57e20] shrink-0" />
                <span>100% On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f57e20] shrink-0" />
                <span>Scalable Cloud Architecture</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full"
            >
              <a
                href="#projects-grid"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f57e20] hover:bg-[#06182f] text-white font-bold text-sm rounded-full shadow-[0_10px_25px_rgba(245,126,32,0.25)] hover:shadow-[0_12px_30px_rgba(6,24,47,0.2)] transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F8FAFC] text-[#06182f] border border-[#06182f]/[0.15] hover:border-[#f57e20]/40 font-semibold text-sm rounded-full shadow-sm transition-all duration-300 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#f57e20]" />
                <span>Start Your Project</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Spacer on Desktop so the full 3D laptop artwork is crisp & prominent */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
