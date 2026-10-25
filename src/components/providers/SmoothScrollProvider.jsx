'use client';

import React, { useEffect, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize global Lenis instance with optimal settings
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      infinite: false,
      autoRaf: false,
      anchors: true,
    });

    window.lenis = lenis;

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Coordinate with GSAP's high-performance animation ticker
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(500, 33);

    // Refresh ScrollTrigger and Lenis scroll limits when images and DOM update
    const handleUpdate = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    if (document.readyState === 'complete') {
      handleUpdate();
    } else {
      window.addEventListener('load', handleUpdate);
    }

    window.addEventListener('resize', handleUpdate);

    // Watch document font loads for accurate height calculation
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(handleUpdate);
    }

    // Continuously observe document body for dynamic section height changes
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(() => {
        handleUpdate();
      });
      resizeObserver.observe(document.body);
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    return () => {
      window.removeEventListener('load', handleUpdate);
      window.removeEventListener('resize', handleUpdate);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Handle route change: reset scroll to top immediately and refresh ScrollTrigger
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
      // Re-assert on next frame after DOM commit
      const rafId = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        }
      });
      const t1 = setTimeout(() => {
        if (window.lenis) window.lenis.resize();
        ScrollTrigger.refresh();
      }, 100);
      const t2 = setTimeout(() => {
        if (window.lenis) window.lenis.resize();
        ScrollTrigger.refresh();
      }, 400);
      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [pathname]);

  return <>{children}</>;
}
