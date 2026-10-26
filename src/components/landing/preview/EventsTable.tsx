import cn from "../../../lib/c";
import { badgeTone, eventRows, previewContent } from "../../../lib/data/landing";
import { card } from "./constants";

const EventsTable = () => (
  <div className={cn(card, "overflow-hidden")}>
    <div className="mb-3 flex items-center justify-between gap-2">
      <p className="text-small font-bold text-foreground">{previewContent.tableTitle}</p>
      <div className="flex items-center gap-1.5 text-small text-muted-foreground">
        <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
        <span>{previewContent.tableStatus}</span>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full whitespace-nowrap text-left text-small">
        <caption className="sr-only">Recent ingested events</caption>
        <thead>
          <tr className="border-b border-border text-small font-semibold uppercase tracking-wider text-muted-foreground">
            <th scope="col" className="py-1.5">
              Event Name
            </th>
            <th scope="col" className="px-3 py-1.5">
              Dispatcher
            </th>
            <th scope="col" className="px-3 py-1.5">
              Status
            </th>
            <th scope="col" className="py-1.5 text-right">
              Latency
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60">
          {eventRows.map((row) => (
            <tr key={row.name} className="transition-colors hover:bg-muted/40">
              <td className="py-2.5 font-mono text-foreground">{row.name}</td>
              <td className="px-3 py-2.5 text-muted-foreground">{row.dispatcher}</td>
              <td className="px-3 py-2.5">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2 py-0.5 text-small font-semibold",
                    badgeTone[row.tone],
                  )}
                >
                  {row.status}
                </span>
              </td>
              <td className="py-2.5 text-right font-mono text-foreground">{row.latency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default EventsTable;
