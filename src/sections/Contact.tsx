"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Pattern background */}
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,181,226,0.18) 0%, rgba(255,203,69,0.12) 100%), url('/img/pattern.jpg')",
          backgroundSize: "220px",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <Section
        id="s5"
        subtitle={t.contact.subtitle}
        title={t.contact.title}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-[rgba(5,22,39,0.75)] backdrop-blur-lg shadow-[0_26px_60px_rgba(2,17,32,0.55)]"
      >
        <div className="relative grid gap-10 items-start z-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <p className="text-foreground/85 text-base leading-relaxed text-center md:text-left">
              {t.contact.description}
            </p>
            <div className="grid gap-3 text-sm">
              <a
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-foreground/95 transition hover:border-white/20 hover:bg-white/10"
                href="https://wa.me/77478584737"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-5 h-5 bg-[var(--primary)] [mask-image:url('/whatsapp.svg')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-primary">WhatsApp</span>
                  <span className="text-sm text-foreground/75">+7 747 858 4737</span>
                </div>
                <ArrowUpRight className="ml-auto size-4 text-primary transition-transform group-hover:translate-x-1" />
              </a>
              <a
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-foreground/95 transition hover:border-white/20 hover:bg-white/10"
                href="https://www.instagram.com/vpc_sarbaz/?igsh=MTZ0M2cyMGl5OGt1NA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-primary">Instagram</span>
                  <span className="text-sm text-foreground/75">@vpc_sarbaz</span>
                </div>
                <ArrowUpRight className="ml-auto size-4 text-primary transition-transform group-hover:translate-x-1" />
              </a>
              <a
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-foreground/95 transition hover:border-white/20 hover:bg-white/10"
                href="tel:+77478584737"
              >
                <Phone className="size-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-primary">{t.contact.phone}</span>
                  <span className="text-sm text-foreground/75">+7 747 858 4737</span>
                </div>
                <ArrowUpRight className="ml-auto size-4 text-primary transition-transform group-hover:translate-x-1" />
              </a>
              <a
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-foreground/95 transition hover:border-white/20 hover:bg-white/10"
                href="https://maps.app.goo.gl/ZF1F58wurgjieS3eA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mt-1 size-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-primary">{t.contact.address}</span>
                  <span className="text-sm text-foreground/75">г. Алматы, ул. Жандосова, 51</span>
                </div>
                <ArrowUpRight className="ml-auto mt-1 size-4 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-start">
              <Button
                asChild
                size="sm"
                className="bg-[var(--cta-whatsapp)] hover:bg-[var(--cta-whatsapp-hover)] text-white shadow-[0_16px_45px_rgba(0,160,54,0.45)]"
              >
                <a
                  href="https://wa.me/77478584737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="h-4 w-4" />
                  {t.hero.cta}
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-[rgba(3,29,54,0.75)] via-[rgba(3,29,54,0.55)] to-[rgba(0,176,198,0.35)] p-8 text-white shadow-[0_35px_70px_rgba(3,29,54,0.45)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <Image
                src="/img/soldier.svg"
                alt="soldier silhouette"
                width={480}
                height={360}
                className="absolute -right-10 -bottom-14 w-[320px] opacity-80"
                priority
              />
              <div className="relative z-10 space-y-3 max-w-sm">
                <span className="text-xs uppercase tracking-[0.4em] text-primary/90">{t.contact.heroBadge}</span>
                <h3 className="text-2xl font-bold">{t.contact.heroTitle}</h3>
                <p className="text-sm text-foreground/80">{t.contact.heroDescription}</p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-border/50 bg-background/70 p-0 shadow-[0_25px_60px_rgba(3,29,54,0.35)]">
              <iframe
                title="Sarbaz Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.942516785078!2d76.84658741178243!3d43.21304838341712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e9e53edb4b3%3A0x1c3f6ebadc177a64!2sZhandosov%20St%2051%2C%20Almaty%20050000!5e0!3m2!1sen!2skz!4v1717420800000!5m2!1sen!2skz"
                className="h-[280px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
