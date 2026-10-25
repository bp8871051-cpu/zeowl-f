'use client';
import React, { useState, useRef, useEffect } from 'react';

const services = [
  {
    id: '01',
    title: 'Web\nDevelopment',
    desc: 'Modern, scalable and high-performance websites and web applications.',
    tags: ['Websites', 'Web Apps', 'Platforms'],
    image: '/images for services/01_web-development-removebg-preview.png'
  },
  {
    id: '02',
    title: 'Mobile App\nDevelopment',
    desc: 'Powerful mobile applications for Android and iOS.',
    tags: ['iOS', 'Android', 'Cross-Platform'],
    image: '/images for services/02_mobile-apps-removebg-preview.png'
  },
  {
    id: '03',
    title: 'UI/UX &\nProduct Design',
    desc: 'Human-centered designs that create real impact.',
    tags: ['Wireframes', 'Prototyping', 'User Testing'],
    image: '/images for services/03_ui-ux-design-removebg-preview.png'
  },
  {
    id: '04',
    title: 'AI &\nAutomation',
    desc: 'Intelligent solutions to streamline and scale your business.',
    tags: ['Machine Learning', 'Bots', 'Data'],
    image: '/images for services/04_ai-automation-removebg-preview.png'
  },
  {
    id: '05',
    title: 'Digital\nMarketing',
    desc: 'Data-driven strategies to grow your brand online.',
    tags: ['SEO', 'Content', 'Ads'],
    image: '/images for services/05_digital-marketing-removebg-preview.png'
  },
  {
    id: '06',
    title: 'Custom\nSoftware Solutions',
    desc: 'Tailored solutions for unique business needs.',
    tags: ['Enterprise', 'SaaS', 'Integrations'],
    image: '/images for services/06_custom-software-removebg-preview.png'
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < services.length - 1) {
      setActiveIndex(activeIndex + 1);
      scrollToIndex(activeIndex + 1);
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const child = carouselRef.current.children[index];
      if (child) {
        // Calculate offset to center or align properly
        const offset = child.offsetLeft - carouselRef.current.offsetLeft - 24;
        carouselRef.current.scrollTo({ left: offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="bg-[#FCFBF9] w-full min-h-screen flex flex-col justify-between py-20 relative overflow-hidden font-sans z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">

      {/* Background Watermark bottom */}
      <div className="absolute -bottom-16 left-10 pointer-events-none select-none z-0">
        <span className="text-[12rem] md:text-[16rem] font-bold text-[#EEF1F4]/70 leading-none tracking-tighter">SERVICES</span>
      </div>

      <div className="max-w-[90rem] w-full mx-auto px-6 lg:px-8 relative z-10 flex-1 flex flex-col">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#FF7A18]"></div>
              <span className="text-[#FF7A18] uppercase tracking-wider text-sm font-bold">OUR SERVICES</span>
            </div>
            <h2 className="text-[#071A35] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-5 sm:mb-6 text-center lg:text-left">
              WE TURN COMPLEX IDEAS<br />
              INTO <span className="text-[#FF7A18]">DIGITAL EXPERIENCES.</span>
            </h2>
            <p className="text-[#566579] text-base sm:text-lg max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              From strategy and design to development and growth, we offer end-to-end digital solutions that help businesses innovate, scale and stay ahead.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center py-10 lg:py-0">
            {/* Concentric Circles & Owl */}
            <div className="relative w-64 h-64 flex items-center justify-center hidden md:flex">
              <div className="absolute inset-0 border border-[#EEF1F4] rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-[#EEF1F4] rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
              <div className="absolute inset-10 border border-[#EEF1F4] rounded-full animate-[spin_10s_linear_infinite]"></div>

              <div className="w-24 h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center z-10 relative">
                {/* Simplified Logo representation */}
                <div className="text-4xl font-black text-[#071A35] flex items-center italic">Z<span className="text-[#FF7A18] text-4xl">_</span></div>
              </div>

              {/* Dots on rings */}
              <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-[#FF7A18] rounded-full"></div>
              <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-[#FF7A18] rounded-full"></div>
            </div>

            {/* Handwritten Text */}
            <div className="absolute top-0 right-10 transform rotate-[345deg] animate-handwriting">
              <div className="text-[#FF7A18] text-3xl leading-tight" style={{ fontFamily: 'var(--font-caveat), "Caveat", cursive', fontWeight: 600 }}>
                Build<br />Scale<br />Grow
              </div>
              <svg viewBox="0 0 100 24" className="w-20 mt-1 opacity-60">
                <path d="M 2 20 C 35 15, 65 5, 98 2" fill="none" stroke="#FF7A18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute bottom-4 right-20 text-right hidden lg:block">
              <div className="text-[#071A35]/40 text-[10px] font-bold tracking-widest uppercase">YOUR VISION<br />OUR EXPERTISE</div>
            </div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={carouselRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto pb-10 pt-4 hide-scrollbar flex-1 items-stretch"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                className={`flex-shrink-0 rounded-[2rem] transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border bg-white flex flex-col p-5 sm:p-6 lg:p-8 relative
                  ${isActive ? 'w-[86vw] sm:w-[400px] md:w-[440px] lg:w-[480px] border-[#FF7A18] shadow-[0_10px_40px_rgba(255,122,24,0.15)] scale-100 z-10' : 'w-[72vw] sm:w-[260px] md:w-[280px] border-[#EEF1F4] shadow-sm hover:shadow-lg hover:border-gray-200 opacity-80 hover:opacity-100 scale-95 origin-center z-0'}
                `}
              >
                {/* Top Row: Number & Arrow */}
                <div className="flex justify-between items-start mb-6 z-10">
                  <span className={`text-2xl font-bold transition-colors ${isActive ? 'text-[#FF7A18]' : 'text-gray-300'}`}>
                    {service.id}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-[#FCFBF9] text-[#071A35] border border-gray-200' : 'bg-[#FCFBF9] text-gray-400 border border-transparent hover:border-gray-300'}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="z-10 flex-1 flex flex-col relative">
                  <h3 className="text-[#071A35] text-2xl font-bold leading-tight mb-3 whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-[#566579] text-sm leading-relaxed mb-6 max-w-[200px]">
                    {service.desc}
                  </p>

                  {/* Active Content: Link & Tags */}
                  <div className={`transition-all duration-500 overflow-hidden flex-1 flex flex-col justify-end ${isActive ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>

                    {/* 3D Graphic when ACTIVE (large on the right) */}
                    <div className={`absolute ${index === 0 ? 'right-[-40px] bottom-16' : 'right-[-10px] bottom-10'} w-48 h-48 pointer-events-none transition-all duration-700 delay-100 drop-shadow-2xl`}>
                      <img
                        src={service.image}
                        alt={service.title.replace('\n', ' ')}
                        className={`w-full h-full object-contain ${index === 0 ? '-scale-x-100' : ''}`}
                      />
                    </div>

                    <div className="mb-8 flex items-center text-[#FF7A18] text-sm font-semibold group cursor-pointer w-fit z-10">
                      <span className="relative">
                        Explore Service
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF7A18] transform origin-left scale-x-100 transition-transform"></span>
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                    </div>

                    <div className="flex gap-2 flex-wrap z-10 mt-auto">
                      {service.tags.map(tag => (
                        <div key={tag} className="flex items-center gap-1.5 text-[9px] font-bold text-[#071A35] bg-white border border-[#EEF1F4] shadow-sm px-3 py-1.5 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A18]"></div>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Graphic when INACTIVE (centered at bottom) */}
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-[15px] w-28 h-28 pointer-events-none transition-all duration-500 drop-shadow-xl ${isActive ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                    <img
                      src={service.image}
                      alt={service.title.replace('\n', ' ')}
                      className={`w-full h-full object-contain ${index === 0 ? '-scale-x-100' : ''}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-4 md:mt-8 pt-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-6 h-8 rounded-full border border-gray-300 flex items-center justify-center p-1">
              <div className="w-0.5 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
            <span className="text-[#071A35]/50 text-[10px] font-bold tracking-widest uppercase">SCROLL HORIZONTALLY</span>
            <div className="w-32 h-[1px] bg-gray-200 ml-4 hidden md:block relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[#FF7A18] transition-all duration-300" style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}></div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col text-right pr-8 border-r border-[#EEF1F4]">
              <span className="text-[#FF7A18] text-[9px] font-bold tracking-widest uppercase leading-[1.3]">SAME<br />IDEAS<br />BIGGER<br />POSSIBILITIES<div className="w-6 h-px bg-[#FF7A18] inline-block ml-2 align-middle"></div></span>
            </div>
            <div className="flex gap-4">
              <button onClick={scrollLeft} disabled={activeIndex === 0} className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${activeIndex === 0 ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-white' : 'border-[#EEF1F4] bg-white text-[#071A35] hover:bg-[#071A35] hover:text-white shadow-sm'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={scrollRight} disabled={activeIndex === services.length - 1} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeIndex === services.length - 1 ? 'border border-gray-200 text-gray-400 cursor-not-allowed bg-white' : 'bg-[#FF7A18] text-white hover:bg-[#e06612] shadow-[0_10px_20px_rgba(255,122,24,0.3)]'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
