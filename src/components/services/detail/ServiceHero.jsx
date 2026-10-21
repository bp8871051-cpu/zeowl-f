'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import {
  Rocket,
  Users,
  Shield,
  ShieldCheck,
  Monitor,
  Laptop,
  ShoppingCart,
  ShoppingBag,
  Settings,
  Smartphone,
  Layers,
  Palette,
  Layout,
  Component,
  Bot,
  Workflow,
  Sparkles,
  Search,
  Target,
  TrendingUp,
  BarChart2,
  Server,
  Cloud,
  Database,
  Code2,
  Video,
  Grid,
  Award,
  Film,
  Play,
  Clapperboard,
  PenTool,
  BookOpen,
  Package,
  UserCheck,
  Clock,
  Star,
  DollarSign,
  Heart,
  Eye,
  CheckCircle,
  ArrowRight,
  Smile,
} from 'lucide-react';

const iconMap = {
  rocket: Rocket,
  users: Users,
  shield: ShieldCheck,
  'shield-check': ShieldCheck,
  monitor: Monitor,
  laptop: Laptop,
  'shopping-cart': ShoppingCart,
  'shopping-bag': ShoppingBag,
  settings: Settings,
  smartphone: Smartphone,
  layers: Layers,
  palette: Palette,
  layout: Layout,
  component: Component,
  bot: Bot,
  workflow: Workflow,
  sparkles: Sparkles,
  search: Search,
  target: Target,
  'trending-up': TrendingUp,
  'bar-chart': BarChart2,
  server: Server,
  cloud: Cloud,
  database: Database,
  code: Code2,
  video: Video,
  grid: Grid,
  award: Award,
  film: Film,
  play: Play,
  clapperboard: Clapperboard,
  'pen-tool': PenTool,
  'book-open': BookOpen,
  package: Package,
  'user-check': UserCheck,
  clock: Clock,
  star: Star,
  'dollar-sign': DollarSign,
  heart: Heart,
  eye: Eye,
  'check-circle': CheckCircle,
  smile: Smile,
};

export default function ServiceHero({ service }) {
  const containerRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const expertiseRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (breadcrumbRef.current) {
        tl.fromTo(
          breadcrumbRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.45 }
        );
      }
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45 },
          '-=0.25'
        );
      }
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power4.out' },
          '-=0.25'
        );
      }
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55 },
          '-=0.35'
        );
      }
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 15, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          '-=0.35'
        );
      }

      // Dedicated ScrollTrigger for "What We Build / Our Expertise" section
      if (expertiseRef.current) {
        gsap.fromTo(
          expertiseRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: expertiseRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );

        const cards = expertiseRef.current.querySelectorAll('.expertise-card');
        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: expertiseRef.current,
                start: 'top 80%',
                once: true,
              },
            }
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [service.slug]);

  const expertise = service.expertise || {
    eyebrow: '— OUR EXPERTISE —',
    title: 'What We',
    highlightWord: 'Build',
    subtitle: 'From business websites to complex applications, we create tailored solutions that match your goals.',
    cards: [
      {
        number: '01',
        title: 'Business Solutions',
        desc: 'Professional digital products that build credibility and help attract customers.',
        icon: 'monitor',
        link: '#contact',
      },
      {
        number: '02',
        title: 'Scalable Platforms',
        desc: 'Secure and feature-packed platforms with seamless user experiences.',
        icon: 'shopping-cart',
        link: '#contact',
      },
      {
        number: '03',
        title: 'Custom Applications',
        desc: 'Tailored systems built to automate processes and solve unique challenges.',
        icon: 'settings',
        link: '#contact',
      },
    ],
  };

  const bgImage = service.heroBg || `/services/${service.slug}-hero-bg.jpg`;

  return (
    <div ref={containerRef} className="relative w-full bg-white text-[#0A1C30] overflow-hidden">
      {/* 01. MAIN HERO BANNER */}
      <section className="relative w-full min-h-[540px] sm:min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] pt-[84px] sm:pt-[98px] md:pt-[108px] xl:pt-[116px] pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-12 flex items-center overflow-hidden">
        {/* Full Hero Responsive Background Artwork */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src={bgImage}
            alt={`${service.title} Hero Background`}
            className="w-full h-full object-cover object-right sm:object-center select-none"
            priority="true"
          />
          {/* Subtle light gradient on left to guarantee crisp readability across all mobile and desktop viewports */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 sm:via-white/85 sm:to-transparent lg:w-[62%] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[88rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Breadcrumb, Eyebrow, Big Headline, Description, Dual Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Breadcrumb */}
            <div
              ref={breadcrumbRef}
              className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono font-medium tracking-wider text-slate-500 uppercase mb-3 sm:mb-5"
            >
              <Link href="/" className="hover:text-[#0A1C30] transition-colors">
                HOME
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/services" className="hover:text-[#0A1C30] transition-colors">
                SERVICES
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#FF7900] font-bold tracking-wider">
                {service.title.toUpperCase()}
              </span>
            </div>

            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#FF7900] uppercase mb-3.5 sm:mb-4 mx-auto lg:mx-0"
            >
              <span className="w-4 sm:w-6 h-[2px] bg-[#FF7900] inline-block rounded-full" />
              <span>{service.eyebrow || `${service.title.toUpperCase()} SERVICES`}</span>
              <span className="w-4 sm:w-6 h-[2px] bg-[#FF7900] inline-block rounded-full" />
            </div>

            {/* Headline */}
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black text-[#0A1C30] tracking-tight leading-[1.14] sm:leading-[1.12] mb-4 sm:mb-6 text-center lg:text-left"
            >
              {service.heroHeadlineClean?.line1 || service.heroHeadline?.line1 || 'Websites Built to'}
              <br className="hidden sm:inline" />{' '}
              {service.heroHeadlineClean?.line2 || service.heroHeadline?.line2 || 'Move Your Business'}{' '}
              <span className="text-[#FF7900]">
                {service.heroHeadlineClean?.highlightWord ||
                  service.heroHeadline?.highlightWord1 ||
                  'Forward'}
              </span>
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-6 sm:mb-10 text-center lg:text-left mx-auto lg:mx-0"
            >
              {service.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-5 w-full"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FF7900] hover:bg-[#e66c00] text-white font-bold text-sm tracking-wide shadow-[0_12px_28px_rgba(255,121,0,0.35)] hover:shadow-[0_16px_36px_rgba(255,121,0,0.48)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center w-full sm:w-auto"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#selected-work"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#0A1C30] border border-slate-200/90 font-bold text-sm tracking-wide shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center w-full sm:w-auto"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right Column Spacer (The 3D artwork sits visibly behind this space) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[360px] pointer-events-none" />
        </div>
      </section>

      {/* 02. WHAT WE BUILD / OUR EXPERTISE SECTION */}
      <section
        ref={expertiseRef}
        className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 mb-20 lg:mb-28"
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-[#FF7900] uppercase mb-3">
            <span className="w-5 h-[2px] bg-[#FF7900] inline-block rounded-full" />
            <span>{expertise.eyebrow || '— OUR EXPERTISE —'}</span>
            <span className="w-5 h-[2px] bg-[#FF7900] inline-block rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0A1C30] tracking-tight mb-4">
            {expertise.title || 'What We'}{' '}
            <span className="text-[#FF7900]">{expertise.highlightWord || 'Build'}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {expertise.subtitle}
          </p>
        </div>

        {/* 3 Structured Expertise Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {expertise.cards.map((card, cIdx) => {
            const IconComp = iconMap[card.icon] || Sparkles;
            return (
              <div
                key={card.number || cIdx}
                className="expertise-card group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-100 shadow-[0_10px_30px_rgba(10,28,48,0.04)] hover:shadow-[0_20px_45px_rgba(255,121,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon Badge & 01/02/03 Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center text-[#FF7900] group-hover:bg-[#FF7900] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-sm">
                      <IconComp className="w-6 h-6 transition-colors" />
                    </div>
                    <span className="text-slate-300 font-mono font-bold text-sm tracking-widest">
                      {card.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-[#0A1C30] group-hover:text-[#FF7900] transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 font-body leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2">
                  <Link
                    href={card.link || '#contact'}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF7900] hover:text-[#e66c00] transition-colors group-hover:gap-2.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
