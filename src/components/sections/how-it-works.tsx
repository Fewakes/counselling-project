import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/motion/section-reveal";
import { CheckCircle2, ClipboardList, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Tell us what you need",
    description: "Share your goals and preferences via a short intake quiz so we understand how to support you.",
    icon: ClipboardList,
  },
  {
    title: "We match you",
    description: "Receive a curated shortlist of senior counsellors or supervised trainees based on your answers.",
    icon: Sparkles,
  },
  {
    title: "Meet for a free chat",
    description: "Book a complimentary 15-minute call to see if the counsellor feels like a good fit.",
    icon: MessageCircle,
  },
  {
    title: "Start therapy",
    description: "Move forward with weekly or flexible sessions—stay as long as it feels helpful.",
    icon: CheckCircle2,
  },
];

const benefits = [
  "Flexible online sessions",
  "Affordable options",
  "UK-trained supervision",
  "Private & secure",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <Container>
        <SectionReveal className="space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
              For clients
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">How it works</h2>
            <p className="mx-auto max-w-2xl text-base text-ink/70">
              A supportive journey from first hello to ongoing sessions—with transparent steps and constant supervision.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={step.title} className="h-full border border-border/70 bg-white/90">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between text-sm font-medium text-brand-700">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-semibold text-brand-700">
                      {index + 1}
                    </span>
                    <step.icon className="h-5 w-5 text-brand-600" aria-hidden />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="text-sm text-ink/70">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {benefits.map((benefit) => (
              <span
                key={benefit}
                className="inline-flex items-center rounded-full border border-border/80 bg-sand-50 px-4 py-2 text-sm font-medium text-ink/80"
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="mx-auto max-w-4xl">
            <Image
              src="/images/how-it-works.svg"
              alt="Abstract flow representing client journey"
              width={640}
              height={400}
              className="w-full rounded-3xl border border-border/60 shadow-card-soft"
            />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
