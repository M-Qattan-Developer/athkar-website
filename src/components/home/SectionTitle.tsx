type Props = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {badge && (
        <span className="mb-5 inline-flex rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/10 px-4 py-2 text-sm text-[#C6A15B]">
          {badge}
        </span>
      )}

      <h2 className="text-5xl font-bold leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-9 text-white/60">
          {subtitle}
        </p>
      )}

    </div>
  );
}