import cn from "../../../lib/c";
import { dashboardHref, previewUser, sidebarItems } from "../../../lib/data/landing";
import { Icon, Logo } from "../../ui";

const PreviewSidebar = () => (
  <aside className="flex shrink-0 flex-row justify-between border-b border-border bg-card p-3 md:w-56 md:flex-col md:border-b-0 md:border-r md:p-4">
    <div>
      <div className="mb-4 hidden items-center gap-2 border-b border-border/60 px-2 py-2 md:flex">
        <Logo size="sm" />
        <span className="rounded bg-primary/10 px-1.5 py-0.5 text-small font-semibold uppercase tracking-wider text-primary">
          App
        </span>
      </div>
      <nav
        aria-label="Dashboard preview"
        className="flex w-full gap-1 overflow-x-auto md:flex-col md:overflow-visible"
      >
        {sidebarItems.map((item) => (
          <a
            key={item.label}
            href={dashboardHref}
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2 text-small transition-colors",
              item.active
                ? "justify-between bg-muted font-semibold text-foreground"
                : "font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <span className="flex items-center gap-2.5">
              <Icon paths={item.icon} className={cn("size-4", item.active && "text-primary")} />
              <span>{item.label}</span>
            </span>
            {item.active && (
              <span
                className="hidden size-1.5 rounded-full bg-primary md:block"
                aria-hidden="true"
              />
            )}
          </a>
        ))}
      </nav>
    </div>

    <div className="mt-4 hidden items-center gap-2.5 rounded-xl border border-border bg-muted/50 p-2 md:flex">
      <div className="flex size-7 items-center justify-center rounded-full bg-primary text-small font-bold text-primary-foreground">
        {previewUser.initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-small font-bold text-foreground">{previewUser.name}</div>
        <div className="truncate text-small text-muted-foreground">{previewUser.role}</div>
      </div>
    </div>
  </aside>
);

export default PreviewSidebar;
