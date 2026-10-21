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
  },
];

export async function GET() {
  const backendUrl = process.env.BACKEND_API_URL || 'http://127.0.0.1:8000/api';

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
