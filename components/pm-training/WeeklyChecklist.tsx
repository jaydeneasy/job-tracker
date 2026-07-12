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
          className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left hover:bg-[#16161e] transition-colors group"
        >
          <div
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
              item.done
                ? "border-[#6366f1] bg-[#6366f1]"
                : "border-[#2a2a3a] bg-transparent group-hover:border-[#3a3a4a]"
            }`}
          >
            {item.done && <Check size={10} className="text-white" strokeWidth={3} />}
          </div>
          <span
            className={`text-sm transition-colors ${
              item.done
                ? "line-through text-[#55556a]"
                : "text-[#8888a8] group-hover:text-[#e8e8f0]"
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
