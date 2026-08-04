/**
 * HTTP client for hub-hosted AS1I apps.
 * BASE_URL (/{slug}/) + /api/v1 matches FastAPI routers and auth-proxy.
 */
const API_BASE = `${import.meta.env.BASE_URL}api/v1`.replace(/\/{2,}/g, "/");

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const response = await fetch(`${API_BASE}${normalized}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      detail
        ? `API ${response.status}: ${detail}`
        : `API ${response.status}: ${response.statusText}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}
