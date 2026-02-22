import { Container } from "@/components/ui/container";

const stats = [
  { label: "Years of Experience", value: "15+", accent: "text-cyan" },
  { label: "Projects Delivered", value: "200+", accent: "text-teal-light" },
  { label: "Uptime SLA", value: "99.99%", accent: "text-success" },
  { label: "Technologies", value: "50+", accent: "text-cyan-light" },
];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-16">
      {/* Subtle shine */}
      <div className="shine-line pointer-events-none absolute inset-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative text-center">
              {/* Vertical divider between stats (desktop) */}
              {i > 0 && (
                <div className="absolute -left-4 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border-light to-transparent lg:block" />
              )}
              <p className={`text-4xl font-bold tracking-tight ${stat.accent}`}>
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-text-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 separator-glow" />
    </section>
  );
}
