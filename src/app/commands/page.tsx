"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { commands } from "@/data/commands";
import { motion } from "framer-motion";
import DocsNavbar from "@/components/layout/DocsNavbar";

export default function CommandsPage() {
  const { language } = useTranslation();
  const isArabic = language === "ar";

  return (
    <main className="min-h-screen py-32 flex justify-center">

      <div className="container flex justify-center">

        <div className="w-full max-w-5xl">

          {/* Header */}
          <div className="text-center mb-16">

            <span className="inline-flex mb-5 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-2 text-sm text-[#C6A15B]">
              {isArabic ? "الأوامر" : "Commands"}
            </span>

            <h1 className="text-5xl font-bold">
             {isArabic ? "أوامر البوت" : "Bot Commands"}
            </h1>

            <p className="mt-6 text-white/60 leading-8">
             {isArabic
  ? "جميع أوامر بوت Athkar الرسمية لإدارة الأذكار داخل Discord بسهولة."
  : "All official Athkar bot commands for managing remembrance in Discord with ease."}
            </p>

          </div>

          {/* Commands Grid */}
          <div className="grid gap-6 md:grid-cols-2">

            {commands.map((cmd, i) => {
              const Icon = cmd.icon;

              return (
                <motion.div
                  key={cmd.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-[#C6A15B]/30 transition"
                >

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                    <Icon size={28} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-[#C6A15B]">
                      {cmd.name}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {language === "ar" ? cmd.ar.desc : cmd.en.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      <DocsNavbar />

      </div>

    </main>
    
  );
}