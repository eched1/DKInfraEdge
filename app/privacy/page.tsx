import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container>
        <article className="prose prose-lg mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          <p><em>Last updated: January 1, 2025</em></p>

          <h2>Information We Collect</h2>
          <p>
            When you use our contact form, we collect the information you
            provide: your name, email address, company name, phone number
            (if provided), and your message. We use this information solely
            to respond to your inquiry.
          </p>

          <h2>Analytics</h2>
          <p>
            We use privacy-friendly analytics (Plausible Analytics) to
            understand how visitors use our site. Plausible does not use
            cookies, does not collect personal data, and is fully compliant
            with GDPR, CCPA, and PECR. No consent banner is required.
          </p>

          <h2>Cookies</h2>
          <p>
            This site does not use tracking cookies. We may use essential
            cookies required for site functionality (e.g., CAPTCHA
            verification).
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal information with
            third parties. Contact form submissions are sent via SendGrid
            (our email delivery provider) and are not stored beyond what is
            necessary to deliver the email.
          </p>

          <h2>Data Retention</h2>
          <p>
            Contact form submissions are retained in our email system for
            the duration of the business relationship. You may request
            deletion of your data at any time by contacting us.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            data. To exercise these rights, email us at the address on our
            contact page.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this privacy policy? <a href="/contact">Get in touch</a>.
          </p>
        </article>
      </Container>
    </section>
  );
}
