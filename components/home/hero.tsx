import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      {/* ── Background layers ── */}
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      {/* Large glow orbs */}
      <div className="glow-orb glow-orb-teal animate-pulse-slow absolute -top-32 left-1/4 h-[500px] w-[500px]" />
      <div className="glow-orb glow-orb-cyan animate-pulse-slower absolute -bottom-40 right-1/4 h-[400px] w-[400px]" />
      <div className="glow-orb glow-orb-success animate-pulse-slow absolute top-1/2 left-[60%] h-[300px] w-[300px]" />

      {/* Top gradient fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

      {/* Noise texture */}
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-sm font-medium text-cyan backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Infrastructure. Engineered.
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Enterprise infrastructure
            <br />
            <span className="text-gradient-bright">built to scale</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            We design, deploy, and harden the networks, cloud platforms, and
            automation frameworks that keep critical systems running. From
            EVPN-VXLAN fabrics to Terraform pipelines&mdash;we build what
            matters.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" className="btn-glow">
              Start a Conversation
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Decorative terminal-style element */}
        <div className="mx-auto mt-20 max-w-2xl">
          <div className="card-glow rounded-xl p-[1px]">
            <div className="rounded-xl bg-navy-dark/80 backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-text-muted font-mono">infrastructure.tf</span>
              </div>
              {/* Terminal content */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-text-muted">
                  <span className="text-steel"># Deploy production-grade infrastructure</span>
                </p>
                <p className="mt-1">
                  <span className="text-teal-light">resource</span>
                  <span className="text-cyan"> &quot;network_fabric&quot;</span>
                  <span className="text-text-muted"> &quot;production&quot;</span>
                  <span className="text-text-secondary"> {"{"}</span>
                </p>
                <p className="ml-4">
                  <span className="text-text-secondary">topology</span>
                  <span className="text-text-muted"> = </span>
                  <span className="text-success">&quot;spine-leaf&quot;</span>
                </p>
                <p className="ml-4">
                  <span className="text-text-secondary">overlay</span>
                  <span className="text-text-muted">  = </span>
                  <span className="text-success">&quot;evpn-vxlan&quot;</span>
                </p>
                <p className="ml-4">
                  <span className="text-text-secondary">ha</span>
                  <span className="text-text-muted">       = </span>
                  <span className="text-cyan-light">true</span>
                </p>
                <p>
                  <span className="text-text-secondary">{"}"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 separator-glow" />
    </section>
  );
}
