'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight, ArrowRight, Layers, Lightbulb, TrendingUp } from 'lucide-react';

export default function OurWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const categories = ['All Projects', 'Web Apps', 'Mobile Apps', 'Design', 'Automation'];
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const projects = [
    {
      id: '01',
      domain: 'WEB DEVELOPMENT',
      title: 'Sarvakshetra Learning Ecosystem',
      description: 'Learning and placement ecosystem for students, verified mentors and tech companies.',
      image: '/portfolio/mockup-web-dev.jpg',
      tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      id: '02',
      domain: 'SOFTWARE DEVELOPMENT',
      title: 'FinVibe Enterprise Cloud Suite',
      description: 'Complete SaaS software platform with real-time financial telemetry & automated payouts.',
      image: '/portfolio/mockup-software-dev.jpg',
      tech: ['React', 'TypeScript', 'Redux', 'Chart.js']
    },
    {
      id: '03',
      domain: 'AI & AUTOMATION',
      title: 'AutomateIQ Multi-Agent Platform',
      description: 'Enterprise AI document processing pipeline and autonomous intelligence workflows.',
      image: '/portfolio/mockup-ai-automation.jpg',
      tech: ['Python', 'FastAPI', 'OpenAI', 'Redis']
    },
    {
      id: '04',
      domain: 'APP DEVELOPMENT',
      title: 'Nova Health Telemedicine App',
      description: 'Cross-platform mobile telehealth solution with real-time consultations and digital EHR.',
      image: '/portfolio/mockup-mobile-app.jpg',
      tech: ['Flutter', 'React Native', 'Firebase']
    }
  ];

  const numProjects = projects.length;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % numProjects);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + numProjects) % numProjects);

  useGSAP(() => {
    projects.forEach((_, index) => {
      const el = cardRefs.current[index];
      if (!el) return;

      const isCenter = index === activeIndex;
      const isLeft = index === (activeIndex - 1 + numProjects) % numProjects;
      const isRight = index === (activeIndex + 1) % numProjects;

      // Ensure mobile responsiveness in GSAP values
      const isMobile = window.innerWidth < 768;

      if (isCenter) {
        gsap.to(el, {
          xPercent: 0,
          yPercent: 0,
          z: 80,
          rotationY: 0,
          rotationZ: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
          filter: 'blur(0px) brightness(1.1)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      } else if (isLeft) {
        gsap.to(el, {
          xPercent: isMobile ? 0 : -60,
          yPercent: 0,
          z: isMobile ? -200 : -100,
          rotationY: isMobile ? 0 : 18,
          rotationZ: isMobile ? 0 : -2,
          scale: isMobile ? 0.8 : 0.82,
          opacity: isMobile ? 0 : 0.6,
          zIndex: 20,
          filter: 'blur(2px) brightness(0.6)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      } else if (isRight) {
        gsap.to(el, {
          xPercent: isMobile ? 0 : 60,
          yPercent: 0,
          z: isMobile ? -200 : -100,
          rotationY: isMobile ? 0 : -18,
          rotationZ: isMobile ? 0 : 2,
          scale: isMobile ? 0.8 : 0.82,
          opacity: isMobile ? 0 : 0.6,
          zIndex: 20,
          filter: 'blur(2px) brightness(0.6)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      } else {
        // Hidden cards
        gsap.to(el, {
          xPercent: 0,
          yPercent: 0,
          z: -300,
          rotationY: 0,
          rotationZ: 0,
          scale: 0.5,
          opacity: 0,
          zIndex: 10,
          filter: 'blur(10px) brightness(0.3)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      }
    });
  }, { dependencies: [activeIndex], scope: containerRef });

  return (
    <section id="portfolio" className="relative w-full bg-[#fdfdfd] py-20 overflow-hidden font-sans">
      <span id="work" className="sr-only pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(245,126,32,0.04)_0%,transparent_60%)]"></div>
        {/* Subtle curved lines */}
        <svg className="absolute bottom-10 left-0 w-full h-40 opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 -20 480 140 720 60C960 -20 1200 140 1440 60" stroke="#f57e20" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8">
          <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="w-12 h-[2px] bg-[#f57e20]"></div>
              <span className="text-[#f57e20] font-black tracking-widest text-sm uppercase">OUR WORK</span>
              <div className="w-12 h-[2px] bg-[#f57e20]"></div>
            </div>
            <h2 className="text-[#071a35] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4 text-center lg:text-left">
              Ideas Turned <br />
              Into <span className="text-[#f57e20]">Real Projects.</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-md text-center lg:text-left mx-auto lg:mx-0">
              A glimpse of the solutions we&apos;ve built for startups, businesses and growing brands.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                    ${isActive
                      ? 'bg-[#f57e20] text-white border-[#f57e20] shadow-lg'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-gray-400'}`}></span>
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3D Carousel Section */}
      <div className="relative w-full mb-16 px-2 md:px-12 group">

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute top-1/2 left-1 sm:left-3 md:left-8 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-[#f57e20] hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute top-1/2 right-1 sm:right-3 md:right-8 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-[#f57e20] hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* 3D Scene Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center"
          style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardRefs.current[index] = el}
              className="absolute inset-0 m-auto w-[90%] md:w-[60%] lg:w-[55%] h-[420px] md:h-[500px] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] group hover:-translate-y-2 transition-transform duration-500 ease-out"
              style={{ background: '#06182f', transformOrigin: 'center center' }}
            >
              {/* Project Image Mockup */}
              <div className="w-full h-full relative overflow-hidden bg-[#06182f]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                />

                {/* Ambient dark gradient overlay for crystal-clear readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06182f] via-[#06182f]/60 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Info Panel with reference notch badge */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
                <div className="flex-1">
                  {/* Notch / Pill Badge */}
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-md border border-white/20 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#f57e20] text-white flex items-center justify-center text-[10px] font-mono font-black shadow-xs">
                      {project.id}
                    </span>
                    <span className="text-[11px] font-bold tracking-wider text-[#f57e20] uppercase font-mono">
                      {project.domain}
                    </span>
                  </div>

                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base max-w-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Button */}
                <div className="flex flex-col items-start sm:items-end gap-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs font-semibold mr-1">TECH:</span>
                    {project.tech.map((t, i) => (
                      <div key={i} className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] text-white/80 backdrop-blur-md">
                        {t}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/portfolio"
                    className="bg-white hover:bg-[#f57e20] text-[#071a35] hover:text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                  >
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Active Orange Glow */}
              <div className="absolute inset-0 border border-transparent rounded-[24px] pointer-events-none group-hover:border-[#f57e20]/30 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Pagination Details */}
        <div className="relative flex items-center justify-center mb-16 border-t border-gray-200/60 pt-6">
          <div className="flex gap-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`font-bold text-sm pb-2 relative transition-colors ${activeIndex === i ? 'text-[#f57e20]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                0{i + 1}
                {activeIndex === i && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#f57e20] rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <div className="absolute right-0 top-0 -translate-y-4 flex flex-col items-end rotate-[-5deg] hidden md:flex">
            <span className="text-[#f57e20] font-bold text-xl" style={{ fontFamily: 'cursive' }}>More Projects <br /> Coming Soon...</span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 -scale-x-100 text-[#f57e20]">
              <path d="M5 12C5 12 8 4 16 4M16 4L12 8M16 4L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-gray-200/60 pt-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f57e20] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
              <Layers size={24} />
            </div>
            <div>
              <h4 className="text-[#071a35] font-black text-lg mb-1">Real Solutions</h4>
              <p className="text-gray-500 text-sm">Built for actual business needs.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f57e20] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
              <Lightbulb size={24} />
            </div>
            <div>
              <h4 className="text-[#071a35] font-black text-lg mb-1">Modern Approach</h4>
              <p className="text-gray-500 text-sm">Clean design and scalable code.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f57e20] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="text-[#071a35] font-black text-lg mb-1">Growing Impact</h4>
              <p className="text-gray-500 text-sm">Helping businesses move forward.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
