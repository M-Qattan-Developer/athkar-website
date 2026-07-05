"use client";

import {
  IconHelp,
  IconPlus,
  IconPlayerPlay,
  IconSettings,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import DocsNavbar from "@/components/layout/DocsNavbar";

const commands = [
  {
    icon: IconSettings,
    name: "/set-azkar-channel",
    desc: "تعيين قناة الأذكار في السيرفر",
  },
  {
    icon: IconHeartHandshake,
    name: "/support",
    desc: "رابط سيرفر الدعم الفني",
  },
  {
    icon: IconPlus,
    name: "/invite",
    desc: "إرسال رابط دعوة البوت",
  },
  {
    icon: IconPlayerPlay,
    name: "/ping",
    desc: "عرض زمن استجابة البوت",
  },
  {
    icon: IconHelp,
    name: "/help",
    desc: "شرح الأوامر الخاصة بالبوت",
  },
];

export default function CommandsPage() {
  return (
    <main className="min-h-screen py-32 flex justify-center">

      <div className="container flex justify-center">

        <div className="w-full max-w-5xl">

          {/* Header */}
          <div className="text-center mb-16">

            <span className="inline-flex mb-5 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-2 text-sm text-[#C6A15B]">
              Commands
            </span>

            <h1 className="text-5xl font-bold">
              أوامر البوت
            </h1>

            <p className="mt-6 text-white/60 leading-8">
              جميع أوامر بوت Athkar الرسمية لإدارة الأذكار داخل Discord بسهولة.
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
                      {cmd.desc}
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