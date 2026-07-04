"use client";

import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconWorld,
  IconClock,
  IconLock,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconShieldCheck,
    title: "مراجعة قبل النشر",
    desc: "كل ذكر يمر على إدارة البوت قبل وصوله لباقي السيرفرات.",
  },
  {
    icon: IconWorld,
    title: "وصول لجميع السيرفرات",
    desc: "الذكر الواحد قد يصل إلى آلاف الأعضاء عبر السيرفرات المشاركة.",
  },
  {
    icon: IconClock,
    title: "نشر تلقائي",
    desc: "بعد الموافقة يتم النشر تلقائيًا دون تدخل.",
  },
  {
    icon: IconLock,
    title: "خصوصية كاملة",
    desc: "لا يظهر اسم المرسل أو أي معلومات عنه.",
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-32">

      <h2 className="mb-14 text-center text-5xl font-bold">
        لماذا <span className="text-[#C6A15B]">Athkar</span>؟
      </h2>

      <div className="grid gap-8 md:grid-cols-2">

        {features.map((item, i) => {

          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
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
                {item.title}
              </h3>

              <p className="leading-8 text-white/60">
                {item.desc}
              </p>

            </motion.div>
          );

        })}

      </div>

    </section>
  );
}