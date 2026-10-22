/** TLS-2 · Report types */
export type ReportStatus = "draft" | "in_review" | "published" | "archived";

export interface Report {
  id: string;
  name: string;
  status: ReportStatus;
  /** ISO date, YYYY-MM-DD */
  startDate: string;
  /** ISO date, YYYY-MM-DD */
  endDate: string;
  ownerEmail: string;
  /** ISO timestamp */
  createdAt: string;
}
