import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { toast } from "sonner";
import orderingApron from "@/assets/ordering-apron-whisk.png";

export const Route = createFileRoute("/ordering")({
  head: () => ({
    meta: [
      { title: "Ordering — YUI Pâtisserie Studio" },
      {
        name: "description",
        content:
          "Begin a private cake consultation with YUI. Boutique inquiries, personalised design, and gentle craftsmanship for every occasion.",
      },
      { property: "og:title", content: "Ordering — YUI" },
      { property: "og:description", content: "A boutique inquiry experience, designed around your moment." },
    ],
  }),
  component: OrderingPage,
});

const steps = [
  {
    n: "01",
    title: "Inquiry",
    body: "Share your occasion, date, and any inspirations. Our atelier reviews each request personally.",
  },
  {
    n: "02",
    title: "Design Consultation",
    body: "We sketch flavour, palette, and silhouette together — every detail considered.",
  },
  {
    n: "03",
    title: "Crafted with Care",
    body: "Your cake is hand-shaped in small batches, using seasonal ingredients at their peak.",
  },
  {
    n: "04",
    title: "Pickup / Delivery",
    body: "Collect from the studio or arrange gentle delivery, beautifully packaged.",
  },
];

function OrderingPage() {
  return (
    <SiteLayout>
      <section className="bg-background px-6 pb-16 pt-40 md:px-12 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            Ordering — Private Consultation
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            A boutique inquiry, designed around the moment you’re celebrating.
          </h1>
        </div>
      </section>

      <section className="bg-[color:var(--cream)] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-foreground/20 pt-8">
                <p className="font-serif text-xs tracking-luxe text-muted-foreground">
                  {s.n}
                </p>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AtelierBanner />
      <InquiryForm />
    </SiteLayout>
  );
}

function AtelierBanner() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--cream)] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-sm shadow-[0_30px_80px_-40px_rgba(70,30,30,0.35)]">
            <img
              src={orderingApron}
              alt="YUI baker whisking batter in a rose-toned atelier"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-5 md:pl-6">
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            From Our Atelier
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl">
            Made by hand,<br />for slow living.
          </h2>
          <div className="mt-8 h-px w-12 bg-foreground/30" />
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            每一份甜點，從打蛋、攪拌到烘烤，皆由我們親手完成。
            選用當季食材與溫柔工藝，為你保留生活裡最細膩的甜。
          </p>
          <p className="mt-6 font-serif text-lg italic text-foreground/80">
             — made for slow living
          </p>
        </div>
      </div>
    </section>
  );
}

function InquiryForm() {
  const [sending, setSending] = useState(false);
  return (
    <section className="bg-background px-6 py-32 md:px-12">
      <div className="mx-auto grid max-w-[1300px] gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
            Begin Your Inquiry
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Tell us about your moment.
          </h2>
          <div className="mt-8 h-px w-12 bg-foreground/30" />
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Share the date, the occasion, and any inspirations you love. We’ll respond
            personally within 48 hours with a gentle design proposal.
          </p>
          <div className="mt-12 space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="text-foreground">Email · </span>hello@yui.studio
            </p>
            <p>
              <span className="text-foreground">Instagram · </span>@yui.living
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              toast.success("Thank you — we’ll be in touch soon.");
              (e.target as HTMLFormElement).reset();
            }, 600);
          }}
          className="space-y-8"
        >
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Event Date", name: "date", type: "date" },
            { label: "Occasion", name: "occasion", type: "text" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-[10px] uppercase tracking-luxe text-muted-foreground">
                {f.label}
              </label>
              <input
                type={f.type}
                name={f.name}
                required
                className="mt-3 w-full border-b border-foreground/30 bg-transparent pb-3 font-serif text-lg text-foreground outline-none transition-colors focus:border-foreground"
              />
            </div>
          ))}
          <div>
            <label className="block text-[10px] uppercase tracking-luxe text-muted-foreground">
              Tell us about your vision
            </label>
            <textarea
              name="message"
              rows={4}
              className="mt-3 w-full resize-none border-b border-foreground/30 bg-transparent pb-3 font-serif text-lg text-foreground outline-none focus:border-foreground"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-4 border border-foreground/40 px-8 py-4 text-[11px] uppercase tracking-editorial transition-colors hover:bg-foreground hover:text-background disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}