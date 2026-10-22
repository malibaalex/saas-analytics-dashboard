import cn from "../../lib/c";
import type { SortKey, SortState } from "./sortTypes";

interface SortableHeaderCellProps {
  label: string;
  sortKey: SortKey;
  sort: SortState;
  onSort: (key: SortKey) => void;
  className?: string;
}

const SortableHeaderCell = ({
  label,
  sortKey,
  sort,
  onSort,
  className,
}: SortableHeaderCellProps) => {
  const active = sort.key === sortKey;
  const ariaSort = active ? (sort.direction === "asc" ? "ascending" : "descending") : "none";
  return (
    <th
      scope="col"
      aria-sort={ariaSort}
      className={cn("pb-2 pr-4 text-left font-medium", className)}
    >
      <button
        type="button"
        onClick={() => onSort(sortKey)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full text-small outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/40",
          active ? "text-foreground" : "text-muted-foreground",
        )}
      >
        {label}
        <span aria-hidden className="w-3 text-[10px]">
          {active ? (sort.direction === "asc" ? "▲" : "▼") : ""}
        </span>
      </button>
    </th>
  );
};

export default SortableHeaderCell;
