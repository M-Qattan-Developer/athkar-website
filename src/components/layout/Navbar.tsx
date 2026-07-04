"use client";

import Image from "next/image";
import Link from "next/link";
import { IconBrandDiscord, IconLanguage } from "@tabler/icons-react";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/home/LanguageSwitcher";

const links = [
  { name: "الرئيسية", href: "#" },
  { name: "المميزات", href: "#features" },
  { name: "كيف يعمل", href: "#how" },
  { name: "الأسئلة", href: "#faq" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-0 right-0 z-50"
    >
      <div className="container">

        <div className="flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-7 backdrop-blur-xl">

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/images/logo.png"
              alt="Athkar"
              width={52}
              height={52}
            />

            <div>
              <h2 className="text-2xl font-bold">Athkar</h2>
              <p className="text-xs text-white/50">
                Share remembrance
              </p>
            </div>

          </Link>

          <nav className="hidden items-center gap-10 lg:flex">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-[#C6A15B]"
              >
                {link.name}
              </Link>
            ))}

          </nav>

          <div className="flex items-center gap-3">

            <LanguageSwitcher />

            <button className="flex items-center gap-2 rounded-xl bg-[#C6A15B] px-5 py-3 font-bold text-[#08111f] transition hover:scale-105">

              <IconBrandDiscord size={20} />

              إضافة البوت

            </button>

          </div>

        </div>

      </div>
    </motion.header>
  );
}