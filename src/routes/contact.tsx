import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";

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
      <section className="bg-[color:var(--cream)] px-6 pb-24 pt-40 md:px-12 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
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
    </SiteLayout>
  );
}