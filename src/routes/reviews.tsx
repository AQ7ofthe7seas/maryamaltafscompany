import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Action,
  Card,
  GoldRule,
  Label,
  Section,
  Stars,
} from "@/components/site/Primitives";
import { testimonials } from "@/lib/content";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Monarch Notebook" },
      {
        name: "description",
        content:
          "Stories from students, professionals, writers and therapists: better organisation, less anxiety, remembering more and feeling calmer.",
      },
      { property: "og:title", content: "Reviews — Monarch Notebook" },
      {
        property: "og:description",
        content: "4.9 out of 5 from thousands of thoughtful people.",
      },
    ],
  }),
  component: Reviews,
});

const stats = [
  ["4.9 / 5", "Average rating"],
  ["12,400+", "Notebooks in use"],
  ["94%", "Still using it after a year"],
  ["38", "Countries shipped to"],
];

function Reviews() {
  return (
    <>
      <PageHero
        label="Reviews"
        title="Kept, not abandoned."
        intro="The measure of a notebook is whether it is still open in November. Here is what people say after living with it."
      >
        <Stars />
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 70} className="text-center">
              <p className="font-[family-name:var(--font-display)] text-5xl gold-text">{n}</p>
              <GoldRule className="mx-auto my-5 w-10" />
              <p className="label-xs">{l}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 60}
              className="min-w-[85%] snap-center md:min-w-0"
            >
              <Card className="h-full">
                <Stars />
                <p className="mt-6 font-[family-name:var(--font-display)] text-xl leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-[family-name:var(--font-label)] text-xs text-navy-foreground">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper" className="text-center">
        <Reveal>
          <Label>Join them</Label>
          <h2 className="mx-auto mt-7 max-w-2xl text-4xl md:text-6xl">
            The last notebook you'll need.
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
