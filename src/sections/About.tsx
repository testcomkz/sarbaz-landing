"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function About() {
  const { t } = useLanguage();
  
  const cards = [
    {
      title: t.mission.discipline.title,
      description: t.mission.discipline.description,
      image: "/img/IMG_8524.jpeg",
    },
    {
      title: t.mission.teamwork.title,
      description: t.mission.teamwork.description,
      image: "/img/CtZpA6lurTY.jpg",
    },
    {
      title: t.mission.spirit.title,
      description: t.mission.spirit.description,
      image: "/img/sila_duha.webp",
    },
    {
      title: t.mission.patriotism.title,
      description: t.mission.patriotism.description,
      image: "/img/patriot.webp",
    },
  ];
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/img/pattern.jpg')",
          backgroundSize: "200px",
          backgroundPosition: "center"
        }}
      />
      <Section
        id="s2"
        subtitle={t.mission.subtitle}
        title={t.mission.title}
        className="relative"
      >
        <Reveal>
          <p className="mb-8 max-w-3xl text-foreground/85 text-center md:text-left mx-auto md:mx-0">
            {t.mission.intro}
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, description, image }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="group flex h-full flex-col overflow-hidden rounded-none border border-border/40 bg-card/70 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 18rem, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>
                <div className="relative flex flex-1 flex-col justify-between gap-5 p-6">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-semibold uppercase tracking-wide text-primary">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                      {description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#s5"
                      className="flex w-full items-center justify-center gap-2 rounded-none bg-accent px-4 py-2 text-sm font-semibold uppercase text-accent-foreground transition-colors duration-300 hover:bg-accent/80"
                    >
                      {t.contact.subtitle}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
