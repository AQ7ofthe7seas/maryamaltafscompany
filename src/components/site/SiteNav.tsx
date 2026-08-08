import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Action } from "./Primitives";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/inside", label: "Inside the Notebook" },
  { to: "/calendar", label: "Calendar" },
  { to: "/why-type-b", label: "Why Type B" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/shop", label: "Shop" },
];

function Icon({ d, label }: { d: string; label: string }) {
  return (
    <button
      aria-label={label}
      className="rounded-full p-2 transition-colors duration-500 hover:text-gold"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
        aria-hidden
      >
        <path d={d} />
      </svg>
    </button>
  );
}

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const overDark = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        solid || !overDark
          ? "border-b border-border/60 bg-background/90 py-3 text-foreground backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-6 text-navy-foreground"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-6 md:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
            Monarch
          </span>
          <span className="label-xs hidden sm:block">Notebook</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-gold" }}
              className="whitespace-nowrap font-[family-name:var(--font-label)] text-[0.68rem] uppercase tracking-[0.16em] transition-colors duration-500 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 xl:ml-4">
          <Icon label="Search" d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm5.8-1.7L21 21" />
          <Icon label="Account" d="M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <Icon label="Cart" d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.3a2 2 0 0 0 2-1.6L21 8H6M9 21h.01M18 21h.01" />
          <Action to="/shop" className="ml-2 hidden md:inline-flex">
            Order Now
          </Action>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="ml-1 p-2 xl:hidden"
          >
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" aria-hidden>
              <path d={open ? "M5 5l14 14M19 5L5 19" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background/95 px-6 pb-8 pt-6 text-foreground backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 font-[family-name:var(--font-display)] text-2xl"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Action to="/shop" size="lg" className="mt-8 w-full">
            Order Now
          </Action>
        </div>
      ) : null}
    </header>
  );
}
