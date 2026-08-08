import { useEffect, useMemo, useState } from "react";

type Star = { x: number; y: number; s: number; d: number; o: number };

function seeded(n: number) {
  let t = n * 9301 + 49297;
  return () => {
    t = (t * 9301 + 49297) % 233280;
    return t / 233280;
  };
}

/** Dark navy night sky: thousands of stars, gold constellations, drifting clouds,
 *  shooting stars and very slow parallax mountains. */
export function NightSky() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScroll(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const stars = useMemo<Star[]>(() => {
    const rnd = seeded(7);
    return Array.from({ length: 420 }, () => ({
      x: rnd() * 100,
      y: rnd() * 78,
      s: 0.5 + rnd() * 1.7,
      d: rnd() * 6,
      o: 0.25 + rnd() * 0.6,
    }));
  }, []);

  const constellation = useMemo(() => {
    const rnd = seeded(23);
    return Array.from({ length: 3 }, (_, g) => {
      const ox = 12 + g * 30;
      const oy = 12 + rnd() * 22;
      return Array.from({ length: 5 }, (_, i) => ({
        x: ox + i * (4 + rnd() * 5),
        y: oy + (rnd() - 0.5) * 14,
      }));
    });
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden leather-texture">
      {/* deep sky gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,oklch(0.34_0.04_265)_0%,oklch(0.244_0.029_265)_45%,oklch(0.17_0.024_265)_100%)]" />

      {/* stars */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${scroll * 0.06}px, 0)` }}
      >
        {stars.map((st, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[oklch(0.99_0.01_85)] animate-twinkle"
            style={{
              left: `${st.x}%`,
              top: `${st.y}%`,
              width: st.s,
              height: st.s,
              opacity: st.o,
              animationDelay: `${st.d}s`,
              animationDuration: `${4 + st.d}s`,
            }}
          />
        ))}
      </div>

      {/* gold constellation lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ transform: `translate3d(0, ${scroll * 0.03}px, 0)` }}
      >
        {constellation.map((group, gi) => (
          <g key={gi} opacity="0.4">
            <polyline
              points={group.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="oklch(0.712 0.088 78)"
              strokeWidth="0.12"
              vectorEffect="non-scaling-stroke"
            />
            {group.map((p, pi) => (
              <circle key={pi} cx={p.x} cy={p.y} r="0.28" fill="oklch(0.83 0.055 82)" />
            ))}
          </g>
        ))}
      </svg>

      {/* very slow clouds */}
      <div className="absolute inset-x-0 top-1/4 h-64 animate-drift bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.5_0.03_265/0.35),transparent_60%),radial-gradient(ellipse_at_75%_40%,oklch(0.45_0.03_265/0.3),transparent_65%)] blur-2xl" />

      {/* shooting stars */}
      {[0, 6, 11].map((delay, i) => (
        <span
          key={i}
          className="absolute h-px w-28 animate-shoot bg-[linear-gradient(to_right,transparent,oklch(0.99_0.01_85),transparent)]"
          style={{
            left: `${8 + i * 22}%`,
            top: `${6 + i * 9}%`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}

      {/* parallax mountains */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        style={{ transform: `translate3d(0, ${scroll * -0.02}px, 0)` }}
      >
        <path
          d="M0 420 L0 250 L180 140 L330 235 L470 120 L640 260 L800 165 L980 265 L1140 155 L1290 245 L1440 175 L1440 420 Z"
          fill="oklch(0.2 0.026 265)"
          opacity="0.85"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ transform: `translate3d(0, ${scroll * -0.045}px, 0)` }}
      >
        <path
          d="M0 320 L0 210 L220 90 L400 205 L560 130 L760 235 L940 140 L1120 230 L1300 150 L1440 215 L1440 320 Z"
          fill="oklch(0.155 0.02 265)"
        />
        <path
          d="M220 90 L268 122 L180 122 Z M940 140 L980 168 L900 168 Z"
          fill="oklch(0.9 0.015 85)"
          opacity="0.35"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,oklch(0.962_0.011_85))]" />
    </div>
  );
}
