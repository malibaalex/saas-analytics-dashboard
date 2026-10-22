import createId from "../lib/createId";
import type { Report } from "../types/report";
import type { NewReportInput } from "../types/reportInput";
import reportStore from "./reportStore";
import simulateRequest from "./simulateRequest";

const createReport = (input: NewReportInput): Promise<Report> => {
  return simulateRequest(() =>
    reportStore.add({
      id: createId("rpt"),
      name: input.name.trim(),
      status: "draft",
      startDate: input.startDate,
      endDate: input.endDate,
      ownerEmail: input.email.trim(),
      createdAt: new Date().toISOString(),
    }),
  );
};

export default createReport;
