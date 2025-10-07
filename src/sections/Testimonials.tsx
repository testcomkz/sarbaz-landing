"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";

const items = [
  {
    name: "Али",
    role: "17 лет",
    quote:
      "Стало легче общаться в команде. Понял, что дисциплина — это не сложно, если рядом поддержка.",
  },
  {
    name: "Айганым",
    role: "16 лет",
    quote:
      "Было волнительно, но инструкторы помогали. Чувствую уверенность и хочу продолжить.",
  },
  {
    name: "Руслан",
    role: "18 лет",
    quote:
      "Понравились командные задания. Стало ясно, как важна ответственность за других.",
  },
  {
    name: "Асель",
    role: "16 лет",
    quote:
      "Здорово, что можно попробовать себя в безопасной среде. Много узнала о первой помощи.",
  },
];

export function Testimonials() {
  return (
    <Section id="s8" subtitle="What They Say" title="Отзывы участников" className="bg-[radial-gradient(80%_120%_at_20%_0%,rgba(19,151,212,0.06),transparent_60%)]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="rounded-xl border border-border/60 bg-card/60 p-6 h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground/80">“{t.quote}”</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
