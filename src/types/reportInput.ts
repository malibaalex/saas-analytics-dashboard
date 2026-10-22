/** TLS-3 · New report input types */
export interface NewReportInput {
  name: string;
  startDate: string;
  endDate: string;
  email: string;
}

export type NewReportField = keyof NewReportInput;
