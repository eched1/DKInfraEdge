import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DK Infra Edge for enterprise networking, cloud, security, and automation consulting.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="glow-orb glow-orb-teal animate-pulse-slow absolute -top-20 right-1/3 h-[350px] w-[350px]" />
        <div className="glow-orb glow-orb-cyan animate-pulse-slower absolute bottom-0 left-1/4 h-[250px] w-[250px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
              Get in Touch
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Start the <span className="text-gradient-bright">conversation</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Tell us about your infrastructure challenge. We&rsquo;ll respond
              within one business day with an initial assessment.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <div className="card-glow rounded-2xl p-8 sm:p-10">
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
