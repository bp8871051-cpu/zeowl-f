import { NextResponse } from 'next/server';

export async function GET() {
  const backendUrl = process.env.BACKEND_API_URL || 'http://127.0.0.1:8000/api';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const res = await fetch(`${backendUrl}/blogs`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (error) {}

  return NextResponse.json({
    success: true,
    data: [],
    fallback: true,
  });
}
