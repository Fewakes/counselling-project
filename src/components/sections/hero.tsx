import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/motion/section-reveal";

const trustBadges = [
  "UK-trained",
  "Confidential",
  "Secure online",
  "Polish & English",
];

const benefits = [
  "No long contracts",
  "Cancel anytime",
  "Transparent pricing",
];

export function Hero() {
  return (
    <section className="bg-mist" aria-labelledby="hero-heading">
      <Container>
        <SectionReveal className="flex flex-col gap-12 pb-16 pt-20 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-600">
                Affordable online counselling
              </p>
              <h1
                id="hero-heading"
                className="text-4xl font-semibold leading-tight text-ink md:text-5xl"
              >
                High-quality counselling at a fair price.
              </h1>
              <p className="text-lg text-ink/80">
                UK-trained counsellors online. Choose a senior therapist or a
                supervised trainee—same standards, lower cost.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/book">Book a free 15-min intro call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#pricing">See pricing</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-ink/70">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-4 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border/70 bg-white/90 p-4 shadow-card-soft">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-600">
                Why clients choose us
              </p>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm font-medium text-ink/80">
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs uppercase tracking-wide text-brand-700"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-br from-sand-50 via-brand-50 to-brand-200 p-6 shadow-card-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-brand-200/40" />
              <Image
                src="/images/hero-abstract.svg"
                alt="Calm abstract illustration"
                width={900}
                height={900}
                priority
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
