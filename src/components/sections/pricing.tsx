import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/motion/section-reveal";

const plans = [
  {
    title: "Senior Counsellor",
    price: "From £XX/session",
    highlight: "Most popular",
    points: [
      "Accredited UK-trained therapist",
      "Advanced experience across specialisms",
      "Ideal for complex or long-term support",
    ],
  },
  {
    title: "Supervised Trainee",
    price: "£30/session",
    highlight: "Best value",
    points: [
      "Carefully selected trainees",
      "Paid and supervised by senior counsellor",
      "Great for regular, affordable support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-sand-50/60 py-20">
      <Container>
        <SectionReveal className="space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
              Pricing & options
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">Transparent, ethical pricing</h2>
            <p className="mx-auto max-w-3xl text-base text-ink/70">
              Choose between a senior counsellor or a supervised trainee. Every session follows the same ethical standards,
              and trainees are paid fairly for their time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <Card key={plan.title} className="relative border border-border/70 bg-white/90 shadow-card-soft">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-ink">{plan.title}</CardTitle>
                    {plan.highlight && <Badge className="bg-brand-100 text-brand-700">{plan.highlight}</Badge>}
                  </div>
                  <CardDescription className="text-lg font-semibold text-brand-700">
                    {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-sm text-ink/80">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/book">Book a free intro call</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl border border-border/80 bg-white/80 p-6 text-center text-sm text-ink/80">
            Trainees are paid for their time, and sessions are overseen by a senior counsellor. Transparent, ethical care for every budget.
          </div>

          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/book">Compare options with us</Link>
            </Button>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
