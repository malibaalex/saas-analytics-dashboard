import type { Report } from "../../types/report";
import { computeSummaryStats } from "./computeSummaryStats";
import StatCard from "./StatCard";

interface SummaryStatsProps {
  reports: Report[];
  loading: boolean;
}

const SummaryStats = ({ reports, loading }: SummaryStatsProps) => {
  const stats = computeSummaryStats(reports);
  return (
    <section aria-label="Summary" className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <StatCard label="All reports" value={stats.total} loading={loading} />
      <StatCard label="Published" value={stats.published} loading={loading} />
      <StatCard label="In review" value={stats.inReview} loading={loading} />
      <StatCard label="Drafts" value={stats.drafts} loading={loading} />
    </section>
  );
};

export default SummaryStats;
