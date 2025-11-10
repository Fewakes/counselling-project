"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Container } from "./container";

const navItems = [
  { label: "For Clients", href: "#how-it-works" },
  { label: "For Counsellors", href: "#for-counsellors" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-xl transition-all",
        isScrolled ? "border-border/80 shadow-sm" : "border-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-4 transition-all",
          isScrolled ? "py-3" : "py-5",
        )}
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Aurora Counselling
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink focus-visible:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" className="text-ink">
            <Link href="/apply">Apply</Link>
          </Button>
          <Button asChild>
            <Link href="/book">Book intro call</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-ink"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background">
        <div className="mt-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline">
            <Link href="/apply" onClick={() => setOpen(false)}>
              Apply as counsellor
            </Link>
          </Button>
          <Button asChild>
            <Link href="/book" onClick={() => setOpen(false)}>
              Book intro call
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
