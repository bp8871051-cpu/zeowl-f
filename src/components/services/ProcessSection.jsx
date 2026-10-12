'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProcessIntro from './ProcessIntro';
import ProcessTimeline from './ProcessTimeline';

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  // Intro element refs
  const eyebrowRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const handwrittenRef = useRef(null);

  // Timeline element refs
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);
  const pathRef = useRef(null);

  const [activeStep, setActiveStep] = useState(-1);

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
            headingRef.current,
            descRef.current,
            handwrittenRef.current,
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: 'all' }
        );
        if (lineRef.current) {
          gsap.set(lineRef.current, { width: '45px', opacity: 1 });
        }
        stepsRef.current.forEach((step) => {
          if (step) gsap.set(step, { opacity: 1, scale: 1, y: 0 });
        });
        setActiveStep(0);
        return;
      }

      // ========================================================
      // ENTRANCE ANIMATION SEQUENCE
      // ========================================================
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none none',
        },
      });

      // 1. OUR PROCESS: fade in + y: 25 -> 0
      mainTl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );

      // Short thin yellow line expands beside eyebrow
      mainTl.fromTo(
        lineRef.current,
        { width: 0 },
        { width: '45px', duration: 0.65, ease: 'power3.out' },
        '<0.1'
      );

      // 2. Heading: smooth reveal
      const lines = headingRef.current?.querySelectorAll('.heading-line');
      if (lines && lines.length) {
        mainTl.fromTo(
          lines,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '<0.15'
        );
      } else if (headingRef.current) {
        mainTl.fromTo(
          headingRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '<0.15'
        );
      }

      // 3. Description: fade + y: 20 -> 0
      mainTl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '<0.2'
      );

      // 4. Handwritten text: fade + scale
      mainTl.fromTo(
        handwrittenRef.current,
        { opacity: 0, scale: 0.9, rotation: -4 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'power3.out' },
        '<0.15'
      );

      // 5-9. Steps 01 to 05 reveal sequentially (staggered)
      stepsRef.current.slice(0, 5).forEach((step, idx) => {
        if (!step) return;
        mainTl.fromTo(
          step,
          { opacity: 0, y: 22, scale: 0.88 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: 'back.out(1.3)',
          },
          `<${0.14 * idx}`
        );
      });

      // 10. SVG connecting line draw from left -> right (strokeDashoffset)
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength() || 800;
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        mainTl.fromTo(
          pathRef.current,
          { strokeDashoffset: pathLength },
          {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: 'power2.inOut',
            onUpdate: function () {
              const progress = this.progress();
              let nextStep = 4;
              if (progress < 0.2) nextStep = 0;
              else if (progress < 0.45) nextStep = 1;
              else if (progress < 0.7) nextStep = 2;
              else if (progress < 0.9) nextStep = 3;
              setActiveStep((prev) => (prev !== nextStep ? nextStep : prev));
            },
          },
          '<0.1'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle mouse movement ONLY to content elements (Max 2-5px, NO background movement)
  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    gsap.to('.step-circle', {
      x: x * 3.5,
      y: y * 3.5,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    gsap.to('.decorative-script', {
      x: x * -3,
      y: y * -2.5,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(['.step-circle', '.decorative-script'], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="process-section relative w-full overflow-hidden bg-white select-none"
    >
      {/* ======================================================== */}
      {/* ABSOLUTE BACKGROUND PROTECTION:                         */}
      {/* Existing background image completely static & untouched */}
      {/* NO extra background, NO gradient, NO overlay, NO white  */}
      {/* container, NO parallax on background                    */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/services-bottom-banner.png"
          alt="Zeowl Process Landscape Background"
          className="w-full h-full object-cover object-center block"
          loading="eager"
        />
      </div>

      {/* ======================================================== */}
      {/* CONTENT LAYER OVER DARK NAVY AREA ONLY                  */}
      {/* Desktop: Left 40% (max 480px) | Right 60% (5-Step Grid) */}
      {/* Vertically centered inside the dark navy band           */}
      {/* ======================================================== */}
      <div
        ref={contentWrapperRef}
        className="relative z-10 w-full max-w-[92rem] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28"
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-14">
          {/* LEFT SIDE CONTENT (36% Width on Desktop) */}
          <div
            ref={leftColRef}
            className="w-full lg:w-[38%] xl:w-[36%] max-w-[440px] flex-shrink-0"
          >
            <ProcessIntro
              eyebrowRef={eyebrowRef}
              lineRef={lineRef}
              headingRef={headingRef}
              descRef={descRef}
              handwrittenRef={handwrittenRef}
            />
          </div>

          {/* RIGHT SIDE PROCESS TIMELINE (64% Width on Desktop) */}
          <div
            ref={rightColRef}
            className="w-full lg:w-[62%] xl:w-[64%] flex-1 min-w-0"
          >
            <ProcessTimeline
              timelineRef={timelineRef}
              stepsRef={stepsRef}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              pathRef={pathRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
