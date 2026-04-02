type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const store = new Map<string, RateLimitEntry>();

export function assertRateLimit(key: string) {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || entry.expiresAt < now) {
    store.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return;
  }

  if (entry.count >= MAX_REQUESTS) {
    throw new Error("Too many requests. Please try again shortly.");
  }

  entry.count += 1;
  store.set(key, entry);
}
