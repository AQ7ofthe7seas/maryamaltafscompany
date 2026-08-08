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
import { materials, spreads } from "@/lib/content";
import { Notebook3D } from "@/components/site/Notebook3D";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Monarch Notebook" },
      {
        name: "description",
        content:
          "Undated spreads, flexible schedule blocks, moon phases, sunrise and sunset, gratitude pages and premium materials — every feature of the Monarch notebook.",
      },
      { property: "og:title", content: "Features — Monarch Notebook" },
      {
        property: "og:description",
        content:
          "Nine spreads, two bindings, six muted colours and 120gsm fountain-pen friendly paper.",
      },
    ],
  }),
  component: Features,
});

const pillars = [
  ["Undated, always", "Start in March. Pause in July. Nothing is wasted."],
  ["One place, not five", "Dates, thoughts, gratitude, lists, schedule, calendar."],
  ["Flexible blocks", "Not an hourly grid. Study, prayer, gym, medication, rest."],
  ["Natural rhythm", "Sunrise, golden hour, sunset, blue hour, moon phase, season."],
  ["Written for calm", "Generous margins, quiet type, nothing to fall behind on."],
  ["Made to last", "Lay-flat binding, rounded corners, years of daily handling."],
];

function Features() {
  return (
    <>
      <PageHero
        label="Features"
        title="Everything it does, quietly."
        intro="No dashboards. No streaks. No notifications. Just the right pages, in the right order, on paper worth writing on."
      />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([title, body], i) => (
            <Reveal key={title} delay={i * 70}>
              <Card className="h-full">
                <Label>{`0${i + 1}`}</Label>
                <h3 className="mt-5 text-3xl">{title}</h3>
                <GoldRule className="my-6 w-12" />
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          label="Page by page"
          title="The nine spreads"
          intro="Each one earned its place after months of use. Nothing decorative survived."
        />
        <div className="mt-20 space-y-4">
          {spreads.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <div className="grid items-baseline gap-4 rounded-2xl border border-border/60 bg-card p-8 transition-shadow duration-700 hover:shadow-[var(--shadow-soft)] md:grid-cols-[auto_1fr_1.2fr] md:gap-10">
                <span className="font-[family-name:var(--font-label)] text-[0.66rem] tracking-[0.2em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.lede}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Action to="/inside" variant="outline">
            Look inside
          </Action>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          label="Specification"
          title="Materials, in detail."
        />
        <div className="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {materials.map(([title, body], i) => (
            <Reveal key={title} delay={i * 40}>
              <p className="font-[family-name:var(--font-display)] text-2xl text-navy-foreground">
                {title}
              </p>
              <GoldRule className="my-4 w-10" />
              <p className="text-sm leading-relaxed text-navy-foreground/60">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          label="Choose yours"
          title="Six colours. Two bindings."
        />
        <Reveal className="mt-16">
          <Notebook3D compact />
        </Reveal>
        <div className="mt-16 text-center">
          <Action to="/shop" size="lg">
            Order Now
          </Action>
        </div>
      </Section>
    </>
  );
}
