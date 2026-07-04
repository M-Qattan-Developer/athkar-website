"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 h-96 w-96 rounded-full bg-[#C6A15B]/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#24384D]/50 blur-[180px]"
      />

    </div>
  );
}