'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ServicesPageTransition() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
        },
      });

      // Rapid sleek intro: Line draws, text scales up, then curtain slides up smoothly
      tl.set(containerRef.current, { yPercent: 0, opacity: 1 })
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
        )
        .fromTo(
          textRef.current,
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power4.out' },
          '-=0.2'
        )
        .fromTo(
          lineRef.current,
          { width: '0%' },
          { width: '120px', duration: 0.4, ease: 'power3.inOut' },
          '-=0.25'
        )
        .to(
          [textRef.current, subtitleRef.current, lineRef.current],
          {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power3.in',
            delay: 0.15,
          }
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.65,
          ease: 'expo.inOut',
        });
    });

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071A2F] text-white pointer-events-none overflow-hidden select-none"
    >
      <div className="flex flex-col items-center gap-3">
        <span
          ref={subtitleRef}
          className="text-xs uppercase tracking-[0.3em] font-mono-tech text-[#F47B20] font-semibold"
        >
          ZEOWL INFOTECH
        </span>
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-white"
        >
          SERVICES
        </h1>
        <div
          ref={lineRef}
          className="h-[3px] bg-[#F47B20] rounded-full shadow-[0_0_12px_rgba(244,123,32,0.8)]"
        />
      </div>
    </div>
  );
}
