import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-[#050b15]/70">

      <Container>

        <div className="grid gap-12 md:grid-cols-3 py-16">

          {/* Brand */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <Image
                src="/images/logo.png"
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
              منصة لنشر الأذكار بين مجتمعات Discord بطريقة آمنة،
              مع مراجعة جميع المشاركات قبل نشرها.
            </p>

          </div>

          {/* Links */}
          <div>

            <h4 className="mb-5 font-bold">
              الموقع
            </h4>

            <div className="space-y-3 text-white/60">

              <Link href="/">الرئيسية</Link><br />
              <Link href="/commands">الأوامر</Link><br />
              <Link href="/privacy">سياسة الخصوصية</Link><br />
              <Link href="/terms">الشروط</Link>

            </div>

          </div>

          {/* Bot info */}
          <div>

            <h4 className="mb-5 font-bold">
              البوت
            </h4>

            <div className="space-y-3 text-white/60">

              <p>Slash Commands</p>
              <p>Arabic / English</p>
              <p>Discord Verified</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 pb-10">

          © {new Date().getFullYear()} Athkar. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}