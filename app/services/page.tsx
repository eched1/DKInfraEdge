import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, serviceIcons } from "@/components/ui/icons";
import { SERVICES, SITE_URL } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise networking, cloud & DevOps, monitoring, security hardening, AI agent engineering, and infrastructure automation consulting.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services | DK Infra Edge",
    description:
      "Enterprise networking, cloud & DevOps, monitoring, security hardening, AI agent engineering, and infrastructure automation consulting.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="glow-orb glow-orb-teal animate-pulse-slow absolute -top-20 left-1/3 h-[400px] w-[400px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
              What We Offer
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Our <span className="text-gradient-bright">Services</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              We help engineering teams design, build, and operate
              production-grade infrastructure. Every engagement is scoped to
              your environment and goals.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 separator-glow" />
      </section>

      {/* Services grid */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
        <Container className="relative z-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card glow hover className="group flex h-full flex-col">
                    <div className="icon-glow mb-4 inline-flex rounded-xl p-3 text-cyan">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <h2 className="text-xl font-semibold group-hover:text-cyan transition-colors">{service.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-all group-hover:text-cyan-light group-hover:gap-2.5">
                      View details <ArrowRightIcon />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-secondary">
              Not sure which service fits your needs?
            </p>
            <Button href="/contact" className="mt-4 btn-glow">
              Let&rsquo;s Talk
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
