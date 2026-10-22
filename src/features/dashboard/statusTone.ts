import type { ReportStatus } from "../../types/report";

export type BadgeTone = "neutral" | "warning" | "success" | "info";

export const statusTone = (status: ReportStatus): BadgeTone => {
  switch (status) {
    case "draft":
      return "neutral";
    case "in_review":
      return "warning";
    case "published":
      return "success";
    case "archived":
      return "info";
  }
};
