"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { footer } from "@/data/footer";
import Link from "next/link";
import Image from "next/image";
import { IconBrandDiscord } from "@tabler/icons-react";
import Container from "@/components/ui/Container";

export default function Footer() {
    const { language } = useTranslation();
    const t = footer[language];
  return (
    <footer className="mt-32 border-t border-white/10 bg-[#050b15]/70">

      <Container>

        <div className="grid gap-12 md:grid-cols-3 py-16">

          {/* Brand */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <Image
                src="/images/logo-new2.png"
                alt="Athkar"
                width={46}
                height={46}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  Athkar
                </h3>

                <p className="text-sm text-white/50">
                  Discord Bot
                </p>
              </div>

            </div>

            <p className="leading-8 text-white/60">
             {t.description}
            </p>

          </div>

          {/* Links */}
          <div>

            <h4 className="mb-5 font-bold">
             {t.website}
            </h4>

            <div className="space-y-3 text-white/60">

<div className="flex flex-col gap-3">

<Link href="/" scroll={true} className="hover:text-[#C6A15B] transition">
   {t.home}
</Link>
<Link href="/commands" scroll={true} className="hover:text-[#C6A15B] transition">
   {t.commands}
</Link>
<Link href="/privacy" scroll={true} className="hover:text-[#C6A15B] transition">
   {t.privacy}
</Link>
<Link href="/terms" scroll={true} className="hover:text-[#C6A15B] transition">
   {t.terms}
</Link>

 </div>
            </div>

          </div>

          {/* Bot info */}
          <div>

            <h4 className="mb-5 font-bold">
             {t.bot}
            </h4>

            <div className="space-y-3 text-white/60">

              <p>Slash Commands</p>
              <p>Arabic / English</p>
              <p>Discord Bot</p>

            </div>

            {/* Support Server Button */}
            <a
              href="https://discord.gg/6dp2atPQM6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-3 font-semibold text-[#C6A15B] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#08111f] hover:scale-105"
            >
              <IconBrandDiscord size={20} />
             {t.support}
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 pt-8 pb-10 text-center text-white/40">

          © {new Date().getFullYear()} Athkar. {t.copyright}

        </div>

      </Container>

    </footer>
  );
}