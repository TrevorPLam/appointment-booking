// rateLimit.ts — In-memory rate limiter with TODO:PROD hook for shared store.

const buckets = new Map<string, { count: number; expiresAt: number }>();

export const rateLimit = (key: string, limit: number, windowMs: number) => {
  const now = Date.now();
  const existing = buckets.get(key);

  if (existing && existing.expiresAt > now) {
    if (existing.count >= limit) {
      return { success: false, remainingMs: existing.expiresAt - now };
    }

    existing.count += 1;
    buckets.set(key, existing);
    return { success: true, remainingMs: existing.expiresAt - now };
  }

  buckets.set(key, { count: 1, expiresAt: now + windowMs });
  return { success: true, remainingMs: windowMs };
};

// TODO:PROD Replace with Redis/Upstash or another durable store for horizontal scaling.
