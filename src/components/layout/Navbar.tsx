"use client";

import Image from "next/image";
import Link from "next/link";
import { IconLanguage } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-5 flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Athkar"
            width={44}
            height={44}
          />

          <div>
            <h2 className="text-lg font-bold">Athkar</h2>
            <p className="text-xs text-white/50">
              Share remembrance
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#">الرئيسية</Link>
          <Link href="#">المميزات</Link>
          <Link href="#">كيف يعمل</Link>
          <Link href="#">الأسئلة</Link>
        </nav>

        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
            <IconLanguage size={20} />
          </button>

          <button className="rounded-xl bg-[#C6A15B] px-5 py-2 font-bold text-[#08111f] transition hover:scale-105">
            إضافة البوت
          </button>

        </div>

      </div>
    </header>
  );
}