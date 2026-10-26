import {
  BrowserChrome,
  PreviewSidebar,
  PreviewToolbar,
  KpiGrid,
  PreviewChart,
  EventsTable,
} from "./preview/index";

const HeroPreview = () => (
  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg md:rounded-3xl">
    <BrowserChrome />
    <div className="flex min-h-144 flex-col bg-background md:flex-row">
      <PreviewSidebar />
      <div className="flex-1 space-y-5 overflow-hidden p-4 md:p-6">
        <PreviewToolbar />
        <KpiGrid />
        <PreviewChart />
        <EventsTable />
      </div>
    </div>
  </div>
);

export default HeroPreview;
