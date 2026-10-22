import { useCallback } from "react";
import createReport from "../../api/createReport";
import useToast from "../../state/toast/useToast";
import type { Report } from "../../types/report";
import type { NewReportInput } from "../../types/reportInput";
import { useAsync } from "./useAsync";

export const useNewReportPanel = (onCreated: (report: Report) => void) => {
  const { push } = useToast();
  const create = useAsync(createReport);

  // Rejects on failure so the form keeps the user's input.
  const submit = useCallback(
    async (input: NewReportInput) => {
      try {
        const report = await create.run(input);
        onCreated(report);
        push({ message: `Created “${report.name}”`, tone: "success" });
      } catch (e) {
        push({
          message: e instanceof Error ? e.message : "Couldn’t create the report.",
          tone: "error",
        });
        throw e;
      }
    },
    [create, onCreated, push],
  );

  return { submit, isSubmitting: create.isLoading };
};
