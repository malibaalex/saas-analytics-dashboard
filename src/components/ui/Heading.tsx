import type { HTMLAttributes } from "react";
import cn from "../../lib/c";

type Size = "display" | "h1" | "h2" | "h3";
type Level = 1 | 2 | 3 | 4;

const sizeClass: Record<Size, string> = {
  display: "text-display font-extrabold",
  h1: "text-h1 font-bold",
  h2: "text-h2 font-bold",
  h3: "text-h3 font-semibold",
};
const defaultSize: Record<Level, Size> = { 1: "h1", 2: "h2", 3: "h3", 4: "h3" };

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  size?: Size;
}

const Heading = ({ level = 2, size, className, ...props }: HeadingProps) => {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={cn("text-foreground", sizeClass[size ?? defaultSize[level]], className)}
      {...props}
    />
  );
};

export default Heading;
