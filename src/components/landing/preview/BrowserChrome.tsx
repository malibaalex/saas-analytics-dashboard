import { previewContent } from "../../../lib/data/landing";

const BrowserChrome = () => (
  <div className="flex h-10 items-center justify-between border-b border-border bg-muted/70 px-4">
    <div className="flex items-center gap-2">
      <span className="size-3 rounded-full bg-destructive" aria-hidden="true" />
      <span className="size-3 rounded-full bg-primary" aria-hidden="true" />
      <span className="size-3 rounded-full bg-success" aria-hidden="true" />
      <span className="ml-2 hidden font-mono text-small text-muted-foreground sm:inline">
        {previewContent.url}
      </span>
    </div>
    <div className="flex items-center gap-2 text-small text-muted-foreground">
      <span className="size-2 animate-pulse rounded-full bg-success" aria-hidden="true" />
      <span>{previewContent.pipelineStatus}</span>
    </div>
  </div>
);

export default BrowserChrome;
