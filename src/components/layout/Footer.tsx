"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t, locale, setLocale } = useLanguage();
  return (
    <footer className="mt-0 border-t border-border/60 relative overflow-hidden bg-gradient-to-br from-[#031d39] via-[#052a4f] to-[#0a3c69]">
      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-soft-light"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(255,203,69,0.12) 0%, rgba(0,181,226,0.18) 100%), url('/img/pattern.jpg')",
          backgroundSize: "220px",
          backgroundPosition: "center"
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Logo" width={56} height={56} className="w-14 h-14" />
              <span className="font-heading uppercase text-lg font-bold">{t.branding.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              {t.footer.description}
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-3">{t.footer.navigation}</div>
            <nav className="grid gap-2 text-sm">
              <a href="#s2" className="hover:text-primary">{t.nav.mission}</a>
              <a href="#s3" className="hover:text-primary">{t.nav.program}</a>
              <a href="#s4" className="hover:text-primary">{t.nav.advantages}</a>
              <a href="#s5" className="hover:text-primary">{t.nav.contacts}</a>
            </nav>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-3">{t.footer.contacts}</div>
            <div className="grid gap-2 text-sm">
              <a className="inline-flex items-center hover:text-primary" href="https://wa.me/77478584737" target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="mr-2" />
                {t.contact.whatsapp}: +7 747 858 4737
              </a>
              <a 
                href="https://www.instagram.com/vpc_sarbaz/?igsh=MTZ0M2cyMGl5OGt1NA%3D%3D#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
              >
                <Instagram className="size-4" />
                {t.contact.instagram}: @vpc_sarbaz
              </a>
              <a href="tel:+77478584737" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
                <Phone className="size-4" />
                {t.contact.phone}: +7 747 858 4737
              </a>
              <a
                href="https://maps.app.goo.gl/ZF1F58wurgjieS3eA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
              >
                <MapPin className="size-4" />
                {t.contact.address}: г. Алматы, ул. Жандосова, 51
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-foreground/70">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setLocale("kz")} className={locale === "kz" ? "text-primary font-semibold" : "hover:text-primary"}>KZ</button>
            <span>·</span>
            <button onClick={() => setLocale("ru")} className={locale === "ru" ? "text-primary font-semibold" : "hover:text-primary"}>RU</button>
            <span>·</span>
            <button onClick={() => setLocale("en")} className={locale === "en" ? "text-primary font-semibold" : "hover:text-primary"}>EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
