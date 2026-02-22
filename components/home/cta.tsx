import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container className="relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
          {/* Multiple glow layers */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-teal/10 blur-[100px]" />
          <div className="pointer-events-none absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-cyan/8 blur-[80px]" />
          <div className="pointer-events-none absolute inset-0 bg-grid-dense opacity-40" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 text-center sm:px-16 sm:py-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-light">
              Let&rsquo;s Build Together
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to modernize your
              <br />
              <span className="text-gradient-bright">infrastructure?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
              Whether you need a network redesign, a cloud migration, or an
              automation overhaul&mdash;let&rsquo;s scope it together.
            </p>
            <div className="mt-10">
              <Button href="/contact" size="lg" variant="secondary" className="btn-glow">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
