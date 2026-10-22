import type { Report } from "../types/report";
import { seedReports } from "./seedReports";

let reports: Report[] = seedReports.map((r) => ({ ...r }));

/** API-3 · Mock report store (in-memory) */
const reportStore = {
  all: (): Report[] => reports.map((r) => ({ ...r })),
  add: (report: Report): Report => {
    reports = [report, ...reports];
    return { ...report };
  },
  remove: (id: string): boolean => {
    const before = reports.length;
    reports = reports.filter((r) => r.id !== id);
    return reports.length < before;
  },
};

export default reportStore;
