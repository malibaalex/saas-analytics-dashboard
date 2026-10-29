import type { ReactNode } from "react";
import cn from "../../lib/c";
import {
  activeTableState,
  badgeTone,
  deviceFrames,
  formPreview,
  icons,
  modalPreview,
  orgRows,
  tableStates,
  tryCards,
  whatToTryContent,
  type TryCardData,
} from "../../lib/data/landing";
import { Button, buttonVariants, Container, Icon } from "../ui";
import TryCard from "./TryCard";
import Reveal from "./Reavel";

const previewBox = "rounded-xl border border-border bg-muted/60 p-4";

const previews: Record<TryCardData["id"], ReactNode> = {
  form: (
    <div className={cn(previewBox, "space-y-2")}>
      <label htmlFor="try-email" className="block text-small font-semibold text-foreground">
        {formPreview.label}
      </label>
      <div className="relative">
        <input
          id="try-email"
          type="text"
          readOnly
          value={formPreview.value}
          aria-invalid="true"
          aria-describedby="try-email-error"
          className="h-9 w-full rounded-lg border border-destructive bg-card pl-3 pr-9 text-small text-destructive focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive"
        />
        <Icon
          paths={icons.alert}
          className="absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-destructive"
        />
      </div>
      <p id="try-email-error" className="text-small font-medium text-destructive">
        {formPreview.error}
      </p>
    </div>
  ),

  table: (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full whitespace-nowrap text-left text-small">
        <caption className="sr-only">Customer organizations</caption>
        <thead className="border-b border-border bg-muted/60 text-small font-semibold text-muted-foreground">
          <tr>
            <th scope="col" className="px-3 py-2.5">
              Customer org
            </th>
            <th scope="col" className="px-3 py-2.5">
              Plan
            </th>
            <th scope="col" className="px-3 py-2.5">
              Event Volume
            </th>
            <th scope="col" className="px-3 py-2.5 text-right">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {orgRows.map((row) => (
            <tr key={row.org}>
              <td className="px-3 py-2.5 font-semibold text-foreground">{row.org}</td>
              <td className="px-3 py-2.5 text-muted-foreground">{row.plan}</td>
              <td className="px-3 py-2.5 font-mono text-foreground">{row.volume}</td>
              <td className="px-3 py-2.5 text-right">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2 py-0.5 text-small font-semibold",
                    badgeTone[row.tone],
                  )}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),

  modal: (
    <div className={previewBox}>
      <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
        <div className="mb-2 flex items-center justify-between gap-2 border-b border-border/60 pb-2">
          <span className="text-small font-bold text-foreground">{modalPreview.title}</span>
          <span className="font-mono text-small text-muted-foreground">{modalPreview.hint}</span>
        </div>
        <p className="mb-3 text-small text-muted-foreground">{modalPreview.body}</p>
        {/* Decorative only: spans styled as buttons so they aren't tab stops */}
        <div className="flex items-center justify-end gap-2" aria-hidden="true">
          <span className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "h-7 px-2.5")}>
            {modalPreview.cancel}
          </span>
          <span className={cn(buttonVariants({ variant: "primary", size: "sm" }), "h-7 px-2.5")}>
            {modalPreview.confirm}
          </span>
        </div>
      </div>
    </div>
  ),

  responsive: (
    <div className={cn(previewBox, "flex items-end justify-center gap-3")}>
      {deviceFrames.map((frame) => (
        <div
          key={frame.label}
          className={cn(
            "flex flex-col items-center justify-between rounded-lg border-2 border-foreground/80 bg-card p-1.5",
            frame.size,
          )}
        >
          {frame.desktop ? (
            <div className="flex w-full items-center justify-between border-b border-border pb-1">
              <div className="size-2 rounded-full bg-primary" />
              <div className="h-1 w-8 rounded bg-muted" />
            </div>
          ) : (
            <div className="h-0.5 w-4 rounded-full bg-foreground/40" />
          )}
          <span className="font-mono text-small text-muted-foreground">{frame.label}</span>
          <div className="h-0.5 w-3 rounded-full bg-foreground/30" />
        </div>
      ))}
    </div>
  ),
};

const tablePills = (
  <div
    className="flex items-center gap-1 rounded-full bg-muted p-1"
    role="group"
    aria-label="Table state"
  >
    {tableStates.map((state) => {
      const active = state === activeTableState;
      return (
        <Button
          key={state}
          variant="tertiary"
          aria-pressed={active}
          className={cn(
            "h-7 px-2.5 text-small",
            active
              ? "bg-card font-bold text-foreground shadow-xs hover:bg-card"
              : "font-medium text-muted-foreground hover:text-foreground",
          )}
        >
          {state}
        </Button>
      );
    })}
  </div>
);

const WhatToTry = () => (
  <section id="demo" aria-labelledby="demo-heading" className="mb-20 pt-6">
    <Container>
      <Reveal className="mb-10 max-w-2xl">
        <h2 id="demo-heading" className="mb-3 text-h1 font-extrabold text-foreground">
          {whatToTryContent.heading}
        </h2>
        <p className="text-body text-muted-foreground">{whatToTryContent.description}</p>
      </Reveal>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {tryCards.map((card, i) => (
          <Reveal
            key={card.id}
            delay={(i % 2) * 100}
            className={cn("h-full", card.wide && "md:col-span-2")}
          >
            <TryCard
              number={card.number}
              title={card.title}
              description={card.description}
              href={card.href}
              tag={card.tag}
              headerAside={card.id === "table" ? tablePills : undefined}
              className="h-full"
            >
              {previews[card.id]}
            </TryCard>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default WhatToTry;
