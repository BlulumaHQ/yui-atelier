import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-3xl tracking-[0.4em]">YUI</div>
            <p className="mt-2 text-[10px] uppercase tracking-luxe text-muted-foreground">
              pâtisserie studio
            </p>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A boutique dessert studio inspired by beauty, seasonality, and thoughtful
              craftsmanship — made for slow living.
            </p>
          </div>

          <FooterCol
            title="Studio"
            links={[
              { to: "/about", label: "About" },
              { to: "/ordering", label: "Ordering" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Discover"
            links={[
              { to: "/collection", label: "Collection" },
              { to: "/gallery", label: "Gallery" },
            ]}
          />

          <div>
            <h4 className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Follow
            </h4>
            <a
              href="https://www.instagram.com/yui.living"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.25} />
              @yui.living
            </a>
          </div>
        </div>

        <div className="yui-rule mt-20" />

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-[11px] uppercase tracking-editorial text-muted-foreground md:flex-row md:items-center">
          <p>
            © 2026 YUI. All rights reserved. |{" "}
            <span className="normal-case tracking-normal">Web Design by </span>
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary"
            >
              Bluluma
            </a>
          </p>
          <p className="font-jp text-[10px] tracking-widest">やさしい時間のために</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: "/" | "/collection" | "/about" | "/ordering" | "/gallery" | "/contact"; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-luxe text-muted-foreground">{title}</h4>
      <ul className="mt-6 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-foreground hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}