import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, serviceIcons, ArrowRightIcon } from "@/components/ui/icons";
import { SERVICES, SITE_URL, SITE_NAME } from "@/lib/constants";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.shortDescription,
      url: `${SITE_URL}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="glow-orb glow-orb-teal animate-pulse-slower absolute -top-20 right-1/4 h-[350px] w-[350px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-muted">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-cyan transition-colors">Home</Link></li>
              <li className="text-border-light">/</li>
              <li><Link href="/services" className="hover:text-cyan transition-colors">Services</Link></li>
              <li className="text-border-light">/</li>
              <li className="text-text-secondary">{service.title}</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            <div className="icon-glow hidden rounded-xl p-4 text-cyan sm:inline-flex">
              {Icon && <Icon className="h-10 w-10" />}
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 separator-glow" />
      </section>

      {/* Content */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold">
                What We <span className="text-gradient">Deliver</span>
              </h2>
              <ul className="mt-6 space-y-4" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex rounded-full bg-gradient-to-br from-success/20 to-teal/10 p-1.5 text-success border border-success/20">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Button href="/contact" size="lg" className="btn-glow">
                  Discuss Your Project
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Other Services
              </h3>
              <div className="mt-4 space-y-3">
                {otherServices.map((s) => {
                  const SIcon = serviceIcons[s.icon];
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      <Card hover className="group flex items-center gap-3">
                        <div className="icon-glow inline-flex rounded-lg p-2 text-cyan">
                          {SIcon && <SIcon className="h-5 w-5" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium group-hover:text-cyan transition-colors">{s.title}</p>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 text-text-muted group-hover:text-cyan transition-colors" />
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
