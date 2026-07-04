"use client";

import { motion } from "framer-motion";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">

<BackgroundGlow />
      <div className="absolute inset-0">

        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-[#C6A15B]/20 blur-3xl" />

        <div className="absolute left-20 bottom-20 h-80 w-80 rounded-full bg-[#24384D]/60 blur-3xl" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-3xl text-6xl font-extrabold leading-tight"
        >
          كل ذكرٍ تشاركه...
          <br />
          قد يكون سببًا في أجرٍ مستمر.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .8 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-white/70"
        >
          Athkar هو بوت Discord يربط مجتمعات المسلمين لنشر الأذكار
          بعد مراجعتها واعتمادها، لتصل إلى جميع السيرفرات المشاركة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-12 flex gap-4"
        >
          <button className="rounded-xl bg-[#C6A15B] px-7 py-4 font-bold text-[#08111f] transition hover:scale-105">
            إضافة البوت
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur transition hover:bg-white/10">
            تعرّف أكثر
          </button>
        </motion.div>

      </div>

    </section>
  );
}