"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

type RevealProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}> &
  MotionProps;

export function Reveal({
  className,
  children,
  delay = 0,
  y = 24,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
