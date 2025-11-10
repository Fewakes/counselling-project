import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion/section-reveal";

const topics = [
  "Anxiety",
  "Stress",
  "Relationships",
  "Low mood",
  "Self-esteem",
  "Burnout",
  "ADHD & Autism support",
  "Life transitions",
  "Work challenges",
];

export function Specialisations() {
  return (
    <section id="specialisations" className="bg-white py-20">
      <Container>
        <SectionReveal className="space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
              Specialisations
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">
              Support that meets you where you are
            </h2>
            <p className="mx-auto max-w-2xl text-base text-ink/70">
              Choose from a broad range of specialisations. We’ll match you with the counsellor whose experience best fits your needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center rounded-full border border-border/80 bg-mist px-5 py-2 text-sm font-medium text-ink/80"
              >
                {topic}
              </span>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
