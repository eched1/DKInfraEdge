import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon, serviceIcons } from "@/components/ui/icons";
import { SERVICES } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="glow-orb glow-orb-teal animate-pulse-slower absolute -left-40 top-1/3 h-[350px] w-[350px]" />

      <Container className="relative z-10">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
            Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            End-to-end infrastructure consulting for teams that ship.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card glow hover className="group h-full">
                  <div className="icon-glow mb-4 inline-flex rounded-xl p-3 text-cyan">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-all group-hover:text-cyan-light group-hover:gap-2.5">
                    Learn more <ArrowRightIcon />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 separator-glow" />
    </section>
  );
}
