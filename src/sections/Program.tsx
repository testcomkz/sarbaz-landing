"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function Program() {
  const { t } = useLanguage();
  
  const items = [
    { 
      title: t.program.items.tactical,
      image: "/img/tactic-train.JPG",
      desc: t.program.descriptions.tactical,
    },
    { 
      title: t.program.items.obstacle,
      image: "/img/polosa.webp",
      desc: t.program.descriptions.obstacle,
    },
    { 
      title: t.program.items.challenges,
      image: "/img/command.webp",
      desc: t.program.descriptions.challenges,
    },
    { 
      title: t.program.items.selfDefense,
      image: "/img/safety.webp",
      desc: t.program.descriptions.selfDefense,
    },
    { 
      title: t.program.items.firstAid,
      image: "/img/first-aid.jpg",
      desc: t.program.descriptions.firstAid,
    },
    { 
      title: t.program.items.drill,
      image: "/img/IMG_8524.jpeg",
      desc: t.program.descriptions.drill,
    },
  ];
  
  return (
    <Section id="s3" subtitle={t.program.subtitle} title={t.program.title}>
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
        {items.map(({ title, image, desc }, i) => (
          <Reveal key={title} delay={i * 0.05}>
            <div className="group relative flex h-full flex-col overflow-hidden border border-border/40 bg-card/75 transition-all duration-300 hover:-translate-y-1 hover:bg-card/90 shadow-lg">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image 
                  src={image} 
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021a34]/85 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-6 text-center sm:text-left">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold uppercase mb-2 text-primary">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                    {desc}
                  </p>
                </div>
                <a 
                  href="https://wa.me/77478584737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-none bg-accent px-5 py-2 text-sm font-semibold uppercase text-accent-foreground transition-colors shadow-md hover:bg-accent/80"
                >
                  {t.program.cta}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
