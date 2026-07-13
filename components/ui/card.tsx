import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#e6e6ec] bg-[#ffffff] p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
