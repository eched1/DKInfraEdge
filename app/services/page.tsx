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

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              We help engineering teams design, build, and operate
              production-grade infrastructure. Every engagement is scoped to
              your environment and goals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card hover className="group flex h-full flex-col">
                    <div className="mb-4 inline-flex rounded-lg bg-teal/10 p-3 text-teal-light">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan group-hover:text-cyan-light">
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
            <Button href="/contact" className="mt-4">
              Let&rsquo;s Talk
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
