import cn from "../../lib/c";
import { statusOptions, type StatusFilter } from "./statusOptions";

interface StatusSelectProps {
  value: StatusFilter;
  onChange: (value: StatusFilter) => void;
}

const StatusSelect = ({ value, onChange }: StatusSelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as StatusFilter)}
      aria-label="Filter by status"
      className={cn(
        "h-10 rounded-full border border-transparent bg-muted px-4 text-sm text-foreground outline-none",
        "hover:border-border focus-visible:ring-2 focus-visible:ring-primary/40",
      )}
    >
      {statusOptions.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};

export default StatusSelect;
