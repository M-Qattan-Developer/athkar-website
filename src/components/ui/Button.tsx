import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "outline";
};

export default function Button({
  children,
  href = "#",
  variant = "gold",
}: Props) {
  const styles =
    variant === "gold"
      ? "bg-[#C6A15B] text-[#08111f] hover:scale-105"
      : "border border-white/10 bg-white/5 hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-8 py-4 font-bold transition ${styles}`}
    >
      {children}
    </Link>
  );
}