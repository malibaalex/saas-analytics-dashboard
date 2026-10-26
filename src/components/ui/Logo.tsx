import cn from "../../lib/c";
import { icons } from "../../lib/data/landing-page-data";
import Icon from "./Icon";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
};

const Logo = ({ size = "md", className }: LogoProps) => {
  const isMid = size === "md";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex items-center justify-center text-primary",
          isMid
            ? "size-8 rounded-xl border border-border bg-card shadow-xs"
            : "size-6 rounded-lg bg-primary/10",
        )}
      >
        <Icon paths={icons.pulse} strokeWidth={2.5} className={isMid ? "size-4" : "size-3.5"} />
      </span>

      <span
        className={cn("font-bold tracking-tight text-foreground", isMid ? "text-h3" : "text-small")}
      >
        Pulse
        {isMid && <span className="text-primary">&#46;</span>}
      </span>
    </span>
  );
};

export default Logo;
