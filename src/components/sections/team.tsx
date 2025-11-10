import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionReveal } from "@/components/motion/section-reveal";

const trainees = [
  {
    name: "Trainee Counsellor",
    focus: "Integrative approach • Adults & young people",
  },
  {
    name: "Trainee Counsellor",
    focus: "CBT-informed • Anxiety & confidence",
  },
  {
    name: "Trainee Counsellor",
    focus: "Humanistic • Relationships & self-esteem",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-mist py-20">
      <Container>
        <SectionReveal className="space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
              Meet the team
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">
              Guided by accredited expertise
            </h2>
            <p className="mx-auto max-w-3xl text-base text-ink/70">
              Every trainee works under supervision from our lead counsellor, ensuring the same standards of care across all sessions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border border-border/80 bg-white shadow-card-soft">
              <CardHeader className="space-y-4">
                <div className="overflow-hidden rounded-3xl border border-border/70">
                  <Image
                    src="/images/team-lead.svg"
                    alt="Illustration of lead counsellor Katarzyna"
                    width={640}
                    height={640}
                    className="h-auto w-full"
                  />
                </div>
                <div>
                  <CardTitle className="text-2xl text-ink">Katarzyna Kowalska</CardTitle>
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-600">
                    Lead Counsellor · PL / EN
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-ink/80">
                <p>
                  UK-trained and accredited integrative counsellor specialising in anxiety, trauma, and cross-cultural transitions. Over 10 years supporting
                  adults in Polish and English.
                </p>
                <ul className="space-y-2 text-ink/80">
                  <li>• BACP registered, MSc Integrative Counselling</li>
                  <li>• Supervisor to all trainee counsellors</li>
                  <li>• Offers therapy and 1:1 mentoring</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {trainees.map((trainee, index) => (
                <Card key={`${trainee.name}-${index}`} className="border border-border/70 bg-white/90">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-ink">{trainee.name}</CardTitle>
                      <p className="text-sm text-ink/70">{trainee.focus}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-ink/70">
                    Completing final supervised hours. Available for £30 sessions under Katarzyna’s weekly supervision.
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
