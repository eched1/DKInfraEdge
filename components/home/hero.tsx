import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-teal)_0%,_transparent_50%)] opacity-10" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Infrastructure. Engineered.
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Enterprise infrastructure
            <br />
            <span className="text-cyan">built to scale</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            We design, deploy, and harden the networks, cloud platforms, and
            automation frameworks that keep critical systems running. From
            EVPN-VXLAN fabrics to Terraform pipelines&mdash;we build what
            matters.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Start a Conversation
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
