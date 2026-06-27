import { cn } from "../../utils/classes";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
