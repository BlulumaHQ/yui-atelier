import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { products } from "@/lib/products";
import bgWaves from "@/assets/bg-waves.jpg";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — YUI Pâtisserie Studio" },
      {
        name: "description",
        content:
          "Browse the YUI signature collection — handcrafted mousse cakes, cheesecakes, and seasonal creations from our Japanese-inspired dessert studio.",
      },
      { property: "og:title", content: "Collection — YUI" },
      { property: "og:description", content: "An editorial catalogue of handcrafted seasonal desserts." },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <SiteLayout>
      <section
        className="relative bg-background bg-cover bg-center bg-no-repeat px-6 pb-16 pt-40 md:px-12 md:pt-48"
        style={{ backgroundImage: `url(${bgWaves})` }}
      >
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            The Collection · 2026
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            Seasonal creations from the YUI atelier.
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Eleven signature desserts, designed in small editions and changing with the
            seasons. Each cake is handcrafted to order in our studio.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="yui-rule mb-24" />
          <div className="grid gap-x-10 gap-y-24 md:grid-cols-2 md:gap-x-16">
            {products.map((p, idx) => (
              <Link
                key={p.slug}
                to="/ordering"
                className={`group block ${idx % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-[color:var(--cream)]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-8 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                      {p.season} · {p.category}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl text-foreground">
                      {p.name}
                    </h3>
                    <p className="font-jp mt-1 text-xs tracking-widest text-muted-foreground">
                      {p.nameJp}
                    </p>
                    <p className="mt-5 max-w-md text-sm italic leading-relaxed text-foreground/75">
                      {p.tagline}
                    </p>
                  </div>
                  <span className="hidden font-serif text-xs tracking-luxe text-muted-foreground md:block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}