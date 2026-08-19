"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function AnimatedReveal({ children, delay = 0 }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
