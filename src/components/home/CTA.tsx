"use client";

import { IconBrandDiscord } from "@tabler/icons-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { cta } from "@/data/cta";
import { useTranslation } from "@/hooks/useTranslation";

export default function CTA() {
    const { language } = useTranslation();
    const t = cta[language];
    const isArabic = language === "ar";
  return (
    
    <section className="py-32">

      <Container>

        <div className="mx-auto max-w-4xl rounded-[40px] border border-[#C6A15B]/20 bg-gradient-to-br from-[#C6A15B]/10 to-white/5 p-14 text-center backdrop-blur-xl">

          <h2
  className={`mx-auto font-bold leading-tight tracking-tight ${
    isArabic
      ? "max-w-3xl text-4xl md:text-5xl"
      : "max-w-4xl text-3xl md:text-5xl"
  }`}
>
  {t.title}
</h2>

          <p
  className={`mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/60 ${
    isArabic ? "text-center" : "text-center"
  }`}
>
  {t.description}
</p>

        <div className="mt-10">
          <Button
             href={site.inviteUrl}
             target="_blank"
             rel="noopener noreferrer"
           >
             <IconBrandDiscord />
            {t.button}
          </Button>
         </div>
        </div>

      </Container>

    </section>
  );
}