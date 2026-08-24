import { Link, type LinkProps } from "react-router";
import { cn } from "../../utils/classes";

type ButtonLinkProps = LinkProps & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-gradient-to-r from-teal-600 to-sky-500 text-white shadow-lg shadow-teal-500/25 hover:from-teal-500 hover:to-sky-500 hover:shadow-teal-500/40",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
  ghost: "text-gray-400 hover:text-teal-300",
};

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a10]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
