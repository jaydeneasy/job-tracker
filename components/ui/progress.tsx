"use client";

import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number; // 0-100
  className?: string;
}

export function Progress({ value, className }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      className={cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-border",
        className
      )}
    >
      <div
        className="h-full rounded-full bg-accent transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
