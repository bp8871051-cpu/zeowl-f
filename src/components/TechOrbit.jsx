import React from 'react';

// Using Iconify API for full-color brand logos
const innerTech = [
  { name: 'Next.js', icon: 'https://api.iconify.design/logos/nextjs-icon.svg' },
  { name: 'React', icon: 'https://api.iconify.design/logos/react.svg' },
  { name: 'Node.js', icon: 'https://api.iconify.design/logos/nodejs-icon.svg' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express' },
  { name: 'PHP', icon: 'https://api.iconify.design/logos/php.svg' },
  { name: 'Laravel', icon: 'https://api.iconify.design/logos/laravel.svg' },
  { name: 'Python', icon: 'https://api.iconify.design/logos/python.svg' },
];

const outerTech = [
  { name: 'n8n', icon: 'https://api.iconify.design/logos/n8n-icon.svg' },
  { name: 'AI Agents', icon: 'https://api.iconify.design/logos/openai-icon.svg' },
  { name: 'Photoshop', icon: 'https://api.iconify.design/logos/adobe-photoshop.svg' },
  { name: 'Illustrator', icon: 'https://api.iconify.design/logos/adobe-illustrator.svg' },
  { name: 'After Effects', icon: 'https://api.iconify.design/logos/adobe-after-effects.svg' },
  { name: 'Premiere Pro', icon: 'https://api.iconify.design/logos/adobe-premiere.svg' },
  { name: 'Instagram', icon: 'https://api.iconify.design/skill-icons/instagram.svg' },
  { name: 'Facebook', icon: 'https://api.iconify.design/logos/facebook.svg' },
];

const OrbitRing = ({ items, radiusClass, duration, reverse }) => {
  // Using inline styles for reliable animation playback
  const spinStyle = { animation: `${reverse ? 'reverse-spin' : 'orbit-spin'} ${duration}s linear infinite` };
  const counterSpinStyle = { animation: `${reverse ? 'orbit-spin' : 'reverse-spin'} ${duration}s linear infinite` };

  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-navy/20 ${radiusClass}`}>
      <div className="w-full h-full relative" style={spinStyle}>
        {items.map((tech, i) => {
          const angle = (i / items.length) * 360;
          // Math to position items perfectly on the circle border
          const top = `calc(50% - ${Math.cos(angle * Math.PI / 180) * 50}%)`;
          const left = `calc(50% + ${Math.sin(angle * Math.PI / 180) * 50}%)`;

          return (
            <div 
              key={`${tech.name}-fresh`}
              className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
              style={{ top, left, transform: 'translate(-50%, -50%)' }}
              title={tech.name}
            >
              <div 
                className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-1.5 sm:p-2.5 md:p-3 border border-neutral-100"
                style={counterSpinStyle}
              >
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function TechOrbit() {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[560px] lg:h-[560px] mx-auto flex items-center justify-center pointer-events-none mt-6 sm:mt-12 lg:mt-16">
      
      {/* Center Logo */}
      <div className="absolute z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full shadow-[0_10px_50px_rgba(6,24,47,0.15)] flex items-center justify-center border border-neutral-100">
        <img src="/logo/favicon.png" alt="Zeowl Core" className="w-full h-full object-contain scale-[1.3] sm:scale-[1.5] md:scale-[1.8]" />
      </div>

      {/* Rings */}
      <OrbitRing items={innerTech} radiusClass="w-[55%] h-[55%]" duration={25} reverse={false} />
      <OrbitRing items={outerTech} radiusClass="w-[90%] h-[90%]" duration={35} reverse={true} />
      
    </div>
  );
}
