'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function WhyZeowlVisual() {
  const containerRef = useRef(null);
  const visualRef = useRef(null);

  // Smooth continuous floating motion
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) return;

      if (visualRef.current) {
        gsap.to(visualRef.current, {
          y: -8,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    },
    { scope: containerRef }
  );

  // Subtle interactive desktop mouse parallax
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!isDesktop || prefersReducedMotion || !visualRef.current) return;

    const el = visualRef.current;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power2.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 18; // subtle +/- 9px
      const yPercent = (e.clientY / innerHeight - 0.5) * 14; // subtle +/- 7px
      xTo(xPercent);
      yTo(yPercent);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="why-zeowl-visual w-full flex items-center justify-center p-0 select-none overflow-visible relative"
    >
      {/* Sized cleanly: centered inside right column, never clipped, fully visible */}
      <div
        ref={visualRef}
        data-why-visual
        className="relative w-full max-w-[600px] sm:max-w-[660px] lg:max-w-[760px] xl:max-w-[820px] 2xl:max-w-[880px] flex items-center justify-center mx-auto"
      >
        {/* Soft background ambient radial glow behind the laptop & volcanic rock */}
        <div
          className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full pointer-events-none blur-[80px] -z-10 opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(255,122,0,0.18) 0%, rgba(255,122,0,0.04) 55%, transparent 80%)',
          }}
        />

        {/* The user-provided high-res 3D hero image */}
        <Image
          src="/why-zeowl/why-zeowl-visual.png"
          alt="Zeowl 3D business growth visual with metallic laptop and volcanic rock platform"
          width={1024}
          height={682}
          priority
          sizes="(max-width: 767px) 92vw, (max-width: 1023px) 80vw, (max-width: 1279px) 46vw, 720px"
          className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(7,26,54,0.12)] select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
