"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Heritage() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(2,31,54,0.9) 0%, rgba(8,75,120,0.75) 45%, rgba(255,199,88,0.4) 100%), url('/img/pattern.jpg')",
          backgroundSize: "220px",
          backgroundPosition: "center",
        }}
      />
      <Section
        id="heritage"
        subtitle={t.heritage.subtitle}
        title={t.heritage.title}
        className="relative overflow-hidden border border-white/10 bg-[rgba(5,20,38,0.78)] backdrop-blur-xl shadow-[0_30px_80px_rgba(2,20,38,0.55)]"
      >
        <div className="relative grid gap-10 items-center lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center text-foreground/90 md:text-left">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary md:justify-start">
                {t.heritage.subtitle}
              </div>
              {t.heritage.description.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg font-semibold uppercase tracking-[0.25em] text-accent">
                {t.heritage.cta}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_30px_70px_rgba(3,25,45,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/30" />
              <Image
                src="/img/partner-photo.png"
                alt="Ұлттық жекпе-жек өнері жаттығу"
                width={720}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-[rgba(5,20,38,0.75)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                Ұлы Даланының рухы
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(5,20,38,0.85)] via-transparent to-transparent p-6 text-sm text-white/90">
                {t.heritage.subtitle}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
