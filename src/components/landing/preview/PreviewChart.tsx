import { previewContent } from "../../../lib/data/landing";
import { AREA_PATH, LINE_PATH, card } from "./constants";

const PreviewChart = () => (
  <div className={card}>
    <div className="mb-2 flex items-center justify-between gap-2">
      <p className="text-small font-bold text-foreground">{previewContent.chartTitle}</p>
      <p className="font-mono text-small text-muted-foreground">{previewContent.chartPeak}</p>
    </div>
    <div className="h-24 w-full">
      <svg
        role="img"
        aria-label="Ingestion throughput over the last 24 hours, trending upward"
        viewBox="0 0 600 90"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible text-primary"
      >
        <defs>
          <linearGradient id="hero-chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={AREA_PATH} fill="url(#hero-chart-fill)" />
        <path
          d={LINE_PATH}
          fill="none"
          className="stroke-primary"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="600" cy="12" r="3.5" className="fill-primary" />
      </svg>
    </div>
  </div>
);

export default PreviewChart;
