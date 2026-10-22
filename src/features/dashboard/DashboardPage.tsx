import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import DashboardNav from "./DashboardNav";
import DashboardSidebar from "./DashboardSidebar";
import NewReportPanel from "./NewReportPanel";
import ReportsPanel from "./ReportsPanel";
import SummaryStats from "./SummaryStats";
import useDashboardState from "./useDashboardState";

const DashboardPage = () => {
  const { reports, status, error, addReport, removeReport, reload } = useDashboardState();

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-384 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl md:rounded-[2.5rem]">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col bg-background/50">
          <DashboardNav />
          <main className="flex-1 p-6 md:p-8">
            <Container size="full" className="flex flex-col gap-6">
              <div>
                <Heading level={1}>Overview</Heading>
                <Text variant="muted">Track every report from draft to published.</Text>
              </div>
              <SummaryStats reports={reports} loading={status === "idle" || status === "loading"} />
              <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                <ReportsPanel
                  reports={reports}
                  status={status}
                  error={error}
                  onRetry={reload}
                  onDeleted={removeReport}
                />
                <NewReportPanel onCreated={addReport} />
              </div>
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
