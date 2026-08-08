import { useEffect, useRef, useState } from "react";
import { coverColors } from "@/lib/content";

/** Draggable, slowly-rotating notebook with selectable cover colour and binding. */
export function Notebook3D({ compact = false }: { compact?: boolean }) {
  const [colorId, setColorId] = useState(coverColors[0]!.id);
  const [binding, setBinding] = useState<"hardcover" | "spiral">("hardcover");
  const [angle, setAngle] = useState(-24);
  const [flip, setFlip] = useState(false);
  const drag = useRef<{ active: boolean; x: number; start: number }>({
    active: false,
    x: 0,
    start: 0,
  });
  const color = coverColors.find((c) => c.id === colorId) ?? coverColors[0]!;

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!drag.current.active) return;
      setAngle(drag.current.start + (e.clientX - drag.current.x) * 0.45);
    };
    const up = () => {
      drag.current.active = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const h = compact ? "h-[320px] md:h-[400px]" : "h-[420px] md:h-[560px]";

  return (
    <div className="w-full">
      <div
        className={`relative flex ${h} touch-none select-none items-center justify-center [perspective:1600px]`}
        onPointerDown={(e) => {
          drag.current = { active: true, x: e.clientX, start: angle };
        }}
        role="img"
        aria-label={`${color.name} notebook, ${binding} binding — drag to rotate`}
      >
        <div
          className="relative animate-float-slow transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d]"
          style={{ transform: `rotateY(${angle}deg) rotateX(8deg)` }}
        >
          {/* page block */}
          <div
            className="absolute inset-y-2 -right-2 w-[92%] rounded-r-md bg-[linear-gradient(90deg,var(--color-paper-deep),var(--color-paper))] shadow-inner"
            style={{ transform: "translateZ(-6px)" }}
          />
          {/* flipping page */}
          <div
            onClick={() => setFlip((f) => !f)}
            className={`absolute inset-y-4 right-1 w-[86%] cursor-pointer rounded-r-sm bg-paper origin-left shadow-[0_10px_30px_-16px_oklch(0.244_0.029_265/0.6)] transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              flip ? "[transform:rotateY(-155deg)_translateZ(2px)]" : "[transform:rotateY(-6deg)_translateZ(2px)]"
            }`}
          >
            <div className="flex h-full flex-col justify-center gap-2 p-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="block h-px bg-border"
                  style={{ width: `${55 + ((i * 37) % 40)}%` }}
                />
              ))}
            </div>
          </div>
          {/* cover */}
          <div
            className={`relative aspect-[3/4] w-[240px] overflow-hidden rounded-md rounded-l-sm md:w-[320px] ${color.cover} shadow-[0_60px_90px_-50px_oklch(0.244_0.029_265/0.75)]`}
          >
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_25%_15%,oklch(1_0_0/0.5),transparent_55%),radial-gradient(circle_at_80%_85%,oklch(0_0_0/0.4),transparent_60%)]" />
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-[linear-gradient(to_right,transparent,oklch(1_0_0/0.28),transparent)]" />
            {/* spine */}
            <div className="absolute inset-y-0 left-0 w-3 bg-[oklch(0_0_0/0.22)]" />
            {binding === "spiral" ? (
              <div className="absolute inset-y-4 left-1 flex flex-col justify-between">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2 w-4 rounded-full border border-gold/60 bg-gold/20"
                  />
                ))}
              </div>
            ) : null}
            {/* gold foil logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="text-3xl gold-text font-[family-name:var(--font-display)]">
                M
              </span>
              <span className="label-xs">Monarch</span>
            </div>
            {/* elastic band */}
            <div className="absolute inset-y-0 right-6 w-[6px] bg-[oklch(0_0_0/0.45)]" />
          </div>
          {/* ribbon */}
          <div className="absolute -bottom-10 left-8 h-12 w-2 rounded-b bg-gold/70" />
        </div>
        {/* floor shadow */}
        <div className="absolute bottom-6 h-8 w-56 rounded-[100%] bg-[oklch(0.244_0.029_265/0.22)] blur-xl md:w-72" />
      </div>

      <p className="mt-6 text-center label-xs">Drag to rotate · tap the page to turn</p>

      <div className="mt-10 flex flex-col items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {coverColors.map((c) => (
            <button
              key={c.id}
              onClick={() => setColorId(c.id)}
              aria-label={c.name}
              aria-pressed={c.id === colorId}
              className={`h-9 w-9 rounded-full ${c.swatch} ring-offset-2 ring-offset-background transition-all duration-500 ${
                c.id === colorId ? "ring-2 ring-gold" : "ring-1 ring-border hover:ring-gold/60"
              }`}
            />
          ))}
        </div>
        <p className="font-[family-name:var(--font-display)] text-2xl">{color.name}</p>
        <div className="flex gap-2 rounded-full border border-border bg-card p-1">
          {(["hardcover", "spiral"] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBinding(b)}
              className={`rounded-full px-6 py-2 font-[family-name:var(--font-label)] text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-500 ${
                binding === b
                  ? "bg-navy text-navy-foreground"
                  : "text-muted-foreground hover:text-gold"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
