// Comprehensive Service Detail Data for Zeowl Infotech
// All 10 Services with rich, unique storytelling, capabilities, tech stacks, processes, and case studies

export const SERVICES_DETAIL_DATA = {
  'web-development': {
    slug: 'web-development',
    aliases: ['web-dev'],
    number: '01',
    title: 'Web Development',
    heroHeadline: {
      line1: 'BUILD DIGITAL',
      highlightWord1: 'EXPERIENCES',
      line2: 'THAT MOVE',
      highlightWord2: 'FORWARD.',
    },
    eyebrow: 'ENGINEERING & ARCHITECTURE',
    breadcrumb: 'HOME / SERVICES / WEB DEVELOPMENT',
    heroDescription:
      'Create fast, scalable and conversion-focused digital experiences designed around your business goals, customers and long-term growth. From headless storefronts to bespoke web applications, we engineer platforms that dominate search results and load in milliseconds.',
    heroFloatingBadges: [
      { text: 'FAST PERFORMANCE', icon: 'zap' },
      { text: 'SEO READY', icon: 'search' },
      { text: 'RESPONSIVE', icon: 'smartphone' },
      { text: 'SCALABLE', icon: 'layers' },
      { text: 'SECURE', icon: 'shield' },
    ],
    heroVisual: {
      type: 'laptop-browser',
      badge: 'EDGE RUNTIME // 0.38s LCP',
      previewTitle: 'Aura Cloud ERP & Client Storefront',
      codeSnippet: `// Edge-rendered high concurrency architecture
export async function createPlatform() {
  const runtime = "Next.js App Router";
  const database = "PostgreSQL Distributed";
  const globalLatency = "38ms median";
  return await deployGlobalEdge({ runtime, database });
}`,
      floatingMetric: { value: '99.98%', label: 'Uptime SLA' },
      activeUsers: '1.2M+ Monthly Sessions',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "WE DON'T JUST BUILD DIGITAL PRODUCTS. WE BUILD EXPERIENCES THAT CREATE BUSINESS VALUE.",
      highlightWords: ['DIGITAL PRODUCTS.', 'BUSINESS VALUE.'],
      paragraph:
        'A website is not an isolated brochure—it is your business’s most critical sales engine, customer conversion funnel, and technological moat. We combine low-latency serverless infrastructure, clean modular codebases, and conversion-focused UX to build web experiences that outpace the competition for years to come.',
      principles: [
        {
          number: '01',
          title: 'STRATEGY',
          desc: 'Architectural roadmaps, conversion funnel design, and technical viability auditing before writing a single line of code.',
        },
        {
          number: '02',
          title: 'DESIGN',
          desc: 'Design systems crafted with pixel precision in Figma, fluid typography scales, and micro-interactions that elevate brand prestige.',
        },
        {
          number: '03',
          title: 'TECHNOLOGY',
          desc: 'Type-safe React, Next.js App Router, edge caching, and scalable APIs engineered for zero technical debt and high concurrency.',
        },
      ],
    },
    capabilities: [
      {
        number: '01',
        title: 'FRONTEND DEVELOPMENT',
        description: 'Modern responsive interfaces built for lightning speed, fluid kinetic motion, and maximal conversion velocity across every device viewport.',
        details: ['Next.js & React 19', 'Tailwind CSS & CSS Modules', 'GSAP & Framer Motion', 'Micro-interactions & A11y'],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '02',
        title: 'BACKEND DEVELOPMENT',
        description: 'Secure, event-driven, and horizontally scalable backend architectures capable of processing hundreds of thousands of daily transactions.',
        details: ['Node.js & Go Microservices', 'PostgreSQL & Redis Caching', 'RESTful & GraphQL APIs', 'Zero-Trust Authentication'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '03',
        title: 'API & SYSTEM INTEGRATION',
        description: 'Seamless bidirectional data connectors linking your web platform directly with your CRM, payment rails, ERP, and marketing automations.',
        details: ['Stripe & Global Payments', 'Salesforce & HubSpot CRM', 'Custom Webhooks & Workers', 'Real-time WebSockets'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '04',
        title: 'E-COMMERCE DEVELOPMENT',
        description: 'Headless, sub-second e-commerce storefronts engineered to maximize average order value (AOV) and crush cart abandonment.',
        details: ['Shopify Storefront API', 'Custom Checkout Routing', 'Algolia AI Smart Search', 'Multi-Currency Localization'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '05',
        title: 'PERFORMANCE OPTIMIZATION',
        description: 'Deep audit and restructuring of runtime scripts, bundle splitting, and asset pipelines to attain flawless 98+ Google Lighthouse scores.',
        details: ['Sub-500ms Core Web Vitals', 'Dynamic Code-Splitting', 'CDN Edge Caching Rules', 'Next-Gen Image Formats'],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '06',
        title: 'CMS DEVELOPMENT',
        description: 'Empower your marketing and content editorial teams with bespoke headless CMS workflows that publish content globally in seconds.',
        details: ['Sanity.io & Strapi', 'Payload CMS & Contentful', 'Live Visual Previews', 'Role-Based Editorial Access'],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
      },
    ],
    solutions: [
      {
        number: '01',
        title: 'Corporate Websites',
        description: 'Commanding brand flagships with bespoke typography, kinetic storytelling, and investor-grade authority.',
        icon: 'building',
        tags: ['Brand Authority', 'Lead Gen', 'Global Reach'],
      },
      {
        number: '02',
        title: 'Landing Pages',
        description: 'High-converting conversion funnels tested and optimized to turn paid traffic into qualified pipeline.',
        icon: 'target',
        tags: ['A/B Testing', 'Fast Loading', 'ROAS Centric'],
      },
      {
        number: '03',
        title: 'E-Commerce Platforms',
        description: 'Scalable multi-product storefronts with sub-second page transitions and streamlined one-click checkout.',
        icon: 'shopping-bag',
        tags: ['Headless', 'High AOV', 'Global Payments'],
      },
      {
        number: '04',
        title: 'Web Portals',
        description: 'Secure customer self-service portals, partner collaboration hubs, and gated documentation systems.',
        icon: 'users',
        tags: ['Role Security', 'Auth0 / SSO', 'Data Sync'],
      },
      {
        number: '05',
        title: 'SaaS Platforms',
        description: 'Cloud-native multi-tenant web applications featuring complex state management and telemetry reporting.',
        icon: 'cloud',
        tags: ['Multi-Tenant', 'Subscription Rails', 'API First'],
      },
      {
        number: '06',
        title: 'Booking Platforms',
        description: 'Automated scheduling engines with real-time slot synchronization, SMS confirmations, and deposit escrow.',
        icon: 'calendar',
        tags: ['Live Sync', 'Escrow Rails', 'Calendar APIs'],
      },
      {
        number: '07',
        title: 'Business Dashboards',
        description: 'Executive command centers aggregating mission-critical metrics into low-latency interactive charts.',
        icon: 'bar-chart',
        tags: ['Real-Time', 'Telemetry', 'D3 & Recharts'],
      },
      {
        number: '08',
        title: 'Custom Web Applications',
        description: 'Tailored enterprise software designed specifically to solve complex internal operational bottlenecks.',
        icon: 'cpu',
        tags: ['Bespoke Logic', 'Enterprise SLA', 'Zero Bloat'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'DISCOVER',
        desc: 'Deep-dive interviews, technical audits, competitive reconnaissance, and business KPI alignment.',
      },
      {
        step: '02',
        title: 'STRATEGY',
        desc: 'System architecture blueprints, wireframes, database entity-relationship models, and milestone roadmaps.',
      },
      {
        step: '03',
        title: 'DESIGN',
        desc: 'Interactive Figma design systems, fluid motion prototypes, accessible contrast tokens, and device previews.',
      },
      {
        step: '04',
        title: 'DEVELOP',
        desc: 'Production-ready coding with Next.js, clean component abstraction, type safety, and daily staging deployments.',
      },
      {
        step: '05',
        title: 'TEST',
        desc: 'Rigorous end-to-end testing, Core Web Vitals tuning, cross-browser validation, and penetration audits.',
      },
      {
        step: '06',
        title: 'LAUNCH',
        desc: 'Zero-downtime DNS cutover, edge CDN cache warm-up, telemetry monitoring, and search engine indexation.',
      },
      {
        step: '07',
        title: 'OPTIMIZE',
        desc: 'Post-launch analytics review, ongoing performance tracking, security patches, and incremental growth sprints.',
      },
    ],
    technologies: [
      { name: 'React', size: 'large', category: 'Frontend', badge: 'Core Library', desc: 'Component modularity and concurrent rendering.' },
      { name: 'Next.js', size: 'large', category: 'Framework', badge: 'Enterprise Standard', desc: 'Hybrid SSR, App Router, and Edge runtime.' },
      { name: 'TypeScript', size: 'medium', category: 'Language', badge: 'Type Safety', desc: 'Bulletproof type checks across the entire stack.' },
      { name: 'Node.js', size: 'medium', category: 'Backend', badge: 'High Velocity', desc: 'Asynchronous event-driven server runtime.' },
      { name: 'Laravel', size: 'medium', category: 'Backend', badge: 'Robust MVC', desc: 'Elegant backend framework with expressive syntax.' },
      { name: 'PHP 8+', size: 'small', category: 'Language', badge: 'High Concurrency', desc: 'Modern JIT compiler performance.' },
      { name: 'PostgreSQL', size: 'large', category: 'Database', badge: 'Relational ACID', desc: 'Enterprise data reliability with JSONB support.' },
      { name: 'MySQL', size: 'small', category: 'Database', badge: 'Proven Storage', desc: 'Reliable relational storage for high-scale apps.' },
      { name: 'MongoDB', size: 'small', category: 'Database', badge: 'Document DB', desc: 'Flexible schema iteration for unstructured workloads.' },
      { name: 'Tailwind CSS', size: 'medium', category: 'Styling', badge: 'Utility First', desc: 'Zero runtime overhead with hyper-optimized CSS bundle.' },
      { name: 'GSAP', size: 'medium', category: 'Motion', badge: 'Kinetic Engine', desc: 'Hardware-accelerated scroll and timeline choreography.' },
      { name: 'REST & GraphQL', size: 'small', category: 'API Protocol', badge: 'Modern Specs', desc: 'Declarative querying and low-bandwidth transport.' },
    ],
    whyChooseUs: [
      {
        number: '01',
        title: 'BUSINESS FOCUSED',
        subtitle: 'Code mapped to balance sheets',
        desc: 'We do not build software for the sake of software. Every feature, database index, and UI element is engineered to accelerate customer conversion, reduce churn, and amplify revenue.',
        metric: '74%',
        metricLabel: 'Average Ops Velocity Gain',
      },
      {
        number: '02',
        title: 'MODERN TECHNOLOGY',
        subtitle: 'Zero legacy debt',
        desc: 'We reject bloated templates and fragile legacy frameworks. Our tech stack is built on modern Next.js, serverless cloud databases, and clean modular code that stays fast for a decade.',
        metric: '0.38s',
        metricLabel: 'Median Edge Page Load',
      },
      {
        number: '03',
        title: 'PERFORMANCE FIRST',
        subtitle: 'Sub-second speeds standard',
        desc: 'Slow websites kill conversion. We rigorously benchmark Core Web Vitals to deliver fluid 60fps animations, sub-500ms server responses, and near-zero cumulative layout shift.',
        metric: '98+',
        metricLabel: 'Google Lighthouse Score',
      },
      {
        number: '04',
        title: 'LONG-TERM SUPPORT',
        subtitle: 'Your dedicated tech partner',
        desc: 'Our partnership continues long after deployment. We provide dedicated engineers, real-time error logging via Sentry, proactive security patches, and quarterly architectural audits.',
        metric: '99.98%',
        metricLabel: 'Guaranteed Production SLA',
      },
    ],
    selectedWork: [
      {
        number: '01',
        title: 'Meridian Estates',
        category: 'Luxury Real Estate Platform',
        tags: ['Next.js', 'UI/UX', 'GSAP', 'WebGL'],
        result: '$280M+ Closed in digital property acquisitions.',
        size: 'featured',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      },
      {
        number: '02',
        title: 'Lumina Minimalist Atelier',
        category: 'Headless E-Commerce Storefront',
        tags: ['Shopify API', 'Tailwind', 'Stripe'],
        result: '+68% Checkout conversion lift.',
        size: 'medium',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
      },
      {
        number: '03',
        title: 'Aura Capital Group',
        category: 'Corporate Finance Flagship',
        tags: ['TypeScript', 'Next.js', 'Framer'],
        result: 'Sub-400ms global latency achieved.',
        size: 'medium',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      },
      {
        number: '04',
        title: 'Vortex Enterprise Flow',
        category: 'CRM & Analytics Web App',
        tags: ['Node.js', 'PostgreSQL', 'Redis'],
        result: '250,000+ daily events processed in real time.',
        size: 'horizontal',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    testimonial: {
      quote:
        '“Zeowl rebuilt our digital infrastructure from the ground up with Next.js and custom microservices. Our load times dropped from 3.2 seconds to 380 milliseconds, and our inbound enterprise pipeline grew by 184% in the first quarter post-launch.”',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Aura Cloud Technologies UK',
      impact: '184% Inbound Pipeline Growth',
    },
    faq: [
      {
        q: 'What technologies and frameworks do you use for web development?',
        a: 'We specialize in Next.js (App Router), React 19, TypeScript, and Tailwind CSS on the frontend, paired with Node.js, Go, or Laravel on the backend. For databases, we leverage PostgreSQL, Redis, and high-performance serverless storage like Supabase and AWS RDS.',
      },
      {
        q: 'How long does a typical web development project take to complete?',
        a: 'Most bespoke corporate websites and high-impact landing platforms launch within 4 to 8 weeks. Larger SaaS web applications or complex headless e-commerce builds typically require 8 to 14 weeks from initial discovery to production deployment.',
      },
      {
        q: 'Can you redesign and modernize our existing web platform without downtime?',
        a: 'Yes. We specialize in zero-downtime migration architectures. We rebuild your new system in isolated staging environments, conduct comprehensive data and SEO redirects mapping, and perform atomic DNS switchovers without a single second of service disruption.',
      },
      {
        q: 'How do you ensure our web application performs well on mobile devices and Google Search?',
        a: 'Every platform we construct is mobile-first, semantic, and strictly adheres to Google Core Web Vitals guidelines. We test on real iOS and Android hardware, optimize asset compression, automate structured schema markup, and implement server-side rendering for optimal indexation.',
      },
      {
        q: 'Can you integrate third-party APIs like payment gateways, CRMs, or ERPs?',
        a: 'Absolutely. We regularly engineer robust integrations with Stripe, PayPal, Salesforce, HubSpot, SAP, custom internal REST/GraphQL endpoints, and automated webhook pipelines with comprehensive error retry mechanisms.',
      },
      {
        q: 'Do you provide ongoing maintenance, security updates, and feature iteration?',
        a: 'Yes. We offer flexible post-launch SLAs covering continuous 24/7 uptime monitoring, critical dependency updates, automated off-site backups, penetration auditing, and dedicated developer hours for iterative feature rollouts.',
      },
      {
        q: 'How do you handle project communication and milestone transparency?',
        a: 'You receive access to a dedicated shared Slack/Discord channel, weekly sprint demonstration calls, and real-time staging preview links. You are never left wondering what progress is being made.',
      },
    ],
    cta: {
      headline: 'READY TO BUILD SOMETHING EXCEPTIONAL?',
      subtext: "Let's turn your ambitious idea into a digital experience built for real growth, high velocity, and long-term market leadership.",
      floatingTags: ['WEB', 'E-COMMERCE', 'SAAS', 'API', 'HEADLESS', 'GSAP'],
    },
  },

  'graphic-design': {
    slug: 'graphic-design',
    aliases: ['ui-ux-design', 'ui-ux-graphic-design'],
    number: '02',
    title: 'Graphic & UI/UX Design',
    heroHeadline: {
      line1: 'DESIGN VISUAL',
      highlightWord1: 'IDENTITIES',
      line2: 'THAT COMMAND',
      highlightWord2: 'ATTENTION.',
    },
    eyebrow: 'CREATIVE DIRECTION & EXPERIENCE DESIGN',
    breadcrumb: 'HOME / SERVICES / GRAPHIC DESIGN',
    heroDescription:
      'Transform your brand presence with avant-garde visual systems, pixel-perfect UI/UX interfaces, and high-impact marketing creatives crafted to capture attention and forge deep emotional connections with your customers.',
    heroFloatingBadges: [
      { text: 'PIXEL PERFECT', icon: 'palette' },
      { text: 'DESIGN SYSTEMS', icon: 'layers' },
      { text: 'INTUITIVE UX', icon: 'users' },
      { text: 'VECTOR TOKENS', icon: 'sparkles' },
      { text: 'CONVERSION DRIVEN', icon: 'target' },
    ],
    heroVisual: {
      type: 'design-canvas',
      badge: 'DESIGN TOKENS // FIGMA AUTO-LAYOUT',
      previewTitle: 'Kroma Brand Identity & UI Kit',
      codeSnippet: `// Design Token Architecture
export const BrandTheme = {
  primary: "#071D35",
  accent: "#F58220",
  typography: "Space Grotesk + Inter",
  borderRadius: "24px",
  elevation: "Soft Ambient Clay"
};`,
      floatingMetric: { value: '4.9★', label: 'UX Rating' },
      activeUsers: '140+ Brand Guidelines Built',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "GREAT DESIGN IS NOT JUST HOW IT LOOKS. IT IS HOW IT PERFORMS AND CONVERTS.",
      highlightWords: ['HOW IT LOOKS.', 'PERFORMS AND CONVERTS.'],
      paragraph:
        'In a saturated digital landscape, visual mediocrity is fatal. We build cohesive visual languages, typography hierarchies, and tactile user interfaces that position your brand at the absolute peak of your industry.',
      principles: [
        {
          number: '01',
          title: 'STRATEGY',
          desc: 'Brand positioning audits, consumer psychology mapping, and competitive moodboards before visual exploration.',
        },
        {
          number: '02',
          title: 'DESIGN',
          desc: 'Bespoke iconography, mathematical grid systems, fluid layout proportions, and cohesive aesthetic languages.',
        },
        {
          number: '03',
          title: 'USABILITY',
          desc: 'User testing, heuristic audits, and WCAG AAA accessibility compliance across all digital touchpoints.',
        },
      ],
    },
    capabilities: [
      {
        number: '01',
        title: 'UI/UX PRODUCT DESIGN',
        description: 'Intuitive web and mobile user interfaces engineered for zero cognitive friction and effortless user flows.',
        details: ['Figma Design Systems', 'User Journey Mapping', 'Interactive Prototyping', 'WCAG Accessibility Standards'],
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '02',
        title: 'BRAND IDENTITY DESIGN',
        description: 'Comprehensive brand marks, geometric logos, typography pairings, and tactile corporate stationery.',
        details: ['Logo Mark & Wordmark', 'Color Psychology Palette', 'Corporate Collateral', 'Brand Guidelines Handbook'],
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '03',
        title: 'MARKETING & AD CREATIVES',
        description: 'Scroll-stopping social media graphics, performance ad sets, and display campaign banners engineered for high CTR.',
        details: ['Meta & LinkedIn Ad Sets', 'Carousel Graphics', 'Email Marketing Templates', 'High-Converting Banner Packs'],
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '04',
        title: 'MOTION GRAPHICS & 3D ASSETS',
        description: 'Kinetic typography, animated explainer graphics, and custom 3D model renders that make your brand feel alive.',
        details: ['After Effects Motion Loops', 'Spline 3D Web Assets', 'Micro-Animation Assets', 'Lottie Animation JSONs'],
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '05',
        title: 'PACKAGING & PRINT ASSETS',
        description: 'High-end tactile packaging, exhibition booths, corporate brochures, and premium merchandise design.',
        details: ['Vector Die-Cut Files', 'Pantone Color Accuracy', 'Foil & Emboss Specifications', 'Editorial Magazine Layouts'],
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '06',
        title: 'DESIGN SYSTEM ARCHITECTURE',
        description: 'Living component libraries that bridge the gap between creative designers and frontend software engineers.',
        details: ['Reusable Tokenized UI', 'State & Variant Logic', 'Auto-Layout Components', 'Developer Handoff Specs'],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
      },
    ],
    solutions: [
      { number: '01', title: 'Design Systems', description: 'Centralized Figma component kits with tokens and dark mode variants.', icon: 'layers', tags: ['Figma', 'Tokens', 'Atomic'] },
      { number: '02', title: 'Mobile App UI/UX', description: 'Pixel-perfect iOS and Android app experiences with intuitive ergonomics.', icon: 'smartphone', tags: ['iOS', 'Android', 'Micro-UX'] },
      { number: '03', title: 'SaaS Dashboards', description: 'High-density information architecture that turns complex data into clarity.', icon: 'bar-chart', tags: ['Data Viz', 'Telemetry', 'SaaS'] },
      { number: '04', title: 'Brand Guidelines', description: 'Extensive 60+ page brand books defining usage, typography, and voice.', icon: 'book-open', tags: ['Typography', 'Color', 'Voice'] },
      { number: '05', title: 'Pitch Decks & Reports', description: 'Investor-ready presentations that command attention and close capital rounds.', icon: 'presentation', tags: ['Keynote', 'Pitch', 'Series A+'] },
      { number: '06', title: 'E-Commerce Product UX', description: 'Friction-free product detail pages and checkout flows engineered for conversion.', icon: 'shopping-bag', tags: ['A/B Tested', 'Frictionless', 'AOV'] },
      { number: '07', title: 'Social Media Kits', description: 'Cohesive templates that keep your feed visually unified and instantly recognizable.', icon: 'share-2', tags: ['Instagram', 'LinkedIn', 'Templates'] },
      { number: '08', title: 'Custom Vector Illustration', description: 'Bespoke iconography and storytelling artwork tailored specifically to your voice.', icon: 'pen-tool', tags: ['SVG', 'Isometric', 'Editorial'] },
    ],
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Brand audit, user persona interviews, and competitive landscape evaluation.' },
      { step: '02', title: 'STRATEGY', desc: 'Visual moodboards, typography pairing explorations, and wireframe flows.' },
      { step: '03', title: 'CONCEPT', desc: 'Creation of 2-3 distinct creative directions for review and stakeholder alignment.' },
      { step: '04', title: 'REFINE', desc: 'Iterative polishing of selected direction across all required digital touchpoints.' },
      { step: '05', title: 'SYSTEMIZE', desc: 'Building comprehensive design systems with variants, states, and developer notes.' },
      { step: '06', title: 'HANDOFF', desc: 'Production-ready vector and Figma exports with direct engineering coordination.' },
      { step: '07', title: 'SUPPORT', desc: 'Post-launch design oversight to ensure exact real-world fidelity.' },
    ],
    technologies: [
      { name: 'Figma', size: 'large', category: 'UI/UX', badge: 'Industry Standard', desc: 'Collaborative UI design and auto-layout tokenization.' },
      { name: 'Adobe Photoshop', size: 'medium', category: 'Creative', badge: 'Raster Editing', desc: 'Precision photo compositing and texture painting.' },
      { name: 'Adobe Illustrator', size: 'large', category: 'Creative', badge: 'Vector Engine', desc: 'Mathematical vector marks and typography design.' },
      { name: 'After Effects', size: 'medium', category: 'Motion', badge: 'Animation', desc: 'Kinetic typography and visual effects rendering.' },
      { name: 'Spline 3D', size: 'medium', category: '3D Web', badge: 'Interactive', desc: 'Real-time 3D object rendering for web interfaces.' },
      { name: 'Principle', size: 'small', category: 'Prototyping', badge: 'Micro-UX', desc: 'High-fidelity gesture and interaction modeling.' },
      { name: 'Lottie', size: 'small', category: 'Motion Code', badge: 'Vector JSON', desc: 'Lightweight animations rendered natively in code.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Aesthetics backed by data', desc: 'We design for revenue outcomes, not just design awards. Every layout decision is rooted in cognitive ease and conversion.', metric: '+138%', metricLabel: 'Average Conversion Lift' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Component-first tokenization', desc: 'Our Figma systems translate 1:1 into CSS variables and Tailwind classes, drastically reducing engineering turnaround time.', metric: '3x', metricLabel: 'Faster Dev Handoff' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Optimized vector assets', desc: 'All graphics and animations are hyper-optimized to ensure your digital platforms maintain lightning-fast render speeds.', metric: '<50KB', metricLabel: 'Average Asset Weight' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Evolving brand libraries', desc: 'As your company introduces new products and campaigns, we scale and adapt your design system seamlessly.', metric: '100%', metricLabel: 'Asset Ownership' },
    ],
    selectedWork: [
      { number: '01', title: 'Kroma Sensory Atelier', category: 'Brand Identity & Visual System', tags: ['Figma', '3D', 'Print'], result: 'Featured in European Design Annual.', size: 'featured', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'Verve Health Telehealth App', category: 'Mobile UI/UX Product Design', tags: ['iOS', 'Figma', 'A11y'], result: '4.9★ App Store design review.', size: 'medium', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'Aura Financial Dashboard', category: 'Fintech Data Visualizations', tags: ['UI Kit', 'Dark Mode'], result: '60% faster data digestion for analysts.', size: 'medium', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'Nexus Brand Packaging', category: 'Luxury Retail Packaging', tags: ['Print', 'Emboss', 'Pantone'], result: '+42% premium brand perception score.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Zeowl transformed our fragmented brand into a unified, world-class aesthetic. Our prospective enterprise clients immediately noticed the difference in our sales collateral and software interfaces.”',
      author: 'Elena Rostova',
      role: 'VP of Product Experience',
      company: 'Kroma Design Labs Geneva',
      impact: '100% Brand Consistency Across 14 Markets',
    },
    faq: [
      { q: 'Do you deliver source files in Figma?', a: 'Yes. You receive full ownership of organized Figma files, token libraries, vector assets, and typography licensing guidance.' },
      { q: 'How many design revisions are included?', a: 'We operate with collaborative agile design sprints where your team reviews concepts early and gives structured feedback at every phase.' },
      { q: 'Can you work directly with our engineering team during implementation?', a: 'Yes. We prepare developer-ready inspection tokens, spacing guides, and provide direct QA review on staging builds.' },
      { q: 'Do you design for dark mode and responsive screens?', a: 'Always. Every UI component is designed and stress-tested across light, dark, mobile, tablet, and widescreen viewports.' },
      { q: 'Can you help redesign an existing software product that feels outdated?', a: 'Yes. We conduct heuristic UX reviews, identify usability bottlenecks, and modernize the visual language without breaking existing user muscle memory.' },
      { q: 'What is the turnaround time for a complete brand identity?', a: 'Comprehensive brand identities with guidelines typically take 3 to 6 weeks, while digital UI/UX app designs range from 4 to 10 weeks depending on screen count.' },
      { q: 'Do you create 3D assets and animated motion loops?', a: 'Yes. We produce custom 3D web illustrations in Spline and Cinema 4D, as well as Lottie motion files for web and mobile apps.' },
    ],
    cta: {
      headline: 'READY TO ELEVATE YOUR BRAND IDENTITY?',
      subtext: "Let's craft a visual language that commands respect, captivates your ideal audience, and sets a new industry standard.",
      floatingTags: ['FIGMA', 'UI/UX', 'BRANDING', '3D ASSETS', 'MOTION', 'DESIGN SYSTEMS'],
    },
  },

  'software-development': {
    slug: 'software-development',
    aliases: ['custom-software'],
    number: '03',
    title: 'Custom Software Development',
    heroHeadline: {
      line1: 'ARCHITECT RESILIENT',
      highlightWord1: 'SOFTWARE',
      line2: 'BUILT TO SCALE',
      highlightWord2: 'GLOBALLY.',
    },
    eyebrow: 'ENTERPRISE SYSTEMS & CLOUD ARCHITECTURE',
    breadcrumb: 'HOME / SERVICES / SOFTWARE DEVELOPMENT',
    heroDescription:
      'Engineer custom software solutions designed to streamline mission-critical business operations, automate complex data pipelines, and replace brittle legacy workarounds with fault-tolerant cloud platforms.',
    heroFloatingBadges: [
      { text: 'HIGH CONCURRENCY', icon: 'cpu' },
      { text: 'CLOUD NATIVE', icon: 'cloud' },
      { text: 'ZERO DOWNTIME', icon: 'shield-check' },
      { text: 'MODULAR APIS', icon: 'code' },
      { text: 'DATA INTEGRITY', icon: 'database' },
    ],
    heroVisual: {
      type: 'enterprise-dashboard',
      badge: 'DISTRIBUTED WORKERS // <12ms LATENCY',
      previewTitle: 'Vortex Enterprise Operations Suite',
      codeSnippet: `// High-throughput distributed transaction pipeline
class EnterpriseTelemetryService {
  async processEventBatch(events: EventStream[]) {
    const partitioned = await this.sharder.distribute(events);
    return await this.cluster.commitAtomic(partitioned);
  }
}`,
      floatingMetric: { value: '250k+', label: 'Events/sec' },
      activeUsers: '99.99% Guaranteed Enterprise Uptime',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "OFF-THE-SHELF SOFTWARE FORCES YOU TO COMPROMISE. BESPOKE SOFTWARE CREATES AN UNBEATABLE MOAT.",
      highlightWords: ['FORCES YOU TO COMPROMISE.', 'UNBEATABLE MOAT.'],
      paragraph:
        'Generic SaaS tools burden scaling enterprises with per-seat licensing fees, disconnected silos, and rigid workflows. We build proprietary software tailored specifically to your company’s unique operational logic and proprietary competitive advantages.',
      principles: [
        {
          number: '01',
          title: 'SYSTEM ARCHITECTURE',
          desc: 'Domain-driven design, schema modeling, and microservice boundaries configured for zero bottlenecking.',
        },
        {
          number: '02',
          title: 'DATA SECURITY',
          desc: 'Role-based access control, cryptographic data protection at rest and in transit, and SOC2 compliant telemetry.',
        },
        {
          number: '03',
          title: 'OBSERVABILITY',
          desc: 'Distributed tracing, structured logging, and proactive real-time alerting to prevent incidents before they impact users.',
        },
      ],
    },
    capabilities: [
      {
        number: '01',
        title: 'CUSTOM ERP & CRM SYSTEMS',
        description: 'Bespoke enterprise resource planning suites that unify procurement, inventory, accounting, and sales operations.',
        details: ['Automated Ledger Entries', 'Role-Based Permissions', 'Multi-Warehouse Inventory', 'Live Financial Dashboards'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '02',
        title: 'SaaS PLATFORM ENGINEERING',
        description: 'Multi-tenant cloud applications with automated provisioning, tiered billing, and self-service administration.',
        details: ['Stripe Billing & Subscriptions', 'Tenant Isolation Policies', 'Metered Usage Tracking', 'Custom Domain Routing'],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '03',
        title: 'HIGH-THROUGHPUT CLOUD APIS',
        description: 'Microservice ecosystems designed to process millions of requests with sub-50ms latency and high fault tolerance.',
        details: ['Go & Node.js Microservices', 'Kafka & RabbitMQ Queues', 'Redis In-Memory Caching', 'gRPC & OpenAPI Specs'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '04',
        title: 'DATABASE ARCHITECTURE & MIGRATION',
        description: 'Rock-solid relational and distributed data storage optimized for high query velocity and absolute zero data loss.',
        details: ['PostgreSQL & TimescaleDB', 'Partitioning & Index Tuning', 'Zero-Downtime Migration', 'Automated Failover Clustered'],
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '05',
        title: 'LEGACY SYSTEM MODERNIZATION',
        description: 'Deconstruct fragile monolithic legacy codebases into modern cloud services without interrupting daily operations.',
        details: ['Strangler Fig Migration', 'Data Sanitation Pipelines', 'Automated Regression Testing', 'Cloud-Native Containerization'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      },
      {
        number: '06',
        title: 'ENTERPRISE SECURITY & COMPLIANCE',
        description: 'Bank-grade security controls, automated vulnerability scanning, and audit logging to satisfy strict regulatory standards.',
        details: ['HIPAA & GDPR Compliance', 'OAuth2 / SAML Single Sign-On', 'AES-256 Bit Encryption', 'Vulnerability Penetration Tests'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      },
    ],
    solutions: [
      { number: '01', title: 'Enterprise ERPs', description: 'Comprehensive operational suites connecting manufacturing, logistics, and billing.', icon: 'server', tags: ['Enterprise', 'Multi-Hub', 'Postgres'] },
      { number: '02', title: 'Deal & Pipeline CRMs', description: 'Custom sales execution platforms that track deal stages and customer health scores.', icon: 'users', tags: ['Sales Pipeline', 'Automation', 'BI'] },
      { number: '03', title: 'B2B SaaS Portals', description: 'White-labeled customer management platforms with automated role provisioning.', icon: 'cloud', tags: ['Multi-Tenant', 'Stripe', 'SSO'] },
      { number: '04', title: 'Automated Billing Engines', description: 'Invoicing systems that calculate complex usage tiers, taxes, and international FX.', icon: 'credit-card', tags: ['Fintech', 'Audit Trails', 'Invoicing'] },
      { number: '05', title: 'Supply Chain Trackers', description: 'Real-time telemetry networks that follow inventory movements from port to shelf.', icon: 'truck', tags: ['IoT Sync', 'Barcode / QR', 'Logistics'] },
      { number: '06', title: 'Internal Operations Hubs', description: 'Custom portals replacing fragile spreadsheets with structured collaborative software.', icon: 'sliders', tags: ['Zero Bloat', 'High Speed', 'Tailored'] },
      { number: '07', title: 'Data Analytics Engines', description: 'Data warehouse ETL connectors transforming raw records into executive insights.', icon: 'pie-chart', tags: ['ETL', 'ClickHouse', 'BigQuery'] },
      { number: '08', title: 'Secure Client Vaults', description: 'Gated encrypted document repositories with biometric and time-restricted access.', icon: 'lock', tags: ['Zero Knowledge', 'Audit Logs', 'Vault'] },
    ],
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Process mapping, legacy codebase inspection, and data entity specification.' },
      { step: '02', title: 'STRATEGY', desc: 'Domain model architecture, API interface design, and cloud topology blueprints.' },
      { step: '03', title: 'PROTOTYPE', desc: 'Clickable architectural prototypes and database proof-of-concept benchmarks.' },
      { step: '04', title: 'BUILD', desc: 'Test-driven development, automated CI/CD pipelines, and microservice containerization.' },
      { step: '05', title: 'VERIFY', desc: 'Load stress testing under 10x anticipated peak load and automated security fuzzing.' },
      { step: '06', title: 'CUTOVER', desc: 'Gradual feature rollouts, dark launching, data synchronization, and validation.' },
      { step: '07', title: 'MAINTAIN', desc: 'Proactive telemetry monitoring, dependency upgrades, and performance tuning.' },
    ],
    technologies: [
      { name: 'Node.js', size: 'large', category: 'Backend', badge: 'High Concurrency', desc: 'Fast event-loop server services.' },
      { name: 'Python & FastAPI', size: 'large', category: 'Backend', badge: 'Data & AI', desc: 'High-speed asynchronous microservices.' },
      { name: 'Go (Golang)', size: 'medium', category: 'Systems', badge: 'Ultra Fast', desc: 'Compiled low-memory distributed microservices.' },
      { name: 'PostgreSQL', size: 'large', category: 'Database', badge: 'Primary DB', desc: 'Rock-solid relational storage with ACID guarantees.' },
      { name: 'Redis', size: 'medium', category: 'In-Memory', badge: 'Sub-Millisecond', desc: 'In-memory caching and distributed lock manager.' },
      { name: 'Docker & Kubernetes', size: 'medium', category: 'DevOps', badge: 'Containerized', desc: 'Automated horizontal scaling and isolated workloads.' },
      { name: 'RabbitMQ / Kafka', size: 'medium', category: 'Streaming', badge: 'Event Bus', desc: 'High-throughput event queuing and worker streaming.' },
      { name: 'GraphQL', size: 'small', category: 'API', badge: 'Declarative', desc: 'Efficient data fetching for complex interconnected data.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Eliminate SaaS bloat', desc: 'Save tens of thousands in recurring monthly seat licenses while retaining 100% intellectual property ownership.', metric: '80%', metricLabel: 'Lower Long-Term Cost' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Cloud-native resiliency', desc: 'Engineered with containerized microservices and automated failover that keeps your operations running 24/7.', metric: '99.99%', metricLabel: 'Uptime Guarantee' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Sub-50ms database queries', desc: 'We index, partition, and cache critical paths so thousands of concurrent staff members never experience sluggish screens.', metric: '<50ms', metricLabel: 'Average Query Time' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Proactive engineering monitoring', desc: 'Dedicated engineering pods handle database maintenance, security patches, and incremental module extensions.', metric: '24/7', metricLabel: 'Real-Time Telemetry' },
    ],
    selectedWork: [
      { number: '01', title: 'Aura Cloud ERP & Automation', category: 'Custom Enterprise ERP Suite', tags: ['Node.js', 'Postgres', 'Redis'], result: 'Reduced manual processing time by 74% across 18 regional distribution hubs.', size: 'featured', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'DataPulse Cloud Telemetry', category: 'Distributed Monitoring Platform', tags: ['Go', 'ClickHouse', 'React'], result: '3.4B telemetry spans analyzed per day.', size: 'medium', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'Vortex Global Dispatch System', category: 'Logistics Fleet Dispatcher', tags: ['FastAPI', 'WebSockets', 'Mapbox'], result: 'Saved 120,000+ driver transit hours annually.', size: 'medium', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'FinSecure Multi-Tenant Ledger', category: 'Bank-Grade Payment Routing', tags: ['Golang', 'PostgreSQL', 'Vault'], result: 'Zero transaction loss across $450M in processed transfers.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Our logistics team used to waste 3 hours every day wrestling with spreadsheet errors and mismatched orders. Zeowl built our custom ERP system, and our operational throughput instantly doubled without adding headcount.”',
      author: 'David Chen',
      role: 'Director of Global Operations',
      company: 'Vortex Freight & Logistics',
      impact: '74% Manual Work Hours Eliminated',
    },
    faq: [
      { q: 'Who owns the intellectual property and source code of the software?', a: 'You do. Upon milestone completion, 100% of the proprietary source code, database architectures, and documentation belong exclusively to your business.' },
      { q: 'Can the software integrate with our existing accounting or inventory systems?', a: 'Yes. We build custom API connectors to sync with QuickBooks, Xero, SAP, NetSuite, and any existing internal SQL databases seamlessly.' },
      { q: 'How do you prevent data loss during legacy system transitions?', a: 'We employ dual-write synchronization pipelines and dry-run shadow testing, ensuring the new software mirrors production data perfectly prior to final cutover.' },
      { q: 'What cloud providers do you deploy on?', a: 'We deploy across AWS, Google Cloud, Microsoft Azure, or dedicated private bare-metal clouds according to your compliance and cost preferences.' },
      { q: 'Can you scale the software as our user volume expands?', a: 'Yes. We design with modular microservices and containerized Kubernetes clusters that autoscale horizontally under surge traffic.' },
      { q: 'Do you provide user training for our staff after deployment?', a: 'Yes. We provide complete video walk-through libraries, user manuals, and direct onboarding sessions to ensure high adoption across your team.' },
      { q: 'How do you handle security vulnerabilities and bugs?', a: 'All code undergoes static analysis, dependency scanning, automated integration testing, and third-party penetration checks before production release.' },
    ],
    cta: {
      headline: 'READY TO BUILD YOUR PROPRIETARY SOFTWARE MOAT?',
      subtext: "Let's replace fragile manual processes with robust, high-performance software engineered specifically for your business.",
      floatingTags: ['ERP', 'CRM', 'SAAS', 'MICROSERVICES', 'POSTGRESQL', 'GO'],
    },
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    aliases: ['seo-marketing'],
    number: '04',
    title: 'Digital Marketing & Growth',
    heroHeadline: {
      line1: 'ACCELERATE REAL',
      highlightWord1: 'REVENUE',
      line2: 'WITH TARGETED',
      highlightWord2: 'GROWTH.',
    },
    eyebrow: 'PERFORMANCE ACQUISITION & ATTRIBUTION',
    breadcrumb: 'HOME / SERVICES / DIGITAL MARKETING',
    heroDescription:
      'Data-driven marketing strategies designed to increase organic visibility, lower customer acquisition costs (CAC), and generate high-intent commercial leads through search, paid media, and conversion optimization.',
    heroFloatingBadges: [
      { text: 'HIGH ROAS', icon: 'trending-up' },
      { text: 'ORGANIC SEO', icon: 'search' },
      { text: 'PAID MEDIA', icon: 'target' },
      { text: 'ATTRIBUTION', icon: 'bar-chart' },
      { text: 'CRO DRIVEN', icon: 'zap' },
    ],
    heroVisual: {
      type: 'analytics-dashboard',
      badge: 'ROAS // +240% AVERAGE RETURN',
      previewTitle: 'OmniGrowth Performance Command',
      codeSnippet: `// Multi-touch attribution model
const CampaignPerformance = {
  organicSearchLift: "+310%",
  blendedCAC: "-42%",
  returnOnAdSpend: "4.8x ROAS",
  pipelineValue: "$12.4M"
};`,
      floatingMetric: { value: '4.8x', label: 'Average ROAS' },
      activeUsers: '$18M+ Managed Ad Spend',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "VANITY METRICS DON'T PAY THE BILLS. WE FOCUS ON QUALIFIED PIPELINE AND REVENUE.",
      highlightWords: ['VANITY METRICS', 'QUALIFIED PIPELINE AND REVENUE.'],
      paragraph:
        'We do not celebrate impressions or empty clicks. We build multi-channel customer acquisition funnels that capture high-intent buyers, lower blended CAC, and give executives transparent visibility into exact campaign ROI.',
      principles: [
        { number: '01', title: 'AUDIENCE RECON', desc: 'Granular buyer intent analysis, competitor bid auditing, and keyword opportunity mapping.' },
        { number: '02', title: 'CONVERSION FUNNEL', desc: 'Bespoke landing pages, persuasive copywriting, and rigorous A/B split testing.' },
        { number: '03', title: 'ATTRIBUTION', desc: 'Server-side Conversions API, multi-touch tracking, and clear live reporting dashboards.' },
      ],
    },
    capabilities: [
      { number: '01', title: 'ENTERPRISE SEO & ORGANIC GROWTH', description: 'Technical site audits, semantic content architecture, and authority backlink acquisition to capture top search rankings.', details: ['Technical Core Web Vitals SEO', 'Programmatic Semantic Clusters', 'High-Authority Digital PR', 'Local & Global Search Optimization'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80' },
      { number: '02', title: 'GOOGLE ADS (SEARCH, SHOPPING, DISPLAY)', description: 'Precision paid search campaigns capturing buyers at the exact moment they search for your solutions.', details: ['High-Intent Search Campaigns', 'Performance Max & Shopping', 'Negative Keyword Defense', 'Automated Smart Bidding Scripts'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80' },
      { number: '03', title: 'META & PAID SOCIAL CAMPAIGNS', description: 'Hyper-targeted creative ad sets across Instagram, Facebook, and LinkedIn engineered to generate high volumes of qualified leads.', details: ['Dynamic Creative Testing (DCT)', 'Lookalike & First-Party Custom Audiences', 'Retargeting Funnel Sequences', 'CAPI Server-Side Tracking'], image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80' },
      { number: '04', title: 'CONVERSION RATE OPTIMIZATION (CRO)', description: 'Transform existing website traffic into paying customers through behavioral heatmaps, UX adjustments, and A/B split tests.', details: ['Hotjar & Clarity Session Recording', 'Landing Page A/B Testing', 'Form Friction Minimization', 'Psychological Trigger Copywriting'], image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80' },
      { number: '05', title: 'B2B LINKEDIN LEAD GENERATION', description: 'Account-based marketing (ABM) targeting C-suite decision-makers with personalized value-driven outreach and sponsored content.', details: ['Account-Based Marketing (ABM)', 'Job Title & Industry Precision', 'InMail & Sponsored Content', 'Direct CRM Lead Routing'], image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80' },
      { number: '06', title: 'EMAIL & RETENTION AUTOMATIONS', description: 'Automated nurture sequences, cart abandonment triggers, and re-engagement workflows that maximize customer lifetime value (LTV).', details: ['Klaviyo & HubSpot Workflows', 'Dynamic Personalized Sequences', 'Churn Mitigation Campaigns', 'High Deliverability Domain Warmup'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80' },
    ],
    solutions: [
      { number: '01', title: 'Inbound Search Funnels', description: 'Rank for high-commercial-intent buyer keywords that drive qualified organic sales demos.', icon: 'search', tags: ['SEO', 'Top 3 Ranks', 'High Intent'] },
      { number: '02', title: 'Paid Search Campaigns', description: 'Dominant search ad placements with targeted ad copy and negative keyword guards.', icon: 'target', tags: ['Google Ads', 'Low CPA', 'High CTR'] },
      { number: '03', title: 'Paid Social Performance', description: 'Engaging video creatives and carousel ad sets driving profitable customer acquisitions.', icon: 'share-2', tags: ['Meta Ads', 'Creative Testing', 'Scale'] },
      { number: '04', title: 'High-Converting Landing Pages', description: 'Standalone conversion pages stripped of distracting navigation to maximize response rate.', icon: 'layout', tags: ['A/B Tested', 'Sub-Second', 'High CVR'] },
      { number: '05', title: 'Full-Funnel Retargeting', description: 'Multi-touch banner and video reminders recapturing abandoned carts and bounced prospects.', icon: 'repeat', tags: ['Retargeting', 'High ROAS', 'Omnichannel'] },
      { number: '06', title: 'Account-Based Marketing', description: 'Hyper-personalized outreach campaigns targeting specific high-value enterprise accounts.', icon: 'briefcase', tags: ['B2B', 'C-Suite', 'LinkedIn'] },
      { number: '07', title: 'Lifecycle Email Sequences', description: 'Automated drip campaigns that educate prospects and convert trial users into paid accounts.', icon: 'mail', tags: ['Klaviyo', 'Automated', 'High LTV'] },
      { number: '08', title: 'Attribution & Analytics', description: 'Server-side measurement dashboards showing blended CAC, ROAS, and customer payback period.', icon: 'bar-chart', tags: ['GA4', 'TripleWhale', 'CAPI'] },
    ],
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Audit historical ad accounts, tracking health, conversion friction, and competitors.' },
      { step: '02', title: 'STRATEGY', desc: 'Define target CPA, audience segments, budget distribution, and creative roadmaps.' },
      { step: '03', title: 'TRACKING', desc: 'Deploy server-side Conversions API, Google Tag Manager, and UTM taxonomies.' },
      { step: '04', title: 'CREATIVE', desc: 'Produce high-performing copy, static graphics, motion video hooks, and landing pages.' },
      { step: '05', title: 'LAUNCH', desc: 'Deploy initial campaigns with conservative exploratory bids and broad data gathering.' },
      { step: '06', title: 'SCALE', desc: 'Reallocate capital into winning creative angles, expand lookalikes, and optimize bids.' },
      { step: '07', title: 'REPORT', desc: 'Deliver weekly transparent dashboards comparing ad spend directly against revenue generated.' },
    ],
    technologies: [
      { name: 'Google Ads & PMax', size: 'large', category: 'Paid Search', badge: 'High Intent', desc: 'Dominating search intent and dynamic shopping feeds.' },
      { name: 'Meta Ads Manager', size: 'large', category: 'Paid Social', badge: 'Scale Engine', desc: 'Advanced algorithmic demographic and lookalike targeting.' },
      { name: 'Google Analytics 4', size: 'medium', category: 'Analytics', badge: 'Attribution', desc: 'Event-driven user tracking and behavioral modeling.' },
      { name: 'Google Tag Manager', size: 'medium', category: 'Tracking', badge: 'Server-Side', desc: 'Centralized script management and CAPI integration.' },
      { name: 'Ahrefs & Semrush', size: 'medium', category: 'SEO', badge: 'Intelligence', desc: 'Deep keyword intelligence and backlink competitor audits.' },
      { name: 'Klaviyo / HubSpot', size: 'large', category: 'Retention', badge: 'Automated', desc: 'Behavioral email sequences and customer segmentation.' },
      { name: 'Hotjar & Clarity', size: 'small', category: 'CRO', badge: 'Heatmaps', desc: 'Live visitor session recording and scroll drop-off analysis.' },
      { name: 'LinkedIn Campaign Mgr', size: 'small', category: 'B2B', badge: 'Enterprise', desc: 'Direct firmographic targeting for B2B decision makers.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Profit-first ad management', desc: 'We optimize for cash flow and bottom-line margin, not vanity impressions or unengaged social clicks.', metric: '+240%', metricLabel: 'Average Target ROAS' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Server-side CAPI tracking', desc: 'Overcome iOS privacy tracking restrictions with direct server-to-server event reporting for maximum attribution accuracy.', metric: '98%', metricLabel: 'Event Match Quality' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Rapid creative testing', desc: 'We test dozens of ad hooks, visual formats, and angles every week to find break-out creative winners before ad fatigue sets in.', metric: '20+', metricLabel: 'Weekly Creative Tests' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Transparent reporting', desc: 'No smoke and mirrors. You get a real-time Looker Studio dashboard that connects your ad spend directly to stripe payments.', metric: '100%', metricLabel: 'Real-Time Visibility' },
    ],
    selectedWork: [
      { number: '01', title: 'OmniGrowth Scaling Campaign', category: 'Full-Funnel Performance Marketing', tags: ['Google Ads', 'Meta', 'CRO'], result: 'Scaled from $30k to $180k monthly revenue at a 4.6x ROAS in 6 months.', size: 'featured', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'Nexus Direct-to-Consumer Growth', category: 'E-Commerce Paid Acquisition', tags: ['Meta Ads', 'Klaviyo', 'Landing Pages'], result: '+138% Mobile conversion lift with 3.9x blended ROAS.', size: 'medium', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'Apex Enterprise SEO Overhaul', category: 'Organic Search Authority', tags: ['Technical SEO', 'Content Clusters'], result: '+310% Organic traffic and #1 rankings across 18 competitive keywords.', size: 'medium', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'SaaS Inbound Lead Machine', category: 'B2B LinkedIn & Search', tags: ['LinkedIn ABM', 'Google Search'], result: 'Lowered cost-per-qualified-demo from $420 to $165.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Zeowl took over our paid marketing when we were stuck at 1.8x ROAS and burning cash. Within 90 days, their creative testing and landing pages pushed us to 4.4x ROAS, allowing us to safely 5x our monthly ad spend.”',
      author: 'Sophia Martinez',
      role: 'Head of Growth',
      company: 'Nexus Consumer Brands USA',
      impact: '+240% Profitable Ad Scaling',
    },
    faq: [
      { q: 'What is your minimum monthly ad spend requirement?', a: 'We typically manage client ad spends starting from $3,000/month up to $100,000+/month across Google, Meta, and LinkedIn.' },
      { q: 'Who pays the ad networks directly for advertising spend?', a: 'You pay Google, Meta, or LinkedIn directly with your own billing credentials. Zeowl charges a transparent management fee without hidden markups.' },
      { q: 'Do you create the ad creative and copy yourself?', a: 'Yes. Our in-house creative studio produces static graphics, motion video hooks, ad copywriting, and high-converting landing pages as part of our engagement.' },
      { q: 'How quickly can we expect to see results from digital marketing?', a: 'Paid media campaigns start generating data and commercial leads within 7 to 14 days of launch, while organic SEO compounding typically matures over 3 to 6 months.' },
      { q: 'How do you overcome iOS tracking and privacy limitations?', a: 'We implement server-side Conversions API (CAPI), first-party cookie infrastructure, and offline conversion imports to ensure accurate measurement.' },
      { q: 'Do we get locked into long-term marketing contracts?', a: 'We believe in earning your business every single month. We typically begin with an initial 90-day sprint, followed by flexible month-to-month arrangements.' },
      { q: 'How often do we receive campaign performance updates?', a: 'You have 24/7 access to your live Looker Studio reporting dashboard, receive weekly Slack summaries, and join bi-weekly strategy calls with your dedicated growth lead.' },
    ],
    cta: {
      headline: 'READY TO SCALE YOUR DIGITAL REVENUE?',
      subtext: "Let's audit your current marketing channels, eliminate ad waste, and unlock a scalable customer acquisition engine.",
      floatingTags: ['SEO', 'GOOGLE ADS', 'META ADS', 'ROAS', 'ATTRIBUTION', 'CRO'],
    },
  },

  'app-development': {
    slug: 'app-development',
    aliases: ['mobile-apps'],
    number: '05',
    title: 'Mobile App Development',
    heroHeadline: {
      line1: 'ENGINEER MOBILE',
      highlightWord1: 'APPLICATIONS',
      line2: 'USERS LOVE TO',
      highlightWord2: 'USE.',
    },
    eyebrow: 'iOS & ANDROID NATIVE / HYBRID ECOSYSTEMS',
    breadcrumb: 'HOME / SERVICES / APP DEVELOPMENT',
    heroDescription:
      'Scalable, secure, and hyper-responsive iOS and Android mobile applications crafted with modern native and cross-platform frameworks. Engineered for fluid 60fps gestures, offline resilience, and seamless cloud synchronization.',
    heroFloatingBadges: [
      { text: 'FLUID 60FPS', icon: 'smartphone' },
      { text: 'OFFLINE FIRST', icon: 'wifi-off' },
      { text: 'PUSH ALERTS', icon: 'bell' },
      { text: 'APP STORE OPT', icon: 'star' },
      { text: 'BIOMETRIC AUTH', icon: 'lock' },
    ],
    heroVisual: {
      type: 'mobile-mockup-stack',
      badge: 'CROSS-PLATFORM // REACT NATIVE & FLUTTER',
      previewTitle: 'PulseFit Telemetry & Health Tracker',
      codeSnippet: `// Native Biometric & Telemetry Stream
export const useBiometricHeartRate = () => {
  const [telemetry, setTelemetry] = useState(null);
  useEffect(() => {
    return HealthKit.subscribe((bpm) => setTelemetry(bpm));
  }, []);
  return telemetry;
};`,
      floatingMetric: { value: '4.9★', label: 'App Store Average' },
      activeUsers: '420k+ Daily Active Mobile Users',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "A MOBILE APP LIVES IN YOUR CUSTOMER'S POCKET. IT MUST BE FLAWLESS, IMMEDIATE AND ADDICTIVE.",
      highlightWords: ['IN YOUR CUSTOMER\'S POCKET.', 'FLAWLESS, IMMEDIATE AND ADDICTIVE.'],
      paragraph:
        'Users uninstall sluggish or buggy mobile apps within 30 seconds. We engineer mobile experiences that prioritize micro-interaction delight, instant cold-start load times, seamless offline functionality, and intuitive tactile gestures.',
      principles: [
        { number: '01', title: 'ERGONOMICS', desc: 'Thumb-zone navigation, haptic feedback triggers, and human-interface design compliance.' },
        { number: '02', title: 'OFFLINE FIRST', desc: 'Local SQLite database caching with automated background sync when connectivity resumes.' },
        { number: '03', title: 'HARDWARE SYNC', desc: 'Direct integration with cameras, GPS, Bluetooth Low Energy (BLE), and Apple/Google Health.' },
      ],
    },
    capabilities: [
      { number: '01', title: 'CROSS-PLATFORM (REACT NATIVE / FLUTTER)', description: 'Ship to both Apple App Store and Google Play from a single unified codebase, cutting delivery time and cost in half.', details: ['React Native & Expo', 'Flutter & Dart', 'Native Bridge Modules', 'Unified Design Language'], image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80' },
      { number: '02', title: 'NATIVE iOS DEVELOPMENT (SWIFT)', description: 'Bespoke native iOS applications leveraging Swift, SwiftUI, Metal, and deep Apple ecosystem integrations.', details: ['Swift & SwiftUI', 'Apple Pay Integration', 'Widgets & Live Activities', 'HealthKit & CoreML'], image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1000&q=80' },
      { number: '03', title: 'NATIVE ANDROID DEVELOPMENT (KOTLIN)', description: 'Robust Android experiences built with Kotlin and Jetpack Compose optimized across diverse device form factors.', details: ['Kotlin & Jetpack Compose', 'Google Pay Rails', 'Material 3 Design Tokens', 'Background WorkManager'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80' },
      { number: '04', title: 'OFFLINE DATA & CLOUD SYNCHRONIZATION', description: 'Enable users to complete workflows seamlessly without internet access with automatic conflict resolution upon reconnection.', details: ['WatermelonDB & SQLite', 'Background Queued Sync', 'Optimistic UI Updates', 'Delta Data Compression'], image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80' },
      { number: '05', title: 'PUSH NOTIFICATIONS & ENGAGEMENT', description: 'Intelligent, automated push notification engines that re-engage users based on behavioral and geofence triggers.', details: ['OneSignal & Firebase FCM', 'Deep-Linking Routing', 'Rich Media Push Messages', 'Segmented Re-engagement'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80' },
      { number: '06', title: 'APP STORE SUBMISSION & ASO', description: 'Guaranteed compliance with strict Apple and Google guidelines, avoiding rejection delays and optimizing store discoverability.', details: ['App Store Review Guarantee', 'App Store Optimization (ASO)', 'TestFlight Beta Pipelines', 'Continuous In-App Updates'], image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80' },
    ],
    solutions: [
      { number: '01', title: 'On-Demand Service Apps', description: 'Real-time booking, driver tracking, live GPS routing, and instant payments.', icon: 'map-pin', tags: ['GPS', 'WebSockets', 'Stripe'] },
      { number: '02', title: 'Fitness & Telehealth Apps', description: 'Sensor integration, heart rate charts, personalized workout logging, and video calls.', icon: 'heart', tags: ['HealthKit', 'BLE', 'HIPAA'] },
      { number: '03', title: 'Fintech & Wallet Apps', description: 'Biometric login, card tokens, instant money transfers, and transaction push feeds.', icon: 'credit-card', tags: ['Biometrics', 'PCI-DSS', 'Fintech'] },
      { number: '04', title: 'E-Commerce Mobile Apps', description: 'Sub-second catalog browsing, Apple Pay one-tap checkouts, and abandoned cart push.', icon: 'shopping-bag', tags: ['Apple Pay', 'Push', 'High AOV'] },
      { number: '05', title: 'Field Operations & Dispatch', description: 'Offline-capable staff apps with barcode scanning, signature capture, and camera uploads.', icon: 'clipboard', tags: ['Offline', 'Camera', 'Scanner'] },
      { number: '06', title: 'Social & Community Apps', description: 'User feeds, direct chat messaging, photo sharing, and engagement gamification badges.', icon: 'message-circle', tags: ['Chat', 'Feed', 'Real-Time'] },
      { number: '07', title: 'IoT & Hardware Control Apps', description: 'Bluetooth Low Energy pairing and control hubs for smart devices and machinery.', icon: 'cpu', tags: ['BLE', 'IoT', 'Hardware'] },
      { number: '08', title: 'Enterprise Internal Apps', description: 'Secure gated staff apps with SSO authentication, corporate directory, and approvals.', icon: 'shield', tags: ['SSO', 'MDM', 'Enterprise'] },
    ],
    process: [
      { step: '01', title: 'DISCOVER', desc: 'User persona analysis, mobile ergonomic planning, and hardware dependency audits.' },
      { step: '02', title: 'DESIGN', desc: 'Figma mobile prototypes, thumb-friendly interaction design, and haptic feedback maps.' },
      { step: '03', title: 'ARCHITECT', desc: 'Local database schema, API contracts, offline queue mechanisms, and state stores.' },
      { step: '04', title: 'BUILD', desc: 'Cross-platform or native coding with bi-weekly TestFlight and APK test builds.' },
      { step: '05', title: 'QA & TEST', desc: 'Testing across 30+ physical iOS and Android devices, battery draw, and network drops.' },
      { step: '06', title: 'SUBMIT', desc: 'Prepare metadata, privacy nutrition labels, and secure official App Store approvals.' },
      { step: '07', title: 'SCALE', desc: 'Crashlytics telemetry monitoring, user retention analytics, and iterative feature sprints.' },
    ],
    technologies: [
      { name: 'React Native', size: 'large', category: 'Cross-Platform', badge: 'Core Stack', desc: 'Near-native speed with shared React component logic.' },
      { name: 'Flutter', size: 'large', category: 'Cross-Platform', badge: 'Google Engine', desc: 'Compiled native performance with skia canvas rendering.' },
      { name: 'Swift & SwiftUI', size: 'medium', category: 'Native iOS', badge: 'Apple Native', desc: 'Ultra-smooth iOS native ergonomics and widgets.' },
      { name: 'Kotlin', size: 'medium', category: 'Native Android', badge: 'Google Native', desc: 'Modern Android native language with coroutines.' },
      { name: 'Firebase & Supabase', size: 'large', category: 'Mobile Backend', badge: 'Cloud Sync', desc: 'Real-time databases, auth, and remote configurations.' },
      { name: 'SQLite / WatermelonDB', size: 'medium', category: 'Offline DB', badge: 'Local Cache', desc: 'Blazing fast local persistence for offline-first apps.' },
      { name: 'OneSignal', size: 'small', category: 'Push Notifications', badge: 'Retention', desc: 'Multi-platform segmented push notification delivery.' },
      { name: 'GraphQL & WebSockets', size: 'small', category: 'Real-Time', badge: 'Live Protocol', desc: 'Bidirectional low-bandwidth message transport.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Built for retention and LTV', desc: 'We design sticky onboarding flows, subtle gamification, and valuable push notifications that keep users returning daily.', metric: '68%', metricLabel: 'Average Day-30 Retention' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Single codebase efficiency', desc: 'Our React Native and Flutter architectures share up to 90% of business logic across platforms without sacrificing 60fps fluidity.', metric: '50%', metricLabel: 'Faster Time-to-Market' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Sub-second cold launch', desc: 'Optimized binary bundles, lazy asset decoding, and minimal background CPU usage to preserve battery life.', metric: '<800ms', metricLabel: 'Cold App Launch Time' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Store compliance assurance', desc: 'We handle ongoing OS updates (iOS 18+, Android 15+) and API deprecation migrations so your app never breaks.', metric: '100%', metricLabel: 'App Store Approval Rate' },
    ],
    selectedWork: [
      { number: '01', title: 'PulseFit Telemetry & Recovery', category: 'Mobile Fitness & Telemetry App', tags: ['React Native', 'HealthKit', 'BLE'], result: 'Over 420,000 active athletes with 4.9★ rating.', size: 'featured', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'Verve Health Patient Telehealth', category: 'Medical Consultation Mobile App', tags: ['iOS Swift', 'WebRTC', 'HIPAA'], result: '120k active patient consultations completed safely.', size: 'medium', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'SwiftCourier Real-Time Logistics', category: 'Driver Tracking & Dispatch App', tags: ['Flutter', 'Google Maps', 'SQLite'], result: '2.8M deliveries tracked with zero dispatch outages.', size: 'medium', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'Artisan Gourmet Market App', category: 'E-Commerce Mobile App', tags: ['React Native', 'Apple Pay', 'Push'], result: '+114% Reorder rate via automated push promotions.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Building our fitness app with Zeowl was the best decision we made. Their React Native team gave us an iOS and Android experience that feels genuinely native, and our App Store rating has stayed at 4.9 stars across 15,000 reviews.”',
      author: 'Julian Thorne',
      role: 'Founder & CEO',
      company: 'PulseFit Health USA',
      impact: '420,000+ Active Users & 4.9★ Store Rating',
    },
    faq: [
      { q: 'Should we build native iOS/Android or use React Native/Flutter?', a: 'For 95% of businesses, cross-platform frameworks like React Native or Flutter provide identical 60fps performance while cutting development and maintenance costs in half. We recommend purely native Swift/Kotlin only when deeply custom hardware or graphics shaders are required.' },
      { q: 'Do you manage the entire Apple App Store and Google Play submission process?', a: 'Yes. We prepare developer accounts, privacy policies, screenshot assets, beta testing groups, and communicate directly with Apple/Google reviewers to secure approvals.' },
      { q: 'Can the app function when the user has no cellular or Wi-Fi connection?', a: 'Yes. We build offline-first architectures that save data locally and synchronize automatically once connection is restored.' },
      { q: 'How do you handle user authentication and sensitive data?', a: 'We implement biometrics (Face ID / Touch ID / Fingerprint), OAuth social logins, and store auth tokens inside Apple Keychain and Android Keystore.' },
      { q: 'Can you integrate in-app purchases and subscriptions?', a: 'Yes. We integrate RevenueCat, Apple In-App Purchase, and Google Play Billing with automated server receipt validation.' },
      { q: 'What is the average timeline to build a mobile application?', a: 'A polished MVP typically takes 8 to 12 weeks, while complex social, fintech, or hardware-connected apps require 12 to 18 weeks.' },
      { q: 'Do you offer post-launch maintenance and OS updates?', a: 'Yes. We ensure your app stays compatible with annual iOS and Android OS updates, fix emerging bugs, and deploy continuous feature iterations.' },
    ],
    cta: {
      headline: 'READY TO LAUNCH YOUR MOBILE APP?',
      subtext: "Let's turn your concept into an App Store standout that users open every single day.",
      floatingTags: ['IOS', 'ANDROID', 'REACT NATIVE', 'FLUTTER', 'OFFLINE FIRST', 'HEALTHKIT'],
    },
  },

  'social-media-marketing': {
    slug: 'social-media-marketing',
    aliases: ['social-media'],
    number: '06',
    title: 'Social Media Marketing',
    heroHeadline: {
      line1: 'SPARK VIRAL',
      highlightWord1: 'ENGAGEMENT',
      line2: 'AND BUILD A',
      highlightWord2: 'COMMUNITY.',
    },
    eyebrow: 'ORGANIC REACH & CONTENT VELOCITY',
    breadcrumb: 'HOME / SERVICES / SOCIAL MEDIA MARKETING',
    heroDescription:
      'Strategic organic social campaigns that build dedicated audiences, foster genuine community engagement, and position your brand as a recognized thought leader across Instagram, LinkedIn, YouTube, and TikTok.',
    heroFloatingBadges: [
      { text: 'VIRAL HOOKS', icon: 'share-2' },
      { text: 'ORGANIC REACH', icon: 'users' },
      { text: 'THOUGHT LEADERSHIP', icon: 'award' },
      { text: 'CONTENT CALENDAR', icon: 'calendar' },
      { text: 'ANALYTICS DRIVEN', icon: 'trending-up' },
    ],
    heroVisual: {
      type: 'content-wall',
      badge: 'ENGAGEMENT RATE // 4.8x INDUSTRY BENCHMARK',
      previewTitle: 'Viral Content Orchestration Hub',
      codeSnippet: `// Audience Velocity Growth Metrics
const SocialPerformance = {
  monthlyImpressions: "4.2M+",
  organicEngagementRate: "8.4%",
  leadGenerationGrowth: "+260%",
  activeFollowerBase: "185k"
};`,
      floatingMetric: { value: '+260%', label: 'Lead Growth' },
      activeUsers: '4.2M+ Monthly Content Impressions',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "POSTING RANDOM PICTURES IS NOT A STRATEGY. WE BUILD CULTURAL RELEVANCE THAT DRIVES REVENUE.",
      highlightWords: ['NOT A STRATEGY.', 'CULTURAL RELEVANCE THAT DRIVES REVENUE.'],
      paragraph:
        'Social media algorithms reward high-retention storytelling, visual polish, and authentic authority. We combine analytical trend prediction with editorial-grade media production to turn passive scrollers into passionate brand advocates.',
      principles: [
        { number: '01', title: 'HOOK ENGINEERING', desc: 'Crafting first 3-second visual and copy hooks that stop thumb scrolling dead in its tracks.' },
        { number: '02', title: 'CONSISTENCY', desc: 'Predictable high-cadence publishing schedules backed by multi-week editorial buffers.' },
        { number: '03', title: 'CONVERSION', desc: 'Strategic call-to-actions, bio funnels, and comment automations that route followers to your site.' },
      ],
    },
    capabilities: [
      { number: '01', title: 'CONTENT STRATEGY & CALENDAR PLANNING', description: 'Comprehensive monthly content roadmaps aligned with key business launches, industry trends, and audience pain points.', details: ['Multi-Channel Monthly Calendars', 'Content Pillar Definition', 'Competitor Trend Forecasting', 'Hashtag & SEO Search Strategy'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80' },
      { number: '02', title: 'SHORT-FORM VIDEO (REELS & TIKTOK)', description: 'High-energy, beautifully edited vertical videos optimized for platform algorithms and maximum organic distribution.', details: ['Trending Audio Utilization', 'Kinetic Caption Animations', 'Engaging Scriptwriting', 'Professional Color & Sound Design'], image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80' },
      { number: '03', title: 'B2B LINKEDIN THOUGHT LEADERSHIP', description: 'Establish founders and executives as leading voices in their industry through compelling carousel slides and narrative posts.', details: ['Ghostwriting for Founders', 'Insightful PDF Carousels', 'Employee Advocacy Programs', 'Industry Comment Networking'], image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80' },
      { number: '04', title: 'COMMUNITY MANAGEMENT & DM AUTOMATION', description: 'Active comment moderation, proactive customer support responses, and ManyChat automated DM sales funnels.', details: ['Automated DM Lead Funnels', '24/7 Comment Moderation', 'Influencer Mention Monitoring', 'Active Community Engagement'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80' },
      { number: '05', title: 'VISUAL ASSET CREATION & CAROUSELS', description: 'Bespoke high-converting Instagram graphics, infographics, and carousel layouts crafted in our design studio.', details: ['Editorial Graphic Design', 'Data Infographics', 'Brand Aesthetic Cohesion', 'High-Converting Swipe Carousels'], image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80' },
      { number: '06', title: 'SOCIAL ANALYTICS & AUDIENCE INSIGHTS', description: 'Monthly deep-dive reports tracking engagement velocity, follower quality, website referral traffic, and direct conversions.', details: ['Looker Studio Dashboards', 'Audience Demographics Audits', 'Viral Post Post-Mortems', 'Clear ROI Attribution'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80' },
    ],
    solutions: [
      { number: '01', title: 'Viral Reels & Shorts', description: 'High-retention vertical video content capturing massive algorithm reach.', icon: 'video', tags: ['Reels', 'TikTok', 'Shorts'] },
      { number: '02', title: 'Executive LinkedIn Profiles', description: 'Build founder credibility, attract top-tier talent, and close enterprise deals.', icon: 'briefcase', tags: ['B2B', 'Thought Leadership', 'Carousels'] },
      { number: '03', title: 'Instagram Brand Feeds', description: 'Curated editorial aesthetic feeds that establish instant luxury and trust.', icon: 'instagram', tags: ['Aesthetic', 'Visuals', 'Brand Trust'] },
      { number: '04', title: 'Automated DM Funnels', description: 'Comment-to-DM triggers that deliver free resources and capture qualified emails.', icon: 'message-circle', tags: ['ManyChat', 'Lead Gen', 'Automated'] },
      { number: '05', title: 'Community Engagement Hubs', description: 'Active comment replies and discussion prompts that foster brand superfans.', icon: 'users', tags: ['Superfans', 'Moderation', 'Loyalty'] },
      { number: '06', title: 'Product Launch Campaigns', description: 'Coordinated teaser sequences that build anticipation for new product rollouts.', icon: 'rocket', tags: ['Teasers', 'Launches', 'Hype'] },
      { number: '07', title: 'Industry Trend Jacking', description: 'Agile rapid-response content that capitalizes on breaking memes and news.', icon: 'trending-up', tags: ['Agile', 'News', 'Viral'] },
      { number: '08', title: 'Multi-Channel Repurposing', description: 'Turn one long-form podcast or blog post into 15+ micro-assets across all channels.', icon: 'repeat', tags: ['Repurpose', 'Efficiency', 'Scale'] },
    ],
    process: [
      { step: '01', title: 'AUDIT', desc: 'Analyze existing audience demographics, top-performing posts, and competitor weaknesses.' },
      { step: '02', title: 'PILLARS', desc: 'Define core content pillars, brand tone of voice, and visual styling guidelines.' },
      { step: '03', title: 'PLAN', desc: 'Deliver a monthly calendar with scripts, caption hooks, and visual concepts for review.' },
      { step: '04', title: 'PRODUCE', desc: 'Film, edit, and design all creative assets with professional audio and graphics.' },
      { step: '05', title: 'PUBLISH', desc: 'Schedule across peak timezone slots with automated first-hour engagement pushes.' },
      { step: '06', title: 'ENGAGE', desc: 'Actively reply to comments, trigger automated DMs, and network with key accounts.' },
      { step: '07', title: 'ITERATE', desc: 'Double down on high-performing formats and adjust creative tactics monthly.' },
    ],
    technologies: [
      { name: 'Instagram & TikTok', size: 'large', category: 'Platform', badge: 'B2C Reach', desc: 'High-velocity visual storytelling and reels distribution.' },
      { name: 'LinkedIn', size: 'large', category: 'Platform', badge: 'B2B Network', desc: 'Professional thought leadership and enterprise networking.' },
      { name: 'Premiere Pro & CapCut', size: 'medium', category: 'Video', badge: 'Editing', desc: 'Fast turnaround short-form video editing and kinetic captions.' },
      { name: 'ManyChat', size: 'medium', category: 'Automation', badge: 'DM Funnels', desc: 'Automated comment-to-DM lead capture and email collection.' },
      { name: 'Sprout Social', size: 'small', category: 'Publishing', badge: 'Scheduling', desc: 'Multi-channel scheduling and unified inbox monitoring.' },
      { name: 'Figma', size: 'small', category: 'Visuals', badge: 'Design', desc: 'Cohesive brand templates and carousel slides.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Followers that convert', desc: 'We do not chase hollow follower counts. We build warm audiences and route them through bio funnels into paying customers.', metric: '8.4%', metricLabel: 'Average Engagement Rate' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Automated lead capture', desc: 'Seamless ManyChat DM automations capture prospect emails and phone numbers directly inside social platforms.', metric: '100k+', metricLabel: 'Automated Leads Generated' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Rapid video production', desc: 'Our dedicated studio produces dozens of polished short-form videos every month to keep your channels dominating algorithms.', metric: '30+', metricLabel: 'Monthly Video Deliverables' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Hands-off management', desc: 'From scriptwriting to publishing and comment moderation, we handle the entire social pipeline so you can focus on business.', metric: 'Zero', metricLabel: 'Time Burden on Your Team' },
    ],
    selectedWork: [
      { number: '01', title: 'Kroma Acoustic Lab Viral Growth', category: 'Luxury Brand Social Media', tags: ['Reels', 'Aesthetic', 'ManyChat'], result: 'Grew from 4k to 94k followers in 5 months with 14M organic views.', size: 'featured', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'B2B SaaS Founder Thought Leadership', category: 'LinkedIn Executive Growth', tags: ['LinkedIn', 'Carousels', 'ABM'], result: 'Generated 42 qualified enterprise demo calls directly via LinkedIn.', size: 'medium', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'DTC Apparel Viral TikTok Strategy', category: 'Short-Form Video & Trends', tags: ['TikTok', 'Reels', 'Virality'], result: '+380% Increase in direct store referral traffic.', size: 'medium', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'Fintech Daily Market Commentary', category: 'Social Infographics & Threads', tags: ['Twitter/X', 'LinkedIn', 'Infographics'], result: 'Recognized as Top 10 Industry Voice in UK Fintech.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Before Zeowl took over, our social channels felt like a ghost town. Their team wrote, filmed, and published content that felt genuinely authentic to our brand, and our inbound leads quadrupled within 90 days.”',
      author: 'Chloe Dupont',
      role: 'Chief Marketing Officer',
      company: 'Lumina Paris Atelier',
      impact: '+380% Organic Social Traffic Growth',
    },
    faq: [
      { q: 'Do we need to film content ourselves, or do you handle production?', a: 'We can handle 100% of production in-house, or edit and polish raw smartphone footage supplied by your team into high-end viral clips.' },
      { q: 'How many posts do you publish per week?', a: 'Our standard packages deliver 4 to 7 high-impact posts and reels per week across your primary active platforms.' },
      { q: 'Can you help grow our founder’s personal LinkedIn presence?', a: 'Yes. Executive thought leadership on LinkedIn is one of our highest-ROI specialties for B2B founders and leadership teams.' },
      { q: 'Do you reply to comments and direct messages?', a: 'Yes. We provide active daily community management and configure automated DM funnel bots to handle inbound lead inquiries instantly.' },
      { q: 'How do you measure the business ROI of organic social media?', a: 'We track trackable UTM links, unique discount promo codes, DM automation opt-ins, and direct Google Analytics attribution.' },
      { q: 'Can we review and approve content before it gets published?', a: 'Always. All posts, captions, and visual assets are submitted in a shared collaborative dashboard for your review and sign-off.' },
      { q: 'What platforms do you support?', a: 'We actively manage campaigns across Instagram, LinkedIn, TikTok, YouTube Shorts, Facebook, and Twitter/X.' },
    ],
    cta: {
      headline: 'READY TO TURN SOCIAL FOLLOWERS INTO REVENUE?',
      subtext: "Let's build a recognizable brand presence that captivates your audience and drives predictable organic growth.",
      floatingTags: ['INSTAGRAM', 'LINKEDIN', 'TIKTOK', 'REELS', 'MANYCHAT', 'COMMUNITY'],
    },
  },

  'video-editing': {
    slug: 'video-editing',
    aliases: ['video-production'],
    number: '07',
    title: 'Cinematic Video Editing',
    heroHeadline: {
      line1: 'CRAFT CINEMATIC',
      highlightWord1: 'STORIES',
      line2: 'THAT STOP THE',
      highlightWord2: 'SCROLL.',
    },
    eyebrow: 'MOTION GRAPHICS & POST-PRODUCTION',
    breadcrumb: 'HOME / SERVICES / VIDEO EDITING',
    heroDescription:
      'High-end post-production, kinetic typography, and Hollywood-grade color grading tailored for luxury brands, tech companies, and digital creators. Transform raw footage into captivating visual masterpieces that elevate brand authority.',
    heroFloatingBadges: [
      { text: 'COLOR GRADE', icon: 'film' },
      { text: 'KINETIC MOTION', icon: 'sparkles' },
      { text: 'SOUND DESIGN', icon: 'volume-2' },
      { text: '4K MASTERING', icon: 'monitor' },
      { text: 'SCROLL STOPPING', icon: 'zap' },
    ],
    heroVisual: {
      type: 'editing-timeline',
      badge: '4K POST-PRODUCTION // DAVINCI RESOLVE',
      previewTitle: 'Cinematic Timeline & Motion Nodes',
      codeSnippet: `// Timeline Export Specs
const VideoMastering = {
  resolution: "3840x2160 UHD 60fps",
  colorSpace: "ACEScc / Rec.709",
  audioMaster: "True Peak -1.0dB / LUFS -14",
  codec: "ProRes 422 HQ & Web MP4"
};`,
      floatingMetric: { value: '60fps', label: 'Ultra Smooth' },
      activeUsers: '1,200+ Commercial Videos Delivered',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "VIDEO IS THE HIGHEST-LEVERAGE MEDIUM ON THE INTERNET. MAKE EVERY FRAME COUNT.",
      highlightWords: ['HIGHEST-LEVERAGE MEDIUM', 'MAKE EVERY FRAME COUNT.'],
      paragraph:
        'Subpar audio, sloppy pacing, or generic templates instantly erode brand credibility. We apply cinematic editing techniques, bespoke soundscapes, and fluid motion graphics to turn everyday footage into captivating cinema.',
      principles: [
        { number: '01', title: 'PACING', desc: 'Rhythmic cuts timed to acoustic beats that hold viewer retention from first second to last.' },
        { number: '02', title: 'COLOR', desc: 'Film emulation, shadow lifting, and custom LUT color grading that conveys luxury and mood.' },
        { number: '03', title: 'AUDIO', desc: 'Multi-layer foley, dialogue de-noising, dynamic ducking, and spatial stereo mastering.' },
      ],
    },
    capabilities: [
      { number: '01', title: 'SHORT-FORM REELS & TIKTOKS', description: 'Fast-paced, hook-optimized vertical video edits engineered for high watch-time and algorithm virality.', details: ['Dynamic Subtitle Animations', 'SFX Foley Transitions', 'Jump-Cut Pacing Optimization', 'B-Roll & Stock Footage Integration'], image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80' },
      { number: '02', title: 'CORPORATE BRAND VIDEOS & ANTHEMS', description: 'Polished documentary-style corporate films that communicate vision, culture, and enterprise authority to clients and investors.', details: ['Interviews & B-Roll Weaving', 'Corporate Anthem Soundtracks', 'Color Grading for Skin Tones', 'Multi-Camera Synchronization'], image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80' },
      { number: '03', title: 'YOUTUBE LONG-FORM EDITING', description: 'Engaging 10-to-30 minute long-form edits with custom lower-thirds, chapter cards, and retention-maximizing visual pacing.', details: ['Retention Curve Editing', 'Custom Intro Sequences', 'Click-Worthy Thumbnails Design', 'Optimized YouTube End-Screens'], image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=80' },
      { number: '04', title: '2D & 3D MOTION GRAPHICS', description: 'Kinetic typography, animated logo reveals, infographic overlays, and futuristic UI hud animations in After Effects.', details: ['After Effects Composition', 'Vector Kinetic Typography', '3D Product Render Passes', 'UI Mockup Screencasts'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80' },
      { number: '05', title: 'HOLLYWOOD COLOR GRADING', description: 'Professional DaVinci Resolve color grading to create distinct visual atmospheres, cinematic tones, and perfect contrast.', details: ['DaVinci Resolve Studio', 'Log to Rec.709 Transforms', 'Shot-to-Shot Color Matching', 'Custom Film Grain & Halation'], image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80' },
      { number: '06', title: 'PROFESSIONAL SOUND DESIGN & MIXING', description: 'Multi-track audio mastering that gives every transition, hit, and spoken word immersive punch and clarity.', details: ['iZotope Dialogue Restoration', 'Layered Foley & Risers', 'LUFS Broadcast Mastering', 'Curated Commercial Music Library'], image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=80' },
    ],
    solutions: [
      { number: '01', title: 'High-Converting Ad Creatives', description: 'Performance video ads designed to generate purchases and trial signups.', icon: 'target', tags: ['Paid Ads', 'Hooks', 'Direct Response'] },
      { number: '02', title: 'Product Launch Videos', description: 'Dynamic 3D and live-action showcase videos introducing new software or hardware.', icon: 'play-circle', tags: ['Product', 'Cinematic', '3D'] },
      { number: '03', title: 'Customer Case Study Films', description: 'Client testimonial stories that establish authentic proof and credibility.', icon: 'users', tags: ['Case Study', 'Interviews', 'Trust'] },
      { number: '04', title: 'Event & Conference Recaps', description: 'Fast-paced, high-energy highlight films that celebrate summit experiences.', icon: 'award', tags: ['Summits', 'Music', 'Recaps'] },
      { number: '05', title: 'Software Demo Screencasts', description: 'Sleek animated software demonstrations with cursor zooms and slick callouts.', icon: 'monitor', tags: ['SaaS', 'Zoom', 'Clean UI'] },
      { number: '06', title: 'Podcast Video Repurposing', description: 'Multi-camera podcast editing turned into vertical clips with animated captions.', icon: 'mic', tags: ['Podcasts', 'Multi-Cam', 'Clips'] },
      { number: '07', title: 'Social Media Video Bundles', description: 'Monthly packages of 15 to 30 ready-to-post short-form video deliverables.', icon: 'package', tags: ['Volume', 'Buffer', 'Turnkey'] },
      { number: '08', title: 'Kinetic Explainer Videos', description: 'Turn complex technical architectures into digestible animated explainer stories.', icon: 'help-circle', tags: ['Explainers', 'Vector', 'Motion'] },
    ],
    process: [
      { step: '01', title: 'INTAKE', desc: 'Secure cloud upload of raw footage, audio stems, brand guidelines, and creative briefs.' },
      { step: '02', title: 'ASSEMBLY', desc: 'Initial rough cut selection of best takes, narrative timeline, and dialogue pacing.' },
      { step: '03', title: 'MOTION', desc: 'Addition of kinetic text, B-roll overlays, animated icons, and screen zooms.' },
      { step: '04', title: 'COLOR', desc: 'DaVinci Resolve grading, color balance, skin tone correction, and film emulation.' },
      { step: '05', title: 'AUDIO', desc: 'Audio cleanup, sound effects layering, commercial music scoring, and final LUFS mix.' },
      { step: '06', title: 'REVIEW', desc: 'Frame-accurate client feedback via Frame.io for painless pinpoint revisions.' },
      { step: '07', title: 'EXPORT', desc: 'Master exports in 4K ProRes and platform-optimized MP4 files ready for publication.' },
    ],
    technologies: [
      { name: 'Adobe Premiere Pro', size: 'large', category: 'NLE', badge: 'Core Editing', desc: 'High-speed multi-camera narrative and commercial editing.' },
      { name: 'DaVinci Resolve Studio', size: 'large', category: 'Color & Audio', badge: 'Cinema Standard', desc: 'Industry-standard color grading and Fairlight audio post.' },
      { name: 'Adobe After Effects', size: 'large', category: 'Motion VFX', badge: 'Animation', desc: 'Complex visual compositing and 3D kinetic typography.' },
      { name: 'iZotope RX & Audition', size: 'medium', category: 'Audio', badge: 'Spectral Repair', desc: 'AI-assisted noise reduction and dialogue clarity enhancement.' },
      { name: 'Frame.io', size: 'medium', category: 'Review', badge: 'Collaboration', desc: 'Frame-by-frame timecoded client review and feedback.' },
      { name: 'Artlist & Epidemic', size: 'small', category: 'Licensing', badge: 'Commercial Music', desc: 'Full worldwide commercial synchronization rights.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Engineered for retention', desc: 'We structure cuts to maintain high viewer retention curves, maximizing algorithmic distribution on YouTube and social platforms.', metric: '82%', metricLabel: 'Average Watch-Through Rate' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: '4K cinema color science', desc: 'Our DaVinci color grading ensures your brand films look indistinguishable from top-tier commercial cinema.', metric: '4K UHD', metricLabel: 'Master Export Resolution' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: '48-hour turnarounds available', desc: 'Our streamlined editing pipeline delivers high-volume short-form content in days, not weeks, keeping your channels consistent.', metric: '48 Hrs', metricLabel: 'Fast Track Delivery' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Frame.io feedback loop', desc: 'Leave timestamped comments directly on the video player with zero confusing email chains.', metric: '100%', metricLabel: 'Frame-Accurate Reviews' },
    ],
    selectedWork: [
      { number: '01', title: 'Meridian Estates Cinematic Tour', category: 'Ultra-Luxury Architecture Film', tags: ['DaVinci', '4K Drone', 'Sound Design'], result: 'Over 1.8M organic views and $14M property offer generated.', size: 'featured', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'Synthetix AI Brand Anthem', category: 'Tech Product Anthem Video', tags: ['After Effects', 'Kinetic 3D', 'Sound FX'], result: 'Featured as Product of the Day on ProductHunt.', size: 'medium', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'PulseFit Workout Series (40 Reels)', category: 'Vertical Fitness Video Campaign', tags: ['Reels', 'CapCut', 'Color Grade'], result: '+420% Organic reach boost across Instagram and TikTok.', size: 'medium', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'Aura Capital Global Summit Film', category: 'Corporate Event Master', tags: ['Premiere Pro', 'Multi-Cam', 'Interviews'], result: 'Premiered to 500+ private equity executives in London.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“The video Zeowl produced for our platform launch looked like something out of a Silicon Valley keynote. The pacing, the sound design, and the kinetic typography completely blew our investors away.”',
      author: 'Alexander Wright',
      role: 'Head of Brand & Communications',
      company: 'Synthetix AI Labs',
      impact: '1.8M Organic Views & ProductHunt #1',
    },
    faq: [
      { q: 'How do we send our raw video files to you?', a: 'We provide secure high-speed upload links via Google Drive, Dropbox, or MASV, accommodating hundreds of gigabytes of raw 4K camera footage.' },
      { q: 'How many revisions do we get on each video?', a: 'Every video project includes 2 comprehensive revision rounds using Frame.io, allowing your team to leave pinpoint comments directly on specific frames.' },
      { q: 'Do you provide commercial music and sound effect licenses?', a: 'Yes. All background scores, sound effects, and voiceovers are 100% commercially cleared for worldwide digital, social, and broadcast distribution.' },
      { q: 'Can you edit raw smartphone footage (iPhone ProRes)?', a: 'Yes! We frequently transform high-quality iPhone ProRes footage into editorial masterpieces with our color grading and audio restoration suites.' },
      { q: 'What aspect ratios do you deliver in?', a: 'We deliver in any required format: 16:9 widescreen for YouTube/TV, 9:16 vertical for Reels/TikTok, and 1:1 or 4:5 for feed ads.' },
      { q: 'Can you add subtitles and animated kinetic captions?', a: 'Yes. We design custom animated captions that match your brand typography and colors, ensuring high engagement with audio muted.' },
      { q: 'Do you offer monthly retainer editing packages?', a: 'Yes. Most of our clients prefer our monthly video editing retainers for predictable turnarounds, guaranteed capacity, and volume discounts.' },
    ],
    cta: {
      headline: 'READY TO CREATE CINEMATIC VISUALS?',
      subtext: "Let's turn your raw footage into scroll-stopping video content that commands attention and elevates your brand.",
      floatingTags: ['DAVINCI', 'PREMIERE', 'AFTER EFFECTS', 'COLOR GRADE', 'SOUND DESIGN', '4K'],
    },
  },

  'ai-automation': {
    slug: 'ai-automation',
    aliases: ['ai-solutions'],
    number: '08',
    title: 'AI Automation & Agents',
    heroHeadline: {
      line1: 'AUTOMATE REPETITIVE',
      highlightWord1: 'WORKFLOWS',
      line2: 'WITH AUTONOMOUS',
      highlightWord2: 'AI AGENTS.',
    },
    eyebrow: 'INTELLIGENT SYSTEMS & LLM ORCHESTRATION',
    breadcrumb: 'HOME / SERVICES / AI AUTOMATION',
    heroDescription:
      'Intelligent automation solutions and autonomous AI agent architectures that eliminate manual repetitive work, orchestrate multi-system data flows, and unlock 24/7 business efficiency through modern LLM pipelines.',
    heroFloatingBadges: [
      { text: 'LLM AGENTS', icon: 'cpu' },
      { text: 'WORKFLOW NODES', icon: 'layers' },
      { text: 'RAG MEMORY', icon: 'database' },
      { text: 'AUTO DISPATCH', icon: 'zap' },
      { text: 'ZERO LATENCY', icon: 'shield-check' },
    ],
    heroVisual: {
      type: 'ai-neural-graph',
      badge: 'AGENTIC PIPELINES // 65% LABOR ELIMINATED',
      previewTitle: 'Synthetix Multi-Agent Decision Hub',
      codeSnippet: `// Autonomous Agentic Graph Execution
const AgentWorkflow = new StateGraph({
  nodes: ["DocumentOCR", "EntityExtraction", "ComplianceCheck", "CRMCommit"],
  memory: new PgVectorMemory({ dimensions: 1536 }),
  autonomousRetry: true
});`,
      floatingMetric: { value: '65%', label: 'Labor Reduced' },
      activeUsers: '12M+ Monthly Agent Calls Processed',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "AI IS NOT A GIMMICK. IT IS THE GREATEST OPERATIONAL FORCE MULTIPLIER OF THIS CENTURY.",
      highlightWords: ['NOT A GIMMICK.', 'GREATEST OPERATIONAL FORCE MULTIPLIER'],
      paragraph:
        'Most companies barely scratch the surface with generic ChatGPT prompts. We engineer custom autonomous AI workflows, vector memory knowledge retrieval (RAG), and self-healing automation loops that execute complex multi-step business logic without human intervention.',
      principles: [
        { number: '01', title: 'SYSTEM AUDIT', desc: 'Identify high-cost manual bottlenecks and map deterministic vs. probabilistic AI logic paths.' },
        { number: '02', title: 'DATA SECURITY', desc: 'Private enterprise model endpoints with strict data residency, zero training on your data, and encryption.' },
        { number: '03', title: 'GUARDRAILS', desc: 'Multi-layer validation, hallucination checks, and human-in-the-loop review triggers for critical actions.' },
      ],
    },
    capabilities: [
      { number: '01', title: 'AUTONOMOUS MULTI-AGENT WORKFLOWS', description: 'Coordinated teams of specialized AI agents that synthesize documents, check compliance, make decisions, and execute tasks across tools.', details: ['LangChain & LangGraph', 'Task Routing & Reflection Loops', 'Tool-Use & API Execution', 'Autonomous Failure Recovery'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80' },
      { number: '02', title: 'CUSTOM n8n & MAKE AUTOMATIONS', description: 'Complex automated pipelines connecting your CRM, database, email, accounting, and communication channels seamlessly.', details: ['Self-Hosted High-Availability n8n', 'Custom Python/JS Code Nodes', 'Webhook Event Listeners', 'Bidirectional Multi-App Sync'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80' },
      { number: '03', title: 'ENTERPRISE RAG & KNOWLEDGE BASES', description: 'Enable your team or customers to query internal company documents, contracts, and SOPs with instant, cited, hallucination-free answers.', details: ['Pinecone & PgVector Embeddings', 'Document Ingestion Pipelines', 'Semantic Hybrid Search', 'Strict Role-Based Document Access'], image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80' },
      { number: '04', title: 'AI-POWERED CRM & LEAD ENRICHMENT', description: 'Automatically research incoming leads, score buyer intent, enrich company revenue data, and draft personalized outreach.', details: ['Apollo & Clearbit Data Enrichment', 'LLM Lead Fit Scoring', 'Automated CRM Stage Routing', 'Hyper-Personalized Email Drafting'], image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80' },
      { number: '05', title: 'WHATSAPP & CUSTOMER COPILOTS', description: 'Context-aware multilingual conversational agents that resolve customer queries, book appointments, and process orders 24/7.', details: ['Official WhatsApp Business API', 'Multi-Turn Conversation Memory', 'Live Human Handoff Triggers', 'Stripe Payment Link Generation'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80' },
      { number: '06', title: 'DOCUMENT PROCESSING & OCR EXTRACTION', description: 'Extract structured data from unstructured invoices, PDFs, and legal contracts with human-level accuracy in seconds.', details: ['Vision LLMs & OCR Pipelines', 'Structured JSON Output Guarantees', 'Automated Discrepancy Flagging', 'ERP Direct Ledger Sync'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80' },
    ],
    solutions: [
      { number: '01', title: 'Automated Invoice Processing', description: 'Parse incoming supplier invoices, verify line items, and push directly into accounting.', icon: 'file-text', tags: ['OCR', 'Accounting', 'Instant'] },
      { number: '02', title: 'Lead Qualification Bots', description: 'Engage website visitors, qualify budget and timeline, and schedule direct calendar demos.', icon: 'target', tags: ['Inbound', 'Calendly', '24/7'] },
      { number: '03', title: 'Customer Support Copilots', description: 'Resolve 70%+ of tier-1 support tickets instantly using your internal knowledge base.', icon: 'help-circle', tags: ['Support', 'RAG', 'Multilingual'] },
      { number: '04', title: 'Internal Knowledge Search', description: 'A secure ChatGPT for your entire corporate repository with zero data leaks.', icon: 'search', tags: ['Private', 'RAG', 'PgVector'] },
      { number: '05', title: 'Contract Review Assistants', description: 'Scan commercial agreements and highlight risky clauses and non-standard terms.', icon: 'shield', tags: ['Legal', 'Risk Flagging', 'Speed'] },
      { number: '06', title: 'Social Content Automation', description: 'Synthesize research articles into ready-to-publish social carousels and email briefs.', icon: 'share-2', tags: ['Content', 'Repurposing', 'LLM'] },
      { number: '07', title: 'Data Cleaning & ETL Pipelines', description: 'Automatically validate, standardize, and de-duplicate customer records in your CRM.', icon: 'database', tags: ['Data Hygiene', 'ETL', 'n8n'] },
      { number: '08', title: 'Inventory Reorder Agents', description: 'Monitor warehouse depletion rates and draft purchase orders automatically.', icon: 'box', tags: ['Supply Chain', 'Predictive', 'Automated'] },
    ],
    process: [
      { step: '01', title: 'AUDIT', desc: 'Map out manual human workflows and calculate time/cost reduction opportunities.' },
      { step: '02', title: 'DESIGN', desc: 'Architect agent graph states, prompt engineering templates, and validation guardrails.' },
      { step: '03', title: 'SECURITY', desc: 'Establish private API keys, zero-data-retention agreements, and isolated environments.' },
      { step: '04', title: 'BUILD', desc: 'Connect nodes, code custom tool endpoints, and embed proprietary knowledge vectors.' },
      { step: '05', title: 'TEST', desc: 'Stress test with edge-case prompt injection, hallucination testing, and latency tuning.' },
      { step: '06', title: 'DEPLOY', desc: 'Gradual shadow deployment where AI outputs run alongside human verification.' },
      { step: '07', title: 'OPTIMIZE', desc: 'Continuous prompt refinement, model fine-tuning, and performance monitoring.' },
    ],
    technologies: [
      { name: 'Python & FastAPI', size: 'large', category: 'Backend', badge: 'Core Stack', desc: 'High-speed asynchronous AI pipeline execution.' },
      { name: 'LangChain & LangGraph', size: 'large', category: 'Agentic Framework', badge: 'Multi-Agent', desc: 'Stateful multi-agent cognitive graph orchestration.' },
      { name: 'n8n Automation', size: 'large', category: 'Orchestration', badge: 'Self-Hosted', desc: 'Visual workflow engine with enterprise security controls.' },
      { name: 'OpenAI GPT-4o & Claude 3.5', size: 'large', category: 'Foundation LLM', badge: 'State-of-Art', desc: 'Industry-leading reasoning and vision analysis capabilities.' },
      { name: 'Ollama & Llama 3', size: 'medium', category: 'Local LLMs', badge: 'Self-Hosted', desc: 'Private on-premises models for sensitive data compliance.' },
      { name: 'Pinecone & PgVector', size: 'medium', category: 'Vector DB', badge: 'Semantic RAG', desc: 'Sub-millisecond high-dimensional embedding retrieval.' },
      { name: 'Redis', size: 'small', category: 'Memory', badge: 'Cache', desc: 'Low-latency conversational context and short-term memory.' },
      { name: 'PostgreSQL', size: 'small', category: 'Database', badge: 'Storage', desc: 'Structured event storage and audit logs.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Concrete ROI in hours saved', desc: 'Every AI workflow we build is tied directly to measurable hours reclaimed and headcount efficiency gains.', metric: '80 hrs/mo', metricLabel: 'Average Hours Reclaimed per Staff' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Stateful multi-agent graphs', desc: 'We build with LangGraph and self-hosted n8n, ensuring deterministic reliability rather than fragile single prompts.', metric: '99.4%', metricLabel: 'Task Execution Accuracy' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Data privacy guaranteed', desc: 'Your private corporate data is never used to train public models. We enforce enterprise zero-data retention agreements.', metric: 'Zero', metricLabel: 'Model Training Exposure' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Self-healing workflows', desc: 'Automations include automated fallback routines and error alerts so operations never stall silently.', metric: '24/7', metricLabel: 'Automated Operations' },
    ],
    selectedWork: [
      { number: '01', title: 'CogniWorkflow Contract Automation', category: 'Enterprise Legal AI Copilot', tags: ['LangGraph', 'Claude 3.5', 'PgVector'], result: 'Reduced contract review time from 4 days to 12 minutes.', size: 'featured', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'Synthetix Autonomous Support Agent', category: '24/7 AI Customer Copilot', tags: ['OpenAI', 'Pinecone', 'Zendesk'], result: '72% of customer queries resolved without human agent touch.', size: 'medium', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'Aura Automated Invoice Reconciliation', category: 'n8n Multi-Hub Accounting Workflow', tags: ['n8n', 'Python', 'Xero API'], result: 'Saved 120 accounting staff hours every single month.', size: 'medium', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'Apollo Inbound Lead Qualifier', category: 'Multi-Agent Enrichment Pipeline', tags: ['FastAPI', 'Clearbit', 'Slack Bot'], result: '+184% Faster sales response time to inbound requests.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Zeowl built an automated invoice and contract processing engine for our procurement team. What used to take three full-time employees all week is now handled automatically in seconds with zero errors.”',
      author: 'Henrik Lindqvist',
      role: 'Chief Operating Officer',
      company: 'Nordic Logistics & Distribution',
      impact: '80+ Staff Hours Reclaimed Every Month',
    },
    faq: [
      { q: 'Is our sensitive company data used to train AI models?', a: 'Never. We deploy enterprise OpenAI, Anthropic, and self-hosted open-source models with strict zero-data retention (ZDR) and no-training agreements.' },
      { q: 'What happens if an AI agent makes a mistake or hallucinates?', a: 'We build multi-agent reflection loops, programmatic JSON schema validation, and human-in-the-loop approval triggers for mission-critical actions.' },
      { q: 'Can your automations integrate with our existing software tools?', a: 'Yes! We integrate with Salesforce, HubSpot, Slack, WhatsApp, Google Workspace, Microsoft 365, Notion, and any platform with an API or webhook.' },
      { q: 'Do we need a technical team to manage the automations?', a: 'No. We provide intuitive self-hosted visual n8n interfaces, clear documentation, and direct ongoing maintenance support.' },
      { q: 'Can you deploy models locally on our private servers?', a: 'Yes. For high-security environments, we deploy open-source models like Llama 3 on private on-premise hardware using Ollama or vLLM.' },
      { q: 'What is the implementation timeline for an AI automation system?', a: 'Single high-impact automations typically launch within 2 to 3 weeks, while comprehensive multi-agent enterprise systems require 4 to 8 weeks.' },
      { q: 'How do you calculate the return on investment (ROI)?', a: 'We audit the exact staff hours currently spent on the repetitive process and show you the exact financial payback period before project kickoff.' },
    ],
    cta: {
      headline: 'READY TO AUTOMATE YOUR BUSINESS PROCESSES?',
      subtext: "Let's discover your highest-cost manual workflows and deploy intelligent autonomous systems that work for you 24/7.",
      floatingTags: ['AI AGENTS', 'n8n', 'LANGGRAPH', 'RAG', 'OPENAI', 'CLAUDE'],
    },
  },

  'branding': {
    slug: 'branding',
    aliases: ['brand-identity'],
    number: '09',
    title: 'Brand Identity & Strategy',
    heroHeadline: {
      line1: 'BUILD ICONIC',
      highlightWord1: 'BRANDS',
      line2: 'THAT DEFINE',
      highlightWord2: 'MARKETS.',
    },
    eyebrow: 'STRATEGIC POSITIONING & VISUAL SYSTEMS',
    breadcrumb: 'HOME / SERVICES / BRANDING',
    heroDescription:
      'Complete brand identity systems that create instant recognition, emotional resonance, and unshakeable customer trust. From brand strategy and positioning to geometric wordmarks, color systems, and packaging.',
    heroFloatingBadges: [
      { text: 'BRAND STRATEGY', icon: 'compass' },
      { text: 'GEOMETRIC MARKS', icon: 'sparkles' },
      { text: 'TYPOGRAPHY SYSTEM', icon: 'type' },
      { text: 'BRAND BOOK', icon: 'book' },
      { text: 'PACKAGING DESIGN', icon: 'package' },
    ],
    heroVisual: {
      type: 'brand-identity-board',
      badge: 'BRAND RECOGNITION // 60+ PAGE GUIDELINES',
      previewTitle: 'Kroma Atelier Visual Identity System',
      codeSnippet: `// Brand Design DNA
const BrandDNA = {
  archetype: "Visionary & Creator",
  voice: "Authoritative, Minimal, Technical",
  colorValues: ["#071D35", "#F58220", "#FFFFFF"],
  ratio: "Golden Ratio 1:1.618"
};`,
      floatingMetric: { value: '100%', label: 'Bespoke Mark' },
      activeUsers: '80+ Global Brand Identities Designed',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "A LOGO IS NOT A BRAND. A BRAND IS THE EMOTIONAL REPUTATION YOU OWN IN THE CUSTOMER'S MIND.",
      highlightWords: ['NOT A BRAND.', 'EMOTIONAL REPUTATION YOU OWN'],
      paragraph:
        'Weak brands compete on price. Dominant brands command premium pricing through cohesive storytelling, unmistakable visual tokens, and unwavering cultural positioning. We build brand foundations designed to endure for decades.',
      principles: [
        { number: '01', title: 'POSITIONING', desc: 'Market reconnaissance to identify your uncontested blue ocean value proposition.' },
        { number: '02', title: 'AESTHETIC', desc: 'Distinctive brand marks, bespoke typographic pairings, and deliberate color systems.' },
        { number: '03', title: 'EXECUTION', desc: 'Rigorous brand governance guidelines ensuring perfect consistency across all channels.' },
      ],
    },
    capabilities: [
      { number: '01', title: 'BRAND STRATEGY & POSITIONING', description: 'Define your core brand archetype, value proposition, competitive differentiation, and target audience persona.', details: ['Competitive Market Analysis', 'Brand Purpose & Values', 'Audience Psychographics', 'Value Proposition Architecture'], image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80' },
      { number: '02', title: 'LOGO DESIGN & BRAND MARKS', description: 'Timeless geometric logos, responsive wordmarks, and secondary insignia crafted using mathematical grid principles.', details: ['Geometric Construction Grids', 'Responsive Responsive Scalability', 'Favicon & App Icon Marks', 'Full Vector Master Formats'], image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80' },
      { number: '03', title: 'TYPOGRAPHY & COLOR SYSTEMS', description: 'Bespoke color palettes with precise print (CMYK/Pantone) and digital (RGB/HEX) values paired with editorial typography scales.', details: ['Primary & Secondary Palettes', 'Accessibility Contrast Testing', 'Type Hierarchy Documentation', 'Custom Web Font Sourcing'], image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80' },
      { number: '04', title: 'EXTENSIVE BRAND GUIDELINES', description: 'Comprehensive 60+ page brand rulebooks that empower your marketing and development teams to execute consistently.', details: ['Clear Space & Sizing Rules', 'Incorrect Usage Examples', 'Tone of Voice Guide', 'Digital Asset Libraries'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80' },
      { number: '05', title: 'PACKAGING & UNBOXING EXPERIENCES', description: 'Tactile luxury packaging, sustainable materials specifications, unboxing moments, and vector dielines.', details: ['Custom Die-Cut Vectors', 'Embossing & Foil Stamping', 'Eco-Friendly Material Specs', '3D Photorealistic Packaging Renders'], image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=80' },
      { number: '06', title: 'CORPORATE COLLATERAL & STATIONERY', description: 'Investor pitch decks, executive business cards, corporate letterheads, and exhibition displays.', details: ['Premium Business Cards', 'Keynote & PowerPoint Decks', 'Company Email Signatures', 'Exhibition Trade Booth Banners'], image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80' },
    ],
    solutions: [
      { number: '01', title: 'Complete Brand Identity Kits', description: 'Everything needed to launch a brand with immediate market authority.', icon: 'award', tags: ['Complete', 'Turnkey', 'Brand Book'] },
      { number: '02', title: 'Brand Modernization & Rebranding', description: 'Revitalize aging corporate brands without alienating loyal existing customers.', icon: 'refresh-cw', tags: ['Rebrand', 'Evolution', 'Modern'] },
      { number: '03', title: 'Sub-Brand & Product Architecture', description: 'Organize complex multi-product brand portfolios under unified naming structures.', icon: 'grid', tags: ['Architecture', 'Sub-Brands', 'Ecosystem'] },
      { number: '04', title: 'Luxury Retail Packaging', description: 'Tactile unboxing experiences that drive unboxing videos and social virality.', icon: 'package', tags: ['Packaging', 'Unboxing', 'Luxury'] },
      { number: '05', title: 'Series A+ Investor Decks', description: 'Visually commanding pitch decks that help founders raise multimillion-dollar rounds.', icon: 'trending-up', tags: ['Fundraising', 'Venture', 'Pitch'] },
      { number: '06', title: 'Internal Brand Culture Books', description: 'Inspire company values and rally employees behind your long-term mission.', icon: 'book', tags: ['Culture', 'Values', 'Onboarding'] },
      { number: '07', title: 'Verbal Identity & Tone of Voice', description: 'Editorial guidelines defining vocabulary, headlines, and copywriting persona.', icon: 'message-square', tags: ['Voice', 'Copy', 'Persona'] },
      { number: '08', title: 'Exhibition & Trade Show Assets', description: 'Large-scale trade show booth graphics and experiential conference displays.', icon: 'monitor', tags: ['Booth', 'Trade Shows', 'Physical'] },
    ],
    process: [
      { step: '01', title: 'INTERVIEWS', desc: 'Stakeholder discovery sessions, founder vision interviews, and customer audience audits.' },
      { step: '02', title: 'RESEARCH', desc: 'Deep competitor visual analysis and positioning matrix to identify blue ocean territory.' },
      { step: '03', title: 'MOODBOARDS', desc: 'Exploration of three distinct aesthetic and typographic worlds for client selection.' },
      { step: '04', title: 'CREATIVE', desc: 'Geometric mark sketching, vector digitization, color exploration, and mockups.' },
      { step: '05', title: 'COLLATERAL', desc: 'Extending the winning identity system to business cards, packaging, and digital UI.' },
      { step: '06', title: 'DOCUMENT', desc: 'Compiling the comprehensive 60+ page brand guidelines book with usage rules.' },
      { step: '07', title: 'DELIVER', desc: 'Organized asset vault delivery with full vector (SVG, EPS, AI), PNG, and web formats.' },
    ],
    technologies: [
      { name: 'Adobe Illustrator', size: 'large', category: 'Vector', badge: 'Core Tool', desc: 'Mathematical vector drafting and typographic mastery.' },
      { name: 'Figma', size: 'large', category: 'Digital System', badge: 'Tokens', desc: 'Component design tokens and digital guideline distribution.' },
      { name: 'Adobe InDesign', size: 'medium', category: 'Editorial', badge: 'Print Specs', desc: 'Multi-page brand book publishing and print production.' },
      { name: 'Photoshop', size: 'medium', category: 'Creative', badge: 'Mockups', desc: 'Photorealistic real-world product mockups.' },
      { name: 'Cinema 4D', size: 'small', category: '3D Render', badge: '3D Studio', desc: 'Three-dimensional luxury packaging renders.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Command premium pricing', desc: 'A world-class brand identity enables businesses to exit commodity price wars and charge significant premium rates.', metric: '42%', metricLabel: 'Average Pricing Power Lift' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Digital-first design tokens', desc: 'Our identities transition seamlessly from physical embossed print to high-DPI smartphone app screens.', metric: '100%', metricLabel: 'Cross-Media Cohesion' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Mathematical precision', desc: 'All logos are drawn using golden ratio proportions and geometric grids for balanced visual weight and scalability.', metric: '100%', metricLabel: 'Custom Vector Geometry' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Lifetime trademark-ready files', desc: 'You receive clean vector master files prepared specifically for trademark and patent registration filings.', metric: '100%', metricLabel: 'IP Ownership Transferred' },
    ],
    selectedWork: [
      { number: '01', title: 'Kroma Sensory Audio Atelier', category: 'Acoustic Brand & Packaging System', tags: ['Identity', 'Packaging', 'Guidelines'], result: 'Winner of Red Dot Communication Design Award.', size: 'featured', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'Aura Private Equity Identity', category: 'Corporate Rebrand & Guidelines', tags: ['Identity', 'Stationery', 'Figma'], result: 'Successfully closed £400M multi-asset flagship fund.', size: 'medium', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'Nexus Direct Consumer Packaging', category: 'Luxury Retail Packaging Suite', tags: ['Dielines', 'Pantone', 'Eco-Print'], result: '+64% Unboxing social share rate across customers.', size: 'medium', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'CogniVentures Global Identity', category: 'AI Venture Capital Branding', tags: ['Brand Mark', 'Pitch Decks', 'Web'], result: 'Ranked in Top 20 Global Deep-Tech Fund Brands.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Zeowl did not just design a logo for us—they defined our entire company personality. Our new brand identity allowed us to approach tier-one enterprise accounts with absolute confidence.”',
      author: 'Maximilian Sterling',
      role: 'Managing Partner',
      company: 'Aura Capital London',
      impact: 'Closed £400M Fund with New Identity',
    },
    faq: [
      { q: 'What is included in a complete branding package?', a: 'You receive brand strategy documentation, primary and secondary logo marks, color systems, typography pairings, social templates, stationery, and an extensive 60+ page brand guidelines book.' },
      { q: 'Can we trademark the logos you create?', a: 'Yes. Every logo mark we create is 100% custom-drawn from scratch without clip art or stock elements, ensuring complete trademark registration viability.' },
      { q: 'How many logo concepts do you present initially?', a: 'We typically present 2 to 3 distinctly different strategic creative directions, complete with real-world application mockups so you can see how each lives in practice.' },
      { q: 'How long does a full branding project take?', a: 'Most comprehensive brand identity projects require 4 to 7 weeks from discovery to final master asset delivery.' },
      { q: 'Do you help with naming our company or product?', a: 'Yes. We offer brand naming sprints that include linguistic screening, domain availability research, and trademark viability checks.' },
      { q: 'Can you help redesign an established brand without losing recognition?', a: 'Yes. We specialize in evolutionary rebranding that preserves recognizable brand equity while shedding outdated visual clutter.' },
      { q: 'What file formats do we receive upon project completion?', a: 'You receive vector files (AI, EPS, SVG, PDF) for professional print alongside web-ready PNG, JPG, and tokenized Figma libraries.' },
    ],
    cta: {
      headline: 'READY TO BUILD AN ICONIC BRAND?',
      subtext: "Let's craft a timeless brand identity that separates you from competitors and commands industry respect.",
      floatingTags: ['BRAND STRATEGY', 'LOGO DESIGN', 'TYPOGRAPHY', 'GUIDELINES', 'PACKAGING'],
    },
  },

  'influencer-marketing': {
    slug: 'influencer-marketing',
    aliases: ['creator-marketing'],
    number: '10',
    title: 'Influencer Marketing & PR',
    heroHeadline: {
      line1: 'CONNECT WITH',
      highlightWord1: 'CREATORS',
      line2: 'THAT DRIVE REAL',
      highlightWord2: 'SALES.',
    },
    eyebrow: 'CREATOR COLLABORATIONS & ADVOCACY',
    breadcrumb: 'HOME / SERVICES / INFLUENCER MARKETING',
    heroDescription:
      'End-to-end influencer marketing campaigns that pair your brand with vetted creators, manage outreach and contracts, and drive scalable social proof, authentic UGC creatives, and measurable revenue growth.',
    heroFloatingBadges: [
      { text: 'VETTED CREATORS', icon: 'users' },
      { text: 'HIGH CONVERSION', icon: 'trending-up' },
      { text: 'UGC AD ASSETS', icon: 'video' },
      { text: 'LEGAL CONTRACTS', icon: 'file-check' },
      { text: 'TRACKED ROI', icon: 'dollar-sign' },
    ],
    heroVisual: {
      type: 'creator-ecosystem',
      badge: 'CREATOR NETWORK // 2,500+ VETTED TALENT',
      previewTitle: 'Influencer Attribution & Roster Hub',
      codeSnippet: `// Influencer ROI & Attribution Pipeline
const CreatorCampaign = {
  partneredCreators: 42,
  blendedEngagement: "7.8%",
  ugcCreativesDelivered: 126,
  directTrackedROAS: "3.8x"
};`,
      floatingMetric: { value: '3.8x', label: 'Campaign ROAS' },
      activeUsers: '2,500+ Verified Creators in Network',
    },
    bigStatement: {
      eyebrow: 'OUR APPROACH',
      headline: "CONSUMERS DO NOT TRUST CORPORATE ADS. THEY TRUST AUTHENTIC VOICES THEY ALREADY FOLLOW.",
      highlightWords: ['DO NOT TRUST CORPORATE ADS.', 'TRUST AUTHENTIC VOICES'],
      paragraph:
        'Throwing gifted products at random influencers produces zero measurable sales. We treat creator partnerships like a scientific performance channel: rigorous audience fraud auditing, binding deliverables contracts, custom affiliate tracking, and whitelisted ad scale.',
      principles: [
        { number: '01', title: 'FRAUD AUDIT', desc: 'Deep forensic vetting of creator follower authenticity, bot ratios, and comment authenticity.' },
        { number: '02', title: 'CREATIVE FREEDOM', desc: 'Structured creative briefs that protect brand messaging while allowing creator authenticity.' },
        { number: '03', title: 'PERFORMANCE RIGHTS', desc: 'Securing paid media whitelisting rights to turn high-performing creator posts into long-term ads.' },
      ],
    },
    capabilities: [
      { number: '01', title: 'CREATOR IDENTIFICATION & AUDITING', description: 'Screening thousands of creators using deep analytical tools to verify audience demographic alignment, bot ratio, and historical engagement.', details: ['Fake Follower Forensic Audits', 'Audience Geo & Age Demographics', 'Brand Safety Compliance Checks', 'Historical Brand Sponsorship Rates'], image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80' },
      { number: '02', title: 'OUTREACH, NEGOTIATION & CONTRACTING', description: 'Handling high-touch relationship management, price negotiation, product gifting, and legally binding performance contracts.', details: ['Tiered Rate Card Negotiations', 'Deliverable Specific Contracts', 'Usage & Whitelisting Rights', 'On-Time Gifting & Product Logistics'], image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80' },
      { number: '03', title: 'CREATIVE BRIEFING & CAMPAIGN DIRECTION', description: 'Equipping creators with structured moodboards, key talking points, FTC compliance guidelines, and hook inspiration.', details: ['Brand Guardrail Briefs', 'FTC Sponsorship Disclosures', 'Unique Angle Suggestions', 'Draft Review & Approvals'], image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80' },
      { number: '04', title: 'UGC PRODUCTION FOR PAID ADS', description: 'Harvesting raw unboxing, testimonial, and demonstration videos from creators to supercharge your paid ad funnels.', details: ['Ad Whitelisting Permissions', 'Raw B-Roll Asset Delivery', 'High-Converting UGC Formats', 'Dark Posting Capabilities'], image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80' },
      { number: '05', title: 'AFFILIATE RAILS & REVENUE TRACKING', description: 'Assigning trackable promo codes, unique vanity URLs, and automated affiliate payout commissions.', details: ['Shopify Affiliate Tracking', 'Custom Promo Code Generators', 'Real-Time Revenue Attribution', 'Performance Commission Tiers'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80' },
      { number: '06', title: 'INFLUENCER PR & PRESS GIFTING SEEDING', description: 'Gifting unboxing experiences sent to elite industry figures, journalists, and creators to spark organic unpaid praise.', details: ['Bespoke Custom PR Mailers', 'VIP Creator Seed Lists', 'Unpaid Organic Share Tracking', 'Long-Term Relationship Care'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80' },
    ],
    solutions: [
      { number: '01', title: 'Product Launch Blitzes', description: 'Coordinated wave of 50+ creators posting simultaneously to dominate feeds.', icon: 'rocket', tags: ['Launch', 'Viral Wave', 'Hype'] },
      { number: '02', title: 'Evergreen Brand Ambassador Programs', description: 'Long-term contracts with recurring creators for consistent monthly visibility.', icon: 'award', tags: ['Ambassadors', 'Recurring', 'Trust'] },
      { number: '03', title: 'Whitelisted UGC Ad Campaigns', description: 'Run paid Meta and TikTok ads directly through creators’ authentic handles.', icon: 'target', tags: ['Whitelisting', 'Paid UGC', 'High ROAS'] },
      { number: '04', title: 'Micro-Influencer Seeding', description: 'High-volume gifting to 10k-50k creators with passionate hyper-niche audiences.', icon: 'users', tags: ['Micro Creators', 'High ROI', 'Niche'] },
      { number: '05', title: 'Event & Experience Activations', description: 'Host creators at VIP dinners, launches, and physical brand experiences.', icon: 'calendar', tags: ['Experiential', 'VIP', 'Content'] },
      { number: '06', title: 'B2B Key Opinion Leader (KOL) Push', description: 'Partner with respected LinkedIn and industry podcasters to reach B2B buyers.', icon: 'briefcase', tags: ['B2B KOLs', 'C-Suite', 'LinkedIn'] },
      { number: '07', title: 'Affiliate Creator Funnels', description: 'Commission-based partnerships that align creator incentives directly with sales.', icon: 'dollar-sign', tags: ['Affiliate', 'Commission', 'Scale'] },
      { number: '08', title: 'PR Gifting Mailers', description: 'Unforgettable custom packaging kits that demand unboxing videos.', icon: 'package', tags: ['PR Mailers', 'Unboxing', 'VIP'] },
    ],
    process: [
      { step: '01', title: 'PROFILE', desc: 'Define your customer persona, target demographic tiers, and campaign conversion goals.' },
      { step: '02', title: 'SCOUT', desc: 'Identify 100+ potential creators and audit their engagement authenticity and bot count.' },
      { step: '03', title: 'OUTREACH', desc: 'Conduct personalized negotiation, secure rate approvals, and sign usage contracts.' },
      { step: '04', title: 'SHIP', desc: 'Coordinate product fulfillment, tracking shipments, and delivery verification.' },
      { step: '05', title: 'REVIEW', desc: 'Review creator draft videos and copy against brand safety and FTC guidelines.' },
      { step: '06', title: 'AMPLIFY', desc: 'Creators go live with tracking links while we scale top performers with paid ads.' },
      { step: '07', title: 'REPORT', desc: 'Deliver comprehensive revenue attribution, engagement analysis, and UGC assets.' },
    ],
    technologies: [
      { name: 'Modash & Upfluence', size: 'large', category: 'Discovery', badge: 'Vetting Engine', desc: 'Forensic audience verification and follower fraud detection.' },
      { name: 'Shopify Collabs', size: 'medium', category: 'Attribution', badge: 'E-Commerce', desc: 'Direct affiliate tracking, promo codes, and automated commission payout.' },
      { name: 'Meta Whitelisting', size: 'large', category: 'Paid UGC', badge: 'Ad Booster', desc: 'Running dark-post ads directly through creator profile handles.' },
      { name: 'Meltwater & Brand24', size: 'medium', category: 'Listening', badge: 'PR Tracking', desc: 'Tracking organic brand mentions and hashtag reach.' },
      { name: 'DocuSign Enterprise', size: 'small', category: 'Legal', badge: 'Contracting', desc: 'Automated legal execution of usage and exclusivity rights.' },
    ],
    whyChooseUs: [
      { number: '01', title: 'BUSINESS FOCUSED', subtitle: 'Tracked revenue, not just likes', desc: 'We integrate with Shopify and Google Analytics so every dollar spent on creators maps to tracked customer orders.', metric: '3.8x', metricLabel: 'Average Creator ROAS' },
      { number: '02', title: 'MODERN TECHNOLOGY', subtitle: 'Paid whitelisting amplification', desc: 'We take the top 10% best-performing creator videos and scale them as paid ads through the creator’s own profile.', metric: '+140%', metricLabel: 'Higher Click-Through vs Standard Ads' },
      { number: '03', title: 'PERFORMANCE FIRST', subtitle: 'Zero bot followers', desc: 'Our rigorous vetting rejects creators with fake followers, engagement pods, or inactive audiences.', metric: '100%', metricLabel: 'Audience Authenticity Verified' },
      { number: '04', title: 'LONG-TERM SUPPORT', subtitle: 'Full creative licensing', desc: 'All creator UGC content includes full digital marketing usage rights for your website and future ad campaigns.', metric: '100%', metricLabel: 'Perpetual Ad Rights' },
    ],
    selectedWork: [
      { number: '01', title: 'Lumina Paris Creator Launch Wave', category: 'Luxury Apparel Influencer Campaign', tags: ['50 Creators', 'UGC', 'Whitelisting'], result: '$480k in direct tracked launch week revenue at 4.2x ROAS.', size: 'featured', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80' },
      { number: '02', title: 'PulseFit Biometric Ambassador Pod', category: 'Fitness Athlete Ambassador Program', tags: ['HealthKit', 'Ambassadors', 'Reels'], result: 'Generated 64,000 app installs with $2.40 blended CPI.', size: 'medium', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80' },
      { number: '03', title: 'Nexus DTC Creator Whitelisting', category: 'Paid Social Creator Ads', tags: ['TikTok', 'Meta', 'Dark Posts'], result: '-38% Customer acquisition cost compared to static ad sets.', size: 'medium', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80' },
      { number: '04', title: 'Aura VIP Fintech Founder Seeding', category: 'B2B Key Opinion Leader Summit', tags: ['LinkedIn KOLs', 'VIP Dinners'], result: 'Reached 480,000+ senior finance leaders with zero ad spend.', size: 'horizontal', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80' },
    ],
    testimonial: {
      quote: '“Zeowl coordinated 45 high-caliber creators for our brand launch. The content was stunning, the legal contracts were airtight, and the whitelisted ads drove our strongest revenue week in company history.”',
      author: 'Camille Leroux',
      role: 'Global Marketing Director',
      company: 'Lumina Paris Atelier',
      impact: '$480k Tracked Launch Week Revenue',
    },
    faq: [
      { q: 'How do you choose which creators are right for our brand?', a: 'We analyze your target customer demographics, then audit creators’ audience age, gender, geographic location, and historical sponsored post engagement rates.' },
      { q: 'Do you handle the legal contracts and licensing rights?', a: 'Yes. We provide comprehensive legal contracts that secure full digital ad whitelisting rights, usage permissions, and FTC compliance.' },
      { q: 'What size creators do you work with (nano, micro, macro, celebrity)?', a: 'We work across all tiers, but find that micro (10k-50k) and mid-tier (50k-250k) creators typically produce the highest conversion and engagement ROI.' },
      { q: 'Can we approve the creators before you contact them?', a: 'Yes. You receive a curated spreadsheet containing audited profiles, follower metrics, proposed rates, and past content examples for sign-off.' },
      { q: 'How is return on investment (ROI) measured?', a: 'We track unique creator affiliate discount codes, custom UTM links, and server-side pixel conversions to measure exact sales revenue.' },
      { q: 'Do you handle sending products to the creators?', a: 'Yes. We manage shipping addresses, tracking numbers, and fulfillment logistics to ensure products arrive safely and on schedule.' },
      { q: 'What is whitelisting / creator licensing?', a: 'Whitelisting allows us to run paid ads directly from the creator’s authentic Instagram or TikTok account, boosting click-through rates by up to 140%.' },
    ],
    cta: {
      headline: 'READY TO SCALE WITH CREATOR ADVOCACY?',
      subtext: "Let's build a trusted network of influential creators that drives viral word-of-mouth and predictable e-commerce revenue.",
      floatingTags: ['CREATORS', 'UGC', 'WHITELISTING', 'TIKTOK', 'INSTAGRAM', 'ROAS'],
    },
  },
};

// Showcase & Hero Configurations for all 10 Services matching custom design mockup
export const SERVICES_SHOWCASE_CONFIG = {
  'web-development': {
    heroBg: '/services/web-development-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / WEB DEVELOPMENT',
    eyebrow: '— WEB DEVELOPMENT SERVICES —',
    heroHeadlineClean: {
      line1: 'Websites Built to',
      line2: 'Move Your Business',
      highlightWord: 'Forward',
    },
    heroDescription:
      'We design and develop modern, high-performance websites that look stunning, work flawlessly, and help your business grow in the digital world.',
    stats: [
      { value: '100+', label: 'Successful Web Projects', icon: 'rocket' },
      { value: '50+', label: 'Happy Clients', icon: 'users' },
      { value: '100%', label: 'Focus on Quality & Performance', icon: 'shield' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Build',
      subtitle:
        'From business websites to complex web applications, we create tailored solutions that match your goals and deliver real results.',
      cards: [
        {
          number: '01',
          title: 'Business Websites',
          desc: 'Professional, responsive websites that build credibility and help you attract more customers.',
          icon: 'monitor',
          link: '#contact',
        },
        {
          number: '02',
          title: 'E-commerce Platforms',
          desc: 'Scalable and secure online stores with seamless shopping experiences and powerful features.',
          icon: 'shopping-cart',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Custom Web Applications',
          desc: 'Tailored web applications to automate processes, solve unique challenges, and scale your business.',
          icon: 'settings',
          link: '#contact',
        },
      ],
    },
  },
  'app-development': {
    heroBg: '/services/app-development-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / APP DEVELOPMENT',
    eyebrow: '— APP DEVELOPMENT SERVICES —',
    heroHeadlineClean: {
      line1: 'Mobile Apps Built to',
      line2: 'Engage and Scale Your',
      highlightWord: 'Audience',
    },
    heroDescription:
      'We engineer intuitive, high-velocity iOS and Android applications with native performance, offline resilience, and world-class mobile user experience.',
    stats: [
      { value: '75+', label: 'Mobile Apps Launched', icon: 'rocket' },
      { value: '4.9★', label: 'Average App Store Rating', icon: 'star' },
      { value: '99.9%', label: 'Crash-Free Session Rate', icon: 'shield' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Engineer',
      subtitle:
        'From consumer mobile apps to mission-critical field operations tools, we deliver mobile experiences that users love and depend on.',
      cards: [
        {
          number: '01',
          title: 'Cross-Platform Mobile Apps',
          desc: 'Flutter and React Native applications delivering 60fps native performance across iOS and Android from a unified codebase.',
          icon: 'smartphone',
          link: '#contact',
        },
        {
          number: '02',
          title: 'On-Demand & Consumer Apps',
          desc: 'Rich features with GPS live tracking, instant push notifications, digital wallets, and seamless multi-step checkouts.',
          icon: 'shopping-bag',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Enterprise Mobility Solutions',
          desc: 'Secure mobile field applications connected to corporate ERP backends, biometric security, and offline data sync.',
          icon: 'layers',
          link: '#contact',
        },
      ],
    },
  },
  'graphic-design': {
    heroBg: '/services/graphic-design-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / UI/UX & GRAPHIC DESIGN',
    eyebrow: '— UI/UX & GRAPHIC DESIGN SERVICES —',
    heroHeadlineClean: {
      line1: 'Designs Crafted to',
      line2: 'Captivate Your Target',
      highlightWord: 'Audience',
    },
    heroDescription:
      'Transform your brand presence with avant-garde visual systems, pixel-perfect UI/UX interfaces, and high-impact design assets crafted to capture attention.',
    stats: [
      { value: '250+', label: 'UI/UX Screens Designed', icon: 'palette' },
      { value: '98%', label: 'Client Satisfaction Score', icon: 'smile' },
      { value: '3.4x', label: 'Average Conversion Uplift', icon: 'trending-up' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Design',
      subtitle:
        'From intuitive user experiences to commanding brand identities, we engineer visual design systems that turn visitors into loyal customers.',
      cards: [
        {
          number: '01',
          title: 'UI/UX Product Design',
          desc: 'Intuitive user journeys, interactive wireframes, and high-fidelity prototypes that maximize user engagement.',
          icon: 'layout',
          link: '#contact',
        },
        {
          number: '02',
          title: 'Design Systems & Tokens',
          desc: 'Comprehensive Figma component architectures with typography, color tokens, and seamless developer handoff.',
          icon: 'component',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Visual Assets & Graphics',
          desc: 'Eye-catching digital creatives, custom 3D vectors, marketing banners, and high-prestige typography layouts.',
          icon: 'palette',
          link: '#contact',
        },
      ],
    },
  },
  'ai-automation': {
    heroBg: '/services/ai-automation-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / AI AUTOMATION',
    eyebrow: '— AI AUTOMATION SERVICES —',
    heroHeadlineClean: {
      line1: 'Workflows Built to',
      line2: 'Automate Tasks and Multiply',
      highlightWord: 'Productivity',
    },
    heroDescription:
      'We design and deploy autonomous AI agents, multi-step n8n workflows, and custom LLM copilots that eliminate manual busywork and multiply team throughput.',
    stats: [
      { value: '120k+', label: 'Hours Saved via Automation', icon: 'clock' },
      { value: '40+', label: 'Autonomous Agents Deployed', icon: 'cpu' },
      { value: '99.8%', label: 'Operational Accuracy Rate', icon: 'shield' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Automate',
      subtitle:
        'From invoice processing to self-improving sales copilots, we build intelligent automation pipelines that run 24/7 without fatigue.',
      cards: [
        {
          number: '01',
          title: 'Autonomous AI Agents',
          desc: 'Self-orchestrating agents that monitor inboxes, qualify leads, extract unstructured data, and update databases.',
          icon: 'bot',
          link: '#contact',
        },
        {
          number: '02',
          title: 'n8n & Workflow Integrations',
          desc: 'Custom multi-system connectors linking your CRM, spreadsheets, payment rails, and communication channels seamlessly.',
          icon: 'workflow',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Enterprise RAG Knowledge Hubs',
          desc: 'Secure AI assistants grounded in your private company documentation, customer tickets, and knowledge bases.',
          icon: 'sparkles',
          link: '#contact',
        },
      ],
    },
  },
  'digital-marketing': {
    heroBg: '/services/digital-marketing-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / DIGITAL MARKETING',
    eyebrow: '— DIGITAL MARKETING SERVICES —',
    heroHeadlineClean: {
      line1: 'Campaigns Built to',
      line2: 'Accelerate Measurable',
      highlightWord: 'Growth',
    },
    heroDescription:
      'Data-driven marketing strategies designed to increase organic visibility, lower customer acquisition costs (CAC), and generate high-intent commercial leads.',
    stats: [
      { value: '$12M+', label: 'Tracked Client Revenue', icon: 'dollar-sign' },
      { value: '4.8x', label: 'Average ROAS Delivered', icon: 'trending-up' },
      { value: '150+', label: 'Top 3 Google Search Positions', icon: 'award' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Scale',
      subtitle:
        'From search engine dominance to high-converting paid media campaigns, we engineer marketing engines that consistently drive pipeline.',
      cards: [
        {
          number: '01',
          title: 'Search Engine Optimization',
          desc: 'Enterprise technical SEO, topic cluster strategy, and authoritative backlink acquisition that capture high-intent search traffic.',
          icon: 'search',
          link: '#contact',
        },
        {
          number: '02',
          title: 'Paid Media (Google & Meta)',
          desc: 'Hyper-targeted ad campaigns with disciplined budget allocation, deep A/B creative testing, and multi-touch attribution.',
          icon: 'target',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Conversion Rate Optimization',
          desc: 'Systematic conversion funnel auditing, heatmap analytics, and landing page engineering that maximize revenue per visit.',
          icon: 'bar-chart',
          link: '#contact',
        },
      ],
    },
  },
  'software-development': {
    heroBg: '/services/software-development-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / SOFTWARE DEVELOPMENT',
    eyebrow: '— SOFTWARE DEVELOPMENT SERVICES —',
    heroHeadlineClean: {
      line1: 'Software Built to',
      line2: 'Solve Your Hardest',
      highlightWord: 'Challenges',
    },
    heroDescription:
      'We engineer fault-tolerant enterprise software, distributed cloud systems, and mission-critical applications built for speed, security, and high availability.',
    stats: [
      { value: '80+', label: 'Enterprise Systems Built', icon: 'server' },
      { value: '99.99%', label: 'Guaranteed Production SLA', icon: 'shield' },
      { value: '25M+', label: 'Daily API Calls Handled', icon: 'cpu' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Architect',
      subtitle:
        'From internal operations platforms to multi-tenant cloud ecosystems, we build software that drives long-term competitive advantage.',
      cards: [
        {
          number: '01',
          title: 'Enterprise ERPs & Portals',
          desc: 'Bespoke operational backbones that automate workflows, eliminate spreadsheets, and synchronize global teams.',
          icon: 'database',
          link: '#contact',
        },
        {
          number: '02',
          title: 'Cloud-Native SaaS Platforms',
          desc: 'Scalable multi-tenant architectures featuring subscription billing, role security, and real-time telemetry.',
          icon: 'cloud',
          link: '#contact',
        },
        {
          number: '03',
          title: 'High-Throughput APIs & Services',
          desc: 'Microservices and event-driven data pipelines engineered for sub-20ms latency and high transactional volumes.',
          icon: 'code',
          link: '#contact',
        },
      ],
    },
  },
  'social-media-marketing': {
    heroBg: '/services/social-media-marketing-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / SOCIAL MEDIA MARKETING',
    eyebrow: '— SOCIAL MEDIA MARKETING SERVICES —',
    heroHeadlineClean: {
      line1: 'Content Built to',
      line2: 'Build Community and Spark',
      highlightWord: 'Virality',
    },
    heroDescription:
      'We craft viral short-form video content, curate cohesive visual feeds, and build engaged social communities across Instagram, TikTok, LinkedIn, and YouTube.',
    stats: [
      { value: '15M+', label: 'Organic Video Views Generated', icon: 'eye' },
      { value: '250k+', label: 'Followers Gained for Clients', icon: 'users' },
      { value: '8.4%', label: 'Average Engagement Rate', icon: 'heart' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Create',
      subtitle:
        'From viral short-form reels to executive LinkedIn thought leadership, we turn social channels into dynamic customer conversion funnels.',
      cards: [
        {
          number: '01',
          title: 'Viral Reels & TikToks',
          desc: 'High-retention short-form video concepts scripted with irresistible hooks, dynamic subtitles, and trending audio.',
          icon: 'video',
          link: '#contact',
        },
        {
          number: '02',
          title: 'Brand Feed & Carousel Curation',
          desc: 'Striking brand aesthetics, educational carousel slides, and storytelling layouts that build undeniable authority.',
          icon: 'grid',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Executive Thought Leadership',
          desc: 'Strategic B2B LinkedIn publishing and personal branding that positions founders and executives as trusted industry leaders.',
          icon: 'award',
          link: '#contact',
        },
      ],
    },
  },
  'video-editing': {
    heroBg: '/services/video-editing-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / VIDEO EDITING',
    eyebrow: '— VIDEO EDITING SERVICES —',
    heroHeadlineClean: {
      line1: 'Cinematic Visuals Built to',
      line2: 'Stop the Scroll and Command',
      highlightWord: 'Attention',
    },
    heroDescription:
      'We produce studio-grade video edits, kinetic typography animations, Hollywood color grading, and immersive sound design that turn ordinary footage into captivating stories.',
    stats: [
      { value: '1,200+', label: 'Videos Edited & Delivered', icon: 'film' },
      { value: '99.4%', label: 'Client Approval Rate', icon: 'check-circle' },
      { value: '24-48h', label: 'Fast Turnaround Window', icon: 'clock' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Produce',
      subtitle:
        'From high-converting direct-response ads to cinematic brand films, we ensure every cut, sound effect, and frame drives emotion and action.',
      cards: [
        {
          number: '01',
          title: 'Direct-Response Ad Creatives',
          desc: 'Fast-paced, pattern-interrupting video ads engineered specifically to maximize click-throughs and lower CPA.',
          icon: 'play',
          link: '#contact',
        },
        {
          number: '02',
          title: 'Brand Anthems & Commercials',
          desc: 'Cinematic corporate documentaries, product announcement films, and high-prestige executive profiles.',
          icon: 'clapperboard',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Motion Graphics & 3D VFX',
          desc: 'Seamless kinetic typography, animated infographics, 3D logo reveals, and custom UI screencast animations.',
          icon: 'sparkles',
          link: '#contact',
        },
      ],
    },
  },
  'branding': {
    heroBg: '/services/branding-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / BRANDING',
    eyebrow: '— BRANDING & IDENTITY SERVICES —',
    heroHeadlineClean: {
      line1: 'Brand Identities Built to',
      line2: 'Stand Out and Inspire Deep',
      highlightWord: 'Loyalty',
    },
    heroDescription:
      'We create iconic logos, cohesive design languages, positioning strategies, and comprehensive brand guideline books that command premium market value.',
    stats: [
      { value: '120+', label: 'Brand Systems Built', icon: 'award' },
      { value: '100%', label: 'Original Trademark-Ready Marks', icon: 'shield' },
      { value: '15+', label: 'Design Awards Won', icon: 'star' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Craft',
      subtitle:
        'From foundational brand positioning to tactile packaging, we build timeless identities that inspire pride and command market leadership.',
      cards: [
        {
          number: '01',
          title: 'Logo Design & Visual Marks',
          desc: 'Iconic, memorable logo emblems crafted with mathematical precision to scale across any medium effortlessly.',
          icon: 'pen-tool',
          link: '#contact',
        },
        {
          number: '02',
          title: 'Comprehensive Brand Guidelines',
          desc: 'Exhaustive brand manuals documenting color theories, typographic scales, iconography rules, and tone of voice.',
          icon: 'book-open',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Packaging & Brand Collateral',
          desc: 'Bespoke packaging design, premium stationery, investor slide decks, and physical brand touchpoints.',
          icon: 'package',
          link: '#contact',
        },
      ],
    },
  },
  'influencer-marketing': {
    heroBg: '/services/influencer-marketing-hero-bg.jpg',
    breadcrumb: 'HOME / SERVICES / INFLUENCER MARKETING',
    eyebrow: '— INFLUENCER MARKETING SERVICES —',
    heroHeadlineClean: {
      line1: 'Creator Campaigns Built to',
      line2: 'Drive Authentic Demand and',
      highlightWord: 'Sales',
    },
    heroDescription:
      'We identify, vet, negotiate, and orchestrate high-performing creator partnerships and UGC ad campaigns that deliver measurable brand awareness and immediate purchases.',
    stats: [
      { value: '450+', label: 'Audited Creators in Network', icon: 'users' },
      { value: '$8.5M+', label: 'Attributed Creator Sales', icon: 'dollar-sign' },
      { value: '4.2x', label: 'Average Campaign ROI', icon: 'trending-up' },
    ],
    expertise: {
      eyebrow: '— OUR EXPERTISE —',
      title: 'What We',
      highlightWord: 'Deliver',
      subtitle:
        'From viral TikTok product seeding to whitelisted creator ad funnels, we connect your brand with voices that customers genuinely trust.',
      cards: [
        {
          number: '01',
          title: 'Vetted Creator Partnerships',
          desc: 'Data-backed creator scouting with bot and engagement fraud audits to ensure maximum authentic reach and brand alignment.',
          icon: 'user-check',
          link: '#contact',
        },
        {
          number: '02',
          title: 'UGC Content for Paid Ads',
          desc: 'High-converting organic-style video creatives scripted and filmed by creators for usage across Meta and TikTok paid ads.',
          icon: 'video',
          link: '#contact',
        },
        {
          number: '03',
          title: 'Whitelisted Ad Scaling',
          desc: 'Running paid ad campaigns directly through creator social handles to supercharge social proof and lower acquisition costs.',
          icon: 'target',
          link: '#contact',
        },
      ],
    },
  },
};

// Merge showcase config into SERVICES_DETAIL_DATA
Object.keys(SERVICES_SHOWCASE_CONFIG).forEach((key) => {
  if (SERVICES_DETAIL_DATA[key]) {
    Object.assign(SERVICES_DETAIL_DATA[key], SERVICES_SHOWCASE_CONFIG[key]);
  }
});

// Sequential Service Order for Previous / Next Navigation
export const SERVICE_ORDER = [
  'web-development',
  'graphic-design',
  'software-development',
  'digital-marketing',
  'app-development',
  'social-media-marketing',
  'video-editing',
  'ai-automation',
  'branding',
  'influencer-marketing',
];

// Helper to resolve alias
export function getServiceBySlug(rawSlug) {
  if (!rawSlug) return null;
  const normalized = rawSlug.toLowerCase().trim();

  // Direct match
  if (SERVICES_DETAIL_DATA[normalized]) {
    return SERVICES_DETAIL_DATA[normalized];
  }

  // Alias lookup (e.g. ui-ux-design -> graphic-design)
  for (const key of Object.keys(SERVICES_DETAIL_DATA)) {
    const s = SERVICES_DETAIL_DATA[key];
    if (s.aliases && s.aliases.includes(normalized)) {
      return s;
    }
  }

  return null;
}

// Helper to get previous and next service navigation
export function getServiceNavigation(currentSlug) {
  const service = getServiceBySlug(currentSlug);
  if (!service) return { prev: null, next: null };

  const currentIndex = SERVICE_ORDER.indexOf(service.slug);
  if (currentIndex === -1) return { prev: null, next: null };

  const prevIndex = (currentIndex - 1 + SERVICE_ORDER.length) % SERVICE_ORDER.length;
  const nextIndex = (currentIndex + 1) % SERVICE_ORDER.length;

  return {
    prev: SERVICES_DETAIL_DATA[SERVICE_ORDER[prevIndex]],
    next: SERVICES_DETAIL_DATA[SERVICE_ORDER[nextIndex]],
  };
}
