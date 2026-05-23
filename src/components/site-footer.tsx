import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import logoYui from "@/assets/logo-yui-square.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-[color:var(--ivory)]">
      {/* Top brand band */}
      <div className="border-b border-border/30">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 py-10 text-center md:px-12 md:py-20">
          <img
            src={logoYui}
            alt="YUI Pâtisserie Studio"
            className="h-24 w-auto opacity-90 md:h-48"
          />
          <p className="mt-4 max-w-md text-xs font-light leading-relaxed text-muted-foreground md:mt-6 md:text-sm">
            A boutique dessert studio inspired by beauty, seasonality, and thoughtful
            craftsmanship — made for slow living.
          </p>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-12 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-14">
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
            ]}
          />
          <div>
            <h4 className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Atelier
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:mt-6">
              By appointment only
              <br />
              Tuesday — Saturday
              <br />
              10:00 — 18:00
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm md:mt-6">
              <li>
                <a
                  href="mailto:hello@yui.studio"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.25} />
                  hello@yui.studio
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yui.living"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Instagram className="h-3.5 w-3.5" strokeWidth={1.25} />
                  @yui.living
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="yui-rule mt-10 md:mt-20" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-[10px] uppercase tracking-editorial text-muted-foreground md:mt-8 md:flex-row md:items-center md:text-left md:text-[11px]">
          <p>
            © 2026 YUI Pâtisserie Studio · All rights reserved
          </p>
          <p className="font-jp text-[10px] tracking-[0.4em]">やさしい時間のために</p>
          <p className="normal-case tracking-normal">
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary"
            >
              Bluluma
            </a>
          </p>
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
      <ul className="mt-4 space-y-3 md:mt-6">
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