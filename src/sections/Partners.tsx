"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";

const partners = Array.from({ length: 8 }, (_, i) => `Партнёр ${i + 1}`);

export function Partners() {
  return (
    <Section id="s10" subtitle="Partners / Sponsors" title="Партнёры и спонсоры" className="bg-[radial-gradient(80%_120%_at_80%_0%,rgba(212,175,55,0.06),transparent_60%)]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((name, i) => (
          <Reveal key={name} delay={i * 0.04}>
            <div className="aspect-[3/2] rounded-xl border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent grid place-items-center text-primary/90">
              <span className="text-xs sm:text-sm uppercase tracking-wider">
                {name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Логотипы будут показаны в моно-золоте на тёмном фоне. Заменим заглушки на ваши SVG/PNG.
      </p>
    </Section>
  );
}
