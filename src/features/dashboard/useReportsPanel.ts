import { useCallback, useMemo, useState } from "react";
import deleteReport from "../../api/deleteReport";
import useToast from "../../state/toast/useToast";
import type { Report } from "../../types/report";
import filterReports from "./filterReports";
import { nextSortState } from "./nextSortState";
import { sortReports } from "./sortReports";
import type { SortKey, SortState } from "./sortTypes";
import type { StatusFilter } from "./statusOptions";
import { useAsync } from "./useAsync";

interface Options {
  reports: Report[];
  onDeleted: (id: string) => void;
}

export const useReportsPanel = ({ reports, onDeleted }: Options) => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [sort, setSort] = useState<SortState>({ key: "createdAt", direction: "desc" });
  const [pending, setPending] = useState<Report | null>(null);

  const { push } = useToast();
  const del = useAsync(deleteReport);

  const visible = useMemo(
    () => sortReports(filterReports(reports, { query, status }), sort),
    [reports, query, status, sort],
  );

  const handleSort = useCallback((key: SortKey) => setSort((s) => nextSortState(s, key)), []);

  const cancelDelete = useCallback(() => {
    if (!del.isLoading) setPending(null);
  }, [del.isLoading]);

  const confirmDelete = useCallback(async () => {
    if (!pending) return;
    try {
      await del.run(pending.id);
      onDeleted(pending.id);
      push({ message: `Deleted “${pending.name}”`, tone: "success" });
      setPending(null);
    } catch (e) {
      push({
        message: e instanceof Error ? e.message : "Couldn’t delete the report.",
        tone: "error",
      });
    }
  }, [pending, del, onDeleted, push]);

  return {
    query,
    setQuery,
    status,
    setStatus,
    sort,
    handleSort,
    visible,
    isFiltered: query.trim() !== "" || status !== "all",
    pending,
    requestDelete: setPending,
    cancelDelete,
    confirmDelete,
    isDeleting: del.isLoading,
  };
};
