"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";
import { MessageCircle, FileText, UserCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Steps() {
  const { t } = useLanguage();
  
  const steps = [
    { n: 1, title: t.steps.step1.title, desc: t.steps.step1.description, icon: MessageCircle },
    { n: 2, title: t.steps.step2.title, desc: t.steps.step2.description, icon: FileText },
    { n: 3, title: t.steps.step3.title, desc: t.steps.step3.description, icon: UserCheck },
  ];
  
  return (
    <Section id="s6" subtitle={t.steps.subtitle} title={t.steps.title} className="bg-background">
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map(({ n, title, desc, icon: Icon }, i) => (
          <Reveal key={n} delay={i * 0.05}>
            <div className="rounded-xl border border-border/60 bg-card/60 p-6 h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md grid place-items-center bg-primary/15 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-foreground/70">Шаг {n}</span>
              </div>
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
