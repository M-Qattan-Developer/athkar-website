export default function CommandsPage() {
  return (
    <main className="container py-32">
      <h1 className="mb-8 text-5xl font-bold">أوامر البوت</h1>

      <div className="space-y-5">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-bold">/setup</h3>
          <p className="mt-2 text-white/60">
            إعداد روم الأذكار داخل السيرفر.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-bold">/help</h3>
          <p className="mt-2 text-white/60">
            عرض جميع أوامر البوت.
          </p>
        </div>

      </div>
    </main>
  );
}