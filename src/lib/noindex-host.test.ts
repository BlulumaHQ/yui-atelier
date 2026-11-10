import { describe, it, expect } from "vitest";
import { isNoindexHost, applyHostNoindex } from "./noindex-host";

describe("host noindex policy", () => {
  it("noindexes platform hosts", () => {
    for (const h of ["yui-atelier.lovable.app", "id-preview--x.lovable.app", "a.workers.dev", "a.pages.dev", "a.netlify.app"]) expect(isNoindexHost(h)).toBe(true);
  });
  it("keeps custom domains indexable", () => {
    for (const h of ["yuiliving.ca", "www.example.com", "lovable.app.example.com"]) expect(isNoindexHost(h)).toBe(false);
  });
  it("adds header only to HTML on platform hosts", () => {
    const html = () => new Response("<html>", { headers: { "content-type": "text/html; charset=utf-8" } });
    expect(applyHostNoindex(new Request("https://x.lovable.app/about"), html()).headers.get("x-robots-tag")).toBe("noindex");
    expect(applyHostNoindex(new Request("https://yuiliving.ca/about"), html()).headers.get("x-robots-tag")).toBeNull();
    const xml = new Response("<x/>", { headers: { "content-type": "application/xml" } });
    expect(applyHostNoindex(new Request("https://x.lovable.app/sitemap.xml"), xml).headers.get("x-robots-tag")).toBeNull();
  });
});
