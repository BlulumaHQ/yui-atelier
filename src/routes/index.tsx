import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { HeroSlider } from "@/components/hero-slider";
import { products } from "@/lib/products";
import { Instagram } from "lucide-react";
import bgFoliage from "@/assets/bg-foliage-shadow.jpg";
import bgWaves from "@/assets/bg-waves.jpg";
import bgDark from "@/assets/bg-dark-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YUI — Boutique Dessert Studio | Handcrafted Cakes & Mousse" },
      {
        name: "description",
        content:
          "YUI is a boutique Japanese dessert studio crafting elegant mousse cakes, cheesecakes, and seasonal pastries — made for slow living.",
      },
      { property: "og:title", content: "YUI — Boutique Dessert Studio" },
      { property: "og:description", content: "Handcrafted cakes for quiet moments and beautiful gatherings." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 3);
  const signature = products;

  return (
    <SiteLayout transparentHeader>
      <HeroSlider />

      {/* Eyebrow intro */}
      <section
        className="relative bg-[color:var(--ivory)] bg-cover bg-center bg-no-repeat px-6 py-28 md:px-12 md:py-36"
        style={{ backgroundImage: `url(${bgFoliage})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--ivory)]/70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-jp text-xs tracking-[0.5em] text-muted-foreground">やさしい時間のために</p>
          <h2 className="mt-8 font-serif text-3xl leading-[1.35] text-foreground md:text-5xl">
            Desserts are more than something sweet — they are part of an atmosphere,
            a gathering, a memory.
          </h2>
          <div className="mx-auto mt-10 h-px w-12 bg-foreground/30" />
        </div>
      </section>

      {/* Featured Seasonal Collection */}
      <section className="bg-background px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeader
            eyebrow="Seasonal Collection"
            title="Spring Atelier"
            jp="春の季節"
          />
          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {featured.map((p, idx) => (
              <Link
                key={p.slug}
                to="/collection"
                className={`group block ${idx === 1 ? "md:translate-y-16" : ""}`}
              >
                <div className="overflow-hidden bg-[color:var(--cream)]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[480px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                    {p.season}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">{p.name}</h3>
                  <p className="font-jp mt-1 text-xs tracking-widest text-muted-foreground">
                    {p.nameJp}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Cakes — editorial asymmetric */}
      <section
        className="relative bg-[color:var(--cream)] bg-cover bg-center bg-no-repeat px-6 py-32 md:px-12"
        style={{ backgroundImage: `url(${bgFoliage})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--cream)]/85" />
        <div className="relative mx-auto max-w-[1500px]">
          <SectionHeader
            eyebrow="Signature"
            title="The Lookbook"
            jp="シグネチャー"
          />

          <div className="mt-24 space-y-32">
            {signature.map((p, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <div
                  key={p.slug}
                  className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${
                    reverse ? "" : ""
                  }`}
                >
                  <div
                    className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}
                  >
                    <div className="overflow-hidden bg-background">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-[500px] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105 md:h-[640px]"
                      />
                    </div>
                  </div>
                  <div
                    className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}
                  >
                    <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")} · {p.category}
                    </p>
                    <h3 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                      {p.name}
                    </h3>
                    <p className="font-jp mt-2 text-sm tracking-widest text-muted-foreground">
                      {p.nameJp}
                    </p>
                    <div className="mt-6 h-px w-10 bg-foreground/30" />
                    <p className="mt-6 max-w-md text-base font-light italic leading-relaxed text-foreground/80">
                      “{p.tagline}”
                    </p>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <Link
                      to="/ordering"
                      className="mt-8 inline-block border-b border-foreground/40 pb-1 text-[11px] uppercase tracking-editorial text-foreground hover:border-foreground"
                    >
                      Inquire for this creation
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About YUI */}
      <section className="bg-background px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2 md:gap-24">
          <div className="relative">
            <img
              src={products[0].image}
              alt="YUI Atelier"
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-foreground/20 md:block" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              About — 結
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
              A studio of quiet beauty &amp; seasonal craft.
            </h2>
            <div className="mt-8 h-px w-12 bg-foreground/30" />
            <p className="mt-8 text-base leading-relaxed text-foreground/80">
              YUI is a boutique dessert studio inspired by beauty, seasonality, and
              thoughtful craftsmanship. We create handcrafted cakes that blend elegance
              with creativity — from refined celebration cakes to modern mousse and
              delicate pastries.
            </p>
            <Link
              to="/about"
              className="mt-10 self-start border-b border-foreground/40 pb-1 text-[11px] uppercase tracking-editorial hover:border-foreground"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="relative overflow-hidden bg-[color:var(--sakura)]/40 px-6 py-32 text-center md:px-12"
        style={{
          backgroundImage: `url(${bgWaves})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-[color:var(--sakura)]/55"
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <p className="font-jp text-xs tracking-[0.5em] text-foreground/70">
            スローリビング
          </p>
          <h2 className="mt-8 font-serif text-4xl leading-snug text-foreground md:text-6xl">
            Slow living, <em className="italic">one quiet</em> creation at a time.
          </h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-10 pt-10 md:grid-cols-3">
            {[
              { jp: "季", en: "Seasonal", body: "Designed to the rhythm of the seasons." },
              { jp: "手", en: "Handcrafted", body: "Every cake shaped slowly, by hand." },
              { jp: "静", en: "Quiet", body: "A calm aesthetic, made to be shared." },
            ].map((c) => (
              <div key={c.en}>
                <div className="font-jp text-4xl text-foreground/80">{c.jp}</div>
                <p className="mt-4 text-[10px] uppercase tracking-luxe text-muted-foreground">
                  {c.en}
                </p>
                <p className="mt-3 text-sm font-light text-foreground/75">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Showcase */}
      <section className="bg-background px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col items-end justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                Instagram
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
                Moments from the studio
              </h2>
            </div>
            <a
              href="https://www.instagram.com/yui.living"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] uppercase tracking-editorial hover:border-foreground"
            >
              <Instagram className="h-3.5 w-3.5" strokeWidth={1.25} />
              Follow @yui.living
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {products.concat(products).slice(0, 6).map((p, i) => (
              <a
                key={i}
                href="https://www.instagram.com/yui.living"
                target="_blank"
                rel="noreferrer"
                className="group block aspect-square overflow-hidden bg-[color:var(--cream)]"
              >
                <img
                  src={p.image}
                  alt="@yui.living"
                  className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering / CTA */}
      <section
        className="relative overflow-hidden bg-foreground px-6 py-32 text-background md:px-12"
        style={{
          backgroundImage: `url(${bgDark})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative mx-auto grid max-w-[1300px] gap-16 md:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-background/60">
              The Ordering Experience
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              A boutique inquiry, designed around you.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-6 text-background/80">
            <p className="text-base leading-relaxed">
              Every YUI cake begins with a conversation. We design each creation
              individually — flavour, palette, and silhouette tailored to the moment
              it celebrates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ordering"
                className="border border-background/60 px-6 py-3 text-[11px] uppercase tracking-editorial hover:bg-background hover:text-foreground"
              >
                Begin Inquiry
              </Link>
              <Link
                to="/contact"
                className="border-b border-background/60 pb-1 text-[11px] uppercase tracking-editorial hover:border-background"
              >
                Contact the Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionHeader({
  eyebrow,
  title,
  jp,
}: {
  eyebrow: string;
  title: string;
  jp?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-6xl">
          {title}
        </h2>
      </div>
      {jp && (
        <p className="font-jp text-xs tracking-[0.4em] text-muted-foreground">{jp}</p>
      )}
    </div>
  );
}
