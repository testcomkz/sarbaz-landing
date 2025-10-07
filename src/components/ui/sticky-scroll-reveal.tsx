"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export function StickyScroll({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (cardLength <= 1) return;
    const clamped = Math.min(Math.max(latest, 0), 0.9999);
    const index = Math.min(cardLength - 1, Math.floor(clamped * cardLength));
    setActiveCard((prev) => (prev === index ? prev : index));
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div
      className="relative flex h-[48rem] justify-center gap-12 overflow-y-auto rounded-lg p-8 sm:p-12 border border-border/60 bg-card/60"
      ref={ref}
      style={{
        background: backgroundGradient,
      }}
    >
      <div className="relative flex items-start px-4 sm:px-6">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="mt-4 text-base sm:text-lg max-w-xl text-muted-foreground leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-[40rem]" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-8 hidden h-96 w-[32rem] overflow-hidden rounded-lg bg-white lg:block shadow-2xl",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-full w-full"
        >
          {content[activeCard]?.content ?? null}
        </motion.div>
      </div>
    </div>
  );
}
