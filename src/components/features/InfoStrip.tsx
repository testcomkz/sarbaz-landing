"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: "/img/tpl25_icon1_1.svg",
    titleKz: "НҰСҚАУШЫЛАР",
    titleRu: "НАСТАВНИКИ",
    titleEn: "INSTRUCTORS",
    descKz: "Бұрынғы әскерилер - барынша білімді командалардан тәжірибе алу",
    descRu: "Бывшие военные - большой образовательный опыт",
    descEn: "Former military - extensive educational experience"
  },
  {
    icon: "/img/tpl25_icon2_1.svg",
    titleKz: "БАҒДАРЛАМА",
    titleRu: "ПРОГРАММА",
    titleEn: "PROGRAM",
    descKz: "Толық курс: тактикалық боқсыр, және көптеген басқа бағдарламалар",
    descRu: "Полный курс: моментов боевых, и также множество других программ",
    descEn: "Full course: tactical training and many other programs"
  },
  {
    icon: "/img/tpl25_icon3_1.svg",
    titleKz: "ПЕРСПЕКТИВА",
    titleRu: "ПЕРСПЕКТИВА",
    titleEn: "PERSPECTIVE",
    descKz: "Оқуымдардың қалыптасуына гүріп пәсміналмалықдан ӘуҚыс",
    descRu: "Оказываем поддержку при поступлении в профильные ВУЗы",
    descEn: "We support enrollment in specialized universities"
  },
  {
    icon: "/img/tpl25_icon4_1.svg",
    titleKz: "БІЛІМ, ТӘЖІРИБЕ",
    titleRu: "ЗНАНИЯ, ОПЫТ",
    titleEn: "KNOWLEDGE, EXPERIENCE",
    descKz: "Пайдалы навыктар алу, дүскен команда, баспанасы стать",
    descRu: "Приобретение полезных навыков, крепкая команда, безопасность стать",
    descEn: "Acquiring useful skills, strong team, becoming secure"
  }
];

export function InfoStrip() {
  const { locale } = useLanguage();

  const getTitle = (feature: typeof features[0]) => {
    if (locale === "kz") return feature.titleKz;
    if (locale === "ru") return feature.titleRu;
    return feature.titleEn;
  };

  const getDesc = (feature: typeof features[0]) => {
    if (locale === "kz") return feature.descKz;
    if (locale === "ru") return feature.descRu;
    return feature.descEn;
  };
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#031d36_0%,#052b50_60%,#083559_100%)] py-10 sm:py-12 mt-0">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundSize: "220px",
          backgroundPosition: "center",
          backgroundColor: "rgba(7,25,43,0.6)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center gap-4 sm:flex-row sm:text-left sm:items-start rounded-xl border border-white/10 bg-white/5 px-5 py-5 sm:px-6 sm:py-6 backdrop-blur-md shadow-[0_18px_40px_rgba(2,20,37,0.4)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <Image
                  src={feature.icon}
                  alt={getTitle(feature)}
                  width={48}
                  height={48}
                  className="w-12 h-12 brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="max-w-sm sm:max-w-none">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2 uppercase tracking-[0.2em]">
                  {getTitle(feature)}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {getDesc(feature)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
