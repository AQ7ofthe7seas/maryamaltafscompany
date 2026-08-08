import { createFileRoute, Link } from "@tanstack/react-router";
import { NightSky } from "@/components/site/NightSky";
import { Notebook3D } from "@/components/site/Notebook3D";
import { Reveal } from "@/components/site/Reveal";
import {
  Action,
  Card,
  GoldRule,
  Label,
  Section,
  SectionHeading,
  Stars,
} from "@/components/site/Primitives";
import { materials, spreads, testimonials } from "@/lib/content";
import notebookHero from "@/assets/notebook-hero.png";
import lifeDesk from "@/assets/life-desk.jpg";
import lifeMountains from "@/assets/life-mountains.jpg";
import spreadDesk from "@/assets/spread-desk.jpg";
import packaging from "@/assets/packaging.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monarch Notebook — The Notebook That Organizes Your Entire Life" },
      {
        name: "description",
        content:
          "Not a planner. Not a journal. One beautifully designed place for your thoughts, memories, schedules, dreams, lists and everyday life.",
      },
      {
        property: "og:title",
        content: "Monarch Notebook — The Notebook That Organizes Your Entire Life",
      },
      {
        property: "og:description",
        content:
          "Premium vegan leather, gold foil, 120gsm paper. One notebook for a whole life.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <NightSky />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-6 pb-28 pt-40 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <Label>Est. 2023 · Made slowly</Label>
            <h1 className="mt-8 max-w-2xl text-5xl leading-[1.03] text-navy-foreground md:text-7xl">
              The Notebook That Organizes Your&nbsp;Entire Life.
            </h1>
            <div className="mt-10 space-y-1 font-[family-name:var(--font-display)] text-2xl text-navy-foreground/80 md:text-3xl">
              <p>Not a planner.</p>
              <p>Not a journal.</p>
              <p>Not just a notebook.</p>
            </div>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-navy-foreground/65">
              One beautifully designed place for your thoughts, memories, schedules,
              dreams, lists and everyday life.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Action to="/inside" size="lg">
                Explore Inside
              </Action>
              <Action to="/shop" size="lg" variant="outline" className="text-navy-foreground">
                Order Yours
              </Action>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <Stars />
              <span className="text-sm text-navy-foreground/60">
                Trusted by thousands.
              </span>
            </div>
          </Reveal>

          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-md animate-float-slow">
              <img
                src={notebookHero}
                alt="Midnight navy Monarch notebook with gold foil logo and elastic band"
                width={1200}
                height={1408}
                className="w-full drop-shadow-[0_50px_80px_oklch(0.1_0.02_265/0.65)]"
              />
              <span className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-[linear-gradient(to_right,transparent,oklch(1_0_0/0.22),transparent)]" />
              </span>
            </div>
            <div className="mx-auto mt-2 h-10 w-2/3 rounded-[100%] bg-[oklch(0.1_0.02_265/0.5)] blur-2xl" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Showcase ---------------- */}
      <Section tone="paper">
        <SectionHeading
          label="The object"
          title="Turn it. Open it. Choose it."
          intro="Six muted cover colours, two bindings, one obsessively considered object. Drag the notebook to see the leather catch the light."
        />
        <Reveal className="mt-20">
          <Notebook3D />
        </Reveal>
      </Section>

      {/* ---------------- Inside preview ---------------- */}
      <Section tone="deep">
        <SectionHeading
          label="Inside the notebook"
          title="Nine spreads. One life."
          intro="Every page was designed for how people actually remember things — at random, in fragments, all at once."
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spreads.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <Link to="/inside" hash={s.slug} className="block h-full">
                <Card className="h-full">
                  <Label>{s.label}</Label>
                  <h3 className="mt-5 text-3xl">{s.title}</h3>
                  <GoldRule className="my-6 w-12" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.lede}</p>
                  <span className="mt-7 block font-[family-name:var(--font-label)] text-[0.64rem] uppercase tracking-[0.18em] text-gold">
                    See the spread
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Full-width lifestyle ---------------- */}
      <section className="zoom-frame relative h-[70svh] min-h-[420px] w-full">
        <img
          src={lifeMountains}
          alt="Open notebook on a wooden sill with misty mountains beyond the window"
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.17_0.024_265/0.85),oklch(0.17_0.024_265/0.25))]" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-6 pb-20 text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-snug text-navy-foreground md:text-5xl">
              “This isn't just a notebook. This is something I'll keep forever.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Why it exists ---------------- */}
      <Section tone="paper">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              label="Why this notebook exists"
              title={<>Built around real human behaviour, not perfect routines.</>}
            />
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Most productivity systems quietly assume you are naturally structured.
                That you wake at the same hour, think in sequences, and enjoy filling
                boxes. Many people are not like that at all.
              </p>
              <p>
                Many think in ideas instead of schedules. Many remember random things at
                random moments. Many would rather write than type. Many want one place
                for everything, not five apps and three planners.
              </p>
              <p>
                So this notebook adapts to the person holding it, instead of asking the
                person to adapt. Nothing is dated. Nothing is scored. Nothing shames you
                for a blank week.
              </p>
            </div>
            <Action to="/why-type-b" variant="outline" className="mt-12">
              Read the whole story
            </Action>
          </Reveal>
          <Reveal delay={150} className="zoom-frame rounded-3xl shadow-[var(--shadow-lift)]">
            <img
              src={spreadDesk}
              alt="Open notebook spread with gold divider lines on an oak desk"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Materials ---------------- */}
      <Section tone="navy">
        <SectionHeading
          invert
          label="Materials & making"
          title="Every detail, argued over for months."
          intro="Sixteen prototypes. Four paper stocks. One cover we finally stopped changing."
        />
        <div className="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {materials.map(([title, body], i) => (
            <Reveal key={title} delay={i * 50}>
              <p className="font-[family-name:var(--font-display)] text-2xl text-navy-foreground">
                {title}
              </p>
              <GoldRule className="my-4 w-10" />
              <p className="text-sm leading-relaxed text-navy-foreground/60">{body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="zoom-frame mt-20 rounded-3xl">
          <img
            src={packaging}
            alt="Monarch notebook in its rigid cream gift box with wax seal"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-full w-full object-cover"
          />
        </Reveal>
      </Section>

      {/* ---------------- Lifestyle band ---------------- */}
      <section className="zoom-frame relative h-[60svh] min-h-[380px] w-full">
        <img
          src={lifeDesk}
          alt="Notebook and coffee on a wooden desk in morning sunlight"
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.17_0.024_265/0.7),transparent)]" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <Reveal>
            <Label>Everyday places</Label>
            <p className="mt-6 max-w-md font-[family-name:var(--font-display)] text-3xl leading-snug text-navy-foreground md:text-4xl">
              A library desk. A prayer mat. A plane window. A rainy afternoon and a
              bedside table.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <Section tone="deep">
        <SectionHeading
          label="Reviews"
          title="What people say after a year."
          intro="Better organisation. Less anxiety. Remembering more. Feeling calmer."
        />
        <div className="mt-20 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="min-w-[85%] snap-center md:min-w-0">
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
        <div className="mt-14 text-center">
          <Action to="/reviews" variant="outline">
            Read all reviews
          </Action>
        </div>
      </Section>

      {/* ---------------- Closing CTA ---------------- */}
      <Section tone="paper" className="text-center">
        <Reveal>
          <Label>The last one you'll need</Label>
          <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
            An investment in clarity, reflection and intentional living.
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
