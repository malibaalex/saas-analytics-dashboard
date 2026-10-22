import type { Report } from "../../types/report";
import NewReportForm from "./NewReportForm";
import { useNewReportPanel } from "./useNewReportPanel";

const NewReportPanel = ({ onCreated }: { onCreated: (report: Report) => void }) => {
  const { submit, isSubmitting } = useNewReportPanel(onCreated);
  return (
    <section id="new-report" aria-label="New report" className="scroll-mt-24">
      <NewReportForm onSubmit={submit} isSubmitting={isSubmitting} />
    </section>
  );
};

export default NewReportPanel;
