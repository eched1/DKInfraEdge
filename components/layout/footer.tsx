import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE_NAME, NAV_LINKS, SERVICES } from "@/lib/constants";

const footerServices = SERVICES.slice(0, 4);

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-navy-dark" role="contentinfo">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-teal/5 blur-[100px]" />

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 separator-glow" />

      <Container className="relative z-10 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-1.5 text-lg font-bold tracking-tight">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-teal to-cyan text-xs font-black text-white">
                DK
              </span>
              <span className="text-text-primary">Infra</span>
              <span className="text-gradient">Edge</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Enterprise networking, cloud infrastructure, and security
              consulting for organizations that demand reliability.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-text-secondary transition-colors hover:text-cyan"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-cyan transition-colors hover:text-cyan-light"
                >
                  View all services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-secondary transition-colors hover:text-cyan"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-text-secondary transition-colors hover:text-cyan"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border/50 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted/60">
            Infrastructure. Engineered.
          </p>
        </div>
      </Container>
    </footer>
  );
}
