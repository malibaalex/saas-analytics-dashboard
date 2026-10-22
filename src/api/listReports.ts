import type { Report } from "../types/report";
import reportStore from "./reportStore";
import simulateRequest from "./simulateRequest";

/** API-1 · listReports */
const listReports = (): Promise<Report[]> => {
  return simulateRequest(() => reportStore.all(), { delayMs: 700 });
};

export default listReports;
