export const servicesData = [
  {
    id: '01',
    number: '01',
    slug: 'web-development',
    title: 'Web Development',
    eyebrow: 'DIGITAL ENGINEERING',
    shortDesc: 'Modern, responsive and high-performing websites built to convert visitors into customers.',
    fullDesc: 'We engineer high-speed, enterprise-grade web applications and bespoke digital platforms. Using modern architecture with Next.js, React, and headless content systems, we build websites that load in milliseconds, scale effortlessly, and turn traffic into recurring revenue.',
    cardType: 'featured', // large featured card
    theme: 'navy',
    accentColor: '#F47B20',
    tags: ['Next.js', 'React', 'Full-Stack', 'E-Commerce', 'Performance'],
    image: '/images for services/01_web-development-removebg-preview.png',
    metrics: { stat: '0.4s', label: 'Median LCP Load Time' },
    deliverables: [
      'Custom Corporate & Brand Platforms',
      'Headless E-Commerce Architectures',
      'Progressive Web Applications (PWA)',
      'Enterprise API Integration & CMS',
      'Ultra-Fast SEO & Core Web Vitals Optimization',
      'Serverless & Microservices Infrastructure'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    process: [
      { step: '01', title: 'Architecture Blueprint', desc: 'Defining data schemas, UX wireframes, and technology stack.' },
      { step: '02', title: 'Agile Engineering', desc: 'Building modular UI components with atomic design and strict typing.' },
      { step: '03', title: 'Performance Hardening', desc: 'Optimizing bundle size, caching headers, and responsive layouts.' },
      { step: '04', title: 'CI/CD Deployment', desc: 'Automated testing and edge deployment with continuous uptime monitoring.' }
    ],
    faqs: [
      { q: 'Which tech stack do you recommend for high-traffic websites?', a: 'We primarily architect on Next.js, React, and TypeScript with edge runtime deployments. This provides lightning-fast server-side rendering, incredible SEO, and boundless scalability.' },
      { q: 'Do you build custom CMS integrations?', a: 'Yes, we integrate modern headless CMS solutions like Sanity, Strapi, and Contentful, or build tailored admin dashboards for your internal teams.' }
    ]
  },
  {
    id: '02',
    number: '02',
    slug: 'ui-ux-design',
    title: 'UI/UX & Graphic Design',
    eyebrow: 'EXPERIENCE DESIGN',
    shortDesc: 'Creative digital experiences and visual systems that make your brand memorable.',
    fullDesc: 'We translate complex user flows into intuitive, visually breathtaking digital products. From deep user research and interactive design systems in Figma to micro-interactions and brand design, we ensure every touchpoint creates genuine emotional resonance.',
    cardType: 'white',
    theme: 'white',
    accentColor: '#F47B20',
    tags: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Visual Identity'],
    image: '/images for services/03_ui-ux-design-removebg-preview.png',
    metrics: { stat: '+185%', label: 'Avg User Engagement' },
    deliverables: [
      'End-to-End Product & UI/UX Design',
      'Comprehensive Design Systems & Tokens',
      'Interactive High-Fidelity Prototypes',
      'User Journey Mapping & Information Architecture',
      'Usability Audits & Conversion Optimization',
      'Marketing & Digital Graphic Assets'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'Spline 3D', 'Lottie', 'Storybook'],
    process: [
      { step: '01', title: 'User Discovery', desc: 'Interviewing stakeholders and mapping pain points across customer journeys.' },
      { step: '02', title: 'Wireframing & IA', desc: 'Structuring low-fidelity layouts to validate logic before visual polish.' },
      { step: '03', title: 'Visual Craft & Systems', desc: 'Developing component libraries, color palettes, and typography tokens.' },
      { step: '04', title: 'Interactive Hand-off', desc: 'Delivering pixel-perfect assets, motion specs, and developer documentation.' }
    ],
    faqs: [
      { q: 'Do you create scalable design systems?', a: 'Absolutely. We establish tokenized Figma libraries with auto-layout, interactive variants, and clear documentation that sync directly with frontend code.' },
      { q: 'Can you redesign our existing mobile or web app?', a: 'Yes. We conduct heuristic evaluations, identify UX drop-off friction, and reimagine the user interface while preserving familiar workflows.' }
    ]
  },
  {
    id: '03',
    number: '03',
    slug: 'software-development',
    title: 'Software Development',
    eyebrow: 'CUSTOM ARCHITECTURE',
    shortDesc: 'Custom software solutions designed to streamline operations and solve complex business problems.',
    fullDesc: 'We engineer bespoke enterprise software, internal tools, ERPs, and cloud-native SaaS platforms that eliminate manual operational bottlenecks. Built for security, concurrency, and high transaction volumes.',
    cardType: 'navy',
    theme: 'navy',
    accentColor: '#F47B20',
    tags: ['Enterprise SaaS', 'Cloud-Native', 'APIs', 'Microservices', 'Database Systems'],
    image: '/images for services/06_custom-software-removebg-preview.png',
    metrics: { stat: '99.99%', label: 'System Reliability' },
    deliverables: [
      'Custom ERP, CRM & Business Portals',
      'Multi-Tenant SaaS Product Engineering',
      'High-Throughput RESTful & GraphQL APIs',
      'Legacy System Modernization & Migration',
      'Database Modeling & Query Optimization',
      'Role-Based Access Control & Security Audits'
    ],
    technologies: ['Node.js', 'Python', 'Go', 'Docker', 'PostgreSQL', 'Redis', 'AWS'],
    process: [
      { step: '01', title: 'System Blueprint', desc: 'Defining relational schemas, event-driven pipelines, and cloud topology.' },
      { step: '02', title: 'Core Engineering', desc: 'Developing modular domain services with robust unit and integration tests.' },
      { step: '03', title: 'Load & Security Testing', desc: 'Simulating peak traffic, penetration testing, and compliance verification.' },
      { step: '04', title: 'DevOps & Launch', desc: 'Deploying with automated failovers, zero-downtime migrations, and APM.' }
    ],
    faqs: [
      { q: 'Can you integrate with our existing ERP/CRM legacy data?', a: 'Yes, we specialize in building secure middleware connectors and two-way synchronization pipelines for legacy on-prem or cloud software.' },
      { q: 'How do you handle IP ownership and security?', a: 'All source code, repositories, and intellectual property belong 100% to you under signed NDA and enterprise governance.' }
    ]
  },
  {
    id: '04',
    number: '04',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    eyebrow: 'GROWTH & REVENUE',
    shortDesc: 'Data-driven marketing strategies designed to increase visibility, leads and business growth.',
    fullDesc: 'We build full-funnel digital marketing engines that convert cold attention into qualified pipeline. Combining organic technical SEO, precision performance ads, conversion rate optimization, and analytics intelligence.',
    cardType: 'split',
    theme: 'white',
    accentColor: '#F47B20',
    tags: ['SEO', 'Google Ads', 'Meta Ads', 'Funnel CRO', 'Growth Analytics'],
    image: '/images for services/05_digital-marketing-removebg-preview.png',
    metrics: { stat: '4.2x', label: 'Average Client ROAS' },
    deliverables: [
      'High-Impact PPC Advertising (Google, Meta, LinkedIn)',
      'Enterprise Technical & Content SEO',
      'Funnel Architecture & Landing Page CRO',
      'Marketing Automation & Email Lead Nurturing',
      'Attribution Modeling & Custom GA4 Dashboards',
      'Competitor Intelligence & Market Positioning'
    ],
    technologies: ['Google Analytics 4', 'Search Console', 'Meta Ads Manager', 'Semrush', 'HubSpot', 'Mixpanel'],
    process: [
      { step: '01', title: 'Funnel Audit', desc: 'Analyzing traffic quality, conversion bottlenecks, and competitor keyword gaps.' },
      { step: '02', title: 'Campaign Strategy', desc: 'Structuring ad account matrices, creative hooks, and negative keyword lists.' },
      { step: '03', title: 'Rapid Creative Testing', desc: 'Deploying multivariate copy and design variants to discover winning hooks.' },
      { step: '04', title: 'Scale & Attribution', desc: 'Reallocating budget to highest ROAS segments while sustaining blended CAC.' }
    ],
    faqs: [
      { q: 'How soon can we expect results from digital marketing?', a: 'Paid media campaigns start driving qualified clicks and conversions within 48-72 hours. SEO builds momentum over 60-90 days into sustainable organic compounding.' },
      { q: 'Do you provide transparent reporting?', a: 'Yes. You receive real-time access to live dashboards tracking cost per lead, CAC, ROAS, and pipeline revenue.' }
    ]
  },
  {
    id: '05',
    number: '05',
    slug: 'app-development',
    title: 'App Development',
    eyebrow: 'MOBILE PLATFORMS',
    shortDesc: 'Scalable Android and iOS applications with intuitive user experiences.',
    fullDesc: 'From native Swift and Kotlin applications to cross-platform React Native and Flutter builds, we create mobile experiences that users love. Smooth 60fps animations, offline-first sync, and rock-solid backend integration.',
    cardType: 'navy',
    theme: 'navy',
    accentColor: '#F47B20',
    tags: ['iOS', 'Android', 'React Native', 'Flutter', 'Offline-First'],
    image: '/images for services/02_mobile-apps-removebg-preview.png',
    metrics: { stat: '4.9★', label: 'Average App Store Rating' },
    deliverables: [
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Cross-Platform React Native & Flutter Apps',
      'Offline-First Data Synchronization & SQLite',
      'Push Notifications & Deep Linking Frameworks',
      'Apple App Store & Google Play Launch Management',
      'Biometric Security & Mobile Payment Gateways'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux Toolkit'],
    process: [
      { step: '01', title: 'Mobile UX Blueprint', desc: 'Crafting touch-optimized patterns, gestural navigation, and screen flows.' },
      { step: '02', title: 'Hybrid/Native Build', desc: 'Writing clean, testable code with modular state management and API clients.' },
      { step: '03', title: 'Device Lab Testing', desc: 'Testing across 40+ hardware profiles for battery, latency, and layout quirks.' },
      { step: '04', title: 'Store Deployment', desc: 'Guiding through Apple App Review and Google Play guidelines for fast approval.' }
    ],
    faqs: [
      { q: 'Should we build cross-platform or native?', a: 'For 90% of business applications, cross-platform frameworks like React Native or Flutter provide identical native feel with 40% faster time-to-market. We advise based on your device hardware needs.' },
      { q: 'Do you assist with App Store approvals?', a: 'Yes, we manage the entire submission, certificates, privacy disclosures, and compliance checklist.' }
    ]
  },
  {
    id: '06',
    number: '06',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    eyebrow: 'COMMUNITY & VIRALITY',
    shortDesc: 'Strategic social media campaigns that build audience, engagement and brand awareness.',
    fullDesc: 'We turn passive social feeds into thriving community hubs and customer acquisition engines. We combine thumb-stopping creative reels, cultural trend forecasting, and executive thought leadership.',
    cardType: 'white',
    theme: 'white',
    accentColor: '#F47B20',
    tags: ['Instagram', 'LinkedIn', 'Content Creation', 'Reels & Shorts', 'Community'],
    image: '/images for services/06_social-media-marketing.jpg',
    metrics: { stat: '10M+', label: 'Organic Impressions Generated' },
    deliverables: [
      'Omnichannel Content Calendar & Strategy',
      'Short-Form Video Production (Reels, TikTok, Shorts)',
      'Executive Brand & LinkedIn Thought Leadership',
      'Active Community Moderation & Engagement',
      'Social Listening & Trend Capitalization',
      'Influencer Collaboration & Co-Marketing'
    ],
    technologies: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'CapCut', 'Canva Pro', 'Sprout Social'],
    process: [
      { step: '01', title: 'Brand Tone Matrix', desc: 'Defining brand archetype, visual pillars, and audience persona playbooks.' },
      { step: '02', title: 'Content Engine', desc: 'Producing monthly content batches with viral hooks and high-retention formats.' },
      { step: '03', title: 'Daily Distribution', desc: 'Optimizing post times, hashtag ecosystems, and real-time community replies.' },
      { step: '04', title: 'Engagement Analytics', desc: 'Synthesizing watch time, shareability, and conversion attribution data.' }
    ],
    faqs: [
      { q: 'Which platforms will you manage for our business?', a: 'We tailor the platform mix to where your customers actually buy: LinkedIn & X for B2B, Instagram & YouTube Shorts for D2C/consumer.' },
      { q: 'Do you create original video and graphics?', a: 'Yes, our in-house creative team scripts, edits, and produces all visual and motion assets.' }
    ]
  },
  {
    id: '07',
    number: '07',
    slug: 'video-editing',
    title: 'Video Editing',
    eyebrow: 'CINEMATIC STORYTELLING',
    shortDesc: 'Professional visual storytelling for brands, products, social media and campaigns.',
    fullDesc: 'We produce high-impact video assets that captivate audiences within the first 3 seconds. From 3D motion graphics and SaaS product walkthroughs to cinematic brand films and social advertisements.',
    cardType: 'image-based',
    theme: 'navy',
    accentColor: '#F47B20',
    tags: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    image: '/images for services/07_video-editing.jpg',
    metrics: { stat: '82%', label: 'Higher Hook Retention' },
    deliverables: [
      'Commercial Brand Films & Pitch Videos',
      'SaaS Product Walkthroughs & 3D UI Animations',
      'High-Conversion Paid Ad Video Creatives',
      'Social Video Retainers (Reels, Shorts, TikTok)',
      'Advanced Color Grading & Audio Mastering',
      'Dynamic Subtitles & Motion Typography'
    ],
    technologies: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Blender', 'Logic Pro'],
    process: [
      { step: '01', title: 'Script & Storyboard', desc: 'Outlining pacing, camera angles, sound cues, and call-to-action beats.' },
      { step: '02', title: 'Rough Cut & Pacing', desc: 'Curating the sharpest takes and establishing energetic narrative momentum.' },
      { step: '03', title: 'Motion & Sound Design', desc: 'Layering custom SFX, animated titles, cinematic transitions, and LUT grading.' },
      { step: '04', title: 'Multi-Format Render', desc: 'Exporting optimized aspect ratios for 16:9, 9:16, and 1:1 platforms.' }
    ],
    faqs: [
      { q: 'Can you edit footage we shot ourselves?', a: 'Yes! We frequently take raw smartphone or camera footage, elevate the color, clean up background noise, and add high-end motion graphics.' },
      { q: 'How fast is your turnaround for video retainers?', a: 'Standard turnaround for short-form edits is 48-72 hours, with express options for fast-moving campaigns.' }
    ]
  },
  {
    id: '08',
    number: '08',
    slug: 'ai-automation',
    title: 'AI Automation',
    eyebrow: 'INTELLIGENT SYSTEMS',
    shortDesc: 'Intelligent automation solutions that reduce repetitive work, improve efficiency and save time.',
    fullDesc: 'We build custom AI agents, LLM pipelines, autonomous workflows, and intelligent document processors. By eliminating manual data entry and routine triage, we save your team hundreds of hours each month.',
    cardType: 'featured',
    theme: 'navy',
    accentColor: '#F47B20',
    tags: ['OpenAI', 'LangChain', 'n8n', 'Autonomous Agents', 'Workflow Pipelines'],
    image: '/images for services/04_ai-automation-removebg-preview.png',
    metrics: { stat: '65%', label: 'Repetitive Labor Eliminated' },
    deliverables: [
      'Custom LLM Agents & Autonomous Chat Assistants',
      'End-to-End Workflow Automation with n8n / Zapier',
      'Automated Document & Invoice Parsing Systems',
      'CRM & Sales Pipeline AI Enrichment',
      'Customer Support AI Tier-1 Resolution Bots',
      'Vector Search & RAG Knowledge Bases'
    ],
    technologies: ['OpenAI GPT-4o', 'LangChain', 'LangGraph', 'n8n', 'Python', 'Pinecone', 'Make'],
    process: [
      { step: '01', title: 'Process Mining', desc: 'Identifying highest-friction, repetitive manual tasks within your business.' },
      { step: '02', title: 'AI Pipeline Architecture', desc: 'Designing prompts, fallback guardrails, and data transformation nodes.' },
      { step: '03', title: 'Integration & Testing', desc: 'Connecting agents securely to your Slack, CRM, database, and email APIs.' },
      { step: '04', title: 'Autonomous Deployment', desc: 'Monitoring execution logs, hallucination prevention, and latency.' }
    ],
    faqs: [
      { q: 'Is our proprietary business data kept safe with AI?', a: 'Yes. We use enterprise zero-data-retention APIs and on-premise vector embeddings where your internal information is never used for model training.' },
      { q: 'What workflows can you automate?', a: 'Everything from customer onboarding, invoice matching, lead qualification, and reporting to multi-step data enrichment across 10+ software tools.' }
    ]
  },
  {
    id: '09',
    number: '09',
    slug: 'branding',
    title: 'Branding',
    eyebrow: 'IDENTITY & POSITIONING',
    shortDesc: 'Complete brand identity systems that create consistency, recognition and trust.',
    fullDesc: 'We forge distinct, unforgettable brand identities that command market authority. From brand positioning and naming to logo design, typography systems, iconography, and exhaustive brand guidelines.',
    cardType: 'split',
    theme: 'white',
    accentColor: '#F47B20',
    tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Typography', 'Tone of Voice'],
    image: '/images for services/09_branding.jpg',
    metrics: { stat: '100%', label: 'Trademark Ready' },
    deliverables: [
      'Strategic Brand Positioning & Messaging Architecture',
      'Logo Suite (Primary, Secondary, Monogram, Favicon)',
      'Custom Typography & Color Harmony Schemes',
      'Comprehensive Brand Guidelines Book (PDF & Digital)',
      'Stationery, Packaging & Corporate Collateral',
      'Digital Brand Kit for Social & Web Platforms'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'InDesign', 'FontLab'],
    process: [
      { step: '01', title: 'Archetype Strategy', desc: 'Uncovering your unique market position, competitors, and emotional core.' },
      { step: '02', title: 'Concept Exploration', desc: 'Developing 3 distinct visual directions with logo marks and mood boards.' },
      { step: '03', title: 'Identity Refinement', desc: 'Perfecting geometry, kerning, print-to-screen color profiles, and variants.' },
      { step: '04', title: 'Brand Book Delivery', desc: 'Publishing exhaustive usage rules for spacing, dos & donts, and file kits.' }
    ],
    faqs: [
      { q: 'What files do we receive with our brand package?', a: 'You receive vector sources (.AI, .EPS, .SVG), high-res PNG/JPGs for web and print, font licenses, and a comprehensive brand guide.' },
      { q: 'Can you refresh an established brand without losing recognition?', a: 'Yes! We specialize in modern brand evolutions that modernize your appearance while preserving valuable brand equity.' }
    ]
  },
  {
    id: '10',
    number: '10',
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    eyebrow: 'ADVOCACY & REACH',
    shortDesc: 'Influencer campaigns designed to connect brands with relevant audiences.',
    fullDesc: 'We design high-ROI creator partnerships that build genuine social proof and drive verifiable conversions. From hyper-targeted micro-influencer seeding to tier-1 celebrity brand ambassadorships.',
    cardType: 'white',
    theme: 'white',
    accentColor: '#F47B20',
    tags: ['Creator Matchmaking', 'Contracting', 'Campaign Management', 'UGC', 'ROI Tracking'],
    image: '/images for services/10_influencer-marketing.jpg',
    metrics: { stat: '3.6x', label: 'Average Earned Media Value' },
    deliverables: [
      'Data-Backed Creator Discovery & Audience Vetting',
      'End-to-End Contract & Usage Rights Negotiation',
      'Creative Briefing & Campaign Narrative Guidance',
      'UGC (User-Generated Content) Library Generation',
      'Custom UTM & Promo Code Conversion Attribution',
      'Full Campaign Compliance & Disclosure Governance'
    ],
    technologies: ['Modash', 'Upfluence', 'Grin', 'Meta Creator Studio', 'Google Sheets'],
    process: [
      { step: '01', title: 'Creator Discovery', desc: 'Vetting audience authenticity, engagement rates, and demographic fit.' },
      { step: '02', title: 'Outreach & Contracting', desc: 'Securing deliverable terms, exclusivity windows, and paid ad usage rights.' },
      { step: '03', title: 'Content Review', desc: 'Coordinating draft reviews, brand safety checks, and publishing timing.' },
      { step: '04', title: 'Performance Attribution', desc: 'Measuring impressions, CTR, conversion lift, and creator repurposing ROI.' }
    ],
    faqs: [
      { q: 'Do you work with micro-influencers or macro-influencers?', a: 'We strategize both. Micro-influencers (10k-100k) often achieve 3x higher engagement for niche products, while macro-influencers generate mass brand awareness.' },
      { q: 'Can we run paid ads using creator content (whitelisting)?', a: 'Yes! We negotiate dark posting and Spark Ads rights so you can scale winning creator creative directly through your ad accounts.' }
    ]
  }
];

export const featuredServicesData = [
  {
    id: 'feat-1',
    category: 'WEB & SOFTWARE',
    tagline: 'Build digital products that work.',
    description: 'We architect enterprise web platforms, custom SaaS applications, and high-performance digital systems engineered for ultra-fast speed, high concurrency, and unmatched reliability.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    metrics: { value: '99.99%', label: 'Uptime Reliability' },
    link: '/services/web-development',
    visualType: 'code-interface',
    theme: 'dark'
  },
  {
    id: 'feat-2',
    category: 'AI & AUTOMATION',
    tagline: 'Automate repetitive work. Accelerate growth.',
    description: 'Deploy custom intelligent agents, LLM pipelines, and automated business workflows that reduce operational overhead by up to 65% while keeping human teams focused on high-leverage decisions.',
    tags: ['OpenAI', 'LangChain', 'n8n', 'Python', 'Vector DB', 'Autonomous Agents'],
    metrics: { value: '65%', label: 'Operational Cost Reduction' },
    link: '/services/ai-automation',
    visualType: 'ai-matrix',
    theme: 'navy'
  },
  {
    id: 'feat-3',
    category: 'DESIGN & MARKETING',
    tagline: 'Turn attention into meaningful engagement.',
    description: 'Merge human-centered UI/UX design with data-driven performance marketing to construct conversion funnels that transform curious visitors into devoted, lifetime customers.',
    tags: ['Figma', 'UI/UX', 'SEO', 'Performance Ads', 'CRO', 'Branding'],
    metrics: { value: '4.2x', label: 'Average Growth Multiplier' },
    link: '/services/ui-ux-design',
    visualType: 'design-analytics',
    theme: 'orange'
  }
];

export const technologyCategories = [
  {
    category: 'FRONTEND',
    description: 'Modern, reactive and accessible client interfaces',
    technologies: [
      { name: 'React', badge: 'v19', desc: 'Component architecture with server components', icon: 'react' },
      { name: 'Next.js', badge: 'v16', desc: 'Hybrid SSR, SSG, edge runtime framework', icon: 'nextjs' },
      { name: 'TypeScript', badge: 'v5', desc: 'Type-safe enterprise architecture', icon: 'typescript' },
      { name: 'Tailwind CSS', badge: 'v4', desc: 'High-performance utility-first styling', icon: 'tailwind' },
      { name: 'HTML5', badge: 'W3C', desc: 'Semantic, SEO-friendly DOM structure', icon: 'html5' },
      { name: 'CSS3', badge: 'Modern', desc: 'Advanced animations & fluid layouts', icon: 'css3' }
    ]
  },
  {
    category: 'BACKEND',
    description: 'Secure, high-concurrency API and service layers',
    technologies: [
      { name: 'Node.js', badge: 'v22 LTS', desc: 'Event-driven, asynchronous JavaScript runtime', icon: 'nodejs' },
      { name: 'Python', badge: 'v3.12', desc: 'Data processing, microservices & AI logic', icon: 'python' },
      { name: 'PHP', badge: 'v8.3', desc: 'Robust server-side scripting language', icon: 'php' },
      { name: 'Laravel', badge: 'v11', desc: 'Elegant MVC framework for rapid APIs', icon: 'laravel' },
      { name: 'REST APIs', badge: 'REST / OpenAPI', desc: 'Standards-compliant modular endpoints', icon: 'api' }
    ]
  },
  {
    category: 'DATABASE',
    description: 'Acid-compliant, resilient and distributed data storage',
    technologies: [
      { name: 'MySQL', badge: 'RDBMS', desc: 'Proven relational relational database', icon: 'mysql' },
      { name: 'PostgreSQL', badge: 'Enterprise', desc: 'Extensible SQL engine with JSONB & pgvector', icon: 'postgresql' },
      { name: 'MongoDB', badge: 'NoSQL', desc: 'Flexible document store for rapid iteration', icon: 'mongodb' }
    ]
  },
  {
    category: 'AI & AUTOMATION',
    description: 'Autonomous workflows and intelligence orchestration',
    technologies: [
      { name: 'OpenAI', badge: 'GPT-4o', desc: 'Multimodal generative intelligence models', icon: 'openai' },
      { name: 'Python', badge: 'AI Core', desc: 'Data science & machine learning pipelines', icon: 'python' },
      { name: 'LangChain', badge: 'Framework', desc: 'Context-aware LLM application framework', icon: 'langchain' },
      { name: 'LangGraph', badge: 'Multi-Agent', desc: 'Cyclic stateful multi-agent workflows', icon: 'langgraph' },
      { name: 'n8n', badge: 'Self-Hosted', desc: 'Fair-code workflow automation nodes', icon: 'n8n' }
    ]
  },
  {
    category: 'DESIGN',
    description: 'Visual systems, prototypes and creative storytelling',
    technologies: [
      { name: 'Figma', badge: 'Standard', desc: 'Collaborative UI/UX & design tokens', icon: 'figma' },
      { name: 'Adobe Photoshop', badge: 'Creative', desc: 'Raster editing & digital photo manipulation', icon: 'photoshop' },
      { name: 'Adobe Illustrator', badge: 'Vector', desc: 'Precision vector brand identity design', icon: 'illustrator' },
      { name: 'After Effects', badge: 'Motion', desc: 'Cinematic visual effects & motion graphics', icon: 'aftereffects' }
    ]
  },
  {
    category: 'ANIMATION',
    description: 'Smooth 60fps micro-interactions and scroll experiences',
    technologies: [
      { name: 'GSAP', badge: 'v3.15', desc: 'GreenSock professional-grade animation', icon: 'gsap' },
      { name: 'ScrollTrigger', badge: 'GSAP Plugin', desc: 'Scroll-driven interactive choreography', icon: 'scrolltrigger' },
      { name: 'Lenis', badge: 'v1.3', desc: 'Silky smooth momentum scrolling engine', icon: 'lenis' },
      { name: 'SplitType', badge: 'Text Motion', desc: 'Dynamic line, word and character splitting', icon: 'splittype' }
    ]
  },
  {
    category: 'DEPLOYMENT',
    description: 'Containerized CI/CD, version control and cloud hosting',
    technologies: [
      { name: 'Docker', badge: 'Containers', desc: 'Reproducible isolated microenvironments', icon: 'docker' },
      { name: 'Git', badge: 'VCS', desc: 'Distributed branch management', icon: 'git' },
      { name: 'GitHub', badge: 'CI/CD Actions', desc: 'Automated test pipelines & collaboration', icon: 'github' },
      { name: 'Cloud Platforms', badge: 'Edge / AWS', desc: 'Global CDN distribution & serverless scale', icon: 'cloud' }
    ]
  }
];

export const whyChooseData = [
  {
    number: '01',
    title: 'Business-Focused Solutions',
    tagline: 'Engineering That Solves Real P&L Problems',
    description: 'We do not build technology for the sake of technology. Every line of code, design system, and marketing campaign is directly mapped to your revenue, efficiency, and customer acquisition metrics.'
  },
  {
    number: '02',
    title: 'Modern Technology',
    tagline: 'Modern, High-Performance Stack',
    description: 'We reject bloated legacy systems. Our architectures utilize modern Next.js, TypeScript, cloud-native APIs, and AI integrations that stay lightning-fast and relevant for years to come.'
  },
  {
    number: '03',
    title: 'Transparent Process',
    tagline: 'Zero Guesswork, Weekly Cadence',
    description: 'No black boxes. You get complete transparency through shared boards, staging previews, continuous sprint demos, and direct Slack/Discord channels with senior engineers.'
  },
  {
    number: '04',
    title: 'Long-Term Support',
    tagline: 'Committed Partners In Growth',
    description: 'Our engagement does not terminate at deployment. We stand by your product with proactive security updates, performance monitoring, scaling advisory, and feature evolutions.'
  }
];

export const processTimelineData = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Deep Dive & Objectives',
    description: 'We dissect your business model, target users, market competitors, and technical constraints to uncover the highest-leverage opportunity.'
  },
  {
    step: '02',
    title: 'Strategy',
    tagline: 'Architectural Blueprint',
    description: 'We construct a concrete roadmap covering system design, UI wireframes, security boundaries, and conversion funnel strategies.'
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'Interactive Experience',
    description: 'We build high-fidelity interactive prototypes and design systems that establish emotional resonance and effortless user paths.'
  },
  {
    step: '04',
    title: 'Build',
    tagline: 'Agile Engineering & QA',
    description: 'Our senior engineers write clean, typed, modular code with rigorous unit testing, cross-device QA, and performance benchmarks.'
  },
  {
    step: '05',
    title: 'Launch & Grow',
    tagline: 'Deployment & Continuous Optimization',
    description: 'We execute zero-downtime deployment, set up real-time observability telemetry, and continuously optimize for compounding growth.'
  }
];

export const industriesData = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant patient portals, telehealth scheduling engines, and automated clinical practice workflows.',
    tag: 'Life Sciences & MedTech',
    stat: '100% HIPAA Ready'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Interactive learning management platforms, virtual classrooms, and gamified student assessment tools.',
    tag: 'EdTech & Training',
    stat: '50k+ Active Learners'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'High-converting property listing engines, 3D virtual tour integrations, and automated lead capture funnels.',
    tag: 'PropTech & Brokerages',
    stat: '+220% Inbound Inquiries'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Ultra-secure fintech portals, automated invoice reconciliation, and real-time portfolio dashboards.',
    tag: 'Fintech & Wealth',
    stat: 'Bank-Grade Encryption'
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    description: 'Headless storefronts with sub-second checkout speeds, dynamic inventory sync, and personalized recommendations.',
    tag: 'Retail & D2C Brands',
    stat: '3.8x Conversion Rate'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Supply-chain tracking portals, IoT equipment monitoring, and automated B2B quote-generation platforms.',
    tag: 'Industrial & Logistics',
    stat: '45% Faster Order Cycles'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Direct booking engines, guest loyalty apps, and automated multi-channel reservation management.',
    tag: 'Hotels & Tourism',
    stat: 'Zero OTA Commissions'
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Developer documentation portals, high-throughput SaaS architectures, and API ecosystem dashboards.',
    tag: 'B2B Software & Cloud',
    stat: 'Sub-50ms Latency'
  },
  {
    id: 'startups',
    name: 'Startups',
    description: 'Rapid MVP launches, pitch-ready interactive prototypes, and growth engineering to secure venture funding.',
    tag: 'Seed to Series B',
    stat: '$12M+ Raised By Clients'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Executive authority platforms, client onboarding portals, and automated contract generation systems.',
    tag: 'Legal, Consulting & Audit',
    stat: '80 hrs/mo Saved'
  }
];

export const caseStudiesData = [
  {
    id: 'cs-1',
    title: 'Aura Cloud ERP & Automation Suite',
    industry: 'Enterprise SaaS',
    service: 'Software Development & AI Automation',
    result: 'Reduced manual processing time by 74% across 18 regional distribution hubs.',
    metric: '74% Faster Ops',
    image: '/portfolio/mockup-software-dev.jpg',
    tags: ['Custom ERP', 'AI OCR', 'PostgreSQL', 'Next.js']
  },
  {
    id: 'cs-2',
    title: 'Nexus Commerce Direct-to-Consumer',
    industry: 'Retail & E-commerce',
    service: 'Web Development & UI/UX Design',
    result: 'Elevated mobile checkout conversions by 138% with headless sub-second storefront.',
    metric: '+138% Mobile Conversion',
    image: '/portfolio/mockup-web-dev.jpg',
    tags: ['Headless Shopify', 'Next.js App Router', 'Tailwind', 'Stripe']
  },
  {
    id: 'cs-3',
    title: 'Verve Health Patient Care Platform',
    industry: 'Healthcare & Telehealth',
    service: 'App Development & Digital Marketing',
    result: 'Scaled to 120,000 active monthly patients with 4.9★ rating on iOS & Android.',
    metric: '120k Active Patients',
    image: '/portfolio/mockup-mobile-app.jpg',
    tags: ['React Native', 'HIPAA Cloud', 'WebRTC Telehealth']
  }
];
