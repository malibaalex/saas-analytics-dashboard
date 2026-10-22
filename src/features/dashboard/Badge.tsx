import type { HTMLAttributes } from "react";
import type { BadgeTone } from "./statusTone";
import cn from "../../lib/c";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-muted text-muted-foreground",
  warning: "bg-primary/15 text-primary",
  success: "bg-success/15 text-success",
  info: "bg-accent/15 text-accent",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const Badge = ({ tone = "neutral", className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
};

export default Badge;
