"use client";

import React from "react";
import { cn } from "@/lib/utils";

const IDS = Array.from({ length: 5 }, (_, i) => `s${i + 1}`);

export function LeftNav() {
  const [active, setActive] = React.useState<string>("s1");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) {
          return;
        }

        const mostVisible = visible.reduce((prev, curr) =>
          prev.intersectionRatio >= curr.intersectionRatio ? prev : curr
        );

        if (mostVisible.target.id) {
          setActive(mostVisible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -40% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    const sections = IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as Element[];
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-2.5">
      {IDS.map((id, idx) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Section ${idx + 1}`}
            className={cn(
              "w-11 h-11 rounded-xl grid place-items-center border transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur",
              isActive
                ? "bg-primary text-primary-foreground border-primary/80 scale-[1.03]"
                : "border-white/20 text-foreground/60 hover:text-primary hover:border-primary/35 hover:scale-[1.02]"
            )}
          >
            <span className="text-xs font-semibold">{idx + 1}</span>
          </a>
        );
      })}
    </aside>
  );
}
