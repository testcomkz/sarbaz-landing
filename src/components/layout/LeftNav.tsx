"use client";

import React from "react";
import { cn } from "@/lib/utils";

const IDS = Array.from({ length: 5 }, (_, i) => `s${i + 1}`);

export function LeftNav() {
  const [active, setActive] = React.useState<string>("s1");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    const sections = IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as Element[];
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
      {IDS.map((id, idx) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Section ${idx + 1}`}
            className={cn(
              "w-9 h-9 rounded-none grid place-items-center border transition-colors",
              isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border/60 text-foreground/60 hover:text-primary hover:border-primary/60"
            )}
          >
            <span className="text-xs font-semibold">{idx + 1}</span>
          </a>
        );
      })}
    </aside>
  );
}
