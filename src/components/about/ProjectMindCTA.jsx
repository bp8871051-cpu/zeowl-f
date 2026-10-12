'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectMindCTA() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // 1. Subtle Parallax Animation on Background
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // 2. Smooth Reveal Animation on Content
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="project-in-mind"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-white text-[#06182F] font-sans"
    >
      {/* ======================================================== */}
      {/* 1. Background Artwork Layer with Abstract Fluid Wave     */}
      {/* ======================================================== */}
      <div
        ref={bgRef}
        className="absolute -top-[10%] -bottom-[10%] left-0 right-0 bg-no-repeat bg-cover bg-center pointer-events-none scale-105"
        style={{
          backgroundImage: "url('/about/project-mind-bg.png')",
        }}
        aria-hidden="true"
      />

      {/* Gentle center glow blend for enhanced typographic clarity */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-white/40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-r from-[#F57E20]/[0.06] via-white/40 to-[#06182F]/[0.04] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle ambient decorative accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-1/4 left-[12%] w-2 h-2 rounded-full bg-[#F57E20] opacity-50 animate-ping duration-[3500ms]" />
        <span className="absolute top-1/3 right-[14%] w-2.5 h-2.5 rounded-full bg-[#06182F] opacity-25 animate-pulse duration-[2800ms]" />
        <span className="absolute bottom-1/4 left-[22%] w-1.5 h-1.5 rounded-full bg-[#F57E20] opacity-40 animate-pulse duration-[2200ms]" />
        <span className="absolute bottom-1/3 right-[20%] w-2 h-2 rounded-full bg-[#F57E20] opacity-60 animate-ping duration-[4200ms]" />
      </div>

      {/* ======================================================== */}
      {/* 2. Main Content Container                                */}
      {/* ======================================================== */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          {/* Eyebrow Label Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F57E20]/10 border border-[#F57E20]/25 text-[#F57E20] font-bold text-xs sm:text-sm uppercase tracking-[0.22em] mb-4 shadow-[0_2px_10px_rgba(245,126,32,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F57E20]" />
            <span>LET&apos;S BUILD TOGETHER</span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#06182F] tracking-tight leading-[1.15] mb-5">
            Have a Project in <span className="text-[#F57E20]">Mind?</span>
          </h2>

          {/* Subtitle / Description */}
          <p className="font-body text-[#475569] text-base sm:text-lg lg:text-[19px] leading-relaxed font-normal mb-7 max-w-2xl">
            We&apos;re always excited to work on new ideas and help businesses turn
            their vision into reality. From concept to deployment, we engineer
            scalable solutions that drive measurable impact.
          </p>

          {/* Trust Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-semibold text-[#334155] mb-9">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#F57E20]" />
              <span>Rapid 24h Response</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#F57E20]" />
              <span>End-to-End Execution</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#F57E20]" />
              <span>Scalable Architecture</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="font-button w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 bg-[#F57E20] text-white font-bold text-base sm:text-lg rounded-xl shadow-[0_10px_30px_rgba(245,126,32,0.35)] hover:bg-[#06182F] hover:shadow-[0_15px_35px_rgba(6,24,47,0.25)] transition-all duration-300 group cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="/portfolio"
              className="font-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 bg-white/90 backdrop-blur-md text-[#06182F] border border-slate-300 font-semibold text-base sm:text-lg rounded-xl hover:border-[#F57E20] hover:text-[#F57E20] hover:shadow-md transition-all duration-300"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
