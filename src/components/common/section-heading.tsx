import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#A65F36]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance text-[#26382B] sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-xl text-base text-[#718071] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}