import type { ReactNode } from "react";
import cn from "../../lib/c";
import { buttonVariants } from "../ui";

type TryCardProps = {
  number: number;
  title: string;
  description: string;
  href: string;
  /** Small mono label shown top-right */
  tag?: string;
  /** Replaces the tag (used by the table-state pills) */
  headerAside?: ReactNode;
  className?: string;
  /** Mini UI preview */
  children?: ReactNode;
};

const TryCard = ({
  number,
  title,
  description,
  href,
  tag,
  headerAside,
  className,
  children,
}: TryCardProps) => {
  const headingId = `try-card-${number}-title`;

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        "flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-7",
        className,
      )}
    >
      <div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="flex size-7 items-center justify-center rounded-full border border-border bg-muted text-small font-bold text-foreground">
            {number}
          </span>
          {headerAside ??
            (tag && <span className="font-mono text-small text-muted-foreground">{tag}</span>)}
        </div>
        <h3 id={headingId} className="mb-2 text-h2 font-bold text-foreground">
          {title}
        </h3>
        <p className="mb-6 max-w-xl text-small text-muted-foreground">{description}</p>
        {children && <div className="mb-6">{children}</div>}
      </div>
      <a
        href={href}
        aria-label={`Try it: ${title}`}
        className={cn(
          buttonVariants({ variant: "tertiary", size: "sm" }),
          "-ml-2 w-fit gap-1 text-small font-semibold hover:text-primary",
        )}
      >
        Try it ↗
      </a>
    </article>
  );
};

export default TryCard;
