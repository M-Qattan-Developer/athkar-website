"use client";

import Image from "next/image";
import Link from "next/link";
import { IconBrandDiscord } from "@tabler/icons-react";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/home/LanguageSwitcher";
import { navigation } from "@/data/navigation";
import Container from "@/components/ui/Container";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-5 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "top-2 scale-[0.98]" : "top-5"
      }`}
    >
      <Container>
        <div
          className={`
            flex h-20 items-center justify-between rounded-2xl border
            border-white/10 backdrop-blur-xl transition-all duration-300
            ${scrolled ? "bg-white/10 shadow-xl" : "bg-white/5"}
            px-6
          `}
        >

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 shrink-0">

            <Image
              src="/images/logo.png"
              alt="Athkar"
              width={48}
              height={48}
            />

            <div className="leading-tight">
              <h2 className="text-xl font-bold">Athkar</h2>
              <p className="text-xs text-white/50">
                Share remembrance
              </p>
            </div>

          </Link>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-[#C6A15B]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 shrink-0">

            <LanguageSwitcher />

            <button className="flex items-center gap-2 rounded-xl bg-[#C6A15B] px-4 py-2 text-sm font-bold text-[#08111f] transition hover:scale-105">
              <IconBrandDiscord size={18} />
              إضافة البوت
            </button>

          </div>

        </div>
      </Container>
    </motion.header>
  );
}