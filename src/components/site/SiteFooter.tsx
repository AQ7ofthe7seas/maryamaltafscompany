import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Action, GoldRule, Label } from "./Primitives";

const columns: { title: string; links: { label: string; to?: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Inside the Notebook", to: "/inside" },
      { label: "Features", to: "/features" },
      { label: "Calendar", to: "/calendar" },
      { label: "Why Type B", to: "/why-type-b" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Support" },
      { label: "Shipping" },
      { label: "Returns" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "About", to: "/about" },
      { label: "Reviews", to: "/reviews" },
      { label: "Privacy" },
      { label: "Terms" },
    ],
  },
];

const social = ["Instagram", "Pinterest", "TikTok", "YouTube"];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="grain leather-texture text-navy-foreground">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <span className="font-[family-name:var(--font-display)] text-3xl">Monarch</span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-foreground/65">
              One beautifully made notebook for your thoughts, memories, schedules,
              dreams, lists and everyday life. Written slowly, kept forever.
            </p>
            <p className="mt-5 font-[family-name:var(--font-label)] text-[0.66rem] uppercase tracking-[0.16em] text-gold">
              An idea by Maryam Altaf
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-10"
            >
              <Label>Letters, rarely sent</Label>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-full border border-navy-foreground/20 bg-transparent px-5 py-3 text-sm outline-none transition-colors duration-500 placeholder:text-navy-foreground/40 focus:border-gold"
                />
                <Action type="submit">{sent ? "Thank you" : "Subscribe"}</Action>
              </div>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <Label>{col.title}</Label>
                <ul className="mt-6 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <Link
                          to={l.to}
                          className="text-sm text-navy-foreground/70 transition-colors duration-500 hover:text-gold"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <span className="text-sm text-navy-foreground/70">{l.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <GoldRule className="my-14" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} Monarch Notebook. An idea by Maryam Altaf. Made slowly.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {social.map((s) => (
              <li
                key={s}
                className="font-[family-name:var(--font-label)] text-[0.66rem] uppercase tracking-[0.16em] text-navy-foreground/60 transition-colors duration-500 hover:text-gold"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
