import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/motion/section-reveal";

const testimonials = [
  {
    quote:
      "I appreciated being matched so quickly. The trainee I worked with was kind, present, and clearly supervised. It never felt ‘cheap’.",
    name: "Client, 32",
  },
  {
    quote:
      "Having the intro call first meant I felt zero pressure. I stayed with my counsellor for months because it simply worked.",
    name: "Client, 41",
  },
  {
    quote:
      "Being able to speak Polish when the topic got emotional was invaluable. It felt like therapy finally fit my reality.",
    name: "Client, 28",
  },
];

export function Testimonials() {
  return (
    <section className="bg-mist py-20">
      <Container>
        <SectionReveal className="space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
              Stories
            </p>
            <h2 className="text-3xl font-semibold text-ink">What clients share</h2>
            <p className="mx-auto max-w-2xl text-base text-ink/70">
              Real experiences from people who chose affordable counselling without compromising on care.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="relative border border-border/70 bg-white/90 shadow-card-soft">
                <CardContent className="space-y-4 p-6">
                  <span aria-hidden className="text-4xl text-brand-200">
                    “
                  </span>
                  <p className="text-base text-ink/80">{item.quote}</p>
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
