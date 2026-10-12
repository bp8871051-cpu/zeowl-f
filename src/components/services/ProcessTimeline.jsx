'use client';

import React from 'react';
import { Target, FileText, Cog, BarChart3, Rocket } from 'lucide-react';
import ProcessStep from './ProcessStep';

export const processSteps = [
  {
    number: '01',
    title: 'Understand\nYour Goals',
    icon: Target,
    key: 'understand',
    description: 'Deep dive into your business vision and key deliverables.',
  },
  {
    number: '02',
    title: 'Plan\nStrategy',
    icon: FileText,
    key: 'plan',
    description: 'Roadmap, technical architecture, and milestone scoping.',
  },
  {
    number: '03',
    title: 'Design\n& Develop',
    icon: Cog,
    key: 'develop',
    description: 'Precision UX/UI design and high-performance engineering.',
  },
  {
    number: '04',
    title: 'Review\n& Optimize',
    icon: BarChart3,
    key: 'optimize',
    description: 'Thorough QA testing, performance tuning, and metrics review.',
  },
  {
    number: '05',
    title: 'Grow\nTogether',
    icon: Rocket,
    key: 'grow',
    description: 'Seamless deployment, monitoring, and scaling support.',
  },
];

export default function ProcessTimeline({
  timelineRef,
  stepsRef,
  activeStep = -1,
  setActiveStep,
  pathRef,
}) {
  return (
    <div
      ref={timelineRef}
      className="process-timeline-container w-full relative z-20 select-none"
    >
      {/* ======================================================== */}
      {/* DESKTOP TIMELINE: 5 Equally Spaced Steps                 */}
      {/* ======================================================== */}
      <div className="hidden md:grid grid-cols-5 gap-2 lg:gap-3 xl:gap-5 w-full relative items-start">
        {/* SVG Connecting Timeline Line & Arrows */}
        <div
          className="absolute left-0 right-0 w-full pointer-events-none z-0"
          style={{ top: '60px', height: '20px' }}
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1000 20"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="process-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f57e20" />
              </marker>
            </defs>

            {/* Subtle background connecting guide */}
            <path
              d="M 100 10 L 900 10"
              stroke="rgba(245, 126, 32, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Connecting directional arrows between circular step icons */}
            <path
              d="M 148 10 L 252 10"
              stroke="rgba(245, 126, 32, 0.6)"
              strokeWidth="1.5"
              markerEnd="url(#process-arrow)"
            />
            <path
              d="M 348 10 L 452 10"
              stroke="rgba(245, 126, 32, 0.6)"
              strokeWidth="1.5"
              markerEnd="url(#process-arrow)"
            />
            <path
              d="M 548 10 L 652 10"
              stroke="rgba(245, 126, 32, 0.6)"
              strokeWidth="1.5"
              markerEnd="url(#process-arrow)"
            />
            <path
              d="M 748 10 L 852 10"
              stroke="rgba(245, 126, 32, 0.6)"
              strokeWidth="1.5"
              markerEnd="url(#process-arrow)"
            />

            {/* GSAP Animated Drawing Line (strokeDashoffset) */}
            <path
              ref={pathRef}
              d="M 100 10 L 900 10"
              stroke="#f57e20"
              strokeWidth="2.5"
              className="timeline-draw-path"
            />
          </svg>
        </div>

        {/* 5 Process Steps */}
        {processSteps.map((step, idx) => (
          <div key={step.key} className="w-full flex justify-center relative z-10">
            <ProcessStep
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={activeStep === idx || (idx === 4 && activeStep >= 4)}
              stepRef={(el) => (stepsRef.current[idx] = el)}
              onSelect={() => setActiveStep && setActiveStep(idx)}
            />
          </div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* MOBILE VERTICAL TIMELINE (flex md:hidden)               */}
      {/* ======================================================== */}
      <div className="flex md:hidden flex-col items-start gap-6 relative w-full px-2">
        {/* Vertical SVG Connecting Line with downward arrows */}
        <div className="absolute left-[39px] top-9 bottom-10 w-4 pointer-events-none z-0">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 16 420"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="process-arrow-v"
                viewBox="0 0 10 10"
                refX="5"
                refY="7"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 1.5 0 L 5 8 L 8.5 0 z" fill="#f57e20" />
              </marker>
            </defs>
            <line
              x1="8"
              y1="0"
              x2="8"
              y2="420"
              stroke="rgba(245, 126, 32, 0.65)"
              strokeWidth="2"
              markerEnd="url(#process-arrow-v)"
            />
          </svg>
        </div>

        {/* 5 Vertical Step Rows */}
        {processSteps.map((step, idx) => (
          <div
            key={`mobile-${step.key}`}
            className="flex items-center gap-4 relative z-10 w-full cursor-pointer"
            onClick={() => setActiveStep && setActiveStep(idx)}
          >
            <div className="w-[60px] flex-shrink-0 flex justify-center">
              <ProcessStep
                number={step.number}
                icon={step.icon}
                title=""
                description={step.description}
                isActive={activeStep === idx || (idx === 4 && activeStep >= 4)}
                stepRef={(el) => (stepsRef.current[idx + 5] = el)}
                onSelect={() => setActiveStep && setActiveStep(idx)}
              />
            </div>
            <div className="text-left flex-1 pb-1">
              <h4
                className={`font-bold text-base leading-snug transition-colors ${
                  activeStep === idx ? 'text-[#f57e20]' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                {step.title.replace('\n', ' ')}
              </h4>
              <p
                className="text-xs text-white/80 mt-1 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
