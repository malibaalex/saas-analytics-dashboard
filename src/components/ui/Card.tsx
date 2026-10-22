import type { HTMLAttributes } from "react";
import cn from "../../lib/c";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

const Card = ({ padded = true, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card text-foreground",
        padded && "p-5 md:p-6",
        className,
      )}
      {...props}
    />
  );
};

export default Card;
