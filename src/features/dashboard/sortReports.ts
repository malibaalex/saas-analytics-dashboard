import type { Report } from "../../types/report";
import type { SortState } from "./sortTypes";

export const sortReports = (reports: Report[], { key, direction }: SortState): Report[] => {
  const factor = direction === "asc" ? 1 : -1;
  return [...reports].sort((a, b) => {
    const result =
      key === "name"
        ? a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
        : a[key].localeCompare(b[key]);
    return result * factor;
  });
};
