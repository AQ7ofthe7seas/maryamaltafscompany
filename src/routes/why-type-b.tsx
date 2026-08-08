import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Action,
  Card,
  GoldRule,
  Label,
  Section,
  SectionHeading,
} from "@/components/site/Primitives";
import lifeMountains from "@/assets/life-mountains.jpg";

export const Route = createFileRoute("/why-type-b")({
  head: () => ({
    meta: [
      { title: "Why Type B — Monarch Notebook" },
      {
        name: "description",
        content:
          "Most productivity systems assume you are naturally structured. Many thoughtful people are not. This notebook was built around real human behaviour instead of perfect routines.",
      },
      { property: "og:title", content: "Why Type B — Monarch Notebook" },
      {
        property: "og:description",
        content:
          "It adapts to you instead of asking you to adapt. No dates, no streaks, no shame.",
      },
    ],
  }),
  component: WhyTypeB,
});

const truths = [
  [
    "You think in ideas, not schedules",
    "The thought arrives whole and unannounced, rarely at nine on a Tuesday. A system built on time slots has nowhere to put it.",
  ],
  [
    "You remember things at random",
    "In the shower, on the bus, halfway through something else. What you need is one trusted place, always nearby.",
  ],
  [
    "You'd rather write than type",
    "Handwriting is slower, and that is the point: it makes you decide what actually matters.",
  ],
  [
    "You want one place, not five",
    "A planner, a journal, a notes app, a list app and a calendar is not a system. It is five places to lose something.",
  ],
  [
    "You resent being scored",
    "Streaks and completion rates turn a quiet habit into a performance you can fail.",
  ],
  [
    "You keep starting over",
    "Because dated pages punish the weeks life happens. Undated pages simply wait for you.",
  ],
];

function WhyTypeB() {
  return (
    <>
      <PageHero
        label="Why Type B"
        title="For people who never fit the system."
        intro="Not disorganised. Differently organised. This notebook was designed for how you already are."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-snug text-foreground md:text-4xl">
              Almost every productivity system quietly assumes that you are naturally
              structured.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              It assumes you wake at the same hour, think in sequences, and enjoy filling
              boxes. It assumes that if the method is good enough, you will become the
              kind of person the method was designed for.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Many thoughtful people are not that person, and never will be. They think
              deeply and feel deeply. They notice things. They hold ten open threads at
              once. They remember a friend's birthday while boiling pasta and lose it
              again before the water drains.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              For years the conclusion offered to them was that they lacked discipline.
              The truer explanation is simpler: the tools were built for a different mind.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-foreground">
              So we built the opposite. A notebook shaped around real human behaviour
              rather than perfect routines — one that adapts to you instead of asking you
              to adapt to it.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          label="Six honest truths"
          title="You are not the problem."
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {truths.map(([title, body], i) => (
            <Reveal key={title} delay={i * 70}>
              <Card className="h-full">
                <Label>{`0${i + 1}`}</Label>
                <h3 className="mt-5 text-2xl leading-snug">{title}</h3>
                <GoldRule className="my-6 w-12" />
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="zoom-frame relative h-[65svh] min-h-[400px] w-full">
        <img
          src={lifeMountains}
          alt="Notebook and candle by a window looking out over mountains"
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.17_0.024_265/0.88),oklch(0.17_0.024_265/0.3))]" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl items-end px-6 pb-20 text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-snug text-navy-foreground md:text-5xl">
              It adapts to the user instead of forcing the user to adapt.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="paper" className="text-center">
        <Reveal>
          <Label>Begin gently</Label>
          <h2 className="mx-auto mt-7 max-w-2xl text-4xl md:text-6xl">
            One place for everything you carry.
          </h2>
          <GoldRule className="mx-auto my-12 w-24" />
          <div className="flex flex-wrap justify-center gap-4">
            <Action to="/shop" size="lg">
              Order Yours
            </Action>
            <Action to="/inside" size="lg" variant="outline">
              Explore Inside
            </Action>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
