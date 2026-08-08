import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";
import { Notebook3D } from "@/components/site/Notebook3D";
import {
  Action,
  Card,
  GoldRule,
  Label,
  Section,
  SectionHeading,
  Stars,
} from "@/components/site/Primitives";
import {
  EDITIONS,
  GIFT_WRAP_PRICE_GBP,
  NOTEBOOK_PRICE_GBP,
  SHIPPING_REGIONS,
  materials,
  spreads,
  testimonials,
} from "@/lib/content";
import { createCheckoutSession } from "@/lib/checkout";
import spreadDesk from "@/assets/spread-desk.jpg";
import packaging from "@/assets/packaging.jpg";
import lifeDesk from "@/assets/life-desk.jpg";
import lifeMountains from "@/assets/life-mountains.jpg";

const shopSearch = z.object({
  checkout: z.enum(["success", "cancelled"]).optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: shopSearch,
  head: () => ({
    meta: [
      { title: "Shop the Monarch Notebook — £68" },
      {
        name: "description",
        content:
          "Choose your cover, binding and edition. Premium vegan leather, gold foil, 120gsm undated pages, rigid gift box. Shipped worldwide.",
      },
      { property: "og:title", content: "Shop the Monarch Notebook — £68" },
      {
        property: "og:description",
        content:
          "Six muted covers, two bindings, Classic or Islamic edition. Gift wrap available.",
      },
    ],
  }),
  component: Shop,
});

const gallery = [
  [spreadDesk, "Open spread with gold rules on an oak desk"],
  [packaging, "Rigid gift box, tissue paper and wax seal"],
  [lifeDesk, "Notebook and coffee in morning light"],
  [lifeMountains, "Notebook by a window overlooking mountains"],
] as const;

const bundle = [
  ["Monarch Notebook", "£68"],
  ["Brass fountain pen", "£34"],
  ["Refill page pack", "£12"],
];

function Shop() {
  const search = useSearch({ from: "/shop" });
  const [zoom, setZoom] = useState(0);
  const [edition, setEdition] = useState<(typeof EDITIONS)[number]>("Classic Edition");
  const [gift, setGift] = useState(false);
  const [qty, setQty] = useState(1);
  const [region, setRegion] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const unit = NOTEBOOK_PRICE_GBP;
  const total =
    unit * qty + (gift ? GIFT_WRAP_PRICE_GBP : 0) + SHIPPING_REGIONS[region]!.priceGBP;

  const handleCheckout = async () => {
    setCheckoutError(null);
    setIsCheckingOut(true);
    try {
      const { url } = await createCheckoutSession({
        data: { edition, giftWrap: gift, quantity: qty, regionIndex: region },
      });
      window.location.href = url;
    } catch {
      setCheckoutError("Checkout is unavailable right now. Please try again shortly.");
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {search.checkout === "success" ? (
        <div className="fixed inset-x-0 top-0 z-50 bg-gold px-5 py-3 text-center text-sm text-primary-foreground">
          Thank you — your order is confirmed. A receipt is on its way to your inbox.
        </div>
      ) : null}
      {search.checkout === "cancelled" ? (
        <div className="fixed inset-x-0 top-0 z-50 bg-secondary px-5 py-3 text-center text-sm text-foreground">
          Checkout was cancelled. Your bag is unchanged.
        </div>
      ) : null}
      {/* ---------------- Product ---------------- */}
      <Section tone="paper" className="pt-40 md:pt-52">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <Label>Monarch · One notebook for everything</Label>
              <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl">
                The Monarch Notebook
              </h1>
              <div className="mt-6 flex items-center gap-4">
                <Stars />
                <span className="text-sm text-muted-foreground">4.9 · 2,140 reviews</span>
              </div>
              <GoldRule className="my-10 w-24" />
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
                <Label>360° viewer</Label>
                <Notebook3D />
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-8">
              <Label>Zoomable images</Label>
              <div
                className="mt-5 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
                onMouseLeave={() => undefined}
              >
                <img
                  src={gallery[zoom]![0]}
                  alt={gallery[zoom]![1]}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-full w-full origin-center object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.35]"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map(([src, alt], i) => (
                  <button
                    key={alt}
                    onClick={() => setZoom(i)}
                    aria-label={alt}
                    className={`overflow-hidden rounded-xl transition-all duration-500 ${
                      i === zoom ? "ring-2 ring-gold" : "ring-1 ring-border hover:ring-gold/50"
                    }`}
                  >
                    <img src={src} alt={alt} loading="lazy" className="h-20 w-full object-cover" />
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Hover an image to zoom in.
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-14">
              <Label>Inside page previews</Label>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {spreads.map((s) => (
                  <li
                    key={s.slug}
                    className="rounded-2xl border border-border/70 bg-card px-6 py-5"
                  >
                    <span className="font-[family-name:var(--font-display)] text-xl">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{s.lede}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* sticky purchase card */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Card className="p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-[family-name:var(--font-display)] text-4xl">£{unit}</span>
                <span className="label-xs">Free UK delivery</span>
              </div>
              <GoldRule className="my-8" />

              <Label>Edition</Label>
              <div className="mt-4 grid gap-2">
                {EDITIONS.map((e) => (
                  <button
                    key={e}
                    onClick={() => setEdition(e)}
                    className={`rounded-xl border px-5 py-4 text-left text-sm transition-colors duration-500 ${
                      edition === e
                        ? "border-gold bg-gold/10"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <span className="block">{e}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {e === "Islamic Edition"
                        ? "Includes prayer, Ramadan and Qur'an spreads"
                        : "Without the prayer spreads"}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Label>Gift wrap · £6</Label>
                <button
                  onClick={() => setGift((g) => !g)}
                  aria-pressed={gift}
                  className={`relative h-7 w-12 rounded-full border transition-colors duration-500 ${
                    gift ? "border-gold bg-gold/30" : "border-border bg-secondary"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-navy transition-all duration-500 ${
                      gift ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Label>Quantity</Label>
                <div className="flex items-center gap-5 rounded-full border border-border px-4 py-2">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(9, q + 1))} aria-label="Increase">
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <Label>Shipping estimate</Label>
                <div className="mt-4 grid gap-2">
                  {SHIPPING_REGIONS.map(({ name, eta, priceGBP }, i) => (
                    <button
                      key={name}
                      onClick={() => setRegion(i)}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs transition-colors duration-500 ${
                        region === i ? "border-gold bg-gold/10" : "border-border hover:border-gold/50"
                      }`}
                    >
                      <span>{name}</span>
                      <span className="text-muted-foreground">
                        {eta} · {priceGBP > 0 ? `£${priceGBP}` : "Free"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <GoldRule className="my-8" />
              <div className="flex items-baseline justify-between">
                <span className="label-xs">Total</span>
                <span className="font-[family-name:var(--font-display)] text-3xl">£{total}</span>
              </div>
              <Action
                size="lg"
                className="mt-8 w-full"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? "Redirecting…" : "Add to bag"}
              </Action>
              {checkoutError ? (
                <p className="mt-3 text-center text-xs text-destructive">{checkoutError}</p>
              ) : null}
              <p className="mt-5 text-center text-xs text-muted-foreground">
                {edition} · {gift ? "Gift wrapped" : "Standard packaging"} · 30-day returns
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* ---------------- Frequently bought together ---------------- */}
      <Section tone="deep">
        <SectionHeading
          label="Frequently bought together"
          title="The complete desk."
          intro="Add the brass pen and a refill pack — £108 together, saving £6."
        />
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {bundle.map(([name, price], i) => (
            <Reveal key={name} delay={i * 80}>
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <Label>{`0${i + 1}`}</Label>
                  <h3 className="mt-5 text-3xl">{name}</h3>
                </div>
                <p className="mt-8 font-[family-name:var(--font-display)] text-2xl gold-text">
                  {price}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Specification ---------------- */}
      <Section tone="navy">
        <SectionHeading invert label="Specification" title="What you receive." />
        <div className="mt-20 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {materials.map(([title, body], i) => (
            <Reveal key={title} delay={i * 40}>
              <p className="font-[family-name:var(--font-display)] text-xl text-navy-foreground">
                {title}
              </p>
              <GoldRule className="my-3 w-8" />
              <p className="text-sm leading-relaxed text-navy-foreground/60">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Reviews ---------------- */}
      <Section tone="paper">
        <SectionHeading label="Reviews" title="4.9 from 2,140 people." />
        <div className="mt-20 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="min-w-[85%] snap-center md:min-w-0">
              <Card className="h-full">
                <Stars />
                <p className="mt-6 font-[family-name:var(--font-display)] text-xl leading-relaxed">
                  “{t.quote}”
                </p>
                <p className="mt-8 text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* mobile sticky purchase bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <span>
            <span className="block font-[family-name:var(--font-display)] text-2xl">£{total}</span>
            <span className="block text-[0.66rem] text-muted-foreground">{edition}</span>
          </span>
          <Action size="lg" className="flex-1" onClick={handleCheckout} disabled={isCheckingOut}>
            {isCheckingOut ? "Redirecting…" : "Add to bag"}
          </Action>
        </div>
      </div>
      <div className="h-24 lg:hidden" />
    </>
  );
}
