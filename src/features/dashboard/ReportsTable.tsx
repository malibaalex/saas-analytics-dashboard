import type { Report } from "../../types/report";
import ReportRow from "./ReportRow";
import ReportsTableHeader from "./ReportsTableHeader";
import type { AsyncStatus } from "./useAsync";
import type { SortKey, SortState } from "./sortTypes";
import TableEmptyState from "./TableEmptyState";
import TableErrorState from "./TableErrorState";
import TableLoadingState from "./TableLoadingState";

interface ReportsTableProps {
  reports: Report[];
  status: AsyncStatus;
  errorMessage?: string;
  isFiltered: boolean;
  sort: SortState;
  onSort: (key: SortKey) => void;
  onDelete: (report: Report) => void;
  onRetry: () => void;
}

const ReportsTable = ({
  reports,
  status,
  errorMessage,
  isFiltered,
  sort,
  onSort,
  onDelete,
  onRetry,
}: ReportsTableProps) => {
  if (status === "idle" || status === "loading") return <TableLoadingState />;
  if (status === "error") {
    return <TableErrorState message={errorMessage ?? "Something went wrong."} onRetry={onRetry} />;
  }
  if (reports.length === 0) return <TableEmptyState filtered={isFiltered} />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <ReportsTableHeader sort={sort} onSort={onSort} />
        <tbody>
          {reports.map((report) => (
            <ReportRow key={report.id} report={report} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
