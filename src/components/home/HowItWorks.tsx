"use client";

import { steps } from "@/data/howItWorks";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Container from "@/components/ui/Container";

export default function HowItWorks() {
    const { language } = useTranslation();
    const isArabic = language === "ar";
  return (
    <section id="how" className="py-32">

      <Container>

        <SectionTitle
  badge={isArabic ? "كيف يعمل؟" : "How it Works"}
  title={isArabic ? "ثلاث خطوات فقط" : "Just Three Steps"}
  subtitle={
    isArabic
      ? "عملية بسيطة وآمنة لنشر الأذكار بين جميع السيرفرات."
      : "A simple and secure process for sharing remembrance across all servers."
  }
/>

        <div className="grid gap-8 lg:grid-cols-3 place-items-center w-full">

          {steps.map((step, i) => {

            const Icon = step.icon;

            return (
              <motion.div
                key={step.ar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .15 }}
                className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-right"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center self-end rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                  <Icon size={34} />
                </div>

                <h3 className={`mb-3 text-2xl font-bold ${
  isArabic ? "text-right" : "text-left"
}`}>
                  {language === "ar" ? step.ar.title : step.en.title}
                </h3>

                <p className={`leading-8 text-white/60 ${
  isArabic ? "text-right" : "text-left"
}`}>
                  {language === "ar" ? step.ar.desc : step.en.desc}
                </p>

              </motion.div>
            );

          })}

        </div>

      </Container>

    </section>
  );
}