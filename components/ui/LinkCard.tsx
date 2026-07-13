import { ExternalLink } from "lucide-react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  href: string;
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  subtitle: string;
  disabled?: boolean;
  className?: string;
}

export function LinkCard({
  href,
  icon,
  iconBg = "bg-accent/10",
  title,
  subtitle,
  disabled = false,
  className,
}: LinkCardProps) {
  const isPlaceholder = disabled || href === "#";

  const inner = (
    <>
      <div
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg shrink-0",
          iconBg
        )}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-primary group-hover:text-primary transition-colors truncate">
          {title}
        </div>
        <div className="text-[11px] text-muted">{subtitle}</div>
      </div>
      <ExternalLink
        size={14}
        className={cn(
          "shrink-0 transition-colors",
          isPlaceholder
            ? "text-border"
            : "text-muted group-hover:text-secondary"
        )}
      />
    </>
  );

  return (
    <Card className={className}>
      {isPlaceholder ? (
        <div
          className="flex items-center gap-3 opacity-60 cursor-not-allowed"
          title="Not connected yet"
        >
          {inner}
        </div>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          {inner}
        </a>
      )}
    </Card>
  );
}
