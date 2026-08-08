import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Action, GoldRule, Label, Section } from "@/components/site/Primitives";
import { faqs } from "@/lib/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Monarch Notebook" },
      {
        name: "description",
        content:
          "Is it dated? Does fountain pen ink bleed? Is there an Islamic edition? Shipping times, left-handed use and everything else people ask.",
      },
      { property: "og:title", content: "FAQ — Monarch Notebook" },
      {
        property: "og:description",
        content: "Undated pages, 120gsm paper, worldwide shipping — answered plainly.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        label="FAQ"
        title="Everything people ask."
        intro="Plainly answered, without marketing language."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map(([q, a]) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              }),
            }}
          />
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 40}>
              <div className="border-b border-border/70">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-500 hover:text-gold"
                >
                  <span className="font-[family-name:var(--font-display)] text-2xl md:text-3xl">
                    {q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-gold transition-transform duration-700 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <p className="min-h-0 pb-8 pr-10 text-base leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep" className="text-center">
        <Reveal>
          <Label>Still wondering?</Label>
          <h2 className="mx-auto mt-7 max-w-2xl text-4xl md:text-5xl">
            Write to us. A person replies.
          </h2>
          <GoldRule className="mx-auto my-12 w-24" />
          <Action to="/shop" size="lg">
            Order Yours
          </Action>
        </Reveal>
      </Section>
    </>
  );
}
