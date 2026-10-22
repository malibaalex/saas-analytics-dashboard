import type { ReactNode } from "react";
import Link from "../../components/ui/Link";
import useLocationPath from "../../use-location-path";
import cn from "../../lib/c";
import { buttonVariants } from "../../components/ui/button-variants";

const itemBase =
  "flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium transition-colors";
const itemIdle = "text-muted-foreground hover:bg-muted/60 hover:text-foreground";

const Icon = ({ d }: { d: string }) => {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
};

export const SoonItem = ({ icon, children }: { icon: string; children: ReactNode }) => {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className={cn(itemBase, itemIdle)}>
      <Icon d={icon} />
      <span>{children}</span>
    </a>
  );
};

const SectionLabel = ({ children }: { children: ReactNode }) => {
  return (
    <span className="mb-2 block px-3 text-[11px] font-bold tracking-wider text-muted-foreground/80">
      {children}
    </span>
  );
};

const DashboardSidebar = () => {
  const path = useLocationPath();
  const overviewActive = path === "/dashboard";

  return (
    <aside className="hidden w-72 shrink-0 flex-col justify-between overflow-y-auto border-r border-border/80 bg-card p-6 lg:flex xl:w-80">
      <div className="flex flex-col gap-6">
        <Link href="/" className="flex items-center gap-3.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-sm">
            <svg
              className="h-6 w-6 text-accent-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M12 3v18M6 8l6 4-6 4M18 8l-6 4 6 4" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-foreground">Orbix Studio</span>
            <span className="text-xs font-medium text-muted-foreground">Dashboard</span>
          </div>
        </Link>

        <div className="pt-2">
          <p className="text-sm font-semibold text-foreground">Hey, Need help? 👋</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Just ask me anything!</p>
        </div>

        <nav aria-label="Home" className="space-y-1">
          <SectionLabel>Home</SectionLabel>
          <Link
            href="/dashboard"
            aria-current={overviewActive ? "page" : undefined}
            className={cn(
              itemBase,
              "justify-between",
              overviewActive ? "bg-secondary text-secondary-foreground shadow-sm" : itemIdle,
            )}
          >
            <span className="flex items-center gap-3">
              <Icon d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              Overview
            </span>
            {overviewActive && <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />}
          </Link>
          <SoonItem icon="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z">
            Legalicy Statement
          </SoonItem>
          <SoonItem icon="M13 7h8m0 0v8m0-8-8 8-4-4-6 6">Financial Projection</SoonItem>
          <SoonItem icon="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z">
            Account
          </SoonItem>
        </nav>

        <nav aria-label="Pocket" className="space-y-1 pt-1">
          <div className="mb-2 flex items-center justify-between px-3">
            <span className="text-[11px] font-bold tracking-wider text-muted-foreground/80">
              Pocket
            </span>
            <button
              type="button"
              aria-label="Add new pocket"
              className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <svg
                className="h-2.5 w-2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <SoonItem icon="M2 5h20v14H2zM2 10h20">Savings</SoonItem>
          <SoonItem icon="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4">
            Emergency Funds
          </SoonItem>
        </nav>
      </div>

      <div className="mt-8 rounded-3xl border border-border/70 bg-muted/60 p-4 pt-5 dark:bg-card">
        <h4 className="text-sm font-bold leading-snug text-foreground">
          Unlock all
          <br />
          features
        </h4>
        <span className="mt-1 inline-flex items-center rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
          40+ matrixs
        </span>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className={cn(buttonVariants({ variant: "primary", size: "sm" }), "mt-4 w-full")}
        >
          15 day free-trail
        </a>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
