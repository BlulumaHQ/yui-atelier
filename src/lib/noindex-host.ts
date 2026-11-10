// Platform hostnames that must stay reachable but never be indexed.
// Custom domains are never matched, so they remain index-eligible.
const NOINDEX_SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export function isNoindexHost(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/\.$/, "");
  return NOINDEX_SUFFIXES.some((s) => h.endsWith(s));
}

export function applyHostNoindex(request: Request, response: Response): Response {
  let host: string;
  try {
    host = new URL(request.url).hostname;
  } catch {
    return response;
  }
  if (!isNoindexHost(host)) return response;
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
