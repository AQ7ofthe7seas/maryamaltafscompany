import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Action,
  GoldRule,
  Label,
  Section,
  SectionHeading,
} from "@/components/site/Primitives";
import packaging from "@/assets/packaging.jpg";
import lifeDesk from "@/assets/life-desk.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Monarch Notebook" },
      {
        name: "description",
        content:
          "Monarch is an idea by Maryam Altaf: one notebook, built because life is too complicated for five different planners. Designed slowly, improved over months, made with obsessive attention to detail.",
      },
      { property: "og:title", content: "About — Monarch Notebook" },
      {
        property: "og:description",
        content:
          "An idea by Maryam Altaf. Designed slowly. Improved over months. Made to be kept.",
      },

    ],
  }),
  component: About,
});

const chapters = [
  [
    "It began with Maryam Altaf",
    "Monarch is her idea: one notebook that could hold an entire life. Every spread here started as a note in her own handwriting, tested for months before it was ever printed.",
  ],
  [
    "It started as frustration",
    "A desk with a planner that ran out in April, a journal used twice, three notes apps and a birthday still forgotten. The problem was never effort. It was fragmentation.",
  ],
  [
    "One notebook, everything",
    "We wrote down every place life actually lands: dates, thoughts, gratitude, lists, questions, routines, the calendar, the light. Then we gave each one a permanent home.",
  ],
  [
    "Designed slowly",
    "Sixteen prototypes over eleven months. Four paper stocks tested with fountain pens. Margins moved by a millimetre at a time until the page finally felt calm.",
  ],
  [
    "Obsessive detail",
    "Real gold foil rather than printed ink. A ribbon matched to each cover. Binding that lies genuinely flat. A box worth keeping after you take the notebook out.",
  ],
];


function About() {
  return (
    <>
      <PageHero
        label="About"
        title="One notebook. Everything."
        intro="An idea by Maryam Altaf — built because life is too complicated for five different planners."
      />


      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              label="Our story"
              title="Made slowly, on purpose."
            />
            <div className="mt-10 space-y-10">
              {chapters.map(([title, body], i) => (
                <div key={title}>
                  <Label>{`Chapter 0${i + 1}`}</Label>
                  <h3 className="mt-4 text-3xl">{title}</h3>
                  <GoldRule className="my-5 w-12" />
                  <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-6 lg:sticky lg:top-32">
            <div className="zoom-frame rounded-3xl shadow-[var(--shadow-lift)]">
              <img
                src={packaging}
                alt="Monarch notebook packaging with wax seal and tissue paper"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="zoom-frame rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={lifeDesk}
                alt="Notebook open on a wooden desk with coffee in morning light"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy" className="text-center">
        <Reveal>
          <Label>Our promise</Label>
          <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-[1.1] text-navy-foreground md:text-6xl">
            Nothing here is designed to be replaced next year.
          </h2>
          <GoldRule className="mx-auto my-12 w-24" />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-navy-foreground/65">
            We make one notebook. We improve it quietly. We would rather sell you a single
            object you keep for a decade than a subscription you resent by March.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Action to="/shop" size="lg">
              Order Yours
            </Action>
            <Action to="/faq" size="lg" variant="outline" className="text-navy-foreground">
              Read the FAQ
            </Action>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
