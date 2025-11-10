import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/motion/section-reveal";

export function ForCounsellorsCta() {
  return (
    <section id="for-counsellors" className="bg-white py-20">
      <Container>
        <SectionReveal className="rounded-[40px] border border-border/80 bg-gradient-to-br from-brand-50 via-white to-sand-100 px-8 py-14 shadow-card-soft">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
                For counsellors
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Earn while completing your placement hours
              </h2>
              <p className="text-base text-ink/75">
                Join our supervised trainee programme. Receive paid sessions, structured mentorship, and flexible online work.
              </p>
              <ul className="space-y-2 text-sm text-ink/80">
                <li>• Month-long onboarding led by our lead counsellor</li>
                <li>• Self-employed model with clear expectations</li>
                <li>• Weekly supervision and peer support</li>
              </ul>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-white/80 p-6 text-sm text-ink/80">
              <p className="font-medium text-ink">Next intake</p>
              <p>Rolling applications. Submit interest to receive onboarding details and requirements.</p>
              <Button asChild size="lg" className="w-full">
                <Link href="/apply">Apply as a counsellor</Link>
              </Button>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
