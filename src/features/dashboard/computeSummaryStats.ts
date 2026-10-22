import type { Report } from "../../types/report";

export interface SummaryStats {
  total: number;
  published: number;
  inReview: number;
  drafts: number;
}

export const computeSummaryStats = (reports: Report[]): SummaryStats => {
  return {
    total: reports.length,
    published: reports.filter((r) => r.status === "published").length,
    inReview: reports.filter((r) => r.status === "in_review").length,
    drafts: reports.filter((r) => r.status === "draft").length,
  };
};
