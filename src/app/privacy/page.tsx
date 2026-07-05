import DocsNavbar from "@/components/layout/DocsNavbar";
export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-32 flex justify-center">

      <div className="container flex justify-center">

        <div className="mx-auto w-full max-w-5xl">

          {/* Header */}
          <div className="mb-16 text-center">

            <span className="inline-flex rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-5 py-2 text-sm text-[#C6A15B]">
              Privacy Policy
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              سياسة الخصوصية
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/60">
              توضح هذه الصفحة كيفية تعامل بوت Athkar مع البيانات التي يتم الوصول إليها
              أثناء استخدامه داخل Discord، والآلية المتبعة لحماية خصوصية جميع المستخدمين.
            </p>

          </div>

          {/* Content */}
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                1. مقدمة
              </h2>

              <p className="leading-9 text-white/70">
                باستخدامك لبوت Athkar فإنك توافق على سياسة الخصوصية هذه. نحن
                نحرص على جمع الحد الأدنى من البيانات اللازمة لتشغيل البوت وتقديم
                خدماته بطريقة آمنة وموثوقة.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                2. البيانات التي قد يتم الوصول إليها
              </h2>

              <ul className="list-disc space-y-3 pr-6 leading-9 text-white/70">

                <li>معرف المستخدم (User ID).</li>
                <li>معرف السيرفر (Guild ID).</li>
                <li>معرف القناة (Channel ID).</li>
                <li>معرف الرسالة (Message ID).</li>
                <li>محتوى الذكر الذي يرسله المستخدم للمراجعة.</li>
                <li>الإعدادات الخاصة بالسيرفر عند استخدام البوت.</li>

              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                3. كيفية استخدام البيانات
              </h2>

              <p className="mb-4 leading-9 text-white/70">
                تستخدم البيانات فقط لتشغيل البوت وتحسين جودة الخدمة، بما في ذلك:
              </p>

              <ul className="list-disc space-y-3 pr-6 leading-9 text-white/70">

                <li>استقبال الأذكار المرسلة.</li>
                <li>مراجعة المحتوى قبل نشره.</li>
                <li>نشر الأذكار في السيرفرات المشاركة.</li>
                <li>تنفيذ أوامر البوت.</li>
                <li>تحسين الأداء وإصلاح الأخطاء.</li>

              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                4. البيانات التي لا نقوم بجمعها
              </h2>

              <ul className="list-disc space-y-3 pr-6 leading-9 text-white/70">

                <li>كلمات المرور.</li>
                <li>البريد الإلكتروني.</li>
                <li>رقم الهاتف.</li>
                <li>وسائل الدفع أو المعلومات البنكية.</li>
                <li>أي بيانات شخصية خارج ما توفره Discord لتشغيل البوت.</li>

              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                5. خصوصية الأذكار
              </h2>

              <p className="leading-9 text-white/70">
                جميع الأذكار تمر على المراجعة قبل النشر، ولا يتم إظهار اسم المرسل
                أو صورته الشخصية أو أي معلومات تعريفية عند نشر الذكر في السيرفرات
                الأخرى.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                6. مشاركة البيانات
              </h2>

              <p className="leading-9 text-white/70">
                لا يتم بيع أو تأجير أو مشاركة أي بيانات مع أي جهة خارجية، إلا إذا
                كان ذلك مطلوبًا بموجب الأنظمة أو القوانين المعمول بها.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                7. حماية البيانات
              </h2>

              <p className="leading-9 text-white/70">
                نسعى لتطبيق إجراءات مناسبة لحماية البيانات من الوصول غير المصرح به
                أو التعديل أو الحذف أو التسريب، مع مراعاة أفضل الممارسات الأمنية
                المتاحة.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                8. خدمات الطرف الثالث
              </h2>

              <p className="leading-9 text-white/70">
                يعتمد Athkar على خدمات Discord الرسمية لتشغيل البوت، وقد يتم
                استخدام مزودي استضافة موثوقين لتشغيل الخدمة وتحسين استقرارها.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                9. تحديثات السياسة
              </h2>

              <p className="leading-9 text-white/70">
                قد يتم تعديل سياسة الخصوصية عند تطوير البوت أو إضافة خدمات جديدة،
                ويعتبر استمرار استخدام البوت موافقة على أحدث نسخة منشورة من هذه
                الصفحة.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#C6A15B]">
                10. التواصل
              </h2>

              <p className="leading-9 text-white/70">
                إذا كانت لديك أي استفسارات حول سياسة الخصوصية أو البيانات المتعلقة
                بالبوت، يمكنك التواصل معنا عبر سيرفر الدعم الرسمي الخاص بـ Athkar.
              </p>
            </section>

          </div>

        </div>

      </div>

      <DocsNavbar />

    </main>
  );
}