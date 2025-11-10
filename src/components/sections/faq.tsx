import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion/section-reveal";

const faqs = [
  {
    question: "What’s the difference between a senior counsellor and a trainee?",
    answer:
      "Senior counsellors are accredited therapists with years of clinical experience. Trainees are in the final stages of training, work under supervision, and follow the same ethical guidelines. You get to choose which option fits your needs and budget.",
  },
  {
    question: "Is the trainee service safe and confidential?",
    answer:
      "Yes. Trainees are vetted, insured, and supervised weekly. Sessions follow UK data and safeguarding standards, and you can pause or change counsellors at any time.",
  },
  {
    question: "Can I switch between options later?",
    answer:
      "Absolutely. You can move from trainee to senior (or vice versa) if your needs, availability, or budget change.",
  },
  {
    question: "Do you offer sessions in Polish?",
    answer: "Yes—our lead counsellor works bilingually (Polish and English) and guides trainees on cultural sensitivity.",
  },
  {
    question: "How do cancellations work?",
    answer: "We ask for 24 hours notice. Sessions cancelled later may be charged to protect counsellor time.",
  },
  {
    question: "What if I need urgent help?",
    answer:
      "We’re not a crisis service. If you are in immediate danger, contact local emergency services or visit our crisis resource page for helplines.",
  },
  {
    question: "How do payments work?",
    answer:
      "You’ll receive a secure payment link before each session. We’ll automate packages and invoices in a later release.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-mist py-20">
      <Container>
        <SectionReveal className="space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-ink">Common questions</h2>
            <p className="mx-auto max-w-2xl text-base text-ink/70">
              Ask us anything. We’ll expand this section as we learn from clients and counsellors.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border/80 bg-white/90 p-5 shadow-card-soft transition focus-within:border-brand-500"
              >
                <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-ink">
                  {item.question}
                  <span
                    className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-border/80 text-center text-sm text-ink/60 transition group-open:bg-brand-500 group-open:text-white"
                    aria-hidden
                  >
                    <span className="block group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <p className="pt-4 text-sm text-ink/75">{item.answer}</p>
              </details>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
