import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="border-t border-border py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 text-center sm:p-16">
          {/* Accent gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-teal)_0%,_transparent_60%)] opacity-10" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to modernize your infrastructure?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Whether you need a network redesign, a cloud migration, or an
              automation overhaul&mdash;let&rsquo;s scope it together.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
