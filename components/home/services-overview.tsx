import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon, serviceIcons } from "@/components/ui/icons";
import { SERVICES } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="border-t border-border py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 text-lg text-text-secondary">
            End-to-end infrastructure consulting for teams that ship.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card hover className="group h-full">
                  <div className="mb-4 inline-flex rounded-lg bg-teal/10 p-3 text-teal-light">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan transition-colors group-hover:text-cyan-light">
                    Learn more <ArrowRightIcon />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
