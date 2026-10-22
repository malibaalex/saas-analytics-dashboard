import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Heading from "../../components/ui/Heading";
import type { NewReportInput } from "../../types/reportInput";
import DateRangeFieldset from "./DateRangeFieldset";
import FormField from "./FormField";
import useNewReportForm from "./useNewReportForm";

interface NewReportFormProps {
  onSubmit: (input: NewReportInput) => Promise<void>;
  isSubmitting: boolean;
}

const NewReportForm = ({ onSubmit, isSubmitting }: NewReportFormProps) => {
  const { values, errors, change, handleSubmit } = useNewReportForm(onSubmit);

  return (
    <Card>
      <Heading level={2} className="mb-4">
        New report
      </Heading>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <FormField
          id="report-name"
          label="Report name"
          placeholder="Q4 revenue summary"
          value={values.name}
          error={errors.name}
          onChange={(e) => change("name", e.target.value)}
        />
        <DateRangeFieldset
          start={values.startDate}
          end={values.endDate}
          error={errors.dateRange}
          onChange={change}
        />
        <FormField
          id="report-email"
          type="email"
          label="Owner email"
          placeholder="name@company.com"
          value={values.email}
          error={errors.email}
          onChange={(e) => change("email", e.target.value)}
        />
        <Button type="submit" disabled={isSubmitting} className="mt-1 w-full">
          {isSubmitting ? "Creating…" : "Create report"}
        </Button>
      </form>
    </Card>
  );
};

export default NewReportForm;
