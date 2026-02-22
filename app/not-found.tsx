import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <p className="text-6xl font-bold text-cyan">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
        <p className="mt-2 text-text-secondary">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
