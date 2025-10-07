"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";
import { Dumbbell, Flag, Mountain, MoveUpRight, Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { title: "Бег", icon: Activity },
  { title: "Меткость", icon: MoveUpRight },
  { title: "Канат", icon: Mountain },
  { title: "Подтягивания", icon: Dumbbell },
  { title: "Строй", icon: Flag },
  { title: "Самооборона", icon: Shield },
];

export function Competition() {
  return (
    <Section id="s4" subtitle="Ұлы Дала Сарбазы" title="Соревнование / Спартакиада">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <Reveal>
          <p className="text-foreground/80">
            10 испытаний, реальное соревнование и командная работа. Победители получают шанс
            посетить базу специального назначения.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {badges.map(({ title, icon: Icon }, i) => (
              <span
                key={title}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-sm"
              >
                <Icon className="w-4 h-4 text-primary" /> {title}
              </span>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Зарегистрироваться</Button>
            <Button variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">Скачать PDF</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/60 bg-[radial-gradient(100%_100%_at_0%_0%,rgba(212,175,55,0.12),transparent_60%)]">
            <div className="absolute inset-0 grid place-items-center text-muted-foreground">
              <span className="text-sm">Здесь будет фото спартакиады</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
