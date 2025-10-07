"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Program logo" width={64} height={64} priority className="w-14 h-14 sm:w-16 sm:h-16" />
            <span className="font-heading text-lg sm:text-xl font-bold uppercase hidden sm:block">
              {t.branding.name}
            </span>
          </Link>
        </div>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <a href="#s2" className="hover:text-primary">{t.nav.mission}</a>
          <a href="#s3" className="hover:text-primary">{t.nav.program}</a>
          <a href="#s4" className="hover:text-primary">{t.nav.advantages}</a>
          <a href="#s5" className="hover:text-primary">{t.nav.contacts}</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language switch (desktop only) */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-foreground/70 mr-1">
            <button onClick={() => handleLanguageChange("kz")} className={cn(locale === "kz" ? "text-primary font-semibold" : "hover:text-primary", "cursor-pointer") } aria-label="KZ">KZ</button>
            <span className="opacity-40">/</span>
            <button onClick={() => handleLanguageChange("ru")} className={cn(locale === "ru" ? "text-primary font-semibold" : "hover:text-primary", "cursor-pointer") } aria-label="RU">RU</button>
            <span className="opacity-40">/</span>
            <button onClick={() => handleLanguageChange("en")} className={cn(locale === "en" ? "text-primary font-semibold" : "hover:text-primary", "cursor-pointer") } aria-label="EN">EN</button>
          </div>
          <Button
            asChild
            className="hidden sm:flex bg-[var(--cta-whatsapp)] text-white hover:bg-[var(--cta-whatsapp-hover)] h-10 px-4 shadow-lg"
            style={{ boxShadow: `0 12px 28px rgba(0,160,54,0.45)` }}
          >
            <a
              href="https://wa.me/77478584737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="mr-2" />
              {t.nav.whatsapp}
            </a>
          </Button>
          {/* Mobile menu */}
          <div className="lg:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="border-border/60">
                  <Menu />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm p-0 overflow-hidden">
                <div className="border-b border-border/60 px-4 py-3 flex items-center gap-3">
                  <Image src="/logo.svg" alt="Program logo" width={48} height={48} className="w-12 h-12" />
                  <span className="font-heading text-base font-bold uppercase">Бір күн арнайы қызметте</span>
                </div>
                <nav className="flex flex-col px-4 py-6 gap-2 text-sm border-b border-border/60">
                  <a href="#s2" className="py-2 hover:text-primary">{t.nav.mission}</a>
                  <a href="#s3" className="py-2 hover:text-primary">{t.nav.program}</a>
                  <a href="#s4" className="py-2 hover:text-primary">{t.nav.advantages}</a>
                  <a href="#s5" className="py-2 hover:text-primary">{t.nav.contacts}</a>
                </nav>
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 text-xs text-foreground/70 mb-3">
                    <button onClick={() => handleLanguageChange("kz")} className={locale === "kz" ? "text-primary font-semibold" : "hover:text-primary"} aria-label="KZ">KZ</button>
                    <span className="opacity-40">/</span>
                    <button onClick={() => handleLanguageChange("ru")} className={locale === "ru" ? "text-primary font-semibold" : "hover:text-primary"} aria-label="RU">RU</button>
                    <span className="opacity-40">/</span>
                    <button onClick={() => handleLanguageChange("en")} className={locale === "en" ? "text-primary font-semibold" : "hover:text-primary"} aria-label="EN">EN</button>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-[var(--cta-whatsapp)] text-white hover:bg-[var(--cta-whatsapp-hover)] shadow-md"
                    style={{ boxShadow: `0 12px 28px rgba(0,160,54,0.45)` }}
                  >
                    <a
                      href="https://wa.me/77478584737"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="mr-2" />
                      {t.hero.cta}
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
