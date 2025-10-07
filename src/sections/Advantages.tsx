"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";
import { Award, ShieldCheck, Sparkles, LifeBuoy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Advantages() {
  const { t } = useLanguage();
  
  const items = [
    { title: t.advantages.items.unique, icon: Award, desc: t.advantages.descriptions.unique },
    { title: t.advantages.items.instructors, icon: ShieldCheck, desc: t.advantages.descriptions.instructors },
    { title: t.advantages.items.character, icon: Sparkles, desc: t.advantages.descriptions.character },
    { title: t.advantages.items.safe, icon: LifeBuoy, desc: t.advantages.descriptions.safe },
  ];
  
  return (
    <div className="relative">
      {/* Pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/img/pattern.jpg')",
          backgroundSize: "200px",
          backgroundPosition: "center"
        }}
      />
      <Section id="s4" subtitle={t.advantages.subtitle} title={t.advantages.title} className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {items.map((item, index) => (
              <Feature key={item.title} {...item} index={index} />
            ))}
          </div>
          
          {/* Right: Image */}
          <Reveal delay={0.2}>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="/img/Kazakh̠SpecOps̠01.jpg"
                alt="Special Forces"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

const Feature = ({
  title,
  desc,
  icon: Icon,
  index,
}: {
  title: string;
  desc: string;
  icon: any;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-border/60 py-10 relative group/feature",
        (index === 0 || index === 2) && "lg:border-l",
        index < 2 && "lg:border-b",
        "lg:border-r"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {desc}
      </p>
    </div>
  );
};
