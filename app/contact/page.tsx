import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
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

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Tell us about your infrastructure challenge. We&rsquo;ll respond
              within one business day with an initial assessment.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <Card className="relative p-8">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
