import type { SortKey, SortState } from "./sortTypes";

export const nextSortState = (current: SortState, key: SortKey): SortState => {
  if (current.key === key) {
    return { key, direction: current.direction === "asc" ? "desc" : "asc" };
  }
  return { key, direction: "asc" };
};
