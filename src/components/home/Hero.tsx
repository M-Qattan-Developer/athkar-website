"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ServerNetwork from "./ServerNetwork";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { hero } from "@/data/hero";
import { site } from "@/data/site";
import Link from "next/link";

export default function Hero() {
  const { language } = useTranslation();
  const t = hero[language];

  const isArabic = language === "ar";

  return (
    <section className="relative overflow-x-hidden pb-24">

      <Container>
        <div className="grid items-center gap-16 lg:gap-24 pt-36 pb-24 lg:pt-44 lg:pb-28 lg:grid-cols-[minmax(0,1fr)_500px]">

          {/* LEFT SIDE */}
          <motion.div
            className={`space-y-5 text-center ${
            isArabic ? "lg:text-right" : "lg:text-left"
            }`}
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
            <h1 className="text-4xl font-black leading-[1.55] lg:text-5xl tracking-tight">
  {t.title1}{" "}
  <span className="text-[#C6A15B]">
    {t.highlight}
  </span>
  <br />
  {t.title2}
  <br />
  {t.title3}
</h1>

            {/* DESCRIPTION */}
            <p className={`mt-8 max-w-xl text-lg lg:text-xl leading-relaxed text-white/65 mx-auto ${
              isArabic ? "lg:mx-0 lg:text-right" : "lg:mx-0 lg:text-left"
            }`}>
              {t.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex w-full flex-wrap gap-5 justify-center lg:justify-start">

              <Button
              href={site.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
             {t.primary}
            </Button>

              <Button href="#how" variant="outline">
                {t.secondary}
              </Button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
  className="relative flex justify-center lg:justify-end overflow-visible"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative lg:-mr-24">
  <ServerNetwork />
</div>
          </motion.div>

        </div>
      </Container>

    </section>
  );
}