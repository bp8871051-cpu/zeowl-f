export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Submit contact inquiry to Laravel backend
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
 * Fetch services from Laravel backend
 */
export async function fetchServices() {
  try {
    const res = await fetch(`${API_BASE_URL}/services`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    return json.data;
  } catch (e) {
    console.warn('Backend services API unreachable, falling back to static data');
    return null;
  }
}

/**
 * Fetch portfolio projects from Laravel backend
 */
export async function fetchPortfolio(category = null) {
  try {
    const url = new URL(`${API_BASE_URL}/portfolio`);
    if (category && category !== 'All Projects') {
      url.searchParams.append('category', category);
    }
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    return json.data;
  } catch (e) {
    console.warn('Backend portfolio API unreachable, falling back to static data');
    return null;
  }
}

/**
 * Fetch testimonials from Laravel backend
 */
export async function fetchTestimonials() {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    return json.data;
  } catch (e) {
    console.warn('Backend testimonials API unreachable, falling back to static data');
    return null;
  }
}

/**
 * Fetch blog articles from Laravel backend
 */
export async function fetchBlogs() {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    return json.data;
  } catch (e) {
    console.warn('Backend blogs API unreachable, falling back to static data');
    return null;
  }
}

/**
 * Fetch dynamic website settings from Laravel backend
 */
export async function fetchSettings() {
  try {
    const res = await fetch(`${API_BASE_URL}/settings`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('API error');
    const json = await res.json();
    return json.data;
  } catch (e) {
    console.warn('Backend settings API unreachable, falling back to static data');
    return null;
  }
}


