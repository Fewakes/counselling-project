import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/motion/section-reveal";

export function FinalCta() {
  return (
    <section className="bg-transparent py-20">
      <Container>
        <SectionReveal>
          <div className="rounded-[40px] border border-brand-100 bg-gradient-to-br from-sand-50 via-white to-brand-50 px-8 py-16 text-center text-ink shadow-card-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
              Ready?
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Ready to talk? Book a free intro call today.
            </h2>
            <p className="mt-3 text-base text-ink/80">
              Share your goals, get matched, and start therapy on your terms—no long contracts.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/book">Book a free 15-min intro call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
