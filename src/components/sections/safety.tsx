import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion/section-reveal";

const safetyPoints = [
  "Confidential sessions that follow UK ethical frameworks.",
  "Clear scope of practice—when necessary we signpost to other services.",
  "All trainees receive weekly supervision and case reviews.",
  "Clients can ask to switch counsellors at any time.",
];

export function Safety() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionReveal className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[32px] border border-border/60 bg-sand-50/80 p-6 shadow-card-soft">
            <Image
              src="/images/safety-shield.svg"
              alt="Shield representing trust and safety"
              width={640}
              height={640}
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
                Trust & safety
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Ethical care with transparent boundaries
              </h2>
              <p className="text-base text-ink/75">
                We centre client safety in every interaction—from intake to ongoing sessions. Supervision, insurance, and crisis protocols are in place before anyone is matched.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/80 bg-sand-50/80 p-8 shadow-card-soft">
              <ul className="space-y-3 text-sm text-ink/80">
                {safetyPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-sm text-ink/70">
                <p className="font-medium text-ink">Need urgent help?</p>
                <p>We’re not a crisis service. Please contact local emergency support instead.</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs">
                  <Link href="/crisis" className="underline">
                    Crisis resources
                  </Link>
                  <Link href="/privacy" className="underline">
                    Privacy policy
                  </Link>
                  <Link href="/terms" className="underline">
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
