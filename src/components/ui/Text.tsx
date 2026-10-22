import type { HTMLAttributes } from "react";
import cn from "../../lib/c";

type Variant = "body" | "muted" | "small";

const variants: Record<Variant, string> = {
  body: "text-body text-foreground",
  muted: "text-body text-muted-foreground",
  small: "text-small text-muted-foreground",
};

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div";
  variant?: Variant;
}

/** TYP-2 · Text */
const Text = ({ as: Tag = "p", variant = "body", className, ...props }: TextProps) => {
  return <Tag className={cn(variants[variant], className)} {...props} />;
};

export default Text;
