import Button from "../../components/ui/Button";
import type { Report } from "../../types/report";
import Badge from "./Badge";
import { formatDateRange } from "./formatDateRange";
import { statusLabel } from "./statusOptions";
import { statusTone } from "./statusTone";

interface ReportRowProps {
  report: Report;
  onDelete: (report: Report) => void;
}

const ReportRow = ({ report, onDelete }: ReportRowProps) => {
  return (
    <tr className="border-t border-border">
      <td className="py-3 pr-4">
        <div className="text-sm font-semibold text-foreground">{report.name}</div>
        <div className="text-small text-muted-foreground">{report.ownerEmail}</div>
      </td>
      <td className="py-3 pr-4">
        <Badge tone={statusTone(report.status)}>{statusLabel(report.status)}</Badge>
      </td>
      <td className="hidden py-3 pr-4 text-small text-muted-foreground md:table-cell">
        {formatDateRange(report.startDate, report.endDate)}
      </td>
      <td className="py-3 text-right">
        <Button
          variant="tertiary"
          size="sm"
          onClick={() => onDelete(report)}
          aria-label={`Delete ${report.name}`}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReportRow;
