import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import bgFoliage from "@/assets/bg-foliage-shadow.jpg";
import bgWaves from "@/assets/bg-waves.jpg";
import aboutApron from "@/assets/about-apron.webp";
import aboutMuscat from "@/assets/about-muscat-purple.webp";
import aboutStrawberry from "@/assets/about-strawberry-trio.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — YUI Pâtisserie Studio" },
      {
        name: "description",
        content:
          "YUI is a boutique dessert studio inspired by beauty, seasonality, and quiet craftsmanship — a gentle, modern approach to dessert design.",
      },
      { property: "og:title", content: "About — YUI" },
      { property: "og:description", content: "Inspired by beauty, seasonality, and quiet craftsmanship." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section
        className="relative bg-[color:var(--cream)] bg-cover bg-center bg-no-repeat px-6 pb-24 pt-40 md:px-12 md:pt-48"
        style={{ backgroundImage: `url(${bgFoliage})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--cream)]/75" />
        <div className="relative mx-auto max-w-[1400px]">
          <p className="font-jp text-xs tracking-[0.5em] text-muted-foreground">結 · YUI</p>
          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.05] text-foreground md:text-8xl">
            A little beauty, brought into everyday life —{" "}
            <em className="italic text-foreground/70">one creation at a time.</em>
          </h1>
        </div>
      </section>

      <section className="bg-background px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12 md:gap-24">
          <div className="md:col-span-5">
            <img src={aboutApron} alt="YUI studio — slow craft in the atelier" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="md:col-span-7 md:pt-12">
            <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Our Story
            </p>
            <h2 className="mt-6 font-serif text-3xl leading-snug text-foreground md:text-4xl">
              YUI is a boutique dessert studio inspired by beauty, seasonality, and
              thoughtful craftsmanship.
            </h2>
            <div className="mt-8 h-px w-12 bg-foreground/30" />
            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                We create handcrafted cakes and desserts that blend elegance with
                creativity — from refined celebration cakes and fruit-based creations to
                modern mousse cakes and delicate pastries.
              </p>
              <p>
                Rooted in a soft, minimalist aesthetic, YUI embraces the idea that
                desserts are more than something sweet; they are part of an atmosphere,
                a gathering, and a memory. Every creation is designed with attention to
                detail, balancing visual artistry with a sense of warmth and simplicity.
              </p>
              <p>
                Inspired by nature, light, and quiet moments, our style reflects a
                gentle, modern approach to dessert design — timeless, understated, and
                made to be shared.
              </p>
              <p className="italic text-foreground/70">
                At YUI, we hope to bring a little beauty into everyday life, one
                creation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Twin imagery */}
      <section
        className="relative bg-[color:var(--ivory)] bg-cover bg-center bg-no-repeat px-6 py-24 md:px-12"
        style={{ backgroundImage: `url(${bgWaves})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--ivory)]/70" style={{ mixBlendMode: "lighten" }} />
        <div className="relative mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2 md:gap-10">
          <img
            src={aboutMuscat}
            alt="Shine muscat cheesecake with violet pastry"
            className="aspect-square w-full object-cover"
          />
          <img
            src={aboutStrawberry}
            alt="Strawberry creations in soft daylight"
            className="aspect-square w-full object-cover md:translate-y-16"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-background px-6 py-32 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground text-center">
            Our Philosophy
          </p>
          <h2 className="mt-6 text-center font-serif text-4xl text-foreground md:text-6xl">
            Quiet · Seasonal · Crafted
          </h2>
          <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-12">
            {[
              {
                jp: "美",
                en: "Beauty",
                body: "We design each cake as a still life — composed, intentional, calm.",
              },
              {
                jp: "季",
                en: "Seasonality",
                body: "Our menu changes with the seasons, honouring what nature offers now.",
              },
              {
                jp: "心",
                en: "Craft",
                body: "Slow, hand-shaped work — a small batch of cakes, each one personal.",
              },
            ].map((v) => (
              <div key={v.en} className="border-t border-border pt-8">
                <div className="font-jp text-5xl text-foreground/70">{v.jp}</div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{v.en}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              to="/ordering"
              className="inline-block border border-foreground/40 px-8 py-4 text-[11px] uppercase tracking-editorial hover:bg-foreground hover:text-background"
            >
              Begin an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}