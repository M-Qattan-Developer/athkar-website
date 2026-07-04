import { IconBrandDiscord } from "@tabler/icons-react";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-32">

      <Container>

        <div className="mx-auto max-w-4xl rounded-[40px] border border-[#C6A15B]/20 bg-gradient-to-br from-[#C6A15B]/10 to-white/5 p-14 text-center backdrop-blur-xl">

          <h2 className="text-5xl font-bold">
            انضم إلى مجتمع نشر الأذكار
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/60">
            أضف البوت إلى سيرفرك وساهم في نشر الأذكار بين آلاف المسلمين بطريقة
            آمنة ومنظمة.
          </p>

          <button className="mx-auto mt-10 flex items-center gap-3 rounded-2xl bg-[#C6A15B] px-8 py-4 font-bold text-[#08111f] transition hover:scale-105">

            <IconBrandDiscord />

            إضافة البوت

          </button>

        </div>

      </Container>

    </section>
  );
}