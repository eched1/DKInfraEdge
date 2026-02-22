/**
 * Simple in-memory rate limiter for serverless.
 *
 * Trade-off: This resets on cold start. For production at scale, use
 * Upstash Redis or Vercel KV. This is good enough for low-traffic
 * contact forms and prevents basic abuse.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 per minute per IP

export function rateLimit(ip: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(ip);

  // Clean expired entries periodically
  if (store.size > 10000) {
    for (const [key, val] of store) {
      if (val.resetAt < now) store.delete(key);
    }
  }

  if (!entry || entry.resetAt < now) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  entry.count++;
  return { success: true, remaining: MAX_REQUESTS - entry.count };
}
