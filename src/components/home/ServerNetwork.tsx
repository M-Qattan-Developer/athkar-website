"use client";

import { motion } from "framer-motion";
import {
  IconServer2,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

const servers = [
  { name: "سيرفر A", x: 190, y: -10 },
  { name: "سيرفر B", x: -70, y: 200 },
  { name: "سيرفر C", x: 490, y: 110 },
  { name: "سيرفر D", x: 110, y: 490 },
  { name: "سيرفر E", x: 500, y: 450 },
];

const CENTER = 260;

export default function ServerNetwork() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] aspect-square">

      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-[#C6A15B]/10 blur-[120px]" />

      {/* SVG lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 520"
      >
        {servers.map((s, i) => (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={s.x}
            y2={s.y}
            stroke="#C6A15B55"
            strokeWidth="2"
            strokeDasharray="6 9"
          />
        ))}
      </svg>

{/* moving dots (FIXED SVG VERSION) */}
<svg
  className="absolute inset-0 h-full w-full"
  viewBox="0 0 520 520"
>
  {servers.map((s, i) => (
    <motion.circle
      key={i}
      r="5"
      fill="#C6A15B"
      initial={{
        cx: CENTER,
        cy: CENTER,
        opacity: 4,
      }}
      animate={{
        cx: s.x,
        cy: s.y,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2.2,
        delay: i * 0.3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ))}
</svg>

      {/* center (FIXED + responsive safe) */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="
          absolute
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          flex h-40 w-40
          flex-col items-center justify-center
          rounded-full
          border border-[#C6A15B]/40
          bg-[#C6A15B]/10
          backdrop-blur-xl
          text-center
          z-10
        "
      >
        <IconSparkles size={30} className="mb-2 text-[#C6A15B]" />

        <h3 className="font-bold text-lg">
          قيد المراجعة
        </h3>

        <p className="mt-1 text-xs text-white/60">
          سيتم نشر الذكر
        </p>
      </motion.div>

      {/* servers (FIXED positioning bug) */}
      {servers.map((s, i) => (
        <motion.div
          key={s.name}
          animate={{ y: [-4, 4, -4] }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
          }}
          style={{
            left: `${(s.x / 650) * 100}%`,
            top: `${(s.y / 650) * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
          className="
            absolute
            w-32
            rounded-xl
            border border-white/10
            bg-[#111b2d]/80
            p-3
            backdrop-blur-xl
          "
        >
          <div className="mb-2 flex items-center justify-between">
            <IconServer2 className="text-[#C6A15B]" />
            <IconCheck size={14} className="text-green-400" />
          </div>

          <h4 className="text-sm font-bold">{s.name}</h4>

          <p className="mt-1 text-[11px] text-white/50">
            تم استلام الذكر
          </p>
        </motion.div>
      ))}
    </div>
  );
}