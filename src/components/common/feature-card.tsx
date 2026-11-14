import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  chipClassName?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  chipClassName = "bg-primary/10 text-primary",
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border bg-card p-6 text-foreground transition-shadow hover:shadow-md hover:shadow-foreground/10">
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-full",
          chipClassName,
        )}
      >
        <Icon className="size-5" aria-hidden />
      </span>

      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}