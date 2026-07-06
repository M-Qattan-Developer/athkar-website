"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { privacy } from "@/data/privacy";
import DocsNavbar from "@/components/layout/DocsNavbar";

export default function PrivacyPage() {
    const { language } = useTranslation();
    const t = privacy[language];
    const isArabic = language === "ar";
  return (
    <main className="min-h-screen py-32 flex justify-center">

      <div className="container flex justify-center">

        <div className="mx-auto w-full max-w-5xl">

          {/* Header */}
          <div className="mb-16 text-center">

            <span className="inline-flex rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-2 text-sm text-[#C6A15B]">
              {t.badge}
            </span>

            <h1 className="mt-6 text-5xl font-bold">
             {t.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/60">
             {t.subtitle}
            </p>

          </div>

          {/* Content */}
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
{t.sections.map((section) => (
  <section key={section.title}>
    <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
      {section.title}
    </h2>

    {"body" in section && (
      <p className="leading-9 text-white/70">
        {section.body}
      </p>
    )}

    {"intro" in section && (
      <p className="mb-4 leading-9 text-white/70">
        {section.intro}
      </p>
    )}

    {"list" in section && (
      <ul
        className={`list-disc space-y-3 leading-9 text-white/70 ${
          isArabic ? "pr-6" : "pl-6"
        }`}
      >
        {section.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </section>
))}

          </div>

        </div>

      </div>

      <DocsNavbar />

    </main>
  );
}