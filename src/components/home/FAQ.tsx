"use client";

import SectionTitle from "./SectionTitle";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { faq } from "@/data/faq";

export default function FAQ() {
    const { language } = useTranslation();
    const isArabic = language === "ar";
  return (
    <section id="faq" className="py-32">

      <Container>

        <SectionTitle
  badge={isArabic ? "الأسئلة الشائعة" : "  FAQ  "}
  title={
    isArabic
      ? "كل ما تحتاج معرفته"
      : "Everything You Need to Know"
  }
/>

        <div className="mx-auto max-w-3xl space-y-5">

          {faq.map((item) => (
            <details
              key={item.ar.q}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-[#C6A15B]/30"
            >
              <summary
  className={`cursor-pointer text-xl font-bold ${
    isArabic ? "text-right" : "text-left"
  }`}
>
                {language === "ar" ? item.ar.q : item.en.q}
              </summary>

              <p
  className={`mt-5 leading-8 text-white/60 ${
    isArabic ? "text-right" : "text-left"
  }`}
>
                {language === "ar" ? item.ar.a : item.en.a}
              </p>
            </details>
          ))}

        </div>

      </Container>

    </section>
  );
}