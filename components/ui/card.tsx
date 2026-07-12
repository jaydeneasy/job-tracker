import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#1e1e2a] bg-[#111117] p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
