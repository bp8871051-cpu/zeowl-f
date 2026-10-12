'use client';
import React, { useState, useEffect } from 'react';

const HowWeWorkSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Discover",
      subtitle: "Understand Your Goals",
      description: "We listen to your ideas, understand your business needs and define clear objectives.",
      imageText: "Good Ideas Start with a Conversation",
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      id: "02",
      title: "Plan",
      subtitle: "Strategy & Roadmap",
      description: "We research, analyze and create a customized strategy with a clear roadmap, timelines and deliverables.",
      imageText: "Strategy Today Success Tomorrow",
      bgClass: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      id: "03",
      title: "Design",
      subtitle: "Create Meaningful Experiences",
      description: "Our team crafts modern, user-focused designs that are visually stunning and aligned with your brand.",
      imageText: "Design for a Better Tomorrow",
      bgClass: "bg-gradient-to-br from-indigo-100 to-indigo-200",
    },
    {
      id: "04",
      title: "Develop",
      subtitle: "Bring Ideas to Life",
      description: "We turn designs into high-performing, secure and scalable digital solutions using the latest technologies.",
      imageText: "Clean Code Stronger Solutions",
      bgClass: "bg-[#0b101e]",
    },
    {
      id: "05",
      title: "Launch & Grow",
      subtitle: "Deliver and Support",
      description: "We launch your solution and continue to support, optimize and grow with your business for long-term success.",
      imageText: "Launch Grow Succeed",
      bgClass: "bg-gradient-to-b from-blue-400 to-blue-900",
    }
  ];

  // Auto cycle the active step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000); // changes every 3 seconds
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="process" className="relative w-full bg-[#f4f7fb] overflow-hidden pt-24 font-sans">
      
      {/* Header Area */}
      <div className="max-w-[90rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Handwriting text (Absolute top right of container) */}
        <div className="absolute top-10 right-12 hidden xl:block transform rotate-[-10deg] z-20">
          <div className="text-[#0052ff] text-4xl leading-tight" style={{ fontFamily: 'var(--font-caveat), "Caveat", cursive', fontWeight: 600 }}>
            From <br /> Ideas to <br /> Impact
          </div>
          <svg viewBox="0 0 100 20" className="w-24 mt-1 opacity-60">
            <path d="M 2 15 C 30 10, 60 5, 95 2" fill="none" stroke="#0052ff" strokeWidth="2" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          {/* Left Side: Headline */}
          <div className="lg:max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#0052ff] font-bold text-lg">04.</span>
              <div className="w-12 h-[2px] bg-gray-300"></div>
              <span className="text-gray-500 font-semibold tracking-widest text-sm uppercase">How We Work</span>
            </div>
            <h2 className="text-[#071a35] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              A Simple Process <br />
              <span className="text-[#0052ff]">for Real Results</span>
            </h2>
          </div>

          {/* Right Side: Approach & CTA */}
          <div className="lg:max-w-md w-full flex flex-col items-start lg:pt-8 border-l-2 border-gray-200 pl-6 sm:pl-8 relative">
            <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-4">Our Approach</span>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
              We follow a transparent and proven process to turn your ideas into powerful digital solutions. From understanding your goals to ongoing support, we ensure a smooth and collaborative journey.
            </p>
            <button className="flex items-center gap-3 text-[#0052ff] font-semibold text-sm border border-[#0052ff] rounded-full px-6 py-2.5 hover:bg-[#0052ff] hover:text-white transition-all duration-300">
              Let's Work Together 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Area */}
      <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-20 relative z-10 pb-36 sm:pb-48 lg:pb-72">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isPrev = activeStep > index;

            return (
              <div key={index} className="flex flex-col relative group items-center">
                
                {/* Node Circle */}
                <div className="relative mb-8 flex-shrink-0 z-20">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-all duration-700 ease-out z-20 relative
                    ${isActive 
                      ? 'bg-[#0052ff] text-white border-white shadow-[0_0_25px_rgba(0,82,255,0.7)] scale-110' 
                      : isPrev 
                        ? 'bg-blue-100 text-[#0052ff] border-white shadow-sm' 
                        : 'bg-white text-[#0052ff] border-gray-100 hover:scale-105'
                    }
                  `}>
                    {step.id}
                  </div>
                </div>

                {/* Connector Line spanning to the next item (Only on desktop) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[28px] left-[50%] w-[calc(100%+1.5rem)] h-0 hidden lg:flex items-center z-10 pointer-events-none">
                    
                    {/* Background line behind circles */}
                    <div className="absolute left-0 right-0 h-[2px] bg-[#dbe4f1] -translate-y-1/2"></div>
                    
                    {/* Active glow trail */}
                    <div className={`absolute left-0 h-[2px] bg-[#0052ff] shadow-[0_0_8px_#0052ff] transition-all duration-[2800ms] ease-linear origin-left -translate-y-1/2
                      ${isActive ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}
                    `}></div>

                    {/* Static center arrow (when not active) */}
                    <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 border border-gray-200 transition-opacity duration-300 z-10
                      ${isActive ? 'opacity-0' : 'opacity-100'}
                    `}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a0b3cc" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                    </div>

                    {/* Traveling Arrow */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-20">
                        <div className="absolute top-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#0052ff] shadow-[0_0_12px_rgba(0,82,255,0.4)] animate-travel">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0052ff" strokeWidth="3"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Card */}
                <div className={`w-full bg-white rounded-2xl p-6 shadow-sm border flex-1 flex flex-col h-[380px] transition-all duration-500
                  ${isActive ? 'border-[#0052ff]/30 shadow-xl scale-[1.02] lg:-translate-y-2' : 'border-gray-100 hover:shadow-md'}
                `}>
                  <h3 className="text-[#071a35] font-black text-xl mb-1">{step.title}</h3>
                  <h4 className="text-gray-500 font-medium text-sm mb-4">{step.subtitle}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-1">
                    {step.description}
                  </p>

                  {/* Card Image Placeholder */}
                  <div className={`w-full h-36 rounded-xl overflow-hidden relative flex items-center justify-center p-4 text-center transition-all duration-500
                    ${step.bgClass} 
                    ${isActive ? 'shadow-inner' : 'opacity-80 grayscale-[20%]'}
                  `}>
                     <div className="relative z-10 font-bold text-[#071a35]">
                        {step.id === '04' || step.id === '05' ? (
                          <span className="text-white drop-shadow-md leading-tight block">{step.imageText}</span>
                        ) : (
                          <span className="drop-shadow-sm leading-tight block">{step.imageText}</span>
                        )}
                     </div>
                     {step.id === '04' && (
                       <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
                     )}
                     <div className={`absolute top-3 left-3 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm transition-colors
                        ${isActive ? 'text-[#0052ff]' : 'text-gray-400'}
                     `}>
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Area with Mountains Background */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <img 
          src="/how_we_work-bg/how_we_work_home-bg.png" 
          alt="Mountains Background" 
          className="w-full h-auto object-bottom opacity-100"
        />
        {/* Top gradient to blend mountains with the section background */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#f4f7fb] to-transparent"></div>
        {/* Overlay gradient to blend bottom edge if needed */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#020b18] to-transparent"></div>
        
        {/* Corner Texts */}
        <div className="absolute bottom-12 lg:bottom-16 left-6 lg:left-12 text-left hidden md:flex flex-col items-start text-[9px] font-bold text-gray-400 tracking-widest uppercase border-l border-gray-600 pl-4 py-1 z-10">
          <span>Technology</span>
          <span>People</span>
          <span>Progress</span>
        </div>
        
        <div className="absolute bottom-12 lg:bottom-16 right-6 lg:right-12 text-left hidden md:flex flex-col items-start text-[9px] font-bold text-gray-400 tracking-widest uppercase border-l border-gray-600 pl-4 py-1 z-10">
          <span>Built</span>
          <span>For a</span>
          <span>Brighter</span>
          <span>Tomorrow</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes travel {
          0% { left: 28px; opacity: 0; transform: translateY(-50%) scale(0.5); }
          10% { opacity: 1; transform: translateY(-50%) scale(1); }
          90% { opacity: 1; transform: translateY(-50%) scale(1); }
          100% { left: calc(100% - 60px); opacity: 0; transform: translateY(-50%) scale(0.5); }
        }
        .animate-travel {
          animation: travel 2.8s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default HowWeWorkSection;
