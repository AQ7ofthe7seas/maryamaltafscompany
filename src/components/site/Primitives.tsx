import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return <span className="label-xs block">{children}</span>;
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <hr className={`gold-rule ${className}`} />;
}

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "deep" | "navy" | "plain";
  id?: string;
}) {
  const tones: Record<string, string> = {
    paper: "paper-texture text-foreground",
    deep: "bg-secondary text-foreground",
    navy: "leather-texture text-navy-foreground",
    plain: "bg-card text-foreground",
  };
  return (
    <section id={id} className={`grain relative ${tones[tone]} ${className}`}>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-36">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  align = "center",
  invert = false,
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {label ? <Label>{label}</Label> : null}
      <h2
        className={`mt-6 text-4xl leading-[1.08] md:text-6xl ${invert ? "text-navy-foreground" : ""}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-7 text-base leading-relaxed md:text-lg ${
            invert ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
      <GoldRule
        className={`mt-10 ${align === "center" ? "mx-auto w-24" : "w-24"}`}
      />
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost" | "navy";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-[family-name:var(--font-label)] uppercase tracking-[0.18em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";

const variants: Record<string, string> = {
  gold:
    "bg-gold text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:brightness-[1.06]",
  navy: "bg-navy text-navy-foreground hover:bg-navy/90",
  outline:
    "border border-gold/50 text-current hover:border-gold hover:bg-gold/10",
  ghost: "text-current hover:text-gold",
};

const sizes: Record<string, string> = {
  md: "px-6 py-3 text-[0.68rem]",
  lg: "px-9 py-4 text-[0.72rem]",
};

export function Action({
  children,
  to,
  onClick,
  variant = "gold",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? "pointer-events-none opacity-60" : ""
  }`;
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "gold" ? (
        <span className="pointer-events-none absolute inset-y-0 -left-6 w-10 bg-[oklch(1_0_0/0.45)] blur-md animate-sheen" />
      ) : null}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`lift rounded-2xl border border-border/70 bg-card p-8 shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <span aria-hidden className="text-gold tracking-[0.3em]">
      {"★".repeat(count)}
    </span>
  );
}
