import { cn } from "@/lib/utils";

interface ListContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ListContainer({ children, className }: ListContainerProps) {
  return (
    <div
      className={cn(
        "divide-y divide-border-subtle rounded-xl border border-border bg-surface overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
