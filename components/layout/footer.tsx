import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE_NAME, NAV_LINKS, SERVICES } from "@/lib/constants";

const footerServices = SERVICES.slice(0, 4);

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-dark" role="contentinfo">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-text-primary">DK</span>{" "}
              <span className="text-cyan">Infra Edge</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Enterprise networking, cloud infrastructure, and security
              consulting for organizations that demand reliability.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2" role="list">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Services
            </h3>
            <ul className="mt-3 space-y-2" role="list">
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
                  className="text-sm text-cyan transition-colors hover:text-cyan-light"
                >
                  View all services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Legal
            </h3>
            <ul className="mt-3 space-y-2" role="list">
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

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
