import type { Report } from "../../types/report";
import type { StatusFilter } from "./statusOptions";

export interface ReportFilters {
  query: string;
  status: StatusFilter;
}

const filterReports = (reports: Report[], { query, status }: ReportFilters): Report[] => {
  const q = query.trim().toLowerCase();
  return reports.filter((r) => {
    if (status !== "all" && r.status !== status) return false;
    if (!q) return true;
    return r.name.toLowerCase().includes(q) || r.ownerEmail.toLowerCase().includes(q);
  });
};

export default filterReports;
