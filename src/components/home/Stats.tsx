"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { stats } from "@/data/stats";

import {
  IconServer2,
  IconMessage2Heart,
  IconCircleCheck,
} from "@tabler/icons-react";

const icons = [
  IconServer2,
  IconMessage2Heart,
  IconCircleCheck,
];

export default function Stats() {
  const { language } = useTranslation();
  const t = stats[language];

  return (
    <section className="relative z-20 -mt-10 w-full">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.map((item, i) => {
            const Icon = icons[i];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-white/60">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}