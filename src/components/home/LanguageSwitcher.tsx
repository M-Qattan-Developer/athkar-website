"use client";

import { IconLanguage } from "@tabler/icons-react";

export default function LanguageSwitcher() {
  return (
    <button
      className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm transition hover:border-[#C6A15B]/40 hover:bg-white/10"
    >
      <IconLanguage size={18} />
      العربية
    </button>
  );
}