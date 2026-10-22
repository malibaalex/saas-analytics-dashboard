export type SortKey = "name" | "status" | "startDate" | "createdAt";
export type SortDirection = "asc" | "desc";

/** DSH-SRT-1 · Sort types */
export interface SortState {
  key: SortKey;
  direction: SortDirection;
}
