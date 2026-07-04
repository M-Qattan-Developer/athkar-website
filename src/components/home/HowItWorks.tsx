"use client";

import {
  IconUpload,
  IconShieldCheck,
  IconWorldShare,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    icon: IconUpload,
    title: "يرسل العضو ذكرًا",
    desc: "نص، صورة أو مقطع داخل روم الأذكار.",
  },
  {
    icon: IconShieldCheck,
    title: "تتم المراجعة",
    desc: "إدارة البوت تعتمد الذكر قبل نشره.",
  },
  {
    icon: IconWorldShare,
    title: "ينتشر للجميع",
    desc: "يصل لجميع السيرفرات المشاركة دون إظهار اسم المرسل.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="container py-32">

      <SectionTitle
        badge="كيف يعمل؟"
        title="ثلاث خطوات فقط"
        subtitle="عملية بسيطة وآمنة لنشر الأذكار بين جميع السيرفرات."
      />

      <div className="grid gap-8 lg:grid-cols-3">

        {steps.map((step, i) => {

          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                <Icon size={34} />
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="leading-8 text-white/60">
                {step.desc}
              </p>

            </motion.div>
          );

        })}

      </div>

    </section>
  );
}