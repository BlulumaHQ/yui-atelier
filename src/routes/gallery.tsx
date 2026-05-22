import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { products } from "@/lib/products";
import heart from "@/assets/hero-heart.webp";
import strawberry from "@/assets/hero-strawberry.webp";
import ocean from "@/assets/hero-ocean.webp";
import cherry from "@/assets/hero-cherry.webp";
import bgFoliage from "@/assets/bg-foliage-shadow.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — YUI Pâtisserie Studio" },
      {
        name: "description",
        content:
          "An editorial gallery of YUI’s seasonal cakes, mousse creations, and studio moments.",
      },
      { property: "og:title", content: "Gallery — YUI" },
      { property: "og:description", content: "An editorial gallery of seasonal cakes and studio moments." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const all = [heart, strawberry, ocean, cherry, ...products.map((p) => p.image)];
  return (
    <SiteLayout>
      <section
        className="relative bg-background bg-cover bg-center bg-no-repeat px-6 pb-20 pt-40 md:px-12 md:pt-48"
        style={{ backgroundImage: `url(${bgFoliage})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            Gallery · ギャラリー
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            A quiet archive of seasonal moments.
          </h1>
        </div>
      </section>

      <section className="bg-background px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1500px] columns-1 gap-6 md:columns-3 md:gap-8">
          {all.map((src, i) => (
            <div
              key={i}
              className="mb-6 break-inside-avoid overflow-hidden bg-[color:var(--cream)] md:mb-8"
            >
              <img
                src={src}
                alt=""
                className="w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                style={{ aspectRatio: i % 3 === 0 ? "3 / 4" : i % 3 === 1 ? "1 / 1" : "4 / 5" }}
              />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}