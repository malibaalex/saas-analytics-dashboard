import type { ReportStatus } from "../../types/report";

export type StatusFilter = ReportStatus | "all";

/** DSH-FLT-2 · Status options */
export const statusOptions: ReadonlyArray<{ value: StatusFilter; label: string }> = [
  { value: "all", label: "All statuses" },
  { value: "draft", label: "Draft" },
  { value: "in_review", label: "In review" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
];

export const statusLabel = (status: ReportStatus): string => {
  return statusOptions.find((o) => o.value === status)?.label ?? status;
};
