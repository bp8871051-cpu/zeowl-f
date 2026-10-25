import { NextResponse } from 'next/server';

export async function POST(request) {
  const backendUrl = process.env.BACKEND_API_URL || 'http://127.0.0.1:8080/api';

  try {
    const body = await request.json();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`${backendUrl}/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        status: 'success',
        message: 'Thank you for subscribing to Zeowl Infotech newsletter!',
        fallback: true,
      },
      { status: 200 }
    );
  }
}
