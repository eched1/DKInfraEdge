import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "DK Infra Edge is an infrastructure consulting firm specializing in enterprise networking, cloud & DevOps, security hardening, and automation.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const values = [
  {
    title: "Engineering Rigor",
    description:
      "We treat infrastructure like software: version-controlled, tested, and peer-reviewed. Every change is deliberate.",
  },
  {
    title: "Vendor-Neutral Thinking",
    description:
      "We recommend what fits—not what pays us the most. Fortinet, Juniper, AWS, or bare-metal—the right tool depends on your constraints.",
  },
  {
    title: "Knowledge Transfer",
    description:
      "We don't create dependency. Every engagement includes documentation, runbooks, and training so your team can operate independently.",
  },
  {
    title: "Operational Empathy",
    description:
      "We've been on-call at 3 AM. That experience shapes how we design for failure, observability, and recoverability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ])
          ),
        }}
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About DK Infra Edge
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              DK Infra Edge is an infrastructure consulting firm built by
              engineers who have designed, deployed, and operated networks and
              cloud platforms at scale. We work with SMBs and enterprises
              across industries that depend on reliable, secure, and
              automatable infrastructure.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Our focus is practical: we solve real operational problems with
              production-grade solutions. No slide decks without substance—just
              architectures that work, automation that sticks, and security
              postures that hold up under scrutiny.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight">
            How We Work
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title}>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Technology Stack
            </h2>
            <p className="mt-4 text-text-secondary">
              We maintain deep expertise across these platforms and tools.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Networking",
                tools: "Fortinet, Juniper, Aruba, Cisco, Palo Alto",
              },
              {
                category: "Cloud",
                tools: "AWS, Azure, GCP, DigitalOcean",
              },
              {
                category: "IaC & Automation",
                tools: "Terraform, Ansible, Python, NAPALM",
              },
              {
                category: "Observability",
                tools: "Prometheus, Grafana, LibreNMS, Zabbix",
              },
              {
                category: "Containers & Orchestration",
                tools: "Docker, Kubernetes, Helm",
              },
              {
                category: "CI/CD & GitOps",
                tools: "GitHub Actions, GitLab CI, ArgoCD",
              },
            ].map((stack) => (
              <Card key={stack.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan">
                  {stack.category}
                </h3>
                <p className="mt-2 text-text-secondary">{stack.tools}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/contact" size="lg">
              Work With Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
