import FieldError from "./FieldError";
import Input from "./Input";

interface DateRangeFieldsetProps {
  start: string;
  end: string;
  error?: string;
  onChange: (field: "startDate" | "endDate", value: string) => void;
}

/** DSH-FRM-4 · DateRangeFieldset */
const DateRangeFieldset = ({ start, end, error, onChange }: DateRangeFieldsetProps) => {
  return (
    <fieldset aria-describedby={error ? "date-range-error" : undefined}>
      <legend className="mb-1.5 px-1 text-small font-medium text-foreground">
        Reporting period
      </legend>
      <div className="grid grid-cols-2 gap-3">
        <Input
          type="date"
          aria-label="Start date"
          value={start}
          invalid={!!error}
          onChange={(e) => onChange("startDate", e.target.value)}
        />
        <Input
          type="date"
          aria-label="End date"
          value={end}
          invalid={!!error}
          onChange={(e) => onChange("endDate", e.target.value)}
        />
      </div>
      <FieldError id="date-range-error" message={error} />
    </fieldset>
  );
};

export default DateRangeFieldset;
