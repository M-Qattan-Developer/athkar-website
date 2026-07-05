import DocsNavbar from "@/components/layout/DocsNavbar";
export default function TermsPage() {
  return (
    <main className="min-h-screen py-32 flex justify-center">

      <div className="container flex justify-center">

        <div className="mx-auto w-full max-w-5xl">

          {/* Header */}
          <div className="mb-16 text-center">

            <span className="inline-flex rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-2 text-sm text-[#C6A15B]">
              Terms of Service
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              الشروط والأحكام
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/60">
              باستخدامك لبوت Athkar فإنك توافق على الشروط والأحكام التالية،
              والتي تهدف إلى تنظيم استخدام الخدمة وضمان بيئة آمنة لجميع المستخدمين.
            </p>

          </div>

          {/* Content */}
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            {/* 1 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                1. قبول الشروط
              </h2>
              <p className="leading-9 text-white/70">
                باستخدامك لبوت Athkar فإنك تقر بأنك قرأت وفهمت ووافقت على هذه الشروط.
                إذا لم توافق على أي جزء منها يجب عليك التوقف عن استخدام الخدمة.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                2. وصف الخدمة
              </h2>
              <p className="leading-9 text-white/70">
                Athkar هو بوت Discord يهدف إلى نشر الأذكار بين السيرفرات بطريقة منظمة،
                مع نظام مراجعة قبل النشر لضمان جودة المحتوى.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                3. استخدام البوت
              </h2>
              <p className="leading-9 text-white/70">
                يجب استخدام البوت بطريقة صحيحة وعدم إرسال محتوى مخالف أو مسيء أو غير مناسب.
                يحق لإدارة البوت حظر أي مستخدم يخالف القواعد.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                4. المحتوى
              </h2>
              <p className="leading-9 text-white/70">
                جميع الأذكار تخضع للمراجعة قبل النشر، ويحق للإدارة رفض أو حذف أي محتوى
                لا يتوافق مع سياسة المنصة.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                5. التعديلات على الخدمة
              </h2>
              <p className="leading-9 text-white/70">
                يحق لإدارة Athkar تعديل أو إيقاف أي جزء من الخدمة في أي وقت بدون إشعار مسبق.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                6. المسؤولية
              </h2>
              <p className="leading-9 text-white/70">
                استخدام البوت يكون على مسؤولية المستخدم. نحن غير مسؤولين عن أي إساءة استخدام
                أو نتائج ناتجة عن الاستخدام غير الصحيح.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                7. التحديثات
              </h2>
              <p className="leading-9 text-white/70">
                قد يتم تحديث هذه الشروط في أي وقت، ويعتبر استمرار استخدام البوت موافقة
                على النسخة الأحدث.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                8. التواصل
              </h2>
              <p className="leading-9 text-white/70">
                لأي استفسارات حول الشروط يمكنك التواصل معنا عبر سيرفر الدعم الخاص بـ Athkar.
              </p>
            </section>

          </div>

        </div>

      </div>

      <DocsNavbar />

    </main>
  );
}