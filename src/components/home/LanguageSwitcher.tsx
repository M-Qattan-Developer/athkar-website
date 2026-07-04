"use client";

import { useLanguage } from "@/context/LanguageContext";
import { IconLanguage } from "@tabler/icons-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() =>
        setLanguage(language === "ar" ? "en" : "ar")
      }
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:border-[#C6A15B]/40 hover:bg-white/10"
    >
      <IconLanguage size={18} />

      {language === "ar" ? "العربية" : "English"}
    </button>
  );
}