import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";
import bgFoliage from "@/assets/bg-foliage-shadow.jpg";
import bgBaking from "@/assets/bg-baking-banner.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — YUI Pâtisserie Studio" },
      {
        name: "description",
        content:
          "Reach the YUI studio for private inquiries, collaborations, and seasonal cake consultations.",
      },
      { property: "og:title", content: "Contact — YUI" },
      { property: "og:description", content: "Get in touch with the YUI dessert studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section
        className="relative bg-[color:var(--cream)] bg-cover bg-center bg-no-repeat px-6 pb-24 pt-40 md:px-12 md:pt-48"
        style={{ backgroundImage: `url(${bgFoliage})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--cream)]/75" />
        <div className="relative mx-auto max-w-[1400px]">
          <p className="font-jp text-xs tracking-[0.5em] text-muted-foreground">
            お問い合わせ
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            We’d love to hear from you.
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            For consultations, collaborations, or simply to say hello — our studio
            answers every message personally.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-[1300px] gap-16 md:grid-cols-3">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "hello@yui.studio",
              href: "mailto:hello@yui.studio",
            },
            {
              icon: Instagram,
              label: "Instagram",
              value: "@yui.living",
              href: "https://www.instagram.com/yui.living",
            },
            {
              icon: MapPin,
              label: "Studio",
              value: "By appointment only",
            },
            {
              icon: Clock,
              label: "Hours",
              value: "Tuesday — Saturday\n10:00 — 18:00",
            },
            {
              icon: Mail,
              label: "Inquiries",
              value: "48-hour response time",
            },
            {
              icon: MapPin,
              label: "Delivery",
              value: "Local delivery on request",
            },
          ].map((c) => {
            const Icon = c.icon;
            const Inner = (
              <>
                <Icon className="h-4 w-4 text-foreground/70" strokeWidth={1.25} />
                <p className="mt-6 text-[10px] uppercase tracking-luxe text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-3 whitespace-pre-line font-serif text-xl text-foreground">
                  {c.value}
                </p>
              </>
            );
            return (
              <div key={c.label} className="border-t border-border pt-8">
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block hover:opacity-70"
                  >
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Atelier banner */}
      <section
        className="relative bg-[color:var(--cream)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBaking})`, backgroundSize: "cover" }}
      >
        <div
          className="absolute inset-0 bg-[color:var(--cream)]/55"
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="absolute inset-0 bg-[color:var(--ivory)]/35" />
        <div className="relative mx-auto flex max-w-[1300px] flex-col items-center px-6 py-32 text-center md:px-12 md:py-44">
          <p className="font-jp text-xs tracking-[0.5em] text-foreground/70">
            アトリエより
          </p>
          <h2 className="mt-8 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Made slowly, by hand — from the simplest ingredients.
          </h2>
          <div className="mt-8 h-px w-12 bg-foreground/40" />
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/75">
            Flour, butter, cream, fruit in season. Every YUI creation begins on the
            marble counter, shaped with patience and a quiet attention to detail.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}