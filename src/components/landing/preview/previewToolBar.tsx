import { icons, previewContent } from "../../../lib/data/landing";
import { Button, Icon } from "../../ui";

const PreviewToolbar = () => (
  <div className="flex items-center justify-between gap-3">
    <div className="relative max-w-sm flex-1">
      <Icon
        paths={icons.search}
        className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
      />
      <input
        type="text"
        readOnly
        aria-label="Search events and customers"
        placeholder={previewContent.searchPlaceholder}
        className="h-8 w-full rounded-full border border-border bg-card pl-8 pr-3 text-small text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      />
    </div>
    <Button variant="primary" size="sm" className="shrink-0 gap-1.5">
      <Icon paths={icons.plus} className="size-3.5" />
      <span>{previewContent.inviteLabel}</span>
    </Button>
  </div>
);

export default PreviewToolbar;
