"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { ErrorState } from "@/components/ui/error-state";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <section className="py-20">
          <Container>
            <ErrorState
              title="Something went wrong"
              description="An unexpected error occurred while loading the alumni platform. Please refresh the page or return to the homepage."
            />
          </Container>
        </section>
      </body>
    </html>
  );
}
