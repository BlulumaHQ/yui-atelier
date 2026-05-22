import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import heart from "@/assets/hero-heart.webp";
import strawberry from "@/assets/hero-strawberry.webp";
import ocean from "@/assets/hero-ocean.webp";
import cherry from "@/assets/hero-cherry.webp";

type Slide = {
  image: string;
  eyebrow?: string;
  badge?: string;
  headline: string;
  subheadline?: string;
  description: string;
  cta: { label: string; to: "/collection" | "/ordering" };
  align?: "left" | "center";
  tone?: "light" | "dark";
};

const slides: Slide[] = [
  {
    image: heart,
    eyebrow: "Pâtisserie Studio",
    headline: "YUI",
    subheadline: "Boutique Dessert Studio",
    description:
      "Crafted for quiet moments, beautiful gatherings, and seasonal celebrations.",
    cta: { label: "Explore Collection", to: "/collection" },
    align: "center",
    tone: "dark",
  },
  {
    image: strawberry,
    eyebrow: "Spring · 春",
    headline: "Strawberry Cheesecake Collection",
    description:
      "Delicate layers of strawberry, cream, and handcrafted elegance made for spring gatherings.",
    cta: { label: "View Strawberry Collection", to: "/collection" },
    align: "left",
    tone: "dark",
  },
  {
    image: cherry,
    eyebrow: "Sakura · 桜",
    badge: "Seasonal Limited",
    headline: "Seasonal Cherry Collection",
    description:
      "A limited seasonal creation inspired by cherry blossoms, soft light, and spring sweetness.",
    cta: { label: "Discover Seasonal Cakes", to: "/collection" },
    align: "left",
    tone: "dark",
  },
  {
    image: ocean,
    eyebrow: "Signature",
    headline: "Modern Mousse Creations",
    description:
      "Art-inspired mousse cakes designed with texture, color, and refined craftsmanship.",
    cta: { label: "View Signature Cakes", to: "/collection" },
    align: "left",
    tone: "light",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-foreground">
      {slides.map((s, idx) => {
        const active = idx === i;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!active}
          >
            <img
              src={s.image}
              alt={s.headline}
              className={`h-full w-full object-cover ${active ? "kenburns" : ""}`}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/35" />
            {s.align === "center" ? (
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div
                  className={`max-w-2xl text-center text-white ${active ? "fade-up" : "opacity-0"}`}
                >
                  {s.eyebrow && (
                    <p className="text-[10px] uppercase tracking-luxe text-white/80">
                      {s.eyebrow}
                    </p>
                  )}
                  <h1 className="mt-6 font-serif text-7xl tracking-[0.3em] md:text-9xl">
                    {s.headline}
                  </h1>
                  {s.subheadline && (
                    <p className="mt-4 text-sm uppercase tracking-editorial text-white/90">
                      {s.subheadline}
                    </p>
                  )}
                  <div className="mx-auto mt-8 h-px w-12 bg-white/60" />
                  <p className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-white/90">
                    {s.description}
                  </p>
                  <Link
                    to={s.cta.to}
                    className="mt-10 inline-block border-b border-white/60 pb-1 text-[11px] uppercase tracking-editorial text-white hover:border-white"
                  >
                    {s.cta.label}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-end md:items-center">
                <div
                  className={`w-full max-w-[1600px] px-6 pb-24 md:mx-auto md:px-12 md:pb-0 ${
                    active ? "fade-up" : "opacity-0"
                  }`}
                >
                  <div className={`max-w-xl ${s.tone === "dark" ? "text-white" : "text-foreground"}`}>
                    {s.badge && (
                      <span className="inline-block border border-white/60 px-3 py-1 text-[10px] uppercase tracking-luxe text-white/90">
                        {s.badge}
                      </span>
                    )}
                    {s.eyebrow && !s.badge && (
                      <p className="text-[10px] uppercase tracking-luxe text-white/80">
                        {s.eyebrow}
                      </p>
                    )}
                    <h2 className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">
                      {s.headline}
                    </h2>
                    <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/90">
                      {s.description}
                    </p>
                    <Link
                      to={s.cta.to}
                      className="mt-10 inline-block border-b border-white/60 pb-1 text-[11px] uppercase tracking-editorial text-white hover:border-white"
                    >
                      {s.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Pagination */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="group p-2"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === idx ? "w-10 bg-white" : "w-5 bg-white/50 group-hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Index */}
      <div className="absolute bottom-10 right-8 z-10 hidden font-serif text-xs tracking-luxe text-white/80 md:block">
        <span className="text-white">{String(i + 1).padStart(2, "0")}</span>
        <span className="mx-2">—</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}