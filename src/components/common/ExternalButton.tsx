import { type AnchorHTMLAttributes } from "react";
import { cn } from "../../utils/classes";

type ExternalButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-fuchsia-500",
  secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
  ghost: "text-gray-400 hover:text-violet-300",
};

export function ExternalButton({
  className,
  variant = "primary",
  ...props
}: ExternalButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
