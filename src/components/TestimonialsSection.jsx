'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Star,
  Quote,
  FileText,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { fetchTestimonials } from '@/lib/api';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultTestimonialsCards = [
  {
    id: 1,
    name: 'Rahul Mehta',
    designation: 'Business Owner',
    review:
      'Zeowl delivered an amazing website for our business. The team was professional and supportive throughout the process. Highly recommended!',
    rating: 5,
    initials: 'RM',
    avatarBg: 'bg-gradient-to-tr from-[#071A36] to-[#1E293B]',
  },
  {
    id: 2,
    name: 'Priya Shah',
    designation: 'Startup Founder',
    review:
      'Great communication, on-time delivery and outstanding quality. The team understood our requirements perfectly.',
    rating: 5,
    initials: 'PS',
    avatarBg: 'bg-gradient-to-tr from-[#FF7A00] to-[#FFA84A]',
  },
  {
    id: 3,
    name: 'Amit Patel',
    designation: 'Marketing Head',
    review:
      'They provided a solution that really helped us grow our business. Professional team and excellent support.',
    rating: 5,
    initials: 'AP',
    avatarBg: 'bg-gradient-to-tr from-[#0F2D59] to-[#FF7A00]',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [testimonials, setTestimonials] = useState(defaultTestimonialsCards);

  // Fetch dynamic testimonials from Laravel API with fallback to static cards
  useEffect(() => {
    let isMounted = true;
    async function loadTestimonials() {
      try {
        const apiData = await fetchTestimonials();
        if (isMounted && apiData && Array.isArray(apiData) && apiData.length > 0) {
          const mapped = apiData.slice(0, 3).map((item, index) => {
            const initials = item.name
              ? item.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)
              : 'CL';
            const bgs = [
              'bg-gradient-to-tr from-[#071A36] to-[#1E293B]',
              'bg-gradient-to-tr from-[#FF7A00] to-[#FFA84A]',
              'bg-gradient-to-tr from-[#0F2D59] to-[#FF7A00]',
            ];
            return {
              id: item.id || index + 1,
              name: item.name,
              designation: item.role || item.designation || 'Client',
              review: item.content || item.review,
              rating: item.rating || 5,
              initials,
              avatarBg: bgs[index % bgs.length],
            };
          });
          setTestimonials(mapped);
        }
      } catch (err) {
        // Fallback remains in place
      }
    }
    loadTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  // Ensure ScrollTrigger positions stay accurate after hydration
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timer);
  }, [testimonials]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) return;

      const isMobile = window.innerWidth < 768;

      // ----------------------------------------------------
      // 1. HERO SCROLL ENTRANCE TIMELINE
      // ----------------------------------------------------
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-testi-hero]',
          start: 'top 88%',
          once: true,
        },
      });

      heroTl
        .from('[data-testi-badge]', {
          opacity: 0,
          y: 12,
          duration: 0.35,
          ease: 'power3.out',
        })
        .from(
          '[data-testi-eyebrow]',
          { opacity: 0, y: 15, duration: 0.35, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-testi-heading]',
          { opacity: 0, y: 25, duration: 0.45, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-testi-desc]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.25'
        )
        .from(
          '[data-testi-pillars]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.25'
        )
        .from(
          '[data-testi-cta]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.25'
        );

      // ----------------------------------------------------
      // 2. CLIENT TESTIMONIAL CARDS SCROLL ENTRANCE
      // ----------------------------------------------------
      gsap.from('[data-testi-card-header]', {
        opacity: 0,
        y: 25,
        duration: 0.5,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-card-header]',
          start: 'top 92%',
          once: true,
        },
      });

      gsap.from('[data-testi-card]', {
        opacity: 0,
        y: 25,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-cards-grid]',
          start: 'top 92%',
          once: true,
        },
      });

      // ----------------------------------------------------
      // 3. PDF SHOWCASE SCROLL ENTRANCE
      // ----------------------------------------------------
      gsap.from('[data-testi-pdf-mockup]', {
        opacity: 0,
        x: isMobile ? 0 : -25,
        y: isMobile ? 20 : 0,
        scale: 0.96,
        duration: 0.55,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-pdf-container]',
          start: 'top 92%',
          once: true,
        },
      });

      gsap.from('[data-testi-pdf-content]', {
        opacity: 0,
        x: isMobile ? 0 : 25,
        y: isMobile ? 20 : 0,
        duration: 0.55,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-pdf-container]',
          start: 'top 92%',
          once: true,
        },
      });

    },
    { scope: sectionRef }
  );

  // Desktop subtle mouse parallax on the background collage image (max 8-12px)
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const isTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!isDesktop || isTouch || prefersReducedMotion || !imageRef.current) return;

    const el = imageRef.current;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power2.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = (e.clientX / innerWidth - 0.5) * 20; // max +/- 10px
      const yOffset = (e.clientY / innerHeight - 0.5) * 16; // max +/- 8px
      xTo(xOffset);
      yTo(yOffset);
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
    <section
      ref={sectionRef}
      id="testimonials"
      className="testimonials-section relative w-full bg-[#FFFFFF] py-[70px] md:py-[100px] lg:py-[120px] overflow-hidden font-sans text-[#071A36]"
    >
      <div className="testimonials-container max-w-[1450px] w-[92%] mx-auto relative z-10">
        {/* ======================================================== */}
        {/* PART 1: HERO SECTION                                     */}
        {/* ======================================================== */}
        <div
          data-testi-hero
          className="relative w-full min-h-[580px] lg:min-h-[640px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-24 lg:mb-32"
        >
          {/* LEFT SIDE CONTENT (7 COLS ON DESKTOP) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left py-4 lg:py-8 z-10">
            {/* Top Rating Pill Badge */}
            <div
              data-testi-badge
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/25 text-[#FF7A00] text-xs font-bold tracking-wide w-fit mb-5 shadow-sm"
            >
              <div className="flex items-center text-[#FF7A00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A00]" />
                ))}
              </div>
              <span className="font-semibold uppercase text-[11px] sm:text-xs">
                RATED 4.9/5 BY 150+ VERIFIED CLIENTS
              </span>
            </div>

            {/* Small Eyebrow: orange horizontal line + TESTIMONIALS & TRUST */}
            <div
              data-testi-eyebrow
              className="flex items-center gap-3.5 mb-3.5"
            >
              <div className="w-8 sm:w-10 h-[2px] bg-[#FF7A00] rounded-full" />
              <span className="text-[#FF7A00] uppercase text-[13px] sm:text-[14px] font-bold tracking-[0.14em] font-mono">
                TESTIMONIALS & TRUST
              </span>
            </div>

            {/* Main Heading: "Real People." (Dark Navy) + "Real Results." (Orange) */}
            <h2
              data-testi-heading
              className="font-extrabold tracking-[-0.03em] leading-[1.06] sm:leading-[1.04] text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[62px]"
            >
              <span className="text-[#071A36] block">Real People.</span>
              <span className="text-[#FF7A00] block">Real Results.</span>
            </h2>

            {/* Supporting Text */}
            <p
              data-testi-desc
              className="text-[#64748B] text-[15.5px] sm:text-[17px] leading-[1.65] max-w-xl mt-5 mb-7 font-normal"
            >
              Discover why fast-growing startups, technology leaders, and global enterprises trust Zeowl Infotech to engineer resilient software, high-impact web apps, and automated digital solutions.
            </p>

            {/* Trust Highlights Checklist */}
            <div
              data-testi-pillars
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 pt-3 border-t border-[#071A36]/[0.08]"
            >
              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#071A36]/[0.06] shadow-sm">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-1.5 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="font-bold text-[#071A36] text-[13px]">99.4% On-Time</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Bi-weekly sprints</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#071A36]/[0.06] shadow-sm">
                <div className="w-6 h-6 rounded-md bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center mb-1.5 border border-[#FF7A00]/25">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="font-bold text-[#071A36] text-[13px]">100% IP Ownership</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Full repository handover</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#071A36]/[0.06] shadow-sm">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 text-sky-600 flex items-center justify-center mb-1.5 border border-sky-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="font-bold text-[#071A36] text-[13px]">Direct Support</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Continuous growth</div>
              </div>
            </div>

            {/* Action Row: CTA Button + Verified Avatar Social Proof */}
            <div
              data-testi-cta
              className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pt-1"
            >
              <a
                href="#testimonials-cards"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 bg-[#FF7A00] hover:bg-[#071A36] text-white font-bold text-sm sm:text-[15px] rounded-full shadow-[0_12px_28px_rgba(255,122,0,0.28)] hover:shadow-[0_12px_28px_rgba(7,26,54,0.22)] transition-all duration-300 group cursor-pointer"
              >
                <span>Read Client Reviews</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Avatar Stack Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <div className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white bg-[#071A36] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                    RM
                  </div>
                  <div className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white bg-[#FF7A00] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                    PS
                  </div>
                  <div className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white bg-[#0F2D59] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                    AP
                  </div>
                  <div className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                    ER
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-[#FF7A00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A00]" />
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-[#64748B] block mt-0.5">
                    5.0 / 5.0 Overall Client Rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CLEAN PROMINENT TESTIMONIAL COLLAGE */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end py-4 lg:py-0">
            {/* Ambient Background Glows behind the collage */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none blur-[110px] opacity-30 -z-10"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,122,0,0.32) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute -bottom-10 -right-10 w-[400px] h-[400px] rounded-full pointer-events-none blur-[110px] opacity-20 -z-10"
              style={{
                background:
                  'radial-gradient(circle, rgba(7,26,54,0.22) 0%, transparent 70%)',
              }}
            />

            {/* Collage Image Showcase Container with subtle mouse parallax */}
            <div
              ref={imageRef}
              className="relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[640px] select-none flex items-center justify-center lg:justify-end"
            >
              <img
                src="/testimonials/testimonials-collage.png?v=3"
                alt="Zeowl Infotech Client Reviews and Success Stories"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(7,26,54,0.10)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 2: CLIENT TESTIMONIALS (What Our Clients Say)      */}
        {/* ======================================================== */}
        <div id="testimonials-cards" className="mt-16 sm:mt-24 lg:mt-28">
          {/* Section Header */}
          <div
            data-testi-card-header
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <div className="w-6 h-[2px] bg-[#FF7A00] rounded-full" />
              <span className="text-[#FF7A00] uppercase text-[13px] font-bold tracking-[0.12em] font-mono">
                CLIENT TESTIMONIALS
              </span>
              <div className="w-6 h-[2px] bg-[#FF7A00] rounded-full" />
            </div>

            {/* Heading: "What Our" (Dark Navy) + "Clients Say" (Orange) */}
            <h3 className="text-[#071A36] text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-tight leading-[1.1] mb-4">
              What Our <span className="text-[#FF7A00]">Clients Say</span>
            </h3>

            {/* Description */}
            <p className="text-[#64748B] text-[15.5px] sm:text-[17px] leading-[1.6] font-normal">
              Read genuine feedback and experiences from the businesses and clients
              we've worked with.
            </p>
          </div>

          {/* 3 Premium Testimonial Cards */}
          <div
            data-testi-cards-grid
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((card) => (
              <div
                key={card.id}
                data-testi-card
                className="group relative bg-[#FFFFFF] border border-[#071A36]/[0.08] hover:border-[#FF7A00]/40 rounded-[20px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(7,26,54,0.05)] hover:shadow-[0_20px_45px_rgba(7,26,54,0.11)] transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden"
              >
                {/* Top Corner Orange Accent on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[rgba(255,122,0,0.08)] to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Orange Quote Icon + 5 Orange Stars */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-[12px] bg-[rgba(255,122,0,0.10)] text-[#FF7A00] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Quote className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                    </div>

                    {/* 5 Orange Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-[#334155] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal mb-8 italic">
                    "{card.review}"
                  </p>
                </div>

                {/* Bottom Bar: Avatar + Name + Designation */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-[#071A36]/[0.06]">
                  <div
                    className={`w-11 h-11 rounded-full ${card.avatarBg} text-white font-bold text-[14px] flex items-center justify-center shrink-0 shadow-sm ring-2 ring-white`}
                  >
                    {card.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#071A36] text-[16px] tracking-tight leading-snug">
                      {card.name}
                    </h4>
                    <span className="text-[13px] text-[#64748B] font-medium leading-none block mt-0.5">
                      {card.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 3: PDF TESTIMONIAL SHOWCASE                         */}
        {/* ======================================================== */}
        <div
          data-testi-pdf-container
          className="mt-20 sm:mt-24 lg:mt-28 bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] border border-[#071A36]/[0.08] rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-14 shadow-[0_15px_40px_rgba(7,26,54,0.04)] relative overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div
            className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full pointer-events-none blur-[90px] -z-10 opacity-40"
            style={{
              background:
                'radial-gradient(circle, rgba(255,122,0,0.2) 0%, transparent 70%)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-10 lg:gap-14 items-center">
            {/* LEFT: Realistic Layered PDF Document Preview Mockup */}
            <div
              data-testi-pdf-mockup
              className="flex items-center justify-center w-full"
            >
              <a
                href="/testimonials/zeowl-testimonials.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full max-w-[420px] aspect-[1.32/1] sm:aspect-[1.38/1] flex items-center justify-center cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Stacked Sheet 2 (Backmost Page) */}
                <div className="absolute inset-x-5 top-0 bottom-6 bg-[#E2E8F0]/70 rounded-[18px] transform rotate-[4deg] shadow-sm border border-slate-300/40" />

                {/* Stacked Sheet 1 (Middle Page) */}
                <div className="absolute inset-x-2.5 top-1 bottom-3 bg-[#EEF2F6] rounded-[18px] transform -rotate-[2.5deg] shadow-md border border-slate-300/60" />

                {/* Main Front Document Card */}
                <div className="relative w-full h-full bg-[#FFFFFF] rounded-[20px] border border-[#071A36]/[0.10] shadow-[0_15px_35px_rgba(7,26,54,0.09)] group-hover:shadow-[0_20px_45px_rgba(255,122,0,0.18)] p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 overflow-hidden">
                  {/* Top Bar: PDF Pill Badge + Verified Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/25 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>PDF Document</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Reviews</span>
                    </div>
                  </div>

                  {/* Document Content Simulation */}
                  <div className="my-3 sm:my-4">
                    <span className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider block font-mono mb-1">
                      ZEOWL INFOTECH
                    </span>
                    <h5 className="font-extrabold text-[#071A36] text-[16px] sm:text-[18px] leading-tight tracking-tight mb-2">
                      Client Feedback &amp; Verified Case Studies
                    </h5>
                    <p className="text-[#64748B] text-[12px] sm:text-[12.5px] leading-relaxed line-clamp-2">
                      Comprehensive portfolio of authentic client testimonials, project
                      satisfaction scores, and digital growth metrics.
                    </p>
                  </div>

                  {/* Document Footer: Rating Score + Open Prompt */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#071A36]/[0.06] text-xs">
                    <div className="flex items-center gap-1 text-[#FF7A00] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#FF7A00]" />
                      <span className="text-[#071A36]">5.0 / 5.0</span>
                      <span className="text-[#64748B] font-normal text-[11px] ml-1">
                        (Audited)
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[#FF7A00] font-semibold text-[12px] group-hover:translate-x-0.5 transition-transform">
                      Click to Preview <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* RIGHT: Heading + Description + ONE BUTTON ONLY */}
            <div data-testi-pdf-content className="flex flex-col items-start text-left">
              {/* Eyebrow: CLIENT FEEDBACK */}
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-7 h-[2px] bg-[#FF7A00] rounded-full" />
                <span className="text-[#FF7A00] uppercase text-[13px] font-bold tracking-[0.12em] font-mono">
                  CLIENT FEEDBACK
                </span>
              </div>

              {/* Heading: "Real Experiences." (Navy) + "Real Feedback." (Orange) */}
              <h4 className="font-extrabold text-[28px] sm:text-[36px] lg:text-[42px] tracking-tight leading-[1.1] mb-4">
                <span className="text-[#071A36] block">Real Experiences.</span>
                <span className="text-[#FF7A00] block">Real Feedback.</span>
              </h4>

              {/* Description */}
              <p className="text-[#64748B] text-[15.5px] sm:text-[16.5px] leading-[1.65] max-w-lg mb-8 font-normal">
                Explore our client testimonials and feedback to see how Zeowl Infotech
                has helped businesses with digital solutions.
              </p>

              {/* ONE BUTTON ONLY: View Testimonials PDF -> (opens PDF in new tab, NO download button) */}
              <a
                href="/testimonials/zeowl-testimonials.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#FF7A00] hover:bg-[#071A36] text-white font-bold text-[15px] rounded-full shadow-[0_10px_25px_rgba(255,122,0,0.28)] hover:shadow-[0_12px_30px_rgba(7,26,54,0.25)] transition-all duration-300 group cursor-pointer"
              >
                <span>View Testimonials PDF</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
