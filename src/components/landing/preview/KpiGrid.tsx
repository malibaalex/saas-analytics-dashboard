import cn from "../../../lib/c";
import { kpis, textTone } from "../../../lib/data/landing";
import { card } from "./constants";

const KpiGrid = () => (
  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
    {kpis.map((kpi) => (
      <div key={kpi.label} className={card}>
        <div className="flex items-center justify-between gap-2 text-small text-muted-foreground">
          <span>{kpi.label}</span>
          <span className="rounded-full border border-border bg-muted px-1.5 py-0.5 text-small font-semibold text-accent">
            {kpi.badge}
          </span>
        </div>
        <div className="mt-1 text-h2 font-extrabold text-foreground">{kpi.value}</div>
        <div className={cn("mt-0.5 text-small font-semibold", textTone[kpi.deltaTone])}>
          {kpi.delta}
        </div>
      </div>
    ))}
  </div>
);

export default KpiGrid;
