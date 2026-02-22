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

      <section className="py-20">
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-muted">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-cyan">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-cyan">Services</Link>
              </li>
              <li>/</li>
              <li className="text-text-secondary">{service.title}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-6 inline-flex rounded-xl bg-teal/10 p-4 text-teal-light">
                {Icon && <Icon className="h-10 w-10" />}
              </div>
              <h1 className="text-4xl font-bold tracking-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {service.description}
              </p>

              <h2 className="mt-10 text-2xl font-semibold">What We Deliver</h2>
              <ul className="mt-4 space-y-3" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex rounded-full bg-success/10 p-1 text-success">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/contact" size="lg">
                  Discuss Your Project
                </Button>
              </div>
            </div>

            {/* Sidebar: other services */}
            <aside>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                Other Services
              </h3>
              <div className="mt-4 space-y-3">
                {otherServices.map((s) => {
                  const SIcon = serviceIcons[s.icon];
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      <Card hover className="group flex items-center gap-3">
                        <div className="inline-flex rounded-lg bg-teal/10 p-2 text-teal-light">
                          {SIcon && <SIcon className="h-5 w-5" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{s.title}</p>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 text-text-muted group-hover:text-cyan" />
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
