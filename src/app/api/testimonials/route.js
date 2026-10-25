import { NextResponse } from 'next/server';

const fallbackTestimonials = [
  {
    id: 1,
    name: 'Alexander Hayes',
    client_name: 'Alexander Hayes',
    role: 'CTO',
    client_role: 'CTO',
    company: 'FinVibe Technologies',
    content:
      'Zeowl engineered our core transaction processing engine from scratch. Their mastery of high-throughput architecture, sub-second query tuning, and flawless UI delivery helped us onboard 150k active users without a glitch.',
    review:
      'Zeowl engineered our core transaction processing engine from scratch. Their mastery of high-throughput architecture, sub-second query tuning, and flawless UI delivery helped us onboard 150k active users without a glitch.',
    rating: 5,
    avatar: '/testimonials/alexander.jpg',
    project_name: 'FinVibe SaaS Platform',
    pdf: '/testimonials/zeowl-testimonials.pdf',
  },
  {
    id: 2,
    name: 'Dr. Elena Rostova',
    client_name: 'Dr. Elena Rostova',
    role: 'Founder & Chief Medical Officer',
    client_role: 'Founder & Chief Medical Officer',
    company: 'Nova Health Corp',
    content:
      'The mobile telehealth application built by Zeowl has transformed our patient care delivery. Fluid 60fps video, rock-solid HIPAA encryption, and intuitive design that our elderly patients find effortless to navigate.',
    review:
      'The mobile telehealth application built by Zeowl has transformed our patient care delivery. Fluid 60fps video, rock-solid HIPAA encryption, and intuitive design that our elderly patients find effortless to navigate.',
    rating: 5,
    avatar: '/testimonials/elena.jpg',
    project_name: 'Nova Health Telemedicine App',
    pdf: '/testimonials/zeowl-testimonials.pdf',
  },
  {
    id: 3,
    name: 'Marcus Vance',
    client_name: 'Marcus Vance',
    role: 'VP of Engineering',
    client_role: 'VP of Engineering',
    company: 'AutomateIQ Solutions',
    content:
      'Zeowl’s AI team delivered an autonomous document extraction pipeline that reduced our weekly processing overhead by over 1,200 hours. Their deterministic guardrails eliminated hallucinations completely.',
    review:
      'Zeowl’s AI team delivered an autonomous document extraction pipeline that reduced our weekly processing overhead by over 1,200 hours. Their deterministic guardrails eliminated hallucinations completely.',
    rating: 5,
    avatar: '/testimonials/marcus.jpg',
    project_name: 'AutomateIQ Multi-Agent Engine',
    pdf: '/testimonials/zeowl-testimonials.pdf',
  },
  {
    id: 4,
    name: 'Jay Patel',
    client_name: 'Jay Patel',
    role: 'Founder',
    client_role: 'Founder',
    company: 'Patel Construction Group',
    content:
      'Zeowl Infotech delivered our enterprise web platform with exceptional quality and strictly on time. Their engineering team is proactive, highly responsive, and brought immediate value to our business operations.',
    review:
      'Zeowl Infotech delivered our enterprise web platform with exceptional quality and strictly on time. Their engineering team is proactive, highly responsive, and brought immediate value to our business operations.',
    rating: 5,
    avatar: '/testimonials/avatar-jay.jpg',
    project_name: 'Enterprise Construction Portal',
    pdf: '/testimonials/zeowl-testimonials.pdf',
  },
  {
    id: 5,
    name: 'Priya Shah',
    client_name: 'Priya Shah',
    role: 'Managing Director',
    client_role: 'Managing Director',
    company: 'Meridian Estates',
    content:
      'Working with Zeowl was an outstanding experience. They engineered an intuitive, ultra-fast client portal that streamlined our property transactions and elevated our digital brand prestige.',
    review:
      'Working with Zeowl was an outstanding experience. They engineered an intuitive, ultra-fast client portal that streamlined our property transactions and elevated our digital brand prestige.',
    rating: 5,
    avatar: '/testimonials/avatar-priya.jpg',
    project_name: 'Meridian Real Estate CRM',
    pdf: '/testimonials/zeowl-testimonials.pdf',
  },
  {
    id: 6,
    name: 'Karan Desai',
    client_name: 'Karan Desai',
    role: 'Chief Executive Officer',
    client_role: 'Chief Executive Officer',
    company: 'Digital Creators Hub',
    content:
      'Exceptional communication, creative architectural direction, and immaculate attention to detail. Zeowl Infotech is an indispensable technology partner for any high-growth scale-up.',
    review:
      'Exceptional communication, creative architectural direction, and immaculate attention to detail. Zeowl Infotech is an indispensable technology partner for any high-growth scale-up.',
    rating: 5,
    avatar: '/testimonials/avatar-karan.jpg',
    project_name: 'Creator SaaS Platform',
    pdf: '/testimonials/zeowl-testimonials.pdf',
  },
];

export async function GET() {
  const backendUrl = process.env.BACKEND_API_URL || 'http://127.0.0.1:8080/api';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const res = await fetch(`${backendUrl}/testimonials`, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    // If backend is unreachable or times out, fallback to pre-seeded static data smoothly
  }

  return NextResponse.json({
    success: true,
    count: fallbackTestimonials.length,
    data: fallbackTestimonials,
    fallback: true,
  });
}
