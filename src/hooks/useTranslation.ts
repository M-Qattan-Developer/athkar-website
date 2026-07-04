"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}