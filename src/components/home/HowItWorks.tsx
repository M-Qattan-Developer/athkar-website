"use client";

import {
  IconUpload,
  IconShieldCheck,
  IconWorldShare,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Container from "@/components/ui/Container";

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
    <section id="how" className="py-32">

      <Container>

        <SectionTitle
          badge="كيف يعمل؟"
          title="ثلاث خطوات فقط"
          subtitle="عملية بسيطة وآمنة لنشر الأذكار بين جميع السيرفرات."
        />

        <div className="grid gap-8 lg:grid-cols-3 place-items-center w-full">

          {steps.map((step, i) => {

            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .15 }}
                className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-right"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center self-end rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                  <Icon size={34} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-right">
                  {step.title}
                </h3>

                <p className="leading-8 text-white/60 text-right">
                  {step.desc}
                </p>

              </motion.div>
            );

          })}

        </div>

      </Container>

    </section>
  );
}