interface SectionEyebrowProps {
  label: string;
  className?: string;
}

export function SectionEyebrow({ label, className }: SectionEyebrowProps) {
  return (
    <div
      className={`text-[10px] font-semibold tracking-widest text-muted uppercase ${className ?? ""}`}
    >
      {label}
    </div>
  );
}
