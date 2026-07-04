"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import ServerNetwork from "./ServerNetwork";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { hero } from "@/data/hero";

export default function Hero() {

    const { language } = useTranslation();
    const t = hero[language];

  return (
    <section className="relative overflow-hidden">

      <Container>
  <div className="grid min-h-screen items-center gap-20 py-28 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-2 text-[#C6A15B]">

            <Sparkles size={16} />

           {t.badge}

          </div>

          <h1 className="text-5xl font-black leading-[1.15] lg:text-7xl">

            كل ذكرٍ
            <span className="text-[#C6A15B]">
              {" "}تشاركه
            </span>

            <br />

            قد يكون سببًا
            <br />

            في أجرٍ مستمر.

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-10 text-white/65">

{t.description}

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

  <Button href="#">
   {t.primary}
  </Button>

  <Button href="#how" variant="outline">
  {t.secondary}
  </Button>

</div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <ServerNetwork />

        </motion.div>

      </div>
</Container>

    </section>
  );
}