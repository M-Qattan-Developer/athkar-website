"use client";

import SectionTitle from "./SectionTitle";

const faq = [
  {
    q: "هل يظهر اسم الشخص الذي أرسل الذكر؟",
    a: "لا، يتم نشر جميع الأذكار بدون إظهار اسم المرسل أو أي معلومات عنه.",
  },
  {
    q: "هل يتم نشر الذكر مباشرة؟",
    a: "لا، يمر أولًا على مراجعة إدارة البوت ثم يتم نشره بعد الاعتماد.",
  },
  {
    q: "ما أنواع المحتوى المسموح؟",
    a: "النصوص، الصور والمقاطع التي تحتوي على أذكار صحيحة.",
  },
  {
    q: "هل البوت مجاني؟",
    a: "نعم، يمكن إضافته واستخدامه مجانًا.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="container py-32">
      <SectionTitle
        badge="الأسئلة الشائعة"
        title="كل ما تحتاج معرفته"
      />

      <div className="space-y-5">
        {faq.map((item) => (
          <details
            key={item.q}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <summary className="cursor-pointer text-xl font-bold">
              {item.q}
            </summary>

            <p className="mt-5 leading-8 text-white/60">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}