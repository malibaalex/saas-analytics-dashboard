import type { SortKey, SortState } from "./sortTypes";
import SortableHeaderCell from "./SortableHeaderCell";

interface ReportsTableHeaderProps {
  sort: SortState;
  onSort: (key: SortKey) => void;
}

const ReportsTableHeader = ({ sort, onSort }: ReportsTableHeaderProps) => {
  return (
    <thead>
      <tr>
        <SortableHeaderCell label="Report" sortKey="name" sort={sort} onSort={onSort} />
        <SortableHeaderCell label="Status" sortKey="status" sort={sort} onSort={onSort} />
        <SortableHeaderCell
          label="Period"
          sortKey="startDate"
          sort={sort}
          onSort={onSort}
          className="hidden md:table-cell"
        />
        <th scope="col" className="pb-2">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default ReportsTableHeader;
