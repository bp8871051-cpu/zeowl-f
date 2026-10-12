'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function TechnologyExpertise() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        scale: 0.85,
        y: 100,
        opacity: 0.3
      },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', // Start when the top of section hits bottom of viewport
          end: 'top 15%', // End when the top of section hits 15% from top
          scrub: 1 // Smooth scrub
        }
      }
    );
  }, { scope: sectionRef });

  const techItems = [
    { id: 1, title: 'Web\nDevelopment', icon: '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>', type: 'normal' },
    { id: 2, title: 'Mobile App\nDevelopment', icon: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>', type: 'normal' },
    { id: 3, title: 'Cloud\nSolutions', icon: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>', type: 'normal' },
    { id: 4, title: 'UI/UX\nDesign', icon: '<path d="M12 17v4"/><path d="M8 21h8"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>', type: 'normal' },
    { id: 5, title: 'Software\nDevelopment', icon: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>', type: 'normal' },
    { id: 6, title: 'OUR\nEXPERTISE', icon: null, type: 'center' },
    { id: 7, title: 'Digital\nMarketing', icon: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>', type: 'normal' },
    { id: 9, title: 'AI &\nAutomation', icon: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>', type: 'normal' },
    { id: 8, title: 'Database\nManagement', icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>', type: 'normal' },
    { id: 10, title: 'IT Consulting', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>', type: 'normal' },
    { id: 11, title: 'ERP & CRM\nSolutions', icon: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>', type: 'normal' }
  ];

  return (
    <section ref={sectionRef} id="technologies" className="relative w-full bg-[#fdfdfd] overflow-hidden font-sans">
      <div ref={containerRef} className="w-full h-full relative">
      
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      
      {/* Light geometric diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[linear-gradient(135deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
        <div className="absolute top-[20%] -left-64 w-[800px] h-[1px] bg-gray-200 rotate-45 transform origin-left"></div>
        <div className="absolute top-[60%] -right-64 w-[1200px] h-[1px] bg-gray-200 -rotate-45 transform origin-right"></div>
      </div>

      {/* Oversized Owl Watermark */}
      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0 flex items-center justify-center">
        <img src="/logo/ZEOWL.png" alt="Watermark" className="w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] object-contain filter grayscale" />
      </div>



      {/* Side Decorative Texts */}
      <div className="hidden lg:flex absolute top-1/3 left-12 flex-col gap-1 z-0 pointer-events-none text-[#071a35]/40 font-bold tracking-[0.3em] text-xs">
         <div className="w-6 h-[2px] bg-[#FF7A18] mb-4"></div>
         <span>BUILD</span>
         <span>AUTOMATE</span>
         <span>GROW</span>
      </div>
      <div className="hidden lg:flex absolute top-1/3 right-12 flex-col gap-1 z-0 pointer-events-none text-[#071a35]/40 font-bold tracking-[0.3em] text-xs text-right items-end">
         <span>IDEAS</span>
         <span>TECHNOLOGY</span>
         <span>PEOPLE</span>
         <span>GROWTH</span>
         <div className="w-6 h-[2px] bg-[#FF7A18] mt-4"></div>
      </div>
      
      {/* --- MAIN CONTENT --- */}
      <div className="w-full mx-auto px-4 lg:px-0 relative z-10 flex flex-col items-center justify-center pt-12 lg:pt-16 pb-24">
        
        {/* Top Right Logo */}
        {/* <div className="absolute top-8 right-8 hidden lg:block">
           <img src="/logo/ZEOWL.png" alt="Zeowl" className="h-10 object-contain" />
        </div> */}

        {/* Header Section */}
        <div className="text-center mb-16 relative w-full flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#FF7A18] hidden md:block"></div>
            <span className="text-gray-500 font-semibold tracking-widest text-sm uppercase">Technology & Expertise</span>
            <div className="w-12 h-[2px] bg-[#FF7A18] hidden md:block"></div>
          </div>
          <h2 className="text-[#071a35] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Technology <span className="text-[#FF7A18]">& Expertise</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Modern technologies. Real-world expertise. <br /> Future-ready solutions.
          </p>
        </div>

        {/* Honeycomb Grid Container (Desktop) */}
        <div className="relative w-[1072px] h-[354px] hidden lg:block mx-auto transform scale-90 xl:scale-100 origin-top mb-16">
          
          {techItems.map((item) => {
             // Perfect Honeycomb Grid Coordinates for 2-Row Layout
             let left = 0;
             let top = 0;
             
             // Small sizes for hexagon
             const hexWidth = 172;
             const hexHeight = 198;
             
             // Top Row (Y=0, 6 items)
             if(item.id === 1) { left = 0; top = 0; } // Web Dev
             if(item.id === 2) { left = 180; top = 0; } // Mobile App
             if(item.id === 4) { left = 360; top = 0; } // UI/UX
             if(item.id === 5) { left = 540; top = 0; } // Software Dev
             if(item.id === 7) { left = 720; top = 0; } // Digital Mktg
             if(item.id === 9) { left = 900; top = 0; } // AI & Auto
             
             // Bottom Row (Y=156, 5 items, centered)
             if(item.id === 3) { left = 90; top = 156; } // Cloud
             if(item.id === 8) { left = 270; top = 156; } // Database
             if(item.id === 6) { left = 450; top = 156; } // OUR EXPERTISE (Center)
             if(item.id === 10) { left = 630; top = 156; } // IT Consulting
             if(item.id === 11) { left = 810; top = 156; } // ERP & CRM
             
             const iconHtml = item.icon;
             
             return (
               <div 
                 key={item.id} 
                 className={`absolute transition-transform duration-300 flex items-center justify-center group cursor-pointer z-10`}
                 style={{ 
                   left: `${left}px`, 
                   top: `${top}px`, 
                   width: `${hexWidth}px`, 
                   height: `${hexHeight}px`,
                   filter: item.type === 'center' ? 'drop-shadow(0 20px 30px rgba(7,26,53,0.4))' : 'drop-shadow(0 10px 20px rgba(0,0,0,0.06))'
                 }}
               >
                 {/* Orange Bottom Border Highlight */}
                 {item.type !== 'center' && (
                   <div className="absolute inset-0 bg-[#FF7A18] hexagon-shape transform translate-y-[3px] transition-all duration-300 group-hover:translate-y-[6px] group-hover:drop-shadow-[0_10px_15px_rgba(255,122,24,0.4)]"></div>
                 )}
                 
                 {/* Main Hexagon */}
                 <div className={`absolute inset-0 flex flex-col items-center justify-center hexagon-shape transition-colors duration-300
                   ${item.type === 'center' 
                     ? 'bg-[#071a35] text-white' 
                     : 'bg-white text-[#071a35]'
                   }
                 `}>
                    
                    {item.type === 'center' ? (
                      <div className="flex flex-col items-center mt-2">
                        <img src="/logo/ZEOWL.png" alt="Zeowl" className="w-16 h-16 object-contain mb-2 brightness-0 invert" />
                        <span className="font-extrabold text-[10px] tracking-[0.2em] text-center uppercase text-white/90">{item.title}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center p-4 mt-2">
                        <div className="w-10 h-10 mb-2 text-[#071a35] group-hover:text-[#FF7A18] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_8px_12px_rgba(255,122,24,0.4)]">
                          {iconHtml && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: iconHtml }} />}
                        </div>
                        <span className="font-extrabold text-[10px] text-center uppercase tracking-wider leading-tight whitespace-pre-line transition-colors duration-300">{item.title}</span>
                      </div>
                    )}
                 </div>
               </div>
             )
          })}
        </div>

        {/* Mobile/Tablet Grid View (Hidden on Desktop) */}
        <div className="w-full lg:hidden mb-12 px-4 z-20 relative">
           
           {/* Center card displayed prominently at top on mobile */}
           <div className="flex justify-center mb-8">
             <div className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl bg-[#071a35] text-white w-full max-w-xs border border-gray-800">
                <img src="/logo/ZEOWL.png" alt="Zeowl" className="w-24 h-24 object-contain mb-4 brightness-0 invert" />
                <span className="font-black text-sm tracking-widest text-center uppercase text-white/90">OUR<br/>EXPERTISE</span>
             </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
             {techItems.filter(item => item.type !== 'center').map(item => {
               const iconHtml = item.icon;
               return (
                 <div key={item.id} className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl shadow-sm border bg-white text-[#071a35] border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer">
                    <div className="w-10 h-10 mb-4 text-[#071a35] group-hover:text-[#FF7A18] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_8px_12px_rgba(255,122,24,0.4)]">
                      {iconHtml && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: iconHtml }} />}
                    </div>
                    <span className="font-bold text-[10px] md:text-[11px] text-center uppercase tracking-wider leading-tight whitespace-pre-line">{item.title}</span>
                 </div>
               )
             })}
           </div>
        </div>

      </div>

      </div>
      <style jsx global>{`
        .hexagon-shape {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
}
