import { NextResponse } from 'next/server';

export async function GET(request) {
  const backendUrl = process.env.BACKEND_API_URL || 'http://127.0.0.1:8000/api';
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const targetUrl = new URL(`${backendUrl}/portfolio`);
    if (category) targetUrl.searchParams.set('category', category);

    const res = await fetch(targetUrl.toString(), {
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
