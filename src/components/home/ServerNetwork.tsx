"use client";

import { motion } from "framer-motion";
import {
  IconServer2,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

const servers = [
  { name: "سيرفر A", x: 250, y: 20 },
  { name: "سيرفر B", x: 40, y: 170 },
  { name: "سيرفر C", x: 460, y: 170 },
  { name: "سيرفر D", x: 120, y: 390 },
  { name: "سيرفر E", x: 380, y: 390 },
];

export default function ServerNetwork() {
  return (
    <div className="relative h-[560px] w-[560px]">

      <div className="absolute inset-0 rounded-full bg-[#C6A15B]/10 blur-[130px]" />

      {/* الخطوط */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 560 560"
      >
        {servers.map((s, i) => (
          <line
            key={i}
            x1="280"
            y1="280"
            x2={s.x + 40}
            y2={s.y + 20}
            stroke="#C6A15B55"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        ))}
      </svg>

      {/* نقطة تتحرك */}

      {servers.map((s, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-[#C6A15B]"
          initial={{
            left: 280,
            top: 280,
            opacity: 0,
          }}
          animate={{
            left: s.x + 38,
            top: s.y + 18,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * .45,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* المركز */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 backdrop-blur-xl"
      >
        <IconSparkles
          size={34}
          className="mb-3 text-[#C6A15B]"
        />

        <h3 className="font-bold text-xl">
          قيد المراجعة
        </h3>

        <p className="mt-1 text-sm text-white/60">
          سيتم نشر الذكر
        </p>
      </motion.div>

      {/* السيرفرات */}

      {servers.map((s, i) => (
        <motion.div
          key={s.name}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * .25,
          }}
          style={{
            left: s.x,
            top: s.y,
          }}
          className="absolute w-36 rounded-2xl border border-white/10 bg-[#111b2d]/80 p-4 backdrop-blur-xl"
        >
          <div className="mb-3 flex items-center justify-between">

            <IconServer2
              className="text-[#C6A15B]"
            />

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20">
              <IconCheck
                size={15}
                className="text-green-400"
              />
            </div>

          </div>

          <h4 className="font-bold">
            {s.name}
          </h4>

          <p className="mt-1 text-xs text-white/50">
            تم استلام الذكر
          </p>

        </motion.div>
      ))}

    </div>
  );
}