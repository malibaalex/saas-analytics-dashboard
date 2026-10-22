import Card from "../../components/ui/Card";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import type { Report } from "../../types/report";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import ReportsTable from "./ReportsTable";
import ReportsToolbar from "./ReportsToolbar";
import type { AsyncStatus } from "./useAsync";
import { useReportsPanel } from "./useReportsPanel";

interface ReportsPanelProps {
  reports: Report[];
  status: AsyncStatus;
  error: Error | null;
  onRetry: () => void;
  onDeleted: (id: string) => void;
}

const ReportsPanel = ({ reports, status, error, onRetry, onDeleted }: ReportsPanelProps) => {
  const p = useReportsPanel({ reports, onDeleted });

  return (
    <Card className="flex flex-col gap-4">
      <div>
        <Heading level={2}>Reports</Heading>
        <Text variant="small">
          {status === "success"
            ? `${p.visible.length} of ${reports.length} shown`
            : "Your latest reports"}
        </Text>
      </div>
      <ReportsToolbar
        query={p.query}
        onQueryChange={p.setQuery}
        status={p.status}
        onStatusChange={p.setStatus}
      />
      <ReportsTable
        reports={p.visible}
        status={status}
        errorMessage={error?.message}
        isFiltered={p.isFiltered}
        sort={p.sort}
        onSort={p.handleSort}
        onDelete={p.requestDelete}
        onRetry={onRetry}
      />
      <DeleteConfirmDialog
        report={p.pending}
        isDeleting={p.isDeleting}
        onConfirm={p.confirmDelete}
        onCancel={p.cancelDelete}
      />
    </Card>
  );
};

export default ReportsPanel;
