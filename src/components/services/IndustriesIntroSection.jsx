'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IndustriesIntroSection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const highlightRef = useRef(null);
  const descRef = useRef(null);
  const handwrittenRef = useRef(null);
  const arrowPathRef = useRef(null);

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
            eyebrowRef.current,
            headingLine1Ref.current,
            headingLine2Ref.current,
            highlightRef.current,
            descRef.current,
            handwrittenRef.current,
            arrowPathRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scaleX: 1,
            clipPath: 'inset(0% 0 0 0)',
            strokeDashoffset: 0,
          }
        );
        return;
      }

      // Prepare SVG path dasharray for smooth line drawing
      if (arrowPathRef.current) {
        const length = arrowPathRef.current.getTotalLength() || 120;
        gsap.set(arrowPathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      }

      // ========================================================
      // GSAP SCROLLTRIGGER ANIMATION SEQUENCE
      // ========================================================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // 1. EYEBROW: Fade in + move upward (0 -> 1, y: 20 -> 0)
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );

      // 2. MAIN HEADING: Reveal smoothly line-by-line using clip-path (no character splitting)
      tl.fromTo(
        [headingLine1Ref.current, headingLine2Ref.current],
        { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.9,
          stagger: 0.12,
          ease: 'power4.out',
        },
        '<0.1'
      );

      // 3. YELLOW HIGHLIGHT: "All Sectors" subtle reveal (scaleX: 0 -> 1, transform-origin: left)
      tl.fromTo(
        highlightRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.6, ease: 'power3.out' },
        '<0.25'
      );

      // 4. DESCRIPTION: Fade upward (0 -> 1, y: 20 -> 0)
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '<0.2'
      );

      // 5. HANDWRITTEN TEXT: Fade + slight scale (0 -> 1, scale: 0.9 -> 1, rotation: -2 -> 0)
      tl.fromTo(
        handwrittenRef.current,
        { opacity: 0, scale: 0.9, rotation: -2 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'power3.out' },
        '<0.15'
      );

      // 6. HANDWRITTEN ARROW: Draw/reveal subtly after handwritten text
      if (arrowPathRef.current) {
        tl.to(
          arrowPathRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.85,
            ease: 'power2.out',
          },
          '<0.2'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-24 bg-[#FFFFFF] text-[#06182f] overflow-hidden select-none"
      aria-label="Industries & Businesses We Work With"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* ======================================================== */}
        {/* CLEAN EDITORIAL TWO-COLUMN TEXT LAYOUT                   */}
        {/* Left: Eyebrow + Main Heading + Description               */}
        {/* Right: Handwritten Decorative Script + Curved SVG Arrow  */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-14">
          
          {/* LEFT / MAIN TEXT AREA */}
          <div className="max-w-[720px] flex flex-col text-left">
            
            {/* 1. EYEBROW: Manrope, 12-13px, 700 weight, 0.14em tracking, #f57e20 */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2.5 mb-4 sm:mb-5 select-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#f57e20]" />
              <span
                className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#f57e20]"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                INDUSTRIES &amp; BUSINESSES WE WORK WITH
              </span>
            </div>

            {/* 2. MAIN HEADING: Space Grotesk, 700 weight, clamp(40px, 4vw, 64px), line-height 1.05 */}
            {/* NEVER splits characters, uses line-by-line wrapping */}
            <h2
              className="font-bold tracking-tight text-[#06182f] leading-[1.05] mb-6 select-none"
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: 'clamp(40px, 4vw, 64px)',
                lineHeight: '1.05',
                wordBreak: 'normal',
                overflowWrap: 'normal',
              }}
            >
              <div className="overflow-hidden">
                <span
                  ref={headingLine1Ref}
                  className="block text-[#06182f]"
                  style={{ willChange: 'transform, opacity, clip-path' }}
                >
                  Serving Businesses Across
                </span>
              </div>
              <div className="overflow-hidden mt-1">
                <span
                  ref={headingLine2Ref}
                  className="block text-[#06182f]"
                  style={{ willChange: 'transform, opacity, clip-path' }}
                >
                  <span
                    ref={highlightRef}
                    className="text-[#f57e20] inline-block"
                  >
                    All Sectors
                  </span>
                </span>
              </div>
            </h2>

            {/* 3. DESCRIPTION: Inter, 16-18px, line-height 1.6, rgba(22,43,83,0.72), max 650px */}
            <p
              ref={descRef}
              className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.6] max-w-[650px]"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                color: 'rgba(22, 43, 83, 0.72)',
                wordBreak: 'normal',
                overflowWrap: 'normal',
              }}
            >
              Our services are designed to support businesses of all sizes and
              industries, from startups to established enterprises.
            </p>
          </div>

          {/* RIGHT SIDE: HANDWRITTEN DECORATIVE TEXT & CURVED ARROW (TEXT ONLY) */}
          <div
            ref={handwrittenRef}
            className="flex items-center gap-3 self-start lg:self-end lg:pb-3 select-none flex-shrink-0"
          >
            <div
              className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-[#f57e20] leading-[1.15] tracking-wide -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              No matter
              <br />
              the industry,
              <br />
              we create solutions.
            </div>

            {/* Small elegant hand-drawn curved SVG arrow */}
            <svg
              viewBox="0 0 54 44"
              className="w-11 sm:w-12 h-9 text-[#f57e20] rotate-6 pointer-events-none flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                ref={arrowPathRef}
                d="M6 10 C 22 8, 38 20, 38 34"
              />
              <path d="M28 26 L 38 34 L 46 24" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
