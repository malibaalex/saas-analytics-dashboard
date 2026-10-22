import StatusSelect from "./StatusSelect";
import TextFilter from "./TextFilter";
import type { StatusFilter } from "./statusOptions";

interface ReportsToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  status: StatusFilter;
  onStatusChange: (value: StatusFilter) => void;
}

const ReportsToolbar = ({ query, onQueryChange, status, onStatusChange }: ReportsToolbarProps) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <TextFilter value={query} onChange={onQueryChange} />
      <StatusSelect value={status} onChange={onStatusChange} />
    </div>
  );
};

export default ReportsToolbar;
