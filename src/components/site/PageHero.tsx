import type { ReactNode } from "react";
import { GoldRule, Label } from "./Primitives";
import { Reveal } from "./Reveal";

/** Dark navy page opener — keeps the transparent navbar legible on inner pages. */
export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden leather-texture text-navy-foreground">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,oklch(0.34_0.04_265),transparent_70%)]" />
        {Array.from({ length: 90 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[oklch(0.99_0.01_85)] animate-twinkle"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              width: 1 + ((i * 13) % 3) * 0.4,
              height: 1 + ((i * 13) % 3) * 0.4,
              opacity: 0.4,
              animationDelay: `${(i % 7) * 0.9}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-24 pt-44 text-center md:pb-32 md:pt-56">
        <Reveal>
          <Label>{label}</Label>
          <h1 className="mt-7 text-5xl leading-[1.05] md:text-7xl">{title}</h1>
          {intro ? (
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-navy-foreground/70 md:text-lg">
              {intro}
            </p>
          ) : null}
          <GoldRule className="mx-auto mt-12 w-24" />
          {children ? <div className="mt-10">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
