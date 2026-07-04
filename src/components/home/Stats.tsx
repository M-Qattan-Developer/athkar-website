"use client";

import { motion } from "framer-motion";
import {
  IconServer,
  IconMessageCircleHeart,
  IconCircleCheck,
} from "@tabler/icons-react";
import Container from "@/components/ui/Container";

const stats = [
  {
    icon: IconServer,
    value: "∞",
    title: "سيرفرات متصلة",
  },
  {
    icon: IconMessageCircleHeart,
    value: "24/7",
    title: "نشر مستمر",
  },
  {
    icon: IconCircleCheck,
    value: "100%",
    title: "مراجعة قبل النشر",
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-10 w-full">

      <Container>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-white/60">
                  {item.title}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}