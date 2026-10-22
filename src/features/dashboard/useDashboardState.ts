import { useCallback } from "react";
import type { Report } from "../../types/report";
import { useAsync } from "./useAsync";
import listReports from "../../api/listReports";

const useDashboardState = () => {
  const load = useAsync(listReports, { immediate: true });
  const { setData, run } = load;

  const addReport = useCallback(
    (report: Report) => setData((prev) => [report, ...(prev ?? [])]),
    [setData],
  );
  const removeReport = useCallback(
    (id: string) => setData((prev) => (prev ?? []).filter((r) => r.id !== id)),
    [setData],
  );
  const reload = useCallback(() => {
    run().catch(() => {});
  }, [run]);

  return {
    reports: load.data ?? [],
    status: load.status,
    error: load.error,
    addReport,
    removeReport,
    reload,
  };
};

export default useDashboardState;
