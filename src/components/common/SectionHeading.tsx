import { cn } from "../../utils/classes";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p className="mb-3 text-sm uppercase tracking-widest text-teal-300">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 leading-relaxed text-gray-400",
            align === "center" && "mx-auto max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
