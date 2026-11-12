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
  chipClassName = "bg-[#E4F0E5] text-[#28613B]",
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#DCE5D8] bg-[#FFFFFF] p-6 text-[#26382B] transition-shadow hover:shadow-md hover:shadow-[#315C3B]/10">
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-full",
          chipClassName,
        )}
      >
        <Icon className="size-5" aria-hidden />
      </span>

      <h3 className="text-lg font-semibold text-[#26382B]">{title}</h3>

      <p className="text-sm text-[#718071]">{description}</p>
    </div>
  );
}