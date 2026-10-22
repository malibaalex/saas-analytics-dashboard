import type { InputHTMLAttributes } from "react";
import FieldError from "./FieldError";
import Input from "./Input";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const FormField = ({ id, label, error, ...inputProps }: FormFieldProps) => {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block px-1 text-small font-medium text-foreground">
        {label}
      </label>
      <Input
        id={id}
        invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
};

export default FormField;
