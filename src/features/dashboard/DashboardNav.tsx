import { buttonVariants } from "../../components/ui/button-variants";
import Link from "../../components/ui/Link";
import ThemeToggle from "./ThemeToggle";

const AVATAR_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAdBvUlSf10CBokTd1OT714XvGTNIwiRoniy0JVqZ2MCJ5d2iLpZqIRj26cOh4t_qCTnkQrjgBQuwWD1jk6Mbix67FVN89g1vTdZmReHS6d6yKtbC90ouxg7JkrDslvzJ6LT8rVy6d6jEddvTNjbgdlMm7q5xyFnAfbG8AVm3Sy18X3d6TfsqFGOzLDT5LiZFlS02wq8kvafZ7WcatrVcp7V8jj58NgRdO2PZRCznBTtSRe5Q8jidbuDw";

const DatePill = () => {
  // oxlint-disable-next-line react/purity
  const now = new Date();
  const weekday = new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(now);
  const month = new Intl.DateTimeFormat(undefined, { month: "long" }).format(now);
  return (
    <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-muted/60 py-1.5 pl-2 pr-3 sm:flex">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-card text-xs font-bold text-foreground shadow-sm">
        {now.getDate()}
      </div>
      <div className="text-[11px] leading-tight">
        <div className="font-semibold text-foreground">{weekday},</div>
        <div className="text-muted-foreground">{month}</div>
      </div>
      <div className="relative pl-1">
        <svg
          className="h-4 w-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-primary ring-2 ring-card" />
      </div>
    </div>
  );
};

const DashboardNav = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 bg-card/80 px-4 py-3.5 backdrop-blur-md md:px-8">
      <Link href="/" className="text-sm font-bold tracking-tight text-foreground lg:hidden">
        Orbix Studio
      </Link>

      <div className="relative hidden min-w-60 max-w-md flex-1 sm:block">
        <svg
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          aria-label="Search"
          placeholder="Start searching here ..."
          className="w-full rounded-full border-none bg-muted/70 py-2 pl-10 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground hover:bg-muted focus:bg-card focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4">
        <DatePill />
        <div className="flex items-center gap-2.5 pl-1 sm:pl-2">
          <img
            src={AVATAR_URL}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-2 ring-border/80"
          />
          <div className="hidden flex-col leading-tight xl:flex">
            <span className="text-xs font-bold text-foreground">Shohanur Rohaman Sohan</span>
            <span className="text-[11px] text-muted-foreground">CEO Assistant</span>
          </div>
        </div>
        <ThemeToggle />
        <Link href="#new-report" className={buttonVariants({ variant: "primary", size: "sm" })}>
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span className="hidden sm:inline">New report</span>
        </Link>
      </div>
    </header>
  );
};

export default DashboardNav;
