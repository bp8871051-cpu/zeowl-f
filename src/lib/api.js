export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined' ? '/api' : 'http://127.0.0.1:8000/api');

/**
 * Submit contact inquiry to backend
 */
export async function submitContact(data) {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit inquiry');
  }

  return result;
}

/**
 * Subscribe email to newsletter
 */
export async function subscribeNewsletter(email) {
  const response = await fetch(`${API_BASE_URL}/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to subscribe');
  }

  return result;
}

/**
 * Fetch services from backend
 */
export async function fetchServices() {
  try {
    const res = await fetch(`${API_BASE_URL}/services`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (e) {
    return null;
  }
}

/**
 * Fetch portfolio projects from backend
 */
export async function fetchPortfolio(category = null) {
  try {
    const url = new URL(
      `${API_BASE_URL}/portfolio`,
      typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
    );
    if (category && category !== 'All Projects') {
      url.searchParams.append('category', category);
    }
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (e) {
    return null;
  }
}

/**
 * Fetch testimonials from backend
 */
export async function fetchTestimonials() {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (e) {
    return null;
  }
}

/**
 * Fetch blog articles from backend
 */
export async function fetchBlogs() {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (e) {
    return null;
  }
}

/**
 * Fetch dynamic website settings from backend
 */
export async function fetchSettings() {
  try {
    const res = await fetch(`${API_BASE_URL}/settings`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (e) {
    return null;
  }
}
