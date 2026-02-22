import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="glow-orb glow-orb-teal animate-pulse-slow absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

      <Container className="relative z-10 text-center">
        <p className="text-gradient-bright text-8xl font-bold">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
        <p className="mt-2 text-text-secondary">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Button href="/" className="mt-8 btn-glow">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
