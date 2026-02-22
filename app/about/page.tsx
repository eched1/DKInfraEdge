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
    icon: "01",
  },
  {
    title: "Vendor-Neutral Thinking",
    description:
      "We recommend what fits—not what pays us the most. Fortinet, Juniper, AWS, or bare-metal—the right tool depends on your constraints.",
    icon: "02",
  },
  {
    title: "Knowledge Transfer",
    description:
      "We don't create dependency. Every engagement includes documentation, runbooks, and training so your team can operate independently.",
    icon: "03",
  },
  {
    title: "Operational Empathy",
    description:
      "We've been on-call at 3 AM. That experience shapes how we design for failure, observability, and recoverability.",
    icon: "04",
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

      {/* Hero section */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="glow-orb glow-orb-teal animate-pulse-slow absolute -top-20 right-1/4 h-[400px] w-[400px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
              About Us
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Built by engineers,
              <br />
              <span className="text-gradient-bright">for engineers</span>
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
        <div className="absolute bottom-0 left-0 right-0 separator-glow" />
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
        <Container className="relative z-10">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
              Our Principles
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              How We <span className="text-gradient">Work</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} glow className="group">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal/20 to-cyan/10 font-mono text-sm font-bold text-cyan border border-cyan/20">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 separator-glow" />
      </section>

      {/* Tech stack */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="glow-orb glow-orb-cyan animate-pulse-slower absolute bottom-0 left-1/3 h-[300px] w-[300px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
              Expertise
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Our Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="mt-4 text-text-secondary">
              We maintain deep expertise across these platforms and tools.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { category: "Networking", tools: "Fortinet, Juniper, Aruba, Cisco, Palo Alto" },
              { category: "Cloud", tools: "AWS, Azure, GCP, DigitalOcean" },
              { category: "IaC & Automation", tools: "Terraform, Ansible, Python, NAPALM" },
              { category: "Observability", tools: "Prometheus, Grafana, LibreNMS, Zabbix" },
              { category: "Containers", tools: "Docker, Kubernetes, Helm" },
              { category: "CI/CD & GitOps", tools: "GitHub Actions, GitLab CI, ArgoCD" },
            ].map((stack) => (
              <Card key={stack.category} glow>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gradient">
                  {stack.category}
                </h3>
                <p className="mt-3 text-text-secondary">{stack.tools}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/contact" size="lg" className="btn-glow">
              Work With Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
