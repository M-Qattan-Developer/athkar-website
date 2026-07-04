"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ServerNetwork from "./ServerNetwork";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { hero } from "@/data/hero";

export default function Hero() {
  const { language } = useTranslation();
  const t = hero[language];

  return (
    <section className="relative overflow-hidden pb-24">

      <Container>
        <div className="grid items-center gap-16 lg:gap-24 pt-36 pb-24 lg:pt-44 lg:pb-28 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            className="text-center lg:text-right space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* BADGE */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-2 text-[#C6A15B]">
              <Sparkles size={16} />
              {t.badge}
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-black leading-[1.15] lg:text-7xl tracking-tight">
              كل ذكرٍ{" "}
              <span className="text-[#C6A15B]">تشاركه</span>
              <br />
              قد يكون سببًا
              <br />
              في أجرٍ مستمر.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-lg lg:text-xl leading-relaxed text-white/65 mx-auto lg:mx-0">
              {t.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">

              <Button href="#">
                {t.primary}
              </Button>

              <Button href="#how" variant="outline">
                {t.secondary}
              </Button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ServerNetwork />
          </motion.div>

        </div>
      </Container>

    </section>
  );
}