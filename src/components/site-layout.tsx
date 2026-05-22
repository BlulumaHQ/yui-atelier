import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent={transparentHeader} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}