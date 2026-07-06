"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconBrandDiscord,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/home/LanguageSwitcher";
import { navigation } from "@/data/navigation";
import Container from "@/components/ui/Container";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
              border-white/10 px-6 transition-all duration-300

              ${
                scrolled
                  ? "bg-white/10 backdrop-blur-2xl shadow-2xl"
                  : "bg-white/5 backdrop-blur-xl"
              }
            `}
          >
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-3">
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

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigation[language].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:scale-105 hover:text-[#C6A15B]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-3">
  <LanguageSwitcher />

  <Link
    href={site.inviteUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hidden items-center gap-2 rounded-xl bg-[#C6A15B] px-4 py-2 text-sm font-bold text-[#08111f] transition hover:scale-105 hover:shadow-lg hover:shadow-[#C6A15B]/20 md:flex"
  >
    <IconBrandDiscord size={18} />
    {t.navbarBot}
  </Link>

  <button
    onClick={() => setMenuOpen(true)}
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
  >
    <IconMenu2 size={22} />
  </button>
</div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{
                x: language === "ar" ? "100%" : "-100%",
              }}
              animate={{ x: 0 }}
              exit={{
                x: language === "ar" ? "100%" : "-100%",
              }}
              transition={{ duration: 0.25 }}
              className={`fixed top-0 ${
                language === "ar" ? "right-0 border-l" : "left-0 border-r"
              } z-50 flex h-full w-80 flex-col border-white/10 bg-[#08111f] p-6 lg:hidden`}
            >
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-xl font-bold">Athkar</h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg p-2 hover:bg-white/10"
                >
                  <IconX />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navigation[language].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-lg transition hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href={site.inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#C6A15B] py-4 font-bold text-[#08111f]"
              >
                <IconBrandDiscord size={20} />
                {t.navbarBot}
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}