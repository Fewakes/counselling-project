import Link from "next/link";

import { Container } from "./container";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Crisis resources", href: "/crisis" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-sand-50/70 text-sm text-ink/80">
      <Container className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              Aurora Counselling
            </p>
            <p className="mt-1 max-w-md text-sm text-ink/70">
              Affordable, ethical online therapy in English and Polish, guided by
              UK-trained counsellors.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium text-ink">Contact</p>
            <a href="mailto:hello@auroracounselling.com">
              hello@auroracounselling.com
            </a>
            <a href="https://wa.me/00000000000" target="_blank" rel="noreferrer">
              WhatsApp +44 0000 000000
            </a>
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-border/80 px-4 py-2 text-xs font-medium text-ink/70"
            aria-disabled="true"
          >
            EN / PL (coming soon)
          </button>
        </div>
        <div className="flex flex-wrap gap-4 text-xs">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-ink/60">
          © {new Date().getFullYear()} Aurora Counselling. Not a crisis service.
        </p>
      </Container>
    </footer>
  );
}
