import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE_NAME}.`,
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container>
        <article className="prose prose-lg mx-auto max-w-3xl">
          <h1>Terms of Service</h1>
          <p><em>Last updated: January 1, 2025</em></p>

          <h2>Agreement</h2>
          <p>
            By accessing and using the {SITE_NAME} website
            (dkinfraedge.com), you agree to be bound by these terms of
            service. If you do not agree, please do not use the site.
          </p>

          <h2>Services</h2>
          <p>
            {SITE_NAME} provides IT infrastructure consulting services.
            The information on this website is for general informational
            purposes and does not constitute professional advice for your
            specific situation. Consulting engagements are governed by
            separate statements of work.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this site—including text, graphics, logos, and
            blog posts—is the property of {SITE_NAME} and is protected by
            applicable intellectual property laws. You may share and link
            to our blog posts with proper attribution.
          </p>

          <h2>Blog Content</h2>
          <p>
            Technical content on our blog is provided as-is for
            educational purposes. While we strive for accuracy,
            infrastructure configurations should be tested in
            non-production environments before deployment. {SITE_NAME} is
            not liable for issues arising from applying blog content to
            your environment without professional review.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            {SITE_NAME} shall not be liable for any indirect, incidental,
            or consequential damages arising from the use of this website
            or its content. Our liability is limited to the maximum extent
            permitted by applicable law.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This site may contain links to third-party websites. We are
            not responsible for the content or privacy practices of those
            sites.
          </p>

          <h2>Changes</h2>
          <p>
            We reserve the right to modify these terms at any time.
            Continued use of the site after changes constitutes acceptance
            of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? <a href="/contact">Get in touch</a>.
          </p>
        </article>
      </Container>
    </section>
  );
}
