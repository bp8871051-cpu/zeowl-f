import React, { forwardRef } from 'react';

const ZeowlWall = forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={`relative h-full w-full ${className}`}>
      {/* Wall Core - This acts as a heavy physical barrier that extends infinitely to the right */}
      <div className="absolute inset-y-0 left-0 right-[-100vw] bg-neutral-950 border-l-2 border-neutral-800 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex items-center">
        
        {/* Subtle Tech pattern/glow on the edge where hands touch */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00d2ff] to-transparent opacity-50 shadow-[0_0_20px_#00d2ff]" />
        
        {/* Mechanical/Structural details near the edge */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[1px] h-[30%] bg-neutral-700" />
        <div className="absolute left-10 top-1/3 bottom-1/3 w-[1px] bg-neutral-800" />
        
        {/* Branding hint with gradient outline */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 -rotate-90 select-none whitespace-nowrap opacity-60">
          <svg width="800" height="100" className="overflow-visible">
            <defs>
              <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" /> {/* Tailwind orange-500 */}
                <stop offset="100%" stopColor="#3b82f6" /> {/* Tailwind blue-500 */}
              </linearGradient>
            </defs>
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fill="transparent" 
              stroke="url(#wallGradient)" 
              strokeWidth="2" 
              className="text-4xl md:text-6xl font-bold tracking-wide"
            >  ZEOWL INFOTECH
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
});

ZeowlWall.displayName = 'ZeowlWall';
export default ZeowlWall;
