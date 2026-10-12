'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Layout,
  Server,
  Database,
  Cpu,
  Cloud,
  Wrench,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const techCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Layout,
    description: 'Modern, reactive interfaces engineered for ultra-fast load times and seamless user interaction.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Framer Motion'],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    description: 'Resilient server architectures, high-concurrency microservices, and rock-solid REST/GraphQL APIs.',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'NestJS', 'Go'],
  },
  {
    id: 'database',
    name: 'Database',
    icon: Database,
    description: 'Optimized schema design, high-throughput caching, and dependable multi-region databases.',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    id: 'ai-automation',
    name: 'AI / Automation',
    icon: Cpu,
    description: 'Intelligent process automation, custom AI assistants, and enterprise workflow integrations.',
    skills: ['OpenAI API', 'LangChain', 'n8n Workflows', 'Python AI', 'Custom LLMs', 'Hugging Face'],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Cloud-native infrastructure, automated containerization, and zero-downtime deployment pipelines.',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions'],
  },
  {
    id: 'tools',
    name: 'Tools & Testing',
    icon: Wrench,
    description: 'Comprehensive tooling and testing suites ensuring high maintainability and code security.',
    skills: ['Figma', 'Git / GitHub', 'Postman', 'Jest', 'Jira', 'VS Code'],
  },
];

export default function TechnologyStack() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Tech cards stagger
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 40, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const displayedCategories =
    activeCategory === 'all'
      ? techCategories
      : techCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="technologies"
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 font-sans overflow-hidden bg-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/about/tech-ecosystem-bg.png')",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-[#F57E20] rounded-full" />
            <span className="text-[#F57E20] uppercase tracking-[0.2em] text-xs font-bold">
              MODERN TECH ECOSYSTEM
            </span>
            <div className="w-6 h-[2px] bg-[#F57E20] rounded-full" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#06182F] tracking-tight leading-[1.15] mb-4">
            Technologies We Work With
          </h2>

          <p className="font-body text-[#566579] text-base sm:text-lg leading-relaxed font-normal">
            We leverage proven, high-performance technologies to build scalable,
            secure, and future-ready digital platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 max-w-3xl mx-auto">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#F57E20] text-white shadow-md shadow-[#F57E20]/25'
                : 'bg-white text-[#06182F]/70 border border-[#06182F]/10 hover:border-[#F57E20]/40 hover:text-[#06182F]'
            }`}
          >
            All Categories
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#F57E20] text-white shadow-md shadow-[#F57E20]/25'
                  : 'bg-white text-[#06182F]/70 border border-[#06182F]/10 hover:border-[#F57E20]/40 hover:text-[#06182F]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {displayedCategories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative bg-white rounded-[2rem] p-8 sm:p-9 border border-[#06182F]/[0.08] hover:border-[#F57E20]/50 shadow-[0_8px_30px_rgba(6,24,47,0.04)] hover:shadow-[0_20px_50px_rgba(245,126,32,0.12)] transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#06182F]/[0.03] border border-[#06182F]/[0.08] flex items-center justify-center text-[#06182F] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F57E20] group-hover:text-white group-hover:border-[#F57E20] group-hover:shadow-[0_0_20px_rgba(245,126,32,0.3)]">
                      <IconComp className="w-6 h-6" strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#06182F] tracking-tight">
                        {cat.name}
                      </h3>
                      <span className="text-[11px] font-bold text-[#F57E20] uppercase tracking-wider">
                        {cat.skills.length} Core Technologies
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[#566579] text-sm sm:text-base leading-[1.7] mb-6 font-normal">
                    {cat.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-body inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F9FC] border border-[#06182F]/[0.06] text-xs font-semibold text-[#06182F] group-hover:border-[#F57E20]/30 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F57E20]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="mt-6 pt-4 border-t border-[#06182F]/[0.06] flex items-center justify-between text-xs font-bold text-[#06182F]/40 group-hover:text-[#F57E20] transition-colors">
                  <span className="uppercase tracking-wider">ENTERPRISE GRADE</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
