"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="s1"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/img/hero-photo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlays for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[rgba(3,29,54,0.78)] via-[rgba(3,29,54,0.45)] to-[rgba(59,40,8,0.6)]" />
      <div className="absolute inset-0 z-0 opacity-8 bg-[radial-gradient(circle_at_top,_rgba(0,176,198,0.35),_transparent_55%),_url('/noise.svg')] mix-blend-soft-light" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <Reveal delay={0.05}>
            <h1
              className="font-heading text-4xl sm:text-6xl md:text-7xl leading-tight"
              style={{ textShadow: "0 16px 48px var(--shadow-gold)" }}
            >
              {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3 pt-4 text-base sm:text-lg text-foreground/90 md:text-foreground">
              <p className="text-foreground/95 font-medium">{t.hero.subtitle}</p>
              <p className="text-foreground/85">{t.hero.description}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button
                asChild
                className="bg-[var(--cta-whatsapp)] text-white hover:bg-[var(--cta-whatsapp-hover)] h-12 px-6 text-base font-semibold tracking-wide transition-transform duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 18px 44px rgba(0,160,54,0.45)" }}
              >
                <a href="https://wa.me/77478584737" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="mr-2" />
                  {t.hero.cta}
                </a>
              </Button>
              <a
                href="#s3"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors"
              >
                {t.hero.viewProgram}
                <span className="block h-0.5 w-10 bg-gradient-to-r from-accent via-primary to-transparent" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
