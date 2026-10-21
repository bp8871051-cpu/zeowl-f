'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Quote } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurStory() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const quoteRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Image clip-path reveal
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: 'inset(10% 0% 10% 0%)', opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );

        // Image subtle scroll parallax
        gsap.to(imageWrapperRef.current.querySelector('img'), {
          yPercent: 10,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      // Content reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Background decorative quote mark scroll movement
      if (quoteRef.current) {
        gsap.to(quoteRef.current, {
          y: -40,
          rotate: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-[#F7F9FC] font-sans overflow-hidden"
    >
      {/* Background Decorative Large Quote Watermark */}
      <div
        ref={quoteRef}
        className="absolute top-10 right-10 text-[#071A33]/[0.025] select-none pointer-events-none transform -rotate-12"
      >
        <Quote className="w-80 h-80" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT: Large Rounded Image with Parallax & Framing        */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative">
            {/* Soft Ambient Shadow Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F58220]/15 via-transparent to-[#071A33]/10 rounded-[2.5rem] blur-xl opacity-70" />

            <div
              ref={imageWrapperRef}
              className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(7,26,51,0.12)] border border-white/80 group bg-slate-900"
            >
              <img
                src="/about/about-story.jpg"
                alt="Zeowl Infotech Journey and Vision"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#F58220] rounded-bl-3xl pointer-events-none z-20" />
          </div>

          {/* ======================================================== */}
          {/* RIGHT: Story Content                                     */}
          {/* ======================================================== */}
          <div
            ref={contentRef}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 mx-auto lg:mx-0">
              <div className="w-8 h-[2px] bg-[#F58220] rounded-full" />
              <span className="text-[#F58220] uppercase tracking-[0.2em] text-xs font-bold">
                OUR STORY
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#071A33] tracking-tight leading-[1.15] mb-6 text-center lg:text-left">
              From a Vision to a{' '}
              <span className="text-[#F58220]">Digital Partner</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[#566579] text-base sm:text-lg leading-[1.8] mb-8 font-normal text-center lg:text-left mx-auto lg:mx-0">
              Zeowl Infotech was founded with a simple vision — to help
              businesses grow with the power of technology. What started as a
              passionate team of developers and designers has now grown into a
              full-service IT company delivering innovative and result-driven
              digital solutions.
            </p>

            {/* CTA */}
            <div className="w-full flex justify-center lg:justify-start">
              <a
                href="#mission-vision"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#071A33] text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-[#071A33]/20 hover:bg-[#F58220] hover:shadow-[#F58220]/25 transition-all duration-300 group cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
