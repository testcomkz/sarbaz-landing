"use client";
import Image from "next/image";
import { Instagram, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t, locale, setLocale } = useLanguage();
  return (
    <footer className="mt-0 border-t border-white/10 relative overflow-hidden bg-gradient-to-br from-[#04172c] via-[#062542] to-[#093457] rounded-t-[40px] shadow-[0_-25px_80px_rgba(1,14,28,0.65)]">
      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-soft-light"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(255,203,69,0.12) 0%, rgba(0,181,226,0.18) 100%), url('/img/pattern.jpg')",
          backgroundSize: "220px",
          backgroundPosition: "center"
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image src="/logo.svg" alt="Logo" width={72} height={72} className="w-16 h-16" />
              <Image src="/partner-logo.svg" alt="Logo" width={72} height={72} className="w-18 h-18" />
              <span className="font-heading uppercase text-xl font-bold tracking-[0.3em] text-white">{t.branding.name}</span>
            </div>
            <p className="text-sm text-foreground/75 max-w-sm">
              {t.footer.description}
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{t.footer.navigation}</div>
            <nav className="grid gap-3 text-sm">
              <a href="#s2" className="rounded-lg border border-transparent px-4 py-2 bg-white/5 hover:bg-white/10 transition">{t.nav.mission}</a>
              <a href="#s3" className="rounded-lg border border-transparent px-4 py-2 bg-white/5 hover:bg-white/10 transition">{t.nav.program}</a>
              <a href="#s4" className="rounded-lg border border-transparent px-4 py-2 bg-white/5 hover:bg-white/10 transition">{t.nav.advantages}</a>
              <a href="#s5" className="rounded-lg border border-transparent px-4 py-2 bg-white/5 hover:bg-white/10 transition">{t.nav.contacts}</a>
            </nav>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{t.footer.contacts}</div>
            <div className="grid gap-3 text-sm">
              <a className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2 hover:border-white/30" href="https://wa.me/77478584737" target="_blank" rel="noopener noreferrer">
                <span className="inline-block w-4 h-4 bg-white [mask-image:url('/whatsapp.svg')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />
                {t.contact.whatsapp}: +7 747 858 4737
              </a>
              <a 
                href="https://www.instagram.com/vpc_sarbaz/?igsh=MTZ0M2cyMGl5OGt1NA%3D%3D#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2 hover:border-white/30"
              >
                <Instagram className="size-4" />
                {t.contact.instagram}: @vpc_sarbaz
              </a>
              <a href="tel:+77478584737" className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2 hover:border-white/30">
                <Phone className="size-4" />
                {t.contact.phone}: +7 747 858 4737
              </a>
              <a
                href="https://maps.app.goo.gl/ZF1F58wurgjieS3eA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2 hover:border-white/30"
              >
                <MapPin className="size-4" />
                {t.contact.address}: г. Алматы, ул. Жандосова, 51
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-foreground/70">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-1.5">
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
