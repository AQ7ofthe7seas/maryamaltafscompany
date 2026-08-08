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

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "The Calendar — Monarch Notebook" },
      {
        name: "description",
        content:
          "A full undated year: large writing boxes, moon phases, sunrise, sunset, golden and blue hour, holidays and a notes column for every month.",
      },
      { property: "og:title", content: "The Calendar — Monarch Notebook" },
      {
        property: "og:description",
        content:
          "Twelve month spreads printed with moon phases and daylight, so you live with the light instead of the clock.",
      },
    ],
  }),
  component: CalendarPage,
});

const months = [
  ["January", "Winter", "08:04", "16:12", "🌑"],
  ["February", "Winter", "07:31", "17:08", "🌒"],
  ["March", "Spring", "06:32", "17:58", "🌓"],
  ["April", "Spring", "06:22", "19:48", "🌔"],
  ["May", "Spring", "05:22", "20:36", "🌕"],
  ["June", "Summer", "04:46", "21:16", "🌖"],
  ["July", "Summer", "05:00", "21:12", "🌗"],
  ["August", "Summer", "05:46", "20:26", "🌘"],
  ["September", "Autumn", "06:36", "19:20", "🌑"],
  ["October", "Autumn", "07:26", "18:12", "🌒"],
  ["November", "Autumn", "07:22", "16:16", "🌓"],
  ["December", "Winter", "08:00", "15:52", "🌕"],
];

const light = [
  ["Sunrise", "The first honest hour of the day, printed for every month."],
  ["Golden hour", "Warm, low light — the best forty minutes to walk or write."],
  ["Sunset", "Where the day is closed rather than abandoned."],
  ["Blue hour", "The quiet after the sun, before the night."],
  ["Moon phase", "Printed in gold across each month spread."],
  ["Season", "Because a February week should not be planned like a June one."],
];

const prayer = [
  "Five daily prayers",
  "Jumu'ah reminders",
  "Ramadan tracker",
  "Qur'an goals",
  "Tasbeeh tracker",
];

function CalendarPage() {
  return (
    <>
      <PageHero
        label="Calendar"
        title="A whole year, given room."
        intro="Twelve undated month spreads with boxes large enough to actually write inside — and the daylight printed alongside them."
      />

      <Section tone="paper">
        <SectionHeading
          label="Twelve spreads"
          title="Every month, at a glance."
          intro="Moon phase, sunrise, sunset and season sit in the margin. Holidays are marked softly, in gold, never shouting."
        />
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {months.map(([name, season, rise, set, moon], i) => (
            <Reveal key={name} delay={i * 45}>
              <Card className="h-full">
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl">{name}</h3>
                  <span aria-hidden className="text-2xl">
                    {moon}
                  </span>
                </div>
                <GoldRule className="my-6" />
                <dl className="space-y-2 font-[family-name:var(--font-label)] text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground">
                  <div className="flex justify-between">
                    <dt>Sunrise</dt>
                    <dd className="text-foreground">{rise}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunset</dt>
                    <dd className="text-foreground">{set}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Season</dt>
                    <dd className="text-foreground">{season}</dd>
                  </div>
                </dl>
                <div className="mt-7 grid grid-cols-7 gap-1" aria-hidden>
                  {Array.from({ length: 35 }).map((_, d) => (
                    <span key={d} className="aspect-square rounded-[3px] bg-secondary" />
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          label="Sunrise & sunset"
          title="Live with the light."
          intro="Daylight steadies sleep, mood and attention more reliably than any productivity method. Morning light sets your body clock; evening light lets it settle. The notebook simply tells you when both happen, so you can plan a day around your biology rather than against it."
        />
        <div className="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {light.map(([title, body], i) => (
            <Reveal key={title} delay={i * 60}>
              <p className="font-[family-name:var(--font-display)] text-2xl text-navy-foreground">
                {title}
              </p>
              <GoldRule className="my-4 w-10" />
              <p className="text-sm leading-relaxed text-navy-foreground/60">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Label>Optional edition</Label>
            <h2 className="mt-6 text-4xl leading-[1.08] md:text-5xl">Prayer Times</h2>
            <GoldRule className="my-8 w-20" />
            <p className="text-base leading-relaxed text-muted-foreground">
              The Islamic Edition adds a dedicated daily prayer tracker, designed with the
              same restraint as every other spread — quiet type, gold rules, generous
              space. The Classic Edition omits it entirely. Same paper, same cover, same
              price; the choice is simply yours at checkout.
            </p>
            <ul className="mt-10 flex flex-wrap gap-2">
              {prayer.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-gold/30 bg-card px-4 py-2 font-[family-name:var(--font-label)] text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <Card className="p-10">
              <Label>Daily tracker</Label>
              <ul className="mt-8 space-y-5">
                {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((p) => (
                  <li key={p} className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-display)] text-2xl">{p}</span>
                    <span className="h-5 w-5 rounded-full border border-gold/60" />
                  </li>
                ))}
              </ul>
              <GoldRule className="my-8" />
              <p className="text-xs text-muted-foreground">
                Jumu'ah, Ramadan, Qur'an and tasbeeh spreads follow.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" className="text-center">
        <Reveal>
          <Label>Undated, always</Label>
          <h2 className="mx-auto mt-7 max-w-2xl text-4xl md:text-6xl">
            Begin whenever you like.
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
