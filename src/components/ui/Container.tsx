import type { HTMLAttributes } from "react";
import cn from "../../lib/c";

type Size = "md" | "lg" | "full";

const sizes: Record<Size, string> = {
  md: "max-w-3xl px-4 sm:px-6",
  lg: "max-w-6xl px-4 sm:px-6",
  full: "max-w-none",
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
}

/** DS-PRM-3 · Container */
const Container = ({ size = "lg", className, ...props }: ContainerProps) => {
  return <div className={cn("mx-auto w-full", sizes[size], className)} {...props} />;
};

export default Container;
