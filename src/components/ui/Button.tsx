import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "outline";
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export default function Button({
  children,
  href = "#",
  variant = "gold",
  target,
  rel,
}: Props) {
  const styles =
    variant === "gold"
      ? "bg-[#C6A15B] text-[#08111f] hover:scale-105"
      : "border border-white/10 bg-white/5 hover:bg-white/10";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-bold transition ${styles}`}
    >
      {children}
    </Link>
  );
}