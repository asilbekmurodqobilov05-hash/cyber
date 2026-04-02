import { Container } from "@/components/ui/container";
import { ErrorState } from "@/components/ui/error-state";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <ErrorState
          title="Page not found"
          description="The page you are looking for is unavailable or may have moved. Explore the alumni platform from the homepage instead."
        />
      </Container>
    </section>
  );
}
