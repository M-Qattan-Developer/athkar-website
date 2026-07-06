"use client";

import Image from "next/image";
import Link from "next/link";
import { IconBrandDiscord } from "@tabler/icons-react";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/home/LanguageSwitcher";
import { navigation } from "@/data/navigation";
import Container from "@/components/ui/Container";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, t } = useTranslation();

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
        scrolled ? "top-2 scale-[0.97]" : "top-5"
      }`}
    >
      <Container>
        <div
          className={`
            flex h-20 items-center justify-between rounded-2xl border
            border-white/10 transition-all duration-300 px-6

            ${
              scrolled
                ? "bg-white/10 backdrop-blur-2xl shadow-2xl"
                : "bg-white/5 backdrop-blur-xl"
            }
          `}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo-new2.png"
              alt="Athkar"
              width={48}
              height={48}
            />

            <div className="leading-tight">
              <h2 className="text-xl font-bold">Athkar</h2>
              <p className="text-xs text-white/50">
                  {t.navbarSubtitle}
               </p>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation[language].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-[#C6A15B] hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 shrink-0">
            <LanguageSwitcher />

            {/* ADD BOT BUTTON */}
            <Link
              href={site.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#C6A15B] px-4 py-2 text-sm font-bold text-[#08111f] transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#C6A15B]/20"
            >
              <IconBrandDiscord size={18} />
             {t.navbarBot}
            </Link>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}