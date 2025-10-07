"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animation/Reveal";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const items = Array.from({ length: 9 }, (_, i) => ({ id: i + 1 }));

export function Gallery() {
  return (
    <Section id="s7" subtitle="Moments of Strength" title="Моменты силы">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {items.map(({ id }, i) => (
          <Reveal key={id} delay={i * 0.03}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative aspect-square w-full overflow-hidden rounded-lg border border-border/60 bg-card/60">
                  <div className="absolute inset-0 bg-[radial-gradient(100%_120%_at_0%_0%,rgba(19,151,212,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 grid place-items-center text-xs text-muted-foreground">
                    Фото {id}
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
                <div className="relative w-full aspect-video bg-black/40 grid place-items-center">
                  <span className="text-sm text-muted-foreground">Здесь будет крупное фото {id}</span>
                </div>
              </DialogContent>
            </Dialog>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
