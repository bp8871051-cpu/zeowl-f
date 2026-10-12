"use client";
import React, { useState, useEffect } from 'react';

const words = ["MODERN", "SCALABLE", "PREMIUM", "INNOVATIVE"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); // Changes every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-grid pb-2">
      {words.map((word, i) => {
        // Calculate position relative to current index
        let positionClass = 'translate-y-full opacity-0'; // Default is below

        if (i === index) {
          positionClass = 'translate-y-0 opacity-100'; // Current is visible
        } else if (i === (index - 1 + words.length) % words.length) {
          positionClass = '-translate-y-full opacity-0'; // Previous went up
        }

        return (
          <span
            key={word}
            className={`col-start-1 row-start-1 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ffaa55] ${positionClass}`}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
