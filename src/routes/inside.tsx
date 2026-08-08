import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Action, GoldRule, Label, Section } from "@/components/site/Primitives";
import { spreads } from "@/lib/content";
import spreadDesk from "@/assets/spread-desk.jpg";
import lifeDesk from "@/assets/life-desk.jpg";

export const Route = createFileRoute("/inside")({
  head: () => ({
    meta: [
      { title: "Inside the Notebook — Monarch" },
      {
        name: "description",
        content:
          "Walk through every spread: Important Dates, Personal Thoughts, Gratitude, Things To Buy, Things To Ask For, Schedule, Calendar, Sunrise & Sunset and the optional Prayer Times edition.",
      },
      { property: "og:title", content: "Inside the Notebook — Monarch" },
      {
        property: "og:description",
        content:
          "Nine spreads, photographed on a wooden desk, explained page by page.",
      },
    ],
  }),
  component: Inside,
});

function Inside() {
  return (
    <>
      <PageHero
        label="Inside the notebook"
        title="Turn every page."
        intro="Each spread lies open on a wooden desk. Read them slowly — this is where the notebook stops being paper and starts being useful."
      />

      {spreads.map((s, i) => {
        const flipped = i % 2 === 1;
        return (
          <Section key={s.slug} id={s.slug} tone={i % 2 === 0 ? "paper" : "deep"}>
            <div
              className={`grid gap-14 lg:grid-cols-2 lg:items-center ${
                flipped ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <Label>{s.label}</Label>
                <h2 className="mt-6 text-4xl leading-[1.08] md:text-6xl">{s.title}</h2>
                <GoldRule className="my-8 w-20" />
                <p className="font-[family-name:var(--font-display)] text-2xl leading-snug">
                  {s.lede}
                </p>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-gold/30 bg-card px-4 py-2 font-[family-name:var(--font-label)] text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={140}>
                <div className="relative rounded-3xl bg-[linear-gradient(135deg,var(--color-brown),color-mix(in_oklab,var(--color-brown)_60%,black))] p-5 shadow-[var(--shadow-lift)] md:p-8">
                  <div className="zoom-frame overflow-hidden rounded-2xl">
                    <img
                      src={i % 3 === 1 ? lifeDesk : spreadDesk}
                      alt={`${s.title} spread lying open on a wooden desk`}
                      loading="lazy"
                      width={1408}
                      height={1008}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="pointer-events-none absolute inset-x-1/2 top-8 bottom-8 w-px bg-[oklch(0_0_0/0.15)]" />
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <Section tone="navy" className="text-center">
        <Reveal>
          <Label>Ready</Label>
          <h2 className="mx-auto mt-7 max-w-2xl text-4xl text-navy-foreground md:text-6xl">
            One notebook. Everything.
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
