import { Container } from "@/components/ui/container";

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Projects Delivered", value: "200+" },
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Technologies", value: "50+" },
];

export function TrustBar() {
  return (
    <section className="border-t border-border bg-surface py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-cyan">{stat.value}</p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
