"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { ChecklistItem } from "@/data/types";

interface WeeklyChecklistProps {
  items: ChecklistItem[];
}

export function WeeklyChecklist({ items: initialItems }: WeeklyChecklistProps) {
  const [items, setItems] = useState(initialItems);

  function toggle(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div className="space-y-1">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => toggle(item.id)}
          className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left hover:bg-surface-raised transition-colors group"
        >
          <div
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
              item.done
                ? "border-accent bg-accent"
                : "border-border bg-transparent group-hover:border-secondary/50"
            }`}
          >
            {item.done && (
              <Check size={10} className="text-white" strokeWidth={3} />
            )}
          </div>
          <span
            className={`text-sm transition-colors ${
              item.done
                ? "line-through text-muted"
                : "text-secondary group-hover:text-primary"
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
