"use client";

import {
  IconShieldCheck,
  IconEyeOff,
  IconBolt,
  IconWorld,
} from "@tabler/icons-react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    icon: IconShieldCheck,
    title: "مراجعة يدوية",
    desc: "كل ذكر تتم مراجعته قبل وصوله لباقي السيرفرات.",
  },
  {
    icon: IconEyeOff,
    title: "خصوصية كاملة",
    desc: "لا يتم إظهار اسم المرسل أو أي معلومات عنه.",
  },
  {
    icon: IconBolt,
    title: "سريع",
    desc: "بعد الاعتماد يتم النشر تلقائيًا لجميع السيرفرات.",
  },
  {
    icon: IconWorld,
    title: "مجتمع واحد",
    desc: "كل سيرفر يساهم في نشر الخير بين الجميع.",
  },
];

export default function WhyAthkar() {
  return (
    <section className="container py-32">
      <SectionTitle
        badge="المميزات"
        title="لماذا Athkar؟"
        subtitle="مصمم لنشر الأذكار بطريقة آمنة وسهلة بين مجتمعات Discord."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-[#C6A15B]/40 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                <Icon size={34} />
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="leading-8 text-white/60">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}