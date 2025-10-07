"use client";

import React from "react";
import { Reveal } from "@/components/animation/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  bgImage?: string;
};

export function Section({ id, title, subtitle, className, children, bgImage }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24", className)}>
      {/* Background image + overlays */}
      {bgImage && (
        <>
          <div
            className="absolute inset-0 -z-20 bg-center bg-cover"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 -z-10 bg-black/30" />
          <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/noise.svg')]" />
        </>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {(title || subtitle) && (
          <Reveal>
            <div className="mb-10">
              {subtitle && (
                <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-2 opacity-90">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold">
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
