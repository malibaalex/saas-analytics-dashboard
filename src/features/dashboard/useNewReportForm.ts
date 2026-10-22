import { useCallback, useReducer, type FormEvent } from "react";
import type { NewReportInput } from "../../types/reportInput";
import formReducer, { initialFormState, type FormErrors } from "./formReducer";
import { validateDateRange } from "./validateDateRange";
import { validateEmail } from "./validateEmail";
import { validateName } from "./validateName";

const useNewReportForm = (onSubmit: (input: NewReportInput) => Promise<void>) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const change = useCallback(
    (field: keyof NewReportInput, value: string) => dispatch({ type: "change", field, value }),
    [],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const { name, startDate, endDate, email } = state.values;
      const errors: FormErrors = {};
      const nameError = validateName(name);
      const rangeError = validateDateRange(startDate, endDate);
      const emailError = validateEmail(email);
      if (nameError) errors.name = nameError;
      if (rangeError) errors.dateRange = rangeError;
      if (emailError) errors.email = emailError;

      if (Object.keys(errors).length > 0) {
        dispatch({ type: "setErrors", errors });
        return;
      }
      try {
        await onSubmit(state.values);
        dispatch({ type: "reset" });
      } catch {
        /* the caller reports submit failures; keep the user’s input */
      }
    },
    [state.values, onSubmit],
  );

  return { values: state.values, errors: state.errors, change, handleSubmit };
};

export default useNewReportForm;
