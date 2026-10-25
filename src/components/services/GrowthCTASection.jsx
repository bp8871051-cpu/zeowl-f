'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Headphones,
  Clock,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';

const benefits = [
  {
    number: '01',
    title: 'Custom Solutions',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Dedicated Support',
    icon: Headphones,
  },
  {
    number: '03',
    title: 'On-Time Delivery',
    icon: Clock,
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    icon: HeartHandshake,
  },
];

export default function GrowthCTASection() {
  const containerRef = useRef(null);
  const bannerRef = useRef(null);

  // Content refs for entrance animation
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const benefitsRef = useRef([]);
  const visualRef = useRef(null);
  const visualInnerRef = useRef(null);
  const handwrittenRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            bannerRef.current,
            eyebrowRef.current,
            descRef.current,
            primaryBtnRef.current,
            secondaryBtnRef.current,
            visualRef.current,
            handwrittenRef.current,
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
        const headingLines = headingRef.current?.querySelectorAll('.heading-line');
        if (headingLines) gsap.set(headingLines, { yPercent: 0, opacity: 1 });
        benefitsRef.current.forEach((b) => {
          if (b) gsap.set(b, { opacity: 1, y: 0 });
        });
        return;
      }

      // ========================================================
      // ENTRANCE SEQUENCE (GSAP + ScrollTrigger)
      // ========================================================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // 1. CTA Banner Container reveals upward slightly
      tl.fromTo(
        bannerRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // 2. Eyebrow fades in
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '<0.15'
      );

      // 3. Heading reveals line-by-line
      const headingLines = headingRef.current?.querySelectorAll('.heading-line');
      if (headingLines && headingLines.length) {
        tl.fromTo(
          headingLines,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power4.out',
          },
          '<0.1'
        );
      }

      // 4. Description fades in
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
        '<0.2'
      );

      // 5 & 6. Primary and Secondary CTAs slide upward
      tl.fromTo(
        primaryBtnRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '<0.15'
      );
      tl.fromTo(
        secondaryBtnRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '<0.1'
      );

      // 7. Benefits appear sequentially
      benefitsRef.current.forEach((b, idx) => {
        if (!b) return;
        tl.fromTo(
          b,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          `<${0.09 * idx}`
        );
      });

      // 8. Right visual reveals with subtle scale: 0.94 -> 1
      tl.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' },
        '<0.1'
      );

      // 9. Handwritten annotation fades in
      tl.fromTo(
        handwrittenRef.current,
        { opacity: 0, scale: 0.9, rotation: -4 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.75, ease: 'power3.out' },
        '<0.25'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle mouse movement ONLY on the right visual (Max 3-6px, desktop only)
  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    if (visualInnerRef.current) {
      gsap.to(visualInnerRef.current, {
        x: x * 5,
        y: y * 4,
        rotationY: x * 1.5,
        rotationX: -y * 1.5,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }

    if (handwrittenRef.current) {
      gsap.to(handwrittenRef.current, {
        x: x * -4,
        y: y * -3,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  const handleMouseLeave = () => {
    if (visualInnerRef.current) {
      gsap.to(visualInnerRef.current, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
    if (handwrittenRef.current) {
      gsap.to(handwrittenRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden my-20 sm:my-24 lg:my-28 px-4 sm:px-6 lg:px-8"
      aria-label="Grow Your Business Together CTA"
    >
      {/* ======================================================== */}
      {/* WIDE HORIZONTAL CTA BANNER CONTAINER                     */}
      {/* Max-width: 1400px, width: calc(100% - 64px), margin: 0 auto */}
      {/* Background: Mountain Climbing Sunrise Panorama           */}
      {/* ======================================================== */}
      <div
        ref={bannerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative max-w-[1400px] w-full mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0A1A32] shadow-[0_25px_70px_rgba(7,26,47,0.35)] p-6 sm:p-10 lg:p-14 xl:p-[64px] border border-white/15 select-none"
      >
        {/* Background Image: Panoramic Mountain Climbing Summit */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src="/lets-build-bg.png"
            alt="Let's Build Something Great - Team Mountain Climbing"
            className="w-full h-full object-cover object-[70%_center] lg:object-right xl:object-center opacity-60 sm:opacity-85 lg:opacity-100"
          />
          {/* Deep dark gradient on the left side to guarantee 100% crisp legibility of all text and buttons */}
          <div className="absolute inset-0 bg-[#040C1A]/80 sm:bg-[#040C1A]/60 lg:hidden pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040C1A]/95 via-[#040C1A]/85 via-48% to-transparent to-75% pointer-events-none hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040C1A]/70 via-transparent to-transparent pointer-events-none lg:hidden" />
        </div>

        {/* Subtle internal grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* ======================================================== */}
        {/* MAIN TWO-COLUMN CONTENT GRID                             */}
        {/* Left/Center: 1.15fr | Right: 0.85fr                      */}
        {/* ======================================================== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-12 xl:gap-16">
          
          {/* LEFT / CENTER CONTENT AREA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            {/* 1. Small Eyebrow: LET'S BUILD SOMETHING GREAT */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2.5 mb-4 sm:mb-5 select-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#f57e20] shadow-[0_0_8px_#f57e20]" />
              <span
                className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#f57e20]"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                LET&apos;S BUILD SOMETHING GREAT
              </span>
            </div>

            {/* 2. Main Heading: Let's Grow Your Business Together */}
            <h2
              ref={headingRef}
              className="font-bold tracking-tight leading-[1.08] mb-5 sm:mb-6 text-white text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-center lg:text-left"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              <div className="overflow-hidden">
                <span className="block heading-line text-white">
                  Let&apos;s Grow Your Business
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="block heading-line text-[#f57e20]">
                  Together
                </span>
              </div>
            </h2>

            {/* 3. Description: Inter, 16-18px, rgba(255,255,255,0.78), max 500px */}
            <p
              ref={descRef}
              className="text-[16px] sm:text-[17px] leading-[1.6] max-w-[500px] mb-8 text-center lg:text-left mx-auto lg:mx-0"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              Whether you need a website, branding, marketing or an AI solution
              — we&apos;re here to help you grow.
            </p>

            {/* 4. CTA Buttons (Primary & Secondary) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10 w-full">
              {/* PRIMARY BUTTON */}
              <a
                ref={primaryBtnRef}
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-[11px] bg-[#f57e20] text-[#06182f] font-bold text-[15px] sm:text-[16px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_28px_rgba(245, 126, 32,0.45)] select-none cursor-pointer"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* SECONDARY BUTTON */}
              <a
                ref={secondaryBtnRef}
                href="/contact?type=discuss"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-[11px] bg-white/10 backdrop-blur-md text-white font-medium text-[15px] sm:text-[16px] transition-all duration-300 select-none cursor-pointer border border-white/40 hover:border-[#f57e20] hover:text-[#f57e20] hover:bg-white/[0.15]"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* 5. Four Compact Benefits / Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.number}
                    ref={(el) => (benefitsRef.current[index] = el)}
                    className="benefit-item group flex items-center gap-3 select-none cursor-pointer transition-all duration-300"
                  >
                    {/* Small circular icon: 1px solid rgba(245, 126, 32,0.75), white line icon */}
                    <div className="w-9 h-9 rounded-full border border-[rgba(245, 126, 32,0.75)] bg-black/25 backdrop-blur-xs flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-[#f57e20] group-hover:shadow-[0_0_15px_rgba(245, 126, 32,0.35)]">
                      <Icon className="w-4 h-4 text-white transition-colors duration-300 group-hover:text-[#f57e20]" />
                    </div>

                    <div className="flex flex-col">
                      <span
                        className="text-[10px] font-bold text-[#f57e20]/90 tracking-wider"
                        style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                      >
                        {benefit.number}
                      </span>
                      <span
                        className="text-[13px] sm:text-[14px] font-semibold text-white/95 leading-tight transition-colors duration-300 group-hover:text-white"
                        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                      >
                        {benefit.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: MOUNTAIN SUMMIT VISTA + HANDWRITTEN ANNOTATION */}
          <div
            ref={visualRef}
            className="relative flex flex-col items-center lg:items-end justify-end w-full min-h-[200px] sm:min-h-[260px] lg:min-h-[380px] mt-6 lg:mt-0"
          >
            {/* Subtle floating glass badge highlighting team summit synergy */}
            <div
              ref={visualInnerRef}
              className="relative select-none pointer-events-none self-center lg:self-end"
            >
              {/* DECORATIVE HANDWRITTEN ANNOTATION */}
              <div
                ref={handwrittenRef}
                className="decorative-annotation relative flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div
                  className="text-[17px] sm:text-[19px] lg:text-[21px] font-normal text-[#f57e20] leading-[1.1] tracking-wide -rotate-3"
                  style={{
                    fontFamily: 'var(--font-caveat), cursive',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                  }}
                >
                  No matter
                  <br />
                  the summit,
                  <br />
                  we climb
                  <br />
                  together.
                </div>

                {/* Small curved arrow pointing toward the peak */}
                <svg
                  viewBox="0 0 46 32"
                  className="w-8 sm:w-10 h-6 text-[#f57e20] -rotate-12 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22 C 16 10, 28 8, 40 14" />
                  <path d="M30 8 L 40 14 L 32 19" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
