import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-yui-horizontal.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "About" },
  { to: "/ordering", label: "Ordering" },
  // { to: "/gallery", label: "Gallery" }, // hidden for now
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        open
          ? "bg-transparent"
          : solid
            ? "bg-background/75 backdrop-blur-xl border-b border-border/40"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex items-center" aria-label="YUI — yuiliving.ca">
          <img
            src={logoHorizontal}
            alt="YUI — curated for slow living"
            className={`h-14 w-auto md:h-20 transition-all ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-[11px] uppercase tracking-editorial transition-colors ${
                  solid ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 h-px w-6 -translate-x-1/2 bg-current" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/yui.living"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={`transition-colors ${
              solid ? "text-foreground/70 hover:text-foreground" : "text-white/90 hover:text-white"
            }`}
          >
            <Instagram className="h-4 w-4" strokeWidth={1.25} />
          </a>
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden ${solid ? "text-foreground" : "text-white"}`}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] h-dvh w-dvw overflow-y-auto bg-transparent backdrop-blur-2xl md:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <img src={logoHorizontal} alt="YUI" className="h-14 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-foreground">
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-16">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-serif text-3xl tracking-wide text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/yui.living"
              target="_blank"
              rel="noreferrer"
              className="mt-8 text-[11px] uppercase tracking-editorial text-muted-foreground"
            >
              @yui.living
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}