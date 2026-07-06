"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import {
  IconServer2,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

const servers = [
  {
    ar: "سيرفر A",
    en: "Server A",
    x: 190,
    y: -10,
  },
  {
    ar: "سيرفر B",
    en: "Server B",
    x: -70,
    y: 200,
  },
  {
    ar: "سيرفر C",
    en: "Server C",
    x: 490,
    y: 110,
  },
  {
    ar: "سيرفر D",
    en: "Server D",
    x: 110,
    y: 490,
  },
  {
    ar: "سيرفر E",
    en: "Server E",
    x: 500,
    y: 450,
  },
];

const CENTER = 260;
const CENTER_EN = 300;

export default function ServerNetwork() {
    const { language } = useTranslation();

  return (
    <div className="flex justify-center overflow-visible px-4">
  <div
    className={`relative aspect-square w-[500px] scale-[0.75] sm:scale-[0.85] md:scale-100 max-w-none origin-top transition-all duration-500
      scale-[0.48]
      min-[380px]:scale-[0.55]
      sm:scale-[0.68]
      md:scale-[0.82]
      lg:scale-100
      ${language === "ar" ? "" : ""}
    `}
  >

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
            x1={language === "ar" ? CENTER : CENTER_EN}
y1={CENTER}
            x2={language === "ar" ? s.x : 520 - s.x}
            y2={s.y}
            stroke="#C6A15B55"
            strokeWidth="2"
            strokeDasharray="6 9"
          />
        ))}
      </svg>

{/* moving dots */}
<svg
  className="absolute inset-0 h-full w-full"
  viewBox="0 0 520 520"
>
  {servers.map((s, i) => {
    const endX = language === "ar" ? s.x : 520 - s.x;

    return (
      <g key={i}>
        <circle r="5" fill="#C6A15B">
          <animateMotion
            dur="2.2s"
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
            path={`M ${language === "ar" ? CENTER : 560 - CENTER} ${CENTER} L ${endX} ${s.y}`}
          />

          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="2.2s"
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
          />
        </circle>
      </g>
    );
  })}
</svg>

      {/* center (FIXED + responsive safe) */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2, repeat: Infinity }}

        style={{
        left: language === "ar" ? "50%" : "58%",
         }}

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
  {language === "ar"
    ? "قيد المراجعة"
    : "Under Review"}
</h3>

        <p className="mt-1 text-xs text-white/60">
  {language === "ar"
    ? "سيتم نشر الذكر"
    : "Remembrance will be published"}
</p>
      </motion.div>

      {/* servers (FIXED positioning bug) */}
      {servers.map((s, i) => (
        <motion.div
          key={s.ar}
          animate={{ y: [-4, 4, -4] }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
          }}
          style={{
            left: `${
           ((language === "ar" ? s.x : 520 - s.x) / 650) * 100
          }%`,
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

          <h4 className="text-sm font-bold">
  {language === "ar" ? s.ar : s.en}
</h4>

          <p className="mt-1 text-[11px] text-white/50">
           {language === "ar"
  ? "تم استلام الذكر"
  : "Remembrance received"}
          </p>
        </motion.div>
      ))}
      </div>
</div>
  );
}