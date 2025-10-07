"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, getTranslation } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslation>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("kz");
  const [t, setT] = useState(() => getTranslation("kz"));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("preferred-locale") as Locale | null;
      if (stored) {
        setLocale(stored);
      }
    }
  }, []);

  useEffect(() => {
    setT(getTranslation(locale));
    if (typeof document !== "undefined") {
      const langMap: Record<Locale, string> = { kz: "kk", ru: "ru", en: "en" };
      document.documentElement.lang = langMap[locale] ?? "kk";
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferred-locale", locale);
    }
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
